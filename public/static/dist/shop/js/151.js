(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[151],{"3f8e4":function(t,e,a){"use strict";a.r(e);var s=a("bf89"),n=a.n(s);for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(i);e["default"]=n.a},"4df7":function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("kdx-header-bar",{attrs:{type:"little"},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"flex space-between"},[e("Button",{attrs:{type:"primary",disabled:t.noManagePerm,to:"/setting/systemAuthority/roleManagement/add"}},[t._v("+添加角色 ")]),e("div",{staticClass:"flex"},[e("Form",{ref:"form",attrs:{model:t.searchData,"label-width":100,inline:""},nativeOn:{submit:function(t){t.preventDefault()}}},[e("FormItem",{attrs:{label:"角色名称："}},[e("Input",{staticClass:"width-340",attrs:{type:"text",placeholder:"请输入"},on:{"on-enter":t.handleSearch},model:{value:t.searchData.keyword,callback:function(e){t.$set(t.searchData,"keyword",e)},expression:"searchData.keyword"}})],1),e("FormItem",{attrs:{label:"状态："}},[e("Select",{staticClass:"width-160",model:{value:t.searchData.status,callback:function(e){t.$set(t.searchData,"status",e)},expression:"searchData.status"}},t._l(t.statusList,(function(a,s){return e("Option",{key:s,attrs:{value:a.value}},[t._v(" "+t._s(a.label)+" ")])})),1)],1)],1),e("div",{staticClass:"btn"},[e("Button",{staticClass:"mL-20",attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("搜索 ")]),e("Button",{staticClass:"mL-20",attrs:{type:"text"},on:{click:t.handleReset}},[t._v("重置 ")])],1)],1)],1)]},proxy:!0}])}),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"list-wrap"},[e("Table",{ref:"table",attrs:{columns:t.columns,data:t.getTableData},on:{"on-selection-change":t.selectChange},scopedSlots:t._u([{key:"status",fn:function(a){var s=a.row;return[e("kdx-status-text",{attrs:{type:"1"===s.status?"success":"danger"}},[t._v(" "+t._s("1"===s.status?"已启用":"已禁用")+" ")])]}}])}),t.list.length>0?e("div",{staticClass:"footer-action"},[e("Checkbox",{attrs:{value:t.isSelectAll,disabled:t.noManagePerm},on:{"on-change":t.checkboxChange}}),e("Button",{attrs:{disabled:t.selectDisabled},on:{click:t.batchEnable}},[t._v(" 启用 ")]),e("Button",{attrs:{disabled:t.selectDisabled},on:{click:t.batchDisable}},[t._v(" 禁用 ")]),e("Button",{attrs:{disabled:t.selectDisabled},on:{click:t.batchDelete}},[t._v(" 删除 ")])],1):t._e(),e("div",{directives:[{name:"show",rawName:"v-show",value:t.total>10,expression:"total > 10"}],staticClass:"footer-page"},[e("kdx-page-component",{ref:"page",attrs:{total:t.total},on:{"on-change":t.changePage}})],1)],1),t._t("default")],2)};e.render=a;var s=[];e.staticRenderFns=s},7866:function(t,e,a){"use strict";a("ec2e")},b9b9:function(t,e,a){"use strict";a.r(e);var s=a("eea60"),n=a("3f8e4");for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);a("7866");var o=a("2877"),l=Object(o["a"])(n["default"],s["render"],s["staticRenderFns"],!1,null,"32eddfa5",null);e["default"]=l.exports},bf89:function(t,e,a){var s=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(a("2909"));a("d81d"),a("a15b"),a("ac1f"),a("1276");var i={inject:["returnToTop"],components:{},props:{},data:function(){var t=this;this.$createElement;return{total:0,page:1,pagesize:10,list:[],loading:!1,selectRows:[],searchData:{keyword:"",status:"all"},statusList:[{label:"全部",value:"all"},{label:"已启用",value:"1"},{label:"已禁用",value:"0"}],columns:[{type:"selection",width:40,align:"center"},{title:"角色名称",key:"name"},{title:"操作员数量",key:"operator_num"},{title:"状态",slot:"status"},{title:"操作",key:"action",render:function(e,a){return e("div",[e("Button",{attrs:{type:"text",disabled:t.noManagePerm||"1"==a.row.is_default},on:{click:function(){t.handleEdit(a.row.id)}}},["编辑"]),e("Button",{attrs:{type:"text",disabled:t.noManagePerm},class:"marginL-10",on:{click:function(){t.handleStatus(a.row)}}},["1"===a.row.status?"禁用":"启用"]),e("Button",{attrs:{type:"text",disabled:t.noManagePerm||"1"==a.row.is_default},class:"marginL-10",on:{click:function(){t.handleDelete(a.row.id)}}},["删除"])])}}]}},computed:{isSelectAll:function(){return this.selectRows.length===this.list.length},selectDisabled:function(){return 0===this.selectRows.length},noManagePerm:function(){return!this.$getPermMap("user.role.manage")},getTableData:function(){var t=this;return this.list.map((function(e){return e._disabled=t.noManagePerm,e}))}},created:function(){this.getRoleList()},methods:{getRoleList:function(){var t=this;this.returnToTop(),this.loading=!0,this.$api.settingApi.getRoleList({keyword:this.searchData.keyword,status:"all"!==this.searchData.status&&""!==this.searchData.status?1*this.searchData.status:"",page:this.page,pagesize:this.pagesize}).then((function(e){t.loading=!1,0==e.error&&(t.total=e.total,t.list=(0,n.default)(e.list),t.selectRows=[])}))},handleEdit:function(t){this.$router.push({path:"/setting/systemAuthority/roleManagement/add",query:{id:t}})},handleStatus:function(t){"1"===t.status?this.forbiddenRole(t.id):this.activeRole(t.id)},batchEnable:function(){var t=this.selectRows.map((function(t){return t.id}));t=t.join(","),this.activeRole(t)},batchDisable:function(){var t=this.selectRows.map((function(t){return t.id}));t=t.join(","),this.forbiddenRole(t)},activeRole:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a={};a=1===e.split(",").length?{id:e}:{id:0,ids:e},this.$api.settingApi.activeRole(a).then((function(e){0==e.error&&(t.getRoleList(),t.$Message.success("启用成功"))}))},forbiddenRole:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a={};a=1===e.split(",").length?{id:e}:{id:0,ids:e},this.$api.settingApi.forbiddenRole(a).then((function(e){0==e.error&&(t.getRoleList(),t.$Message.success("禁用成功"))}))},handleDelete:function(t){var e=this;this.$Modal.confirm({title:"提示",content:"确认删除该角色",onOk:function(){e.deleteRole(t)},onCancel:function(){}})},batchDelete:function(){var t=this.selectRows.map((function(t){return t.id}));t=t.join(","),this.deleteRole(t)},deleteRole:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a={};a=1===e.split(",").length?{id:e}:{id:0,ids:e},this.$api.settingApi.deleteRole(a).then((function(e){0==e.error&&(t.getRoleList(),t.$Message.success("删除成功"))}))},handleSearch:function(){var t;this.page=1,this.pagesize=10,null===(t=this.$refs["page"])||void 0===t||t.reset(),this.getRoleList()},handleReset:function(){var t;this.searchData.status="all",this.searchData.keyword="",this.page=1,this.pagesize=10,null===(t=this.$refs["page"])||void 0===t||t.reset(),this.getRoleList()},changePage:function(t){this.page=t.pageNumber,this.pagesize=t.pageSize,this.getRoleList()},selectChange:function(t){this.selectRows=t},checkboxChange:function(t){this.$refs["table"].selectAll(t)}}};e.default=i},ec2e:function(t,e,a){},eea60:function(t,e,a){"use strict";var s=a("4df7");a.o(s,"render")&&a.d(e,"render",(function(){return s["render"]})),a.o(s,"staticRenderFns")&&a.d(e,"staticRenderFns",(function(){return s["staticRenderFns"]}))}}]);