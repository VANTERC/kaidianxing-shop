(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[200],{5855:function(t,e,a){},8797:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("kdx-content-bar",[a("kdx-header-bar",{staticClass:"header"},[a("Button",{attrs:{type:"primary",disabled:t.noManagePerm},on:{click:function(e){t.isShow=!0}}},[t._v("+添加企业")]),a("Form",{ref:"form",staticClass:"form_wraps",attrs:{inline:"","label-width":120},nativeOn:{submit:function(t){t.preventDefault()}}},[a("FormItem",{attrs:{label:"企业名称：",prop:"company_name"}},[a("Input",{attrs:{type:"text",placeholder:"请输入企业名称"},on:{"on-enter":t.handleSearch},model:{value:t.company_name,callback:function(e){t.company_name=e},expression:"company_name"}})],1),a("div",{staticClass:"ivu-form-item-btn"},[a("Button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("搜索")]),a("Button",{attrs:{type:"text"},on:{click:t.handleReset}},[t._v("重置")])],1)],1)],1),a("div",{staticClass:"content"},[a("div",{staticClass:"table-list"},[a("Table",{ref:"table",attrs:{columns:t.columns,data:t.data,loading:t.loading}})],1),a("div",{staticClass:"footer-page"},[a("kdx-page-component",{ref:"page",attrs:{current:t.page.page,total:t.total},on:{"on-change":t.handlePageChange}})],1)]),a("kdx-modal-frame",{attrs:{value:t.isShow,title:"添加企业",width:"700","ok-text":"保存","ok-cancel":"取消"},on:{"on-ok":t.save,"on-cancel":t.hide}},[a("div",{staticClass:"company_modal_wrap"},[a("Form",{ref:"form_modal",staticClass:"form_wraps",attrs:{model:t.model,rules:t.rules,inline:"","label-width":120}},[a("FormItem",{attrs:{label:"企业ID：",prop:"corp_id"}},[a("Input",{staticClass:"width-500",attrs:{type:"text",placeholder:"请输入企业ID"},model:{value:t.model.corp_id,callback:function(e){t.$set(t.model,"corp_id",e)},expression:"model.corp_id"}}),a("kdx-hint-text",{attrs:{content:"请输入正确的企业微信ID，同小程序后台配置的企业ID保持一致，否则小程序无法发起会话"}})],1),a("FormItem",{attrs:{label:"企业名称：",prop:"name"}},[a("Input",{staticClass:"width-500",attrs:{maxlength:"30","show-word-limit":"",type:"text",placeholder:"请输入企业名称"},model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1)],1)],1)])],1)},i=[]},a6c4:function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),o={name:"company_manage",props:{},data:function(){var t=this;this.$createElement;return{isShow:!1,company_name:"",model:{corp_id:"",name:"",id:""},columns:[{title:"企业ID",key:"corp_id"},{title:"企业名称",key:"name"},{title:"企业客服数",key:"count"},{title:"创建时间",key:"create_time"},{title:"操作",key:"action",with:150,render:function(e,a){return e("div",[e("a",{class:t.noManagePerm?"disabled-btn":"btn-item",on:{click:function(){t.noManagePerm||t.editShow(a.row)}}},["编辑"]),e("a",{on:{click:function(){t.noManagePerm||t.delConfirm(a.row.id)}},class:t.noManagePerm?"disabled-btn":"btn-item"},["删除"])])}}],data:[],total:0,page:{pagesize:10,page:1},loading:!1,rules:{corp_id:[{required:!0,message:"请输入企业ID"}],name:[{required:!0,message:"请输入企业名称"}]}}},computed:{noManagePerm:function(){return!this.$getPermMap("wechatCustomerService.company.manage")}},created:function(){},mounted:function(){this.getList()},methods:{save:function(){var t=this;this.$refs.form_modal.validate((function(e){e&&(console.log(t.model.id),t.model.id?t.editCompany():t.addCompany())}))},addCompany:function(){var t=this;this.$api.customerApi.addCompany(this.model).then((function(e){var a=e.error;0==a&&(t.$Message.success("保存成功"),t.getList(),t.hide())}))},editCompany:function(){var t=this;this.$api.customerApi.editCompany(this.model).then((function(e){var a=e.error;0==a&&(t.$Message.success("编辑成功"),t.getList(),t.hide())}))},hide:function(){this.$refs.form_modal.resetFields(),this.isShow=!1,this.model={corp_id:"",name:"",id:""}},editShow:function(t){this.isShow=!0,this.model=(0,i.default)({},t),console.log(t)},delConfirm:function(t){var e=this;this.$Modal.confirm({title:"您确定要删除当前企业？",content:"<div style='color:#ff0000c7;'>删除后该企业下的客服链接将失效，如果咨询入口已正式对外，建议先下掉咨询入口后再删除账号</div>",onOk:function(){e.del(t)}})},del:function(t){var e=this;this.$api.customerApi.delCompany({id:t}).then((function(t){var a=t.error;0==a&&(console.log(t),e.getList(),e.$Message.success("删除成功"))}))},handlePageChange:function(t){this.page.page=t.pageNumber,this.page.pagesize=t.pageSize,this.getList()},handleSearch:function(){this.getList()},handleReset:function(){this.company_name="",this.page.page=1,this.getList()},getList:function(){var t=this,e=(0,i.default)((0,i.default)({name:this.company_name},this.page),{},{only_list:0});this.$api.customerApi.getCompanyList(e).then((function(e){var a=e.error,n=e.data,i=n.list,o=n.total;0==a&&(t.data=i,t.total=o)}))}}};e.default=o},e8b8:function(t,e,a){"use strict";a.r(e);var n=a("a6c4"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},f26d:function(t,e,a){"use strict";a("5855")},f2cb:function(t,e,a){"use strict";a.r(e);var n=a("8797"),i=a("e8b8");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("f26d");var s=a("2877"),r=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"f10c94f0",null);e["default"]=r.exports}}]);