(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[66],{"1e54":function(e,t,n){"use strict";n.r(t);var a=n("5ae2"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=i.a},2047:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0,n("ac1f"),n("841c");var a=function(){var e=this,t=e._self._c;return t("kdx-modal-frame",{attrs:{title:"菜单选择器",width:810},on:{"on-ok":e.handleOk,"on-cancel":e.handleCancel},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[t("div",{staticClass:"menu-selector"},[t("div",{ref:"scrollBox",staticClass:"menu-selector-content"},[t("div",{staticClass:"search"},[t("Input",{staticClass:"width-250",attrs:{placeholder:"请输入",search:"","enter-button":"搜索"},on:{"on-search":e.handleSearch},model:{value:e.search.keywords,callback:function(t){e.$set(e.search,"keywords",t)},expression:"search.keywords"}})],1),t("Table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",attrs:{columns:e.columns,data:e.data}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.total>10,expression:"total > 10"}],staticClass:"footer-page"},[t("kdx-page-component",{ref:"page",attrs:{total:e.total},on:{"on-change":e.handlePageChange}})],1)])])};t.render=a;var i=[];t.staticRenderFns=i},"224b":function(e,t,n){"use strict";n("3dc7")},"296a":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0,n("b0c0");var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"shop-app-page"},[t("ul",e._l(e.data,(function(n,a){return t("li",{key:a},["1"==n.type?t("div",{staticClass:"page-label shouye"},[t("kdx-svg-icon",{attrs:{type:"icon-shouye1"}}),t("span",[e._v("商城菜单")])],1):"2"==n.type?t("div",{staticClass:"page-label fenxiao"},[t("kdx-svg-icon",{attrs:{type:"icon-fenxiao"}}),t("span",[e._v("分销菜单")])],1):"3"==n.type?t("div",{staticClass:"page-label"},[t("span",[e._v("自定义菜单")])]):e._e(),t("div",{staticClass:"page-title"},[e._v(" "+e._s(n.name)+" ")]),t("div",{staticClass:"update-time"},[e._v(" 修改时间："+e._s("0000-00-00 00:00:00"===n.updated_at?n.created_at:n.updated_at)+" ")]),t("div",{staticClass:"menu-image"},[t("img",{attrs:{src:n.thumbnail,alt:""}})]),t("Button",{staticClass:"default-primary",on:{click:function(t){return e.replacePage(n)}}},[e._v(" 替换 ")])],1)})),0)])};t.render=a;var i=[];t.staticRenderFns=i},"2ef9":function(e,t,n){},"3dc7":function(e,t,n){},4298:function(e,t,n){"use strict";var a=n("caf9");n.o(a,"render")&&n.d(t,"render",(function(){return a["render"]})),n.o(a,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]}))},"4edc":function(e,t,n){"use strict";n.r(t);var a=n("4298"),i=n("1e54");for(var s in i)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(s);n("9963");var r=n("2877"),c=Object(r["a"])(i["default"],a["render"],a["staticRenderFns"],!1,null,"414a2fe8",null);t["default"]=c.exports},"5ae2":function(e,t,n){var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("4de4"),n("d3b7");var i=a(n("961b")),s=a(n("6043")),r={name:"index",components:{MenuSettingList:i.default,MenuSelector:s.default},data:function(){return{menu:{data:[]},loading:!1,current:{},type:""}},methods:{replaceMenu:function(e){var t=this;this.type=e.type,this.current=e,this.$nextTick((function(){t.$refs["menu_selector"].setValue()}))},changeMenu:function(e){var t=this;this.$api.shopApi.replaceMenu({type:this.type,id:e.id}).then((function(e){0===e.error&&(t.$Message.success("菜单替换成功"),t.getList())}))},getList:function(){var e=this;this.loading=!0,this.$api.shopApi.getMenuList().then((function(t){e.loading=!1,0===t.error&&(e.menu.data=t.list.filter((function(e){return"1"==e.is_used})))}))}},mounted:function(){this.getList()}};t.default=r},6043:function(e,t,n){"use strict";n.r(t);var a=n("9c7f"),i=n("6a2a");for(var s in i)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(s);n("b9d6");var r=n("2877"),c=Object(r["a"])(i["default"],a["render"],a["staticRenderFns"],!1,null,"b42a055a",null);t["default"]=c.exports},"6a2a":function(e,t,n){"use strict";n.r(t);var a=n("ef45"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=i.a},"961b":function(e,t,n){"use strict";n.r(t);var a=n("f65b"),i=n("ed53");for(var s in i)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(s);n("224b");var r=n("2877"),c=Object(r["a"])(i["default"],a["render"],a["staticRenderFns"],!1,null,"60cb30f7",null);t["default"]=c.exports},9963:function(e,t,n){"use strict";n("e304")},"9c7f":function(e,t,n){"use strict";var a=n("2047");n.o(a,"render")&&n.d(t,"render",(function(){return a["render"]})),n.o(a,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]}))},b400:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"MenuSettingList",props:{type:{type:String,default:"edit"},data:{type:Array,default:function(){return[]}}},methods:{replacePage:function(e){this.$emit("on-replace",e)}}};t.default=n},b9d6:function(e,t,n){"use strict";n("2ef9")},caf9:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0;var n=function(){var e=this,t=e._self._c;return t("kdx-content-bar",{attrs:{loading:e.loading}},[t("div",{staticClass:"shop-menu-setting"},[t("kdx-form-title",[e._v("菜单设置")]),t("menu-setting-list",{attrs:{type:"replace",data:e.menu.data},on:{"on-replace":e.replaceMenu}}),t("menu-selector",{ref:"menu_selector",attrs:{current:e.current},on:{"on-change":e.changeMenu}})],1)])};t.render=n;var a=[];t.staticRenderFns=a},e304:function(e,t,n){},ed53:function(e,t,n){"use strict";n.r(t);var a=n("b400"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=i.a},ef45:function(e,t,n){var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("b85c")),s=a(n("2909"));n("a9e3"),n("ac1f"),n("841c"),n("4de4"),n("d3b7"),n("159b");var r={name:"MenuSelector",props:{current:{type:[String,Object],default:function(){}},currentList:{type:Array,default:function(){return[]}},multiple:{type:Boolean,default:!1},type:{type:[String,Number],default:""}},data:function(){var e=this;this.$createElement;return{value:!1,search:{keywords:""},columns:[{title:"菜单名称",key:"name",render:function(e,t){return e("div",{class:"menu-name"},[e("span",[t.row[t.column.key]])])}},{title:"修改时间",key:"updated_at",width:180,render:function(e,t){return"0000-00-00 00:00:00"==t.row.updated_at?e("div",[t.row.created_at]):e("div",[t.row.updated_at])}},{title:"预览",key:"thumb",width:200,render:function(t,n){return t("div",{class:"preview"},[t("img",{attrs:{src:e.$utils.media(n.row[n.column.key]),alt:""}})])}},{title:"操作",key:"action",width:80,render:function(t,n){return t("div",{class:"action"},[t("Button",{class:"default-primary",style:{display:n.row.checked?"none":"block"},on:{click:function(){e.setChecked(n.index,!0)}}},["选择"]),t("Button",{attrs:{type:"primary"},style:{display:n.row.checked?"block":"none"},on:{click:function(){e.setChecked(n.index,!1)}}},["已选"])])}}],data:[],total:0,page:{pageSize:10,pageNumber:1},selectRow:{},selectRows:[],loading:!1}},methods:{setValue:function(){this.value=!this.value,this.value&&(this.multiple?this.selectRows=(0,s.default)(this.currentList):(this.selectRow=this.current,this.search.keywords="",this.resetSearch(),this.resetPage(),this.getList()))},handleSearch:function(){this.resetPage(),this.getList()},resetSearch:function(){this.search={keywords:""}},resetPage:function(){var e;this.page={pageSize:10,pageNumber:1},null===(e=this.$refs["page"])||void 0===e||e.reset()},setChecked:function(e,t){var n=this;this.multiple?(this.$set(this.data[e],"checked",t),0===this.selectRows.length||t?this.selectRows.push(this.data[e]):this.selectRows=this.selectRows.filter((function(t){return t.id!==n.data[e].id}))):(this.data.forEach((function(e,t){n.$set(n.data[t],"checked",!1)})),this.$set(this.data[e],"checked",t),this.selectRow=t?this.data[e]:{})},defaultChecked:function(){var e=this;this.multiple?this.data.forEach((function(t,n){var a,s=(0,i.default)(e.selectRows);try{for(s.s();!(a=s.n()).done;){var r=a.value;if(r.id===t.id){e.$set(e.data[n],"checked",!0);break}}}catch(c){s.e(c)}finally{s.f()}})):this.data.forEach((function(t,n){e.selectRow&&t.id===e.selectRow.id?e.$set(e.data[n],"checked",!0):e.$set(e.data[n],"checked",!1)}))},handlePageChange:function(e){this.page=e;try{this.$refs.scrollBox.scrollTop=0}catch(t){console.log(t)}this.getList()},handleOk:function(){this.multiple?this.$emit("on-change",this.selectRows):this.$emit("on-change",this.selectRow),this.setValue()},handleCancel:function(){this.setValue()},getList:function(){var e=this;this.loading=!0;var t=Object.assign({pagesize:this.page.pageSize,page:this.page.pageNumber,type:this.type},this.search);this.$api.shopApi.getNewMenuList(t).then((function(t){e.loading=!1,0===t.error&&(e.data=t.list||[],e.total=t.total,e.defaultChecked())}))}}};t.default=r},f65b:function(e,t,n){"use strict";var a=n("296a");n.o(a,"render")&&n.d(t,"render",(function(){return a["render"]})),n.o(a,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]}))}}]);