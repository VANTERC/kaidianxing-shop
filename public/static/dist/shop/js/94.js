(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[94],{"3caa":function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("d3b7");var n={props:{id:{type:String,required:!0}},data:function(){return{total:0,page:{pageNumber:1,pageSize:10},columns:[{title:"商品",key:"",slot:"goods",width:295},{title:"已售出数量",key:"order_count"},{title:"成交金额",key:"pay_price"},{title:"退款金额",key:"refund_price"},{title:"销售数量",key:"total"},{title:"参与人数",key:"member_count"}],data:[],loading:!1,value:!1}},methods:{setValue:function(){this.value=!this.value,this.value&&this.getList()},getList:function(){var t=this;this.loading=!0;var e={page:this.page.pageNumber,pagesize:this.page.pageSize,id:this.id};this.$api.groupsApi.getGroupsActivityListData(e).then((function(e){0===e.error&&(t.data=e.list,t.total=e.total)})).finally((function(){t.loading=!1}))},handleCancel:function(){this.setValue()},handlePageChange:function(t){this.page=t,this.getList()}}};e.default=n},"4fd6":function(t,e,a){"use strict";a.r(e);var n=a("3caa"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"56fb":function(t,e,a){"use strict";a.r(e);var n=a("a301"),i=a("e385");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);var r=a("2877"),o=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"4f878f80",null);e["default"]=o.exports},6961:function(t,e,a){"use strict";a.r(e);var n=a("dbd6"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"6a72":function(t,e,a){"use strict";a.r(e);var n=a("dd40"),i=a("6961");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("b675");var r=a("2877"),o=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"fd299972",null);e["default"]=o.exports},"790e":function(t,e,a){},"7c00":function(t,e,a){"use strict";a.r(e);var n=a("7e94"),i=a("4fd6");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("9130");var r=a("2877"),o=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"a94d425c",null);e["default"]=o.exports},"7e94":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("kdx-modal-frame",{attrs:{value:t.value,title:"活动数据",width:1e3,loading:t.loading},on:{"on-cancel":t.handleCancel},scopedSlots:t._u([{key:"footer",fn:function(){return[a("kdx-page-component",{ref:"page",attrs:{total:t.total,"limit-default":""},on:{"on-change":t.handlePageChange}})]},proxy:!0}])},[a("div",{staticClass:"content"},[a("Table",{attrs:{columns:t.columns,data:t.data},scopedSlots:t._u([{key:"goods",fn:function(e){var n=e.row;return[a("div",{staticClass:"goods"},[a("img",{staticClass:"goods-thumb",attrs:{src:t.$media(n.thumb),alt:""},on:{error:t.replaceImage}}),a("div",[a("div",{staticClass:"two-line-hide goods-title"},[t._v(" "+t._s(n.title)+" ")]),n.option_title?a("div",{staticClass:"goods-options"},[t._v(" "+t._s(n.option_title)+" ")]):t._e()])])]}}])})],1)])},i=[]},9130:function(t,e,a){"use strict";a("790e")},"924d":function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530"));a("a9e3");var s={props:{activity_status:{type:[String,Number]}},data:function(){return{model:{keyword:"",status:"all",start_time:"",end_time:""},date:[],statusList:[{value:"all",label:"全部"},{value:"1",label:"进行中"},{value:"0",label:"未开始"},{value:"-1",label:"停止"},{value:"-2",label:"手动停止"}]}},computed:{noManagePerm:function(){return!this.$getPermMap("groups.manage")}},methods:{addActivity:function(){this.$router.push({path:"/groups/activity/index",query:{type:"add"}})},changeDate:function(t){this.model.start_time=t[0],this.model.end_time=t[1]},handleSearch:function(){var t=(0,i.default)((0,i.default)({},this.model),{},{status:"all"===this.model.status?"":this.model.status});this.$emit("on-search",t)},handleReset:function(){this.reset(),this.handleSearch()},reset:function(){this.model={keyword:"",status:"all",start_time:"",end_time:""},this.date=[]}}};e.default=s},a301:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("kdx-header-bar",{scopedSlots:t._u([{key:"header",fn:function(){return[a("Button",{attrs:{type:"primary",disabled:!t.activity_status||t.noManagePerm},on:{click:t.addActivity}},[t._v("+添加活动")])]},proxy:!0}])},[a("Form",{ref:"form",attrs:{model:t.model,"label-width":100,inline:""},nativeOn:{submit:function(t){t.preventDefault()}}},[a("FormItem",{attrs:{label:"活动名称："}},[a("i-input",{staticClass:"width-340",attrs:{type:"text",placeholder:"活动名称"},on:{"on-enter":t.handleSearch},model:{value:t.model.keyword,callback:function(e){t.$set(t.model,"keyword",e)},expression:"model.keyword"}})],1),a("FormItem",{attrs:{label:"活动状态："}},[a("Select",{staticClass:"width-160",model:{value:t.model.status,callback:function(e){t.$set(t.model,"status",e)},expression:"model.status"}},t._l(t.statusList,(function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),1)],1),a("FormItem",{attrs:{label:"活动时间："}},[a("DatePicker",{staticClass:"width-340",attrs:{type:"datetimerange",format:"yyyy-MM-dd HH:mm",placeholder:"活动时间"},on:{"on-change":t.changeDate},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),a("div",{staticClass:"ivu-form-item-btn"},[a("Button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("搜索")]),a("Button",{attrs:{type:"text"},on:{click:t.handleReset}},[t._v("重置")])],1)],1)],1)},i=[]},b675:function(t,e,a){"use strict";a("c73a")},c73a:function(t,e,a){},dbd6:function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("ac1f"),a("841c");var i=n(a("5530")),s=n(a("56fb")),r=n(a("7c00")),o={name:"index",components:{SearchHeader:s.default,DataList:r.default},data:function(){var t=this;this.$createElement;return{loading:!1,page:{pageSize:10,pageNumber:1},activity_status:1,search:{},data:[],total:0,columns:[{title:"活动名称",key:"title"},{title:"活动时间",slot:"date"},{title:"手动停止时间",key:"stop_time",render:function(e,a){return e("div",[t.getStopTime(a.row)])}},{title:"活动状态",slot:"status",width:160},{title:"操作",slot:"action"}],currentId:""}},computed:{noManagePerm:function(){return!this.$getPermMap("groups.manage")}},created:function(){this.getList()},methods:{changeSwitch:function(t){var e=this;this.$api.groupsApi.changeGroupsStatus({activity_status:t}).then((function(t){0===t.error&&(e.$Message.success("修改成功"),e.getList(),e.getGroupsStatus())}))},handleChange:function(t){var e=this;t?this.changeSwitch(t):this.$Modal.confirm({title:"提示",content:"关闭后，正在进行的活动将强制停止，是否确认关闭？",onOk:function(){e.changeSwitch(t)},onCancel:function(){e.activity_status=0===t?1:0}})},getList:function(){var t=this;this.loading=!0;var e=(0,i.default)((0,i.default)({},this.search),{},{pagesize:this.page.pageSize,page:this.page.pageNumber});this.$api.groupsApi.getGroupActivities(e).then((function(e){t.loading=!1,0===e.error&&(t.data=e.list,t.total=e.total)}))},handleSearch:function(t){this.search=(0,i.default)((0,i.default)({},this.search),t),this.refreshTable()},changePage:function(t){this.page=t,this.getList()},handleView:function(t){this.$router.push({path:"/groups/activity/index",query:{id:t,type:"view"}})},handleEdit:function(t){this.$router.push({path:"/groups/activity/index",query:{id:t,type:"edit"}})},handleCopy:function(t){this.$router.push({path:"/groups/activity/index",query:{id:t,type:"copy"}})},handleStop:function(t){var e=this;this.$Modal.confirm({title:"提示",content:"活动停止后将无法恢复，确认停止？",onOk:function(){e.stopGroupsActivity(t)},onCancel:function(){}})},stopGroupsActivity:function(t){var e=this;this.$api.groupsApi.stopGroupsActivity({id:t}).then((function(t){0===t.error&&(e.refreshTable(),e.$Message.success("操作成功"))}))},handleDelete:function(t){var e=this,a="自动结束的活动可能仍有团长进行拼团，删除活动后待支付的订单自动取消，待成团的订单处理成拼团失败 ，请确认此活动下是否仍有团长在开团？";this.$Modal.confirm({title:"确认删除",content:a,onOk:function(){e.deleteGroupsActivity(t.id)},onCancel:function(){}})},deleteGroupsActivity:function(t){var e=this;this.$api.groupsApi.deleteGroupsActivity({id:t}).then((function(t){0===t.error&&(e.refreshTable(),e.$Message.success("删除成功"))}))},handleActivityData:function(t){var e=this;this.currentId=t,this.$nextTick((function(){e.$refs["data_list"].setValue()}))},refreshTable:function(){this.page={pageSize:10,pageNumber:1},this.$refs["page"].reset(),this.getList()},getTime:function(t){return"0000-00-00 00:00:00"===t?"-":t},getStopTime:function(t){return-2==t.status?"0000-00-00 00:00:00"===t.stop_time?"-":t.stop_time:"-"}}};e.default=o},dd40:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spell-group-list"},[a("search-header",{ref:"search_header",attrs:{activity_status:t.activity_status},on:{"on-search":t.handleSearch}}),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"table-list"},[a("Table",{ref:"table",attrs:{columns:t.columns,data:t.data},scopedSlots:t._u([{key:"date",fn:function(e){var n=e.row;return[a("div",{staticClass:"time"},[t._v("起："+t._s(t.getTime(n.start_time)))]),a("div",{staticClass:"time"},[t._v("止："+t._s(t.getTime(n.end_time)))])]}},{key:"status",fn:function(e){var n=e.row;return["1"===n.status?a("kdx-status-text",{attrs:{type:"success"}},[t._v("进行中")]):t._e(),"-1"===n.status?a("kdx-status-text",{attrs:{type:"danger"}},[t._v("已停止")]):t._e(),"-2"===n.status?a("kdx-status-text",{attrs:{type:"danger"}},[t._v("手动停止")]):t._e(),"0"===n.status?a("kdx-status-text",{attrs:{type:"warning"}},[t._v("未开始")]):t._e()]}},{key:"action",fn:function(e){var n=e.row;return[a("div",{staticClass:"btn-box"},[a("Button",{attrs:{type:"text"},on:{click:function(e){return t.handleView(n.id)}}},[t._v("查看")]),a("Button",{attrs:{type:"text",disabled:!("0"!==n.status)},on:{click:function(e){return t.handleActivityData(n.id)}}},[t._v("数据")]),a("Button",{attrs:{type:"text",disabled:!("1"==n.status||"0"==n.status)},on:{click:function(e){return t.handleEdit(n.id)}}},[t._v("编辑")]),a("Button",{attrs:{type:"text",disabled:t.noManagePerm},on:{click:function(e){return t.handleCopy(n.id)}}},[t._v("复制")]),a("Button",{attrs:{type:"text",disabled:-1==n.status||-2==n.status||0==n.status},on:{click:function(e){return t.handleStop(n.id)}}},[t._v("停止 ")]),a("Button",{attrs:{type:"text",disabled:1==n.status},on:{click:function(e){return t.handleDelete(n)}}},[t._v("删除")])],1)]}}])}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.data.length>0,expression:"data.length > 0"}],staticClass:"footer-page"},[a("kdx-page-component",{ref:"page",attrs:{total:t.total},on:{"on-change":t.changePage}})],1)],1),a("data-list",{ref:"data_list",attrs:{id:t.currentId}}),t._t("default")],2)},i=[]},e385:function(t,e,a){"use strict";a.r(e);var n=a("924d"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a}}]);