(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[161],{"05f9":function(t,e,n){"use strict";n.r(e);var a=n("14ac"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"14ac":function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){var t=this;this.$createElement;return{columns:[{title:"规则名称",key:"name"},{title:"关键词",key:"keyword"},{title:"回复数量",key:"count"},{title:"操作",width:100,render:function(e,n){var a=n.row;return e("div",[e("Button",{attrs:{disabled:t.noManagePerm,type:"text"},on:{click:function(){return t.handleEdit(a.id)}}},["编辑"]),e("Button",{attrs:{disabled:t.noManagePerm,type:"text"},class:"btn-next",on:{click:function(){return t.handleSure(a.id)}}},["删除"])])}}],data:[],total:0,page:{pagesize:10,page:1}}},created:function(){this.getList()},computed:{noManagePerm:function(){return!this.$getPermMap("channel.wechat.manage")}},methods:{getList:function(){var t=this;this.$api.homeApi.getKeywordList(this.page).then((function(e){if(0===e.error){var n=e.data,a=n.list,i=n.total;t.data=a,t.total=i}}))},handleEdit:function(t){this.$router.push({path:"/home/wechat/reply/keyword/set",query:{id:t}})},handleSure:function(t){var e=this;this.$Modal.confirm({title:"提示",content:"确认删除该关键词吗?",onOk:function(){e.handleDelete(t)}})},handleDelete:function(t){var e=this;this.$api.homeApi.deleteKeyWord({id:t}).then((function(t){0===t.error&&(e.$Message.success("操作成功"),e.getList())}))},addKeyword:function(){this.$router.push({path:"/home/wechat/reply/keyword/set"})},handlePageChange:function(t){var e=t.pageNumber,n=t.pageSize;this.page={page:e,pagesize:n},this.getList()}}};e.default=n},"188d":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"header"},[n("Button",{attrs:{type:"primary",disabled:t.noManagePerm},on:{click:t.addKeyword}},[t._v("+创建关键词回复")])],1),n("div",{staticClass:"table"},[n("Table",{attrs:{columns:t.columns,data:t.data}}),t.total>10?n("div",{staticClass:"footer-page"},[n("kdx-page-component",{ref:"page",attrs:{total:t.total},on:{"on-change":t.handlePageChange}})],1):t._e()],1),t._t("default")],2)},i=[]},"236e":function(t,e,n){},"8a48":function(t,e,n){"use strict";n.r(e);var a=n("188d"),i=n("05f9");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("b8bdf");var o=n("2877"),d=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"9687cafe",null);e["default"]=d.exports},b8bdf:function(t,e,n){"use strict";n("236e")}}]);