(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8cca8678"],{2528:function(t,e,s){"use strict";var o=s("2aff"),i=s.n(o);i.a},"2aff":function(t,e,s){},a444:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("my-header",{attrs:{title:t.title}}),t._v(" "),s("div",{staticClass:"filter-tool"},[s("el-form",{attrs:{model:t.store_filter,"label-position":"left",inline:!0}},[s("el-row",[s("el-form-item",{attrs:{label:"当前商圈"}},[s("el-select",{attrs:{filterable:""},on:{change:t.changeSuperstore},model:{value:t.store_filter.superstore_id,callback:function(e){t.$set(t.store_filter,"superstore_id",e)},expression:"store_filter.superstore_id"}},t._l(t.superstores,function(t,e){return s("el-option",{key:e,attrs:{label:t.superstore_name,value:t.id}})}),1)],1),t._v(" "),s("el-form-item",{attrs:{label:"关键字"}},[s("el-input",{attrs:{placeholder:"关键字"},model:{value:t.store_filter.storename,callback:function(e){t.$set(t.store_filter,"storename",e)},expression:"store_filter.storename"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"选择框"}},[s("el-select",{on:{change:t.changeType},model:{value:t.store_filter.type,callback:function(e){t.$set(t.store_filter,"type",e)},expression:"store_filter.type"}},t._l(t.search_types,function(t,e){return s("el-option",{key:e,attrs:{label:t.value,value:t.key}})}),1)],1),t._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1)],1),t._v(" "),s("el-row",[s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:t.addStore}},[t._v("添加一个店铺")])],1),t._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:t.batch_del}},[t._v("删除")])],1),t._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"default"},on:{click:t.batch_lower}},[t._v("下架")])],1),t._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"default"},on:{click:t.batch_online}},[t._v("上架")])],1)],1)],1)],1),t._v(" "),s("my-table",{attrs:{tableData:t.stores,columns:t.columns,loading:t.store_loading},on:{handleSelectionChange:t.handleSelectionChange}}),t._v(" "),s("Pagination",{attrs:{pagesize:t.pagesize,current_page:t.current_page,pageSizes:t.pageSizes,total:t.total},on:{changeCurrentPage:t.changeCurrentPage,changeSizePage:t.changeSizePage}}),t._v(" "),s("div",{staticClass:"store-from"},[s("el-dialog",{attrs:{title:t.storeFromTitle,visible:t.storeFromShow},on:{"update:visible":function(e){t.storeFromShow=e}}},[s("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.store_from_loading,expression:"store_from_loading"}],attrs:{"label-position":"left","label-width":"80px",model:t.store}},[s("el-form-item",{attrs:{label:"当前商圈"}},[s("el-select",{staticClass:"select_",attrs:{filterable:""},model:{value:t.store.superstore_id,callback:function(e){t.$set(t.store,"superstore_id",e)},expression:"store.superstore_id"}},t._l(t.superstores,function(t,e){return s("el-option",{key:e,attrs:{label:t.superstore_name,value:t.id}})}),1)],1),t._v(" "),s("el-form-item",{attrs:{label:"店铺名称"}},[s("el-input",{attrs:{type:"text"},model:{value:t.store.store_name,callback:function(e){t.$set(t.store,"store_name",e)},expression:"store.store_name"}})],1),t._v(" "),s("el-input",{attrs:{type:"hidden"},model:{value:t.store.discount_id,callback:function(e){t.$set(t.store,"discount_id",e)},expression:"store.discount_id"}}),t._v(" "),s("el-form-item",{attrs:{label:"楼层-门牌"}},[s("el-col",{attrs:{span:8}},[s("el-input",{model:{value:t.store.floor,callback:function(e){t.$set(t.store,"floor",e)},expression:"store.floor"}})],1),t._v(" "),s("el-col",{attrs:{span:3}},[t._v("-")]),t._v(" "),s("el-col",{attrs:{span:8}},[s("el-input",{model:{value:t.store.house_number,callback:function(e){t.$set(t.store,"house_number",e)},expression:"store.house_number"}})],1)],1),t._v(" "),s("el-form-item",{attrs:{label:"店铺状态"}},[s("el-select",{staticClass:"select_",model:{value:t.store.status,callback:function(e){t.$set(t.store,"status",e)},expression:"store.status"}},t._l(t.store_statuses,function(t,e){return s("el-option",{key:e,attrs:{label:t.value,value:t.key}})}),1)],1),t._v(" "),s("el-form-item",{attrs:{label:"折扣内容"}},[s("el-input",{attrs:{type:"textarea"},model:{value:t.store.discount_content,callback:function(e){t.$set(t.store,"discount_content",e)},expression:"store.discount_content"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"活动时间"}},[s("el-date-picker",{staticClass:"select_",attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"折扣状态"}},[s("el-select",{staticClass:"select_",model:{value:t.store.discount_status,callback:function(e){t.$set(t.store,"discount_status",e)},expression:"store.discount_status"}},t._l(t.discount_statuses,function(t,e){return s("el-option",{key:e,attrs:{label:t.value,value:t.key}})}),1)],1),t._v(" "),s("el-form-item",{attrs:{label:"折扣类型"}},[s("el-select",{staticClass:"select_",model:{value:t.store.discount_type,callback:function(e){t.$set(t.store,"discount_type",e)},expression:"store.discount_type"}},t._l(t.discount_types,function(t,e){return s("el-option",{key:e,attrs:{label:t.value,value:t.key}})}),1)],1),t._v(" "),s("el-form-item",[t.store.id?s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.updateOrCreate(t.id)}}},[t._v("更新")]):t._e(),t._v(" "),t.store.id?t._e():s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.updateOrCreate(null)}}},[t._v("新建")]),t._v(" "),s("el-button",{on:{click:function(e){t.storeFromShow=!t.storeFromShow}}},[t._v("取消")])],1)],1)],1)],1)],1)},i=[],r=s("bd86"),n=(s("ac6a"),s("cd4a")),a=s("c1df"),l=s.n(a),c={name:"index",components:{myHeader:n["k"],Pagination:n["i"],MyTable:n["f"],MyDropDown:n["d"]},mixins:[n["l"]],data:function(){var t=this;return{title:"店铺管理",store_filter:{superstore_id:302,storename:"",type:"全部"},columns:[{prop:"id",label:"ID",width:"100"},{prop:"store_name",label:"店铺名称"},{prop:"house_info",label:"楼层-门牌"},{prop:"content",label:"折扣内容",width:"330"},{prop:"start_time",label:"开始时间"},{prop:"end_time",label:"结束时间"},{prop:"focus_count",label:"粉丝数量",width:"80"},{prop:"superstore_name",label:"商圈名称"},{prop:"status",label:"店铺状态",render:function(t,e){var s=Object(n["m"])(e.row.status);return t("span",s)}},{prop:"status",label:"折扣状态",render:function(t,e){var s="";return s=e.row.discount?Object(n["m"])(e.row.discount.status):"已下架",t("span",s)}},{prop:"",label:"操作",fixed:"right",width:"200",render:function(e,s){var o={label:"操作"},i=[{label:"编辑",func:{func:"edit",id:s.row.id}}];return 1==s.row.status?o.items=[{label:"下架",func:{func:"lower",id:s.row.id}},{label:"删除",func:{func:"delete",id:s.row.id}}]:o.items=[{label:"上架",func:{func:"online",id:s.row.id}},{label:"删除",func:{func:"delete",id:s.row.id}}],e(n["d"],{props:{dropDownData:o,buttons:i},on:{lower:t.lower,delete:t.delete,online:t.online,edit:t.edit}})}}],store_loading:!0,stores:[],superstores:[],simpleData:{},store:{superstore_id:0},storeFromTitle:"编辑店铺",storeFromShow:!1,store_statuses:[{key:0,value:"未上线"},{key:1,value:"已上线"},{key:2,value:"已拒绝"}],discount_statuses:[{key:0,value:"审核中"},{key:1,value:"已上线"},{key:2,value:"已下架"},{key:3,value:"已拒绝"}],discount_types:[{key:0,value:"优惠"},{key:1,value:"特价"},{key:2,value:"新品"}],pickerOptions:{shortcuts:[{text:"最近三天",onClick:function(t){var e=new Date,s=new Date;e.setTime(s.getTime()+1296e6),t.$emit("pick",[s,e])}},{text:"最近一周",onClick:function(t){var e=new Date,s=new Date;e.setTime(s.getTime()+6048e5),t.$emit("pick",[s,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,s=new Date;e.setTime(s.getTime()+2592e6),t.$emit("pick",[s,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,s=new Date;e.setTime(s.getTime()+7776e6),t.$emit("pick",[s,e])}}]},time:"",id:0,search_types:[{key:0,value:"全部"},{key:1,value:"进行中"},{key:2,value:"已下架/已过期"}],store_from_loading:!0}},watch:{stores:function(t){this.tableDatahandle()}},mounted:function(){this.getList(),this.getSuperStoresList()},methods:{edit:function(t){this.storeFromTitle="编辑店铺",this.storeFromShow=!0,this.getSimpleStore(t)},search:function(){this.store_filter.superstore_id;this.getList()},changeType:function(t){var e=this;this.store_loading=!0;var s=localStorage.getItem("superstore_id");this.$get("/api/store/show/"+s,{page:this.current_page,pagesize:this.pagesize,discount_status:t}).then(function(t){e.stores=t.data.list,e.setPage(t.data),e.store_loading=!1})},getList:function(){var t=this,e=localStorage.getItem("superstore_id");e||(e=0,localStorage.setItem("superstore_id",0)),this.store_filter.superstore_id=parseInt(e);var s={page:this.current_page,pagesize:this.pagesize},o={discount_status:status,keyword:this.store_filter.storename.trim(),type:this.store_filter.type};s=Object.assign({},s,o),this.$get("/api/store/show/"+e,s).then(function(e){200==e.code&&(t.stores=e.data.list,t.setPage(e.data),t.store_loading=!1)})},tableDatahandle:function(){var t=[];this.stores.forEach(function(e,s){var o=e;o.discount?(o.start_time=o.discount.start_time.substr(0,10),o.end_time=o.discount.end_time.substr(0,10),o.content=o.discount.content):(o.start_time="未开始",o.end_time="未开始",o.content=""),t.push(o)})},getSuperStoresList:function(){var t=this;this.$get("/api/superstore/all").then(function(e){200==e.code&&(t.superstores=e.data)})},handTool:function(t,e){var s=e.$attrs["data-value"];switch(this.store_loading=!0,t){case"lower":this.lower(s);break;case"online":this.online(s);break;case"delete":this.delete(s);break;default:this.$error_("操作非法")}},online:function(t){var e=this;this.$post("/api/store/online/"+t).then(function(t){200==t.code?(e.getList(),e.$success_("上架成功")):e.$error_(t.msg),e.store_loading=!1})},lower:function(t){var e=this;this.$deletes("/api/store/lower/"+t).then(function(t){200==t.code?(e.getList(),e.$success_("下架成功")):e.$error_(t.msg),e.store_loading=!1})},delete:function(t){var e=this;this.$confirm("是否删除当前店铺","是否删除",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){e.$deletes("/api/store/"+t).then(function(s){200==s.code?(e.$success_("删除成功"),e.stores=jsonRemove(e.stores,"id",t),console.log(e.stores)):e.$error_(s.msg),e.store_loading=!1})})},addStore:function(){this.storeFromShow=!0,this.$nextTick(function(){this.store=Object.assign({},{superstore_id:localStorage.getItem("superstore_id"),discount_status:1,discount_type:1,status:1},this.store)}),this.id=null,this.time=[l()().add(0,"days").format(),l()().add(15,"days").format()],this.storeFromTitle="创建店铺",this.store_from_loading=!1},batch_del:function(){var t=this;this.getSelected();var e=this.multipleSelectionIds.join(",");this.$deletes("/api/store/batch_delete?ids=".concat(e)).then(function(e){console.log(e),200===e.code?(t.$success_("删除成功"),t.getList()):t.$success_("删除失败, ".concat(e.msg))})},batch_online:function(){var t=this;this.getSelected();var e=this.multipleSelectionIds.join(",");this.$post("/api/store/batch_online?ids=".concat(e)).then(function(e){200===e.code?(t.$success_("上架成功"),t.getList()):t.$success_("上架失败, ".concat(e.msg))})},batch_lower:function(){var t=this;this.getSelected();var e=this.multipleSelectionIds.join(",");this.$post("/api/store/batch_lower?ids=".concat(e)).then(function(e){200===e.code?(t.$success_("下架成功"),t.getList()):t.$success_("下架失败, ".concat(e.msg))})},getSimpleStore:function(t){var e=this;this.store_from_loading=!0,this.$get("/api/store/"+t).then(function(t){e.setData(t.data),e.store_from_loading=!1})},setData:function(t){var e=this;this.$nextTick(function(){var s;(e.store=t,e.store.status=parseInt(e.store.status),e.id=t.id,t.discount)?(e.store=Object.assign({},e.store,(s={discount_content:t.discount.content,discount_status:t.discount.status,discount_type:t.discount.type},Object(r["a"])(s,"discount_content",t.discount.content),Object(r["a"])(s,"discount_id",t.discount.discount_id),s)),e.time=[t.discount.start_time,t.discount.end_time]):e.store=Object.assign({},e.store,{discount_status:1,discount_type:0,discount_content:""})})},changeSuperstore:function(t){this.store_loading=!0,localStorage.setItem("superstore_id",t),this.getList()},updateOrCreate:function(t){var e=this,s={start_time:l()(this.time[0]).format().substr(0,10),end_time:l()(this.time[1]).format().substr(0,10),content:this.store.discount_content,discount_status:this.store.discount_status,floor:this.store.floor,house_number:this.store.house_number,status:this.store.status,store_name:this.store.store_name,superstore_id:this.store.superstore_id,type:this.store.discount_type};if(t){this.store.discount?s.discount_id=this.store.discount.id:s.discount_id=0;var o=this;this.$put("/api/store/"+t,s).then(function(t){200==t.code?(o.$success_("更新成功"),o.getList(),o.storeFromShow=!1):o.$error_(t.msg)}).catch(function(t){})}else this.$post("/api/store",s).then(function(t){200==t.code?(e.getList(),e.$success_("创建成功")):e.$error_(t.msg)}).catch(function(t){})}}},u=c,d=(s("2528"),s("0c7c")),_=Object(d["a"])(u,o,i,!1,null,null,null);e["default"]=_.exports}}]);