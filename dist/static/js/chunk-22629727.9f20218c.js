(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22629727"],{"362a":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("my-header",{attrs:{title:t.title}}),t._v(" "),o("el-form",{staticClass:"filter",attrs:{model:t.filter,inline:!0}},[o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("创建")])],1)],1),t._v(" "),o("my-table",{attrs:{tableData:t.lists,columns:t.columns}}),t._v(" "),o("el-dialog",{attrs:{title:t.formTitle,visible:t.formShow},on:{"update:visible":function(e){t.formShow=e}}},[o("el-form",{attrs:{"label-position":t.formTitle,"label-width":"80px"},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[o("my-select",{attrs:{select:t.form.type,label:"版本类型",prop:t.select,options:t.options,labelWidth:t.labelWidth},on:{"update:select":function(e){return t.$set(t.form,"type",e)}}}),t._v(" "),o("el-form-item",{attrs:{label:"下载链接","label-width":t.labelWidth}},[o("el-input",{model:{value:t.form.dowload_url,callback:function(e){t.$set(t.form,"dowload_url",e)},expression:"form.dowload_url"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"版本号码","label-width":t.labelWidth}},[o("el-input",{model:{value:t.form.edition,callback:function(e){t.$set(t.form,"edition",e)},expression:"form.edition"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"版本编号/唯一","label-width":t.labelWidth}},[o("el-input",{model:{value:t.form.number,callback:function(e){t.$set(t.form,"number",e)},expression:"form.number"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"版本更新描述","label-width":t.labelWidth}},[o("el-input",{model:{value:t.form.update_info,callback:function(e){t.$set(t.form,"update_info",e)},expression:"form.update_info"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"是否强制更新",prop:"updated","label-width":t.labelWidth}},[o("el-radio-group",{model:{value:t.form.updated,callback:function(e){t.$set(t.form,"updated",e)},expression:"form.updated"}},[o("el-radio",{attrs:{label:"是"}}),t._v(" "),o("el-radio",{attrs:{label:"否"}})],1)],1),t._v(" "),o("el-form-item",{attrs:{size:"large"}},[o("el-button",{attrs:{type:"primary"},on:{click:t.createOrUpdate}},[t._v("编辑")])],1)],1)],1)],1)},l=[],a=o("cd4a"),n={name:"index",components:{MyTable:a["f"],MyDropDown:a["d"],myHeader:a["k"],MyTag:a["g"],MySelect:a["e"]},mixins:[a["l"]],data:function(){var t=this;return{filter:{},title:"App管理",lists:[],columns:[{prop:"id",label:"ID"},{prop:"type",label:"类型"},{prop:"dowload_url",label:"下载地址",render:function(t,e){return t("span",{domProps:{innerHTML:'<a href="'.concat(e.row.dowload_url,'">').concat(e.row.dowload_url,"</a>")}},[])}},{prop:"edition",label:"版本号码"},{prop:"number",label:"版本编码"},{prop:"updated",label:"是否强制更新",render:function(t,e){var o="";return o="1"==e.row.updated?"是":"否",t(a["g"],{props:{size:"small",text:o}})}},{prop:"",label:"操作",fixed:"right",render:function(e,o){var i={label:"操作",items:[{label:"修改",func:{func:"edit_",id:o.row.id}},{label:"删除",func:{func:"del",id:o.row.id}}],buttons:[{size:"small",type:"text",text:"编辑",func:{func:"edit_",id:o.row.id}},{size:"small",type:"text",text:"删除",func:{func:"del_",id:o.row.id}}]};return e(a["d"],{props:{dropDownData:i},on:{update:t.update,del:t.del,edit_:t.edit_,del_:t.del_}})}}],options:[{key:"ios",value:"ios"},{key:"android",value:"android"}],formTitle:"编辑",form:{},select:"ios",placeholder_:"版本类型",formShow:!1,labelWidth:"100px",id:null}},created:function(){this.getList()},methods:{update:function(t){console.log(t)},setData:function(t){t.updated=0==t.updated?"否":"是",this.form=t},getData:function(){this.form.updated="是"==this.form.updated?1:0},del:function(t){var e=this;this.$confirm("是否删除,请谨慎","是否删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$deletes("/api/app/".concat(t)).then(function(t){200==t.code?(e.$success_("删除成功"),e.getList()):e.$error_(t.msg)})})},add:function(){this.id=null,this.formShow=!0,this.formTitle="创建"},edit_:function(t){var e=this;this.formShow=!0,this.id=t,this.$get("/api/app/"+this.id).then(function(t){200==t.code?(e.form=t.data,e.setData(t.data)):e.$success_(t.msg)})},createOrUpdate:function(){var t=this;this.getData();var e=this.form;this.id?this.$put("/api/app/"+this.id,e).then(function(e){200==e.code?(t.$success_(e.msg),t.formShow=!1,t.getList()):t.$success_(e.msg)}):this.$post("/api/app",e).then(function(e){200==e.code?(t.$success_(e.msg),t.formShow=!1,t.getList()):t.$success_(e.msg)})},updateOrCreate:function(){this.postData(id)},postData:function(t){var e=this;this.$put("/api/app/"+t).then(function(t){200==t.code?console.log(t):e.$success_(t.msg)})},del_:function(){console.log("del_2")},getList:function(){var t=this;this.$get("/api/app",{page:this.current_page,pagesize:this.pagesize}).then(function(e){200==e.code&&(t.lists=e.data.list,t.setPage(e.data),t.store_loading=!1)})}}},r=n,s=(o("e2d2"),o("0c7c")),d=Object(s["a"])(r,i,l,!1,null,null,null);e["default"]=d.exports},"72ca":function(t,e,o){},e2d2:function(t,e,o){"use strict";var i=o("72ca"),l=o.n(i);l.a}}]);