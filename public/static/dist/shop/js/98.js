(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[98],{"173b":function(t,e,a){"use strict";a.r(e);var n=a("da5c"),s=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=s.a},"2b9c":function(t,e,a){"use strict";a("bf81")},4345:function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("d81d"),a("ac1f"),a("841c");var s=n(a("4ada")),i={name:"index",inject:["returnToTop"],components:{TableList:s.default},computed:{noManagePerm:function(){return!this.$getPermMap("goods.label_group.manage")},getTableData:function(){var t=this;return this.table.data.map((function(e){return e._disabled=t.noManagePerm,e}))}},data:function(){return{search:{name:"",status:"all"},table:{data:[],loading:!1,total:0},optionData:{status:[{value:"all",name:"全部"},{value:"1",name:"启用"},{value:"0",name:"禁用"}]},page:{pageSize:10,pageNumber:1}}},methods:{setStatus:function(t){this.search.status=t},handleSearch:function(){this.refreshTable()},handleReset:function(){this.search={status:"all",title:""},this.refreshTable()},toAdd:function(){this.$router.push({path:"/goods/label/add"})},refreshTable:function(t){t||(this.page={pageSize:10,pageNumber:1}),this.$refs["table_list"].reset(t),this.getList()},changePage:function(t){this.page=t,this.getList()},getList:function(){var t=this;this.$history.setData({search:this.search,page:this.page}),this.returnToTop(),this.$refs["table_list"].initFooterData(),this.table.loading=!0;var e=Object.assign({},this.search);e.status="all"===e.status?"":e.status;var a=Object.assign({pagesize:this.page.pageSize,page:this.page.pageNumber,pager:1},e);this.$api.goodsApi.goodLabelGroupList(a).then((function(e){t.table.loading=!1,0===e.error&&(t.table.data=e.list,t.table.total=e.total)})).catch()}},mounted:function(){var t=this;this.$history.setRoute(this.$route).getData((function(e){var a=e.search,n=e.page;t.search=t.$utils.deepCopy(a)||t.search,t.page=n,t.$nextTick((function(){t.refreshTable(t.page)}))}))}};e.default=i},"4ada":function(t,e,a){"use strict";a.r(e);var n=a("c8e49"),s=a("173b");for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(i);a("2b9c");var r=a("2877"),o=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,"7ecf54ac",null);e["default"]=o.exports},"535a":function(t,e,a){},6345:function(t,e,a){"use strict";a.r(e);var n=a("4345"),s=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=s.a},8023:function(t,e,a){"use strict";a.r(e);var n=a("cf11"),s=a("6345");for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(i);a("c081");var r=a("2877"),o=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,"2eefcf07",null);e["default"]=o.exports},bf81:function(t,e,a){},c081:function(t,e,a){"use strict";a("535a")},c8e49:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return s}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"good-group-table-list"},[a("Table",{ref:"table",attrs:{columns:t.columns,data:t.getTableData},on:{"on-selection-change":t.selectChange}}),t.getTableData.length>0?a("div",{staticClass:"footer-action"},[a("Checkbox",{attrs:{disabled:t.noManagePerm},on:{"on-change":t.checkboxChange},model:{value:t.isSelectAll,callback:function(e){t.isSelectAll=e},expression:"isSelectAll"}}),a("Button",{attrs:{disabled:t.isDisabled},on:{click:function(e){return t.handleLabelGroupStatus({type:"multiple"},"1")}}},[t._v("启用")]),a("Button",{attrs:{disabled:t.isDisabled},on:{click:function(e){return t.handleLabelGroupStatus({type:"multiple"},"0")}}},[t._v("禁用")]),a("Button",{attrs:{disabled:t.isDisabled||t.selectHasDefault},on:{click:function(e){return t.handleDelete({type:"multiple"})}}},[t._v("删除")])],1):t._e(),a("div",{staticClass:"footer-page"},[a("kdx-page-component",{ref:"page",attrs:{total:t.total},on:{"on-change":t.changePage}})],1)],1)},s=[]},cf11:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return s}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"good-label"},[a("kdx-header-bar",{attrs:{type:"little"},scopedSlots:t._u([{key:"header",fn:function(){return[a("Button",{attrs:{type:"primary",disabled:t.noManagePerm},on:{click:t.toAdd}},[t._v("+添加标签组")])]},proxy:!0}])},[a("Form",{ref:"form",attrs:{model:t.search,"label-width":100,inline:""},nativeOn:{submit:function(t){t.preventDefault()}}},[a("FormItem",{attrs:{label:"标签组名称："}},[a("Input",{staticClass:"width-160",attrs:{type:"text",placeholder:"标签组名称"},on:{"on-enter":t.handleSearch},model:{value:t.search.name,callback:function(e){t.$set(t.search,"name",e)},expression:"search.name"}})],1),a("FormItem",{attrs:{label:"标签组状态："}},[a("Select",{staticClass:"width-160",attrs:{value:t.search.status},on:{"on-change":t.setStatus}},t._l(t.optionData.status,(function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.name)+" ")])})),1)],1),a("div",{staticClass:"ivu-form-item-btn"},[a("Button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("搜索")]),a("Button",{attrs:{type:"text"},on:{click:t.handleReset}},[t._v("重置")])],1)],1)],1),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.table.loading,expression:"table.loading"}],staticClass:"table-list"},[a("table-list",{ref:"table_list",attrs:{data:t.getTableData,total:t.table.total},on:{"on-refresh":t.getList,"on-page-change":t.changePage}})],1),t._t("default")],2)},s=[]},da5c:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("d81d"),a("d3b7");var n={name:"TableList",props:{data:{type:Array,default:function(){return[]}},total:{type:Number,default:0}},data:function(){var t=this;this.$createElement;return{columns:[{type:"selection",width:40,align:"center"},{title:"标签组名称",key:"name"},{title:"状态",key:"status",width:100,render:function(t,e){return"0"===e.row.status?t("kdx-status-text",["禁用"]):"1"===e.row.status?t("kdx-status-text",{attrs:{type:"success"}},["启用"]):void 0}},{title:"操作",key:"action",width:200,render:function(e,a){var n;return n="0"===a.row.status?e("Button",{attrs:{type:"text",disabled:t.noManagePerm},on:{click:function(){t.handleLabelGroupStatus({type:"single",row:a.row},"1")}}},["启用"]):e("Button",{attrs:{type:"text",disabled:t.noManagePerm},on:{click:function(){t.handleLabelGroupStatus({type:"single",row:a.row},"0")}}},["禁用"]),e("div",{class:"action"},[n,e("Button",{attrs:{type:"text",disabled:t.noManagePerm},on:{click:function(){t.$router.push({path:"/goods/label/add",query:{id:a.row.id}})}}},["编辑"]),e("Button",{attrs:{type:"text",disabled:t.noManagePerm||"1"==a.row.is_default},on:{click:function(){t.handleDelete({type:"single",row:a.row})}}},["删除"])])}}],selectRows:[],isSelectAll:!1}},computed:{getTableData:function(){var t=this;return this.data.map((function(e){return e._disabled=t.noManagePerm,e}))},noManagePerm:function(){return!this.$getPermMap("goods.label_group.manage")},isDisabled:function(){return 0===this.selectRows.length},selectHasDefault:function(){return this.selectRows.some((function(t){return"1"==t.is_default}))}},methods:{selectChange:function(t){this.selectRows=t,this.isSelectAll=this.selectRows.length===this.data.length},checkboxChange:function(t){this.$refs["table"].selectAll(t)},handleLabelGroupStatus:function(t,e){var a=t.type,n=t.row;if("single"===a)this.editLabelGroupStatus([n.id],e);else if("multiple"===a){var s=this.selectRows.map((function(t){return t.id}));this.editLabelGroupStatus(s,e)}},editLabelGroupStatus:function(t,e){var a=this;this.$api.goodsApi.editLabelGroupStatus({id:t,status:e}).then((function(t){0===t.error&&(a.$Message.success("标签状态修改成功"),a.$emit("on-refresh"))}))},handleDelete:function(t){var e=this,a=t.type,n=t.row;this.$Modal.confirm({title:"提示",content:"是否确认删除？",onOk:function(){if("single"===a)e.deleteLabel([n.id]);else if("multiple"===a){var t=e.selectRows.map((function(t){return t.id}));e.deleteLabel(t)}}})},deleteLabel:function(t){var e=this;this.$api.goodsApi.deleteLabelGroup({id:t}).then((function(t){0===t.error&&(e.$Message.success("标签删除成功"),e.$emit("on-refresh"))})).catch()},reset:function(t){this.$refs["page"].reset(t)},changePage:function(t){this.$emit("on-page-change",t)},initFooterData:function(){this.isSelectAll=!1,this.selectRows=[]}}};e.default=n}}]);