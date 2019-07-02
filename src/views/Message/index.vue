<template>
  <div class="content">
    <my-header v-bind:title="title"></my-header>

    <el-form class="filter" :model="filter" :inline="true">
      <el-form-item>
        <el-button type="primary" @click="addMessage">添加消息</el-button>
      </el-form-item>
    </el-form>

    <my-table :tableData="data" :columns="columns" :loading="loading_"></my-table>

    <!-- 分页 -->
    <Pagination
      :pagesize="pagesize"
      :current_page="current_page"
      :pageSizes="pageSizes"
      :total="total"
      @changeCurrentPage="changeCurrentPage"
      @changeSizePage="changeSizePage"
    ></Pagination>

    <div class="form">
      <el-form>
        <el-dialog :title="formTitle" :visible.sync="addFormShow">
          <el-form label-position="left" label-width="80px" :model="form" v-loading="form_loading">
            <el-form-item label="消息标题">
              <el-input type="text" v-model="form.title"></el-input>
            </el-form-item>

            <my-select :select.sync="form.type" label="通知类型" :prop="select" :options="options"></my-select>

            <el-form-item label="发送时间">
              <my-date :date.sync="form.send_time" :placeholder="placeholder"></my-date>
            </el-form-item>

            <el-form-item label="消息内容">
              <el-input type="textarea" v-model="form.content"></el-input>
            </el-form-item>

            <el-form-item>
              <!-- <el-button type="primary" v-if="true" @click="updateOrCreate(2)">更新</el-button> -->
              <el-button type="primary" @click="updateOrCreate(null)">新建</el-button>
              <el-button @click="addFormShow = !addFormShow">取消</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      </el-form>
    </div>
  </div>
</template>

<script>

import {
    myHeader,
    MyTable,
    Button,
    Pagination,
    MySelect,
    MyDate,
    page,
    MyTag
} from '@/layout/components/index'

export default {
  name: "index",
  mixins: [page],
    components: {
    myHeader,
    MyTable,
    Button,
    Pagination,
    MySelect,
    MyDate
  },
  
  data() {
    return {
      title: "消息管理",
      data: [],
      loading_: false,
      select: "系统",
      // 过滤器
      filter: {},
      // 表单
      placeholder: "请选择发送时间",
      formTitle: "创建消息",
      form: {
          type: "系统通知"
      },
      form_loading: true, // 表单数据加载控制
      addFormShow: false, // 表单显示隐藏控制
      columns: [
        { prop: "id", label: "ID" },
        { prop: "content", label: "消息内容" },
        { prop: "title", label: "消息标题" },
        {
          prop: "type",
          label: "消息类型",
          render: (h, param) => {
            return h(MyTag, {
              props: { effect: "dark", text: param.row.type_ }
            });
          }
        },
        { prop: "create_time", label: "创建时间" },
        { prop: "send_time", label: "发送时间" },
        {
          prop: "status_",
          label: "发送状态",
          render: (h, param) => {
            return h(MyTag, {
              props: { effect: "dark", text: param.row.status_ }
            });
          }
        },
        {
          prop: "",
          label: "操作",
          fixed: "right",
          width: "200",
          render: (h, param) => {
            let buttons = [];
            if (parseInt(param.row.status) == 0) {
              buttons = [
                {
                  func: "send",
                  id: param.row.id,
                  text: "立即发送",
                  size: "small"
                },
                {
                  func: "with_draw",
                  id: param.row.id,
                  text: "撤回发送",
                  size: "small"
                },
                {
                  func: "deleted",
                  id: param.row.id,
                  text: "删除消息",
                  size: "small"
                }
              ];
            } else if (parseInt(param.row.status) == 1) {
              buttons = [
                {
                  func: "deleted",
                  id: param.row.id,
                  text: "删除消息",
                  size: "small"
                }
              ];
            } else if (parseInt(param.row.status) == 2) {
              buttons = [
                {
                  func: "send",
                  id: param.row.id,
                  text: "重新发送",
                  size: "small"
                },
                {
                  func: "deleted",
                  id: param.row.id,
                  text: "删除消息",
                  size: "small"
                }
              ];
            }
            return h(Button, {
              props: { buttons: buttons },
              on: {
                send: this.send,
                with_draw: this.with_draw,
                deleted: this.deleted
              }
            });
          }
        }
      ],

      // 列表
      options: [
        { label: "紧急通知", value: "紧急通知" },
        { label: "系统通知", value: "系统通知" }
      ]
    };
  },

  mounted() {
    this.getList();
  },

  methods: {
    // 获取列表数据
    getList() {
      this.loading = true;
      this.$get("/api/message", {
        page: this.current_page,
        pagesize: this.pagesize
      }).then(r => {
        if (r.code == 200) {
          this.setData(r.data.list);
          this.setPage(r.data)
        }
      });
    },

    // 组装数据
    setData(data) {
      this.data = data.map((item, key) => {
        item.status_ = this.getStatus_(item.status);
        item.type_ = this.getType_(item.type);

        return item;
      });
      this.loading = false;
    },

    // 发送消息
    send(id) {
      this.loading = true;

      this.$post("/api/message/send/" + id).then(r => {
        if (r.code == 200) {
          this.$success_(r.msg);
          this.getList();
        } else {
          this.$error_(r.msg);
        }

        this.loading = false;
      });
    },

    // 删除消息
    deleted(id) {
      this.loading = true;

      this.$deletes("/api/message/" + id).then(r => {
        if (r.code == 200) {
          this.$success_(r.msg);
          this.getList();
        } else {
          this.$error_(r.msg);
        }
        this.data = jsonRemove(this.data, "id", id);
        this.loading = false;
      });
    },

    // 撤回发送消息
    with_draw(id) {
      this.$post("/api/message/with_draw/" + id).then(r => {
        if (r.code == 200) {
          this.$success_(r.msg);
          this.getList();
        } else {
          this.$error_(r.msg);
        }
      });
    },

    getStatus_(status) {
      switch (parseInt(status)) {
        case 0:
          return "等待发送";
          break;
        case 1:
          return "发送成功";
          break;
        case 2:
          return "已撤回";
          break;
      }
    },

    getType_(status) {
      switch (parseInt(status)) {
        case 0:
          return "紧急通知";
          break;
        case 1:
          return "系统通知";
          break;
        case 2:
          return "用户通知";
          break;
      }
    },

    // 添加消息
    addMessage() {
      this.addFormShow = true;
      this.form_loading = false;
    },

    //
    updateOrCreate() {
      this.form_loading = false;
      this.addFormShow = true;
      this.postData();

      console.log(this.form);
    },

    // 新建一条消息
    postData() {
      this.form.type = this.form.type == "紧急通知" ? 1 : 2;
      this.loading_ = true;
      this.$post("/api/message", this.form)
        .then(r => this.msg(r))
        .catch(r => {});
    },

    // msg
    msg(r, title = "创建成功") {
      if (r.code == 200) {
        this.$success_(title);
        this.getList();
        this.loading_ = false;

        this.form = {}
        this.addFormShow = false;
      } else {
        this.$error_(r.msg);
      }
    }
  }
};
</script>

<style lang="scss">
.filter {
  padding-left: 30px;
}
</style>

