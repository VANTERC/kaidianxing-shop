(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[205],{"293d":function(e,t,a){},"79ed":function(e,t,a){"use strict";a("293d")},a6c4:function(e,t,a){var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("5530")),o={name:"company_manage",props:{},data:function(){var e=this;this.$createElement;return{isShow:!1,company_name:"",model:{corp_id:"",name:"",id:""},columns:[{title:"企业ID",key:"corp_id"},{title:"企业名称",key:"name"},{title:"企业客服数",key:"count"},{title:"创建时间",key:"create_time"},{title:"操作",key:"action",with:150,render:function(t,a){return t("div",[t("a",{class:e.noManagePerm?"disabled-btn":"btn-item",on:{click:function(){e.noManagePerm||e.editShow(a.row)}}},["编辑"]),t("a",{on:{click:function(){e.noManagePerm||e.delConfirm(a.row.id)}},class:e.noManagePerm?"disabled-btn":"btn-item"},["删除"])])}}],data:[],total:0,page:{pagesize:10,page:1},loading:!1,rules:{corp_id:[{required:!0,message:"请输入企业ID"}],name:[{required:!0,message:"请输入企业名称"}]}}},computed:{noManagePerm:function(){return!this.$getPermMap("wechatCustomerService.company.manage")}},created:function(){},mounted:function(){this.getList()},methods:{save:function(){var e=this;this.$refs.form_modal.validate((function(t){t&&(console.log(e.model.id),e.model.id?e.editCompany():e.addCompany())}))},addCompany:function(){var e=this;this.$api.customerApi.addCompany(this.model).then((function(t){var a=t.error;0==a&&(e.$Message.success("保存成功"),e.getList(),e.hide())}))},editCompany:function(){var e=this;this.$api.customerApi.editCompany(this.model).then((function(t){var a=t.error;0==a&&(e.$Message.success("编辑成功"),e.getList(),e.hide())}))},hide:function(){this.$refs.form_modal.resetFields(),this.isShow=!1,this.model={corp_id:"",name:"",id:""}},editShow:function(e){this.isShow=!0,this.model=(0,i.default)({},e),console.log(e)},delConfirm:function(e){var t=this;this.$Modal.confirm({title:"您确定要删除当前企业？",content:"<div style='color:#ff0000c7;'>删除后该企业下的客服链接将失效，如果咨询入口已正式对外，建议先下掉咨询入口后再删除账号</div>",onOk:function(){t.del(e)}})},del:function(e){var t=this;this.$api.customerApi.delCompany({id:e}).then((function(e){var a=e.error;0==a&&(console.log(e),t.getList(),t.$Message.success("删除成功"))}))},handlePageChange:function(e){this.page.page=e.pageNumber,this.page.pagesize=e.pageSize,this.getList()},handleSearch:function(){this.getList()},handleReset:function(){this.company_name="",this.page.page=1,this.getList()},getList:function(){var e=this,t=(0,i.default)((0,i.default)({name:this.company_name},this.page),{},{only_list:0});this.$api.customerApi.getCompanyList(t).then((function(t){var a=t.error,n=t.data,i=n.list,o=n.total;0==a&&(e.data=i,e.total=o)}))}}};t.default=o},b1e4:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kdx-content-bar",[a("kdx-header-bar",{staticClass:"header"},[a("Button",{attrs:{type:"primary",disabled:e.noManagePerm},on:{click:function(t){e.isShow=!0}}},[e._v("+添加企业")]),a("Form",{ref:"form",staticClass:"form_wraps",attrs:{inline:"","label-width":120},nativeOn:{submit:function(e){e.preventDefault()}}},[a("FormItem",{attrs:{label:"企业名称：",prop:"company_name"}},[a("Input",{attrs:{type:"text",placeholder:"请输入企业名称"},on:{"on-enter":e.handleSearch},model:{value:e.company_name,callback:function(t){e.company_name=t},expression:"company_name"}})],1),a("div",{staticClass:"ivu-form-item-btn"},[a("Button",{attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("搜索")]),a("Button",{attrs:{type:"text"},on:{click:e.handleReset}},[e._v("重置")])],1)],1)],1),a("div",{staticClass:"content"},[a("div",{staticClass:"table-list"},[a("Table",{ref:"table",attrs:{columns:e.columns,data:e.data,loading:e.loading}})],1),a("div",{staticClass:"footer-page"},[a("kdx-page-component",{ref:"page",attrs:{current:e.page.page,total:e.total},on:{"on-change":e.handlePageChange}})],1)]),a("kdx-modal-frame",{attrs:{value:e.isShow,title:"添加企业",width:"700","ok-text":"保存","ok-cancel":"取消"},on:{"on-ok":e.save,"on-cancel":e.hide}},[a("div",{staticClass:"company_modal_wrap"},[a("Form",{ref:"form_modal",staticClass:"form_wraps",attrs:{model:e.model,rules:e.rules,inline:"","label-width":120}},[a("FormItem",{attrs:{label:"企业ID：",prop:"corp_id"}},[a("Input",{staticClass:"width-500",attrs:{type:"text",placeholder:"请输入企业ID"},model:{value:e.model.corp_id,callback:function(t){e.$set(e.model,"corp_id",t)},expression:"model.corp_id"}}),a("kdx-hint-text",{attrs:{content:"请输入正确的企业微信ID，同小程序后台配置的企业ID保持一致，否则小程序无法发起会话"}})],1),a("FormItem",{attrs:{label:"企业名称：",prop:"name"}},[a("Input",{staticClass:"width-500",attrs:{maxlength:"30","show-word-limit":"",type:"text",placeholder:"请输入企业名称"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1)],1)],1)])],1)},i=[]},e8b8:function(e,t,a){"use strict";a.r(t);var n=a("a6c4"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},f2cb:function(e,t,a){"use strict";a.r(t);var n=a("b1e4"),i=a("e8b8");for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("79ed");var s=a("2877"),r=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"1928b67a",null);t["default"]=r.exports}}]);