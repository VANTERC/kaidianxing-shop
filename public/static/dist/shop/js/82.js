(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[82],{"0b6f":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3");var a={name:"TableList",components:{},props:{data:{type:Array,default:function(){return[]}},total:{type:[String,Number],default:0},groupList:{type:Array,default:function(){return[]}},levelList:{type:Array,default:function(){return[]}},page:{type:Object,required:!0}},data:function(){var e=this;this.$createElement;return{selectRows:[],isSelectAll:!1,columns:[{title:"排行",width:80,render:function(t,n){var a=e.page.pageSize*(e.page.pageNumber-1)+n.index+1;return t("div",{class:"consume-rank"},1===a?[t("kdx-svg-icon",{attrs:{type:"icon-paihang-jinpai"}})]:2===a?[t("kdx-svg-icon",{attrs:{type:"icon-paihang-yinpai"}})]:3===a?[t("kdx-svg-icon",{attrs:{type:"icon-paihang-tongpai"}})]:[a])}},{title:"会员",key:"vip",minWidth:160,maxWidth:350,render:function(t,n){var a;return"20"==n.row.source?a=t("span",{class:"iconfont icon-weixin icon"}):"21"==n.row.source?a=t("span",{class:"iconfont icon-weixinxiaochengxu icon"}):"30"==n.row.client_type?a=t("kdx-svg-icon",{class:"iconfont",attrs:{type:"icon-qudao-toutiao2"}}):"32"==n.row.client_type?a=t("kdx-svg-icon",{class:"iconfont",attrs:{type:"icon-qudao-toutiaojisuban"}}):"31"==n.row.client_type?a=t("kdx-svg-icon",{class:"iconfont",attrs:{type:"icon-douyin"}}):"10"==n.row.source?a=t("span",{class:"iconfont icon-H icon"}):"70"==n.row.source&&(a=t("span",{style:"color:#12aa9c;font-size:16px",attrs:{className:"iconfont icon-PCduan"}})),t("div",{class:"vip"},[t("div",{class:"vip-image"},[t("img",{attrs:{src:e.$media(n.row.avatar)},on:{error:function(t){e.replaceImage(t,"avatar")}}})]),t("div",{class:"vip-content"},[t("div",{class:"vip-name",on:{click:function(){e.routerPage("vip-detail",n.row.id)}}},[n.row.nickname||"-"]),t("div",{class:"vip-platform"},[a])])])}},{title:"手机号码",key:"mobile",minWidth:100,maxWidth:200,render:function(e,t){return t.row[t.column.key]?e("div",[t.row[t.column.key]]):e("div",["-"])}},{title:"会员等级",key:"level_name",minWidth:120,maxWidth:300,render:function(e,t){var n;return null!==(n=t.row)&&void 0!==n&&n.is_default_level?e("div",[t.row[t.column.key]]):e("div",{class:"vip-grade"},[e("div",{class:"icon"},[e("kdx-svg-icon",{attrs:{type:"icon-huiyuan-bg"}})]),e("div",{class:"text"},[t.row[t.column.key]])])}},{title:"消费金额",key:"order_money",minWidth:100,sortable:"custom",render:function(e,t){return e("div",{class:"consume"},["￥",t.row[t.column.key]])}},{title:"订单数量",key:"order_count",minWidth:100,maxWidth:200,sortable:"custom",render:function(e,t){var n=parseInt(t.row[t.column.key]);return e("div",n||0===n?n<=999?[n]:["'999+'"]:["-"])}},{title:"操作",key:"action",minWidth:100,maxWidth:150,render:function(t,n){return t("div",{class:"action"},[t("Button",{attrs:{type:"text"},on:{click:function(){e.routerPage("order",n.row.id)}}},["查看订单"])])}}]}},methods:{changePage:function(e){this.$emit("on-change-page",e)},changeSort:function(e){var t=e.key,n=e.order;"normal"===n?this.$emit("on-sort",{}):this.$emit("on-sort",{sort:t,by:n})},reset:function(){this.$refs["page"].reset()},routerPage:function(e,t){var n={},a="";"vip-detail"===e?(a="/member/detail",n={id:t}):(a="/order/list/all",n={search_field:"member_id",keywords:t}),this.$utils.openNewWindowPage(a,n)}}};t.default=a},"245d":function(e,t,n){"use strict";n.r(t);var a=n("0b6f"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"3b02":function(e,t,n){var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.Export=void 0;var i=a(n("5530")),r=n("d8cc"),o=a(n("4328")),l=n("384d"),s=a(n("1cc8")),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(console.log(e,"---------downloadPath"),e){var n="";if(-1===e.indexOf(r.config.base_url)){var a={baseURL:r.config.base_url,url:e};(0,s.default)(a),n=a.baseURL+a.url}else n=e;n=n.indexOf("?")>-1?n:n+"?",t=(0,i.default)((0,i.default)({},t),(0,l.getUserInfo)()),n+="&".concat(o.default.stringify(t)),window.open(n)}};t.Export=c},"4beb":function(e,t,n){"use strict";n("71d8")},"612d":function(e,t,n){"use strict";n("8b89")},6549:function(e,t,n){"use strict";n.r(t);var a=n("ca71"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"6c92":function(e,t,n){"use strict";n.r(t);var a=n("97d4"),i=n("6549");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var o=n("2877"),l=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"380894e6",null);t["default"]=l.exports},"71d8":function(e,t,n){},"8b89":function(e,t,n){},"97d4":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("kdx-header-bar",[n("Form",{ref:"form",attrs:{model:e.model,"label-width":100,inline:""},nativeOn:{submit:function(e){e.preventDefault()}}},[n("FormItem",{attrs:{label:"关键词："}},[n("Input",{staticClass:"width-340",attrs:{type:"text",placeholder:"昵称/姓名/手机号"},on:{"on-enter":e.handleSearch},model:{value:e.model.keyword,callback:function(t){e.$set(e.model,"keyword",t)},expression:"model.keyword"}})],1),n("FormItem",{attrs:{label:"会员等级："}},[n("Select",{staticClass:"width-160",attrs:{placeholder:"请选择"},model:{value:e.model.level_id,callback:function(t){e.$set(e.model,"level_id",t)},expression:"model.level_id"}},e._l(e.levels,(function(t){return n("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.level_name))])})),1)],1),n("div",{staticClass:"ivu-form-item-btn"},[n("Button",{attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("搜索")]),n("Button",{attrs:{type:"text"},on:{click:e.handleReset}},[e._v("重置")]),n("Button",{attrs:{type:"text"},on:{click:e.handleExport}},[e._v("导出")])],1)],1)],1)},i=[]},be7e:function(e,t,n){"use strict";n.r(t);var a=n("fde7"),i=n("245d");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("4beb");var o=n("2877"),l=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"75b8373c",null);t["default"]=l.exports},ca71:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"SearchHeader",components:{},props:{levels:{type:Array,default:function(){return[]}}},data:function(){return{model:{keyword:"",level_id:"all"}}},methods:{handleSearch:function(){var e=Object.assign({},this.model);e.level_id="all"===e.level_id?"":e.level_id,this.$emit("on-search",e)},setModel:function(e){this.model=Object.assign(this.model,e)},handleReset:function(){this.model={level_id:"",keyword:""},this.$emit("on-search",{}),this.resetModel()},handleExport:function(){this.$emit("on-export")},resetModel:function(){this.model={level_id:"all",keyword:""}}}};t.default=n},e28d:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vip-list"},[n("search-header",{attrs:{levels:e.level},on:{"on-search":e.handleSearch,"on-export":e.handleExport}}),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.table.loading,expression:"table.loading"}],staticClass:"table-list"},[n("table-list",{ref:"table_list",attrs:{data:e.table.data,total:e.table.total,page:e.page},on:{"on-change-page":e.changePage,"on-sort":e.handleSort}})],1),e._t("default")],2)},i=[]},eb76:function(e,t,n){"use strict";n.r(t);var a=n("e28d"),i=n("ee4b");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("612d");var o=n("2877"),l=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"f0c46e60",null);t["default"]=l.exports},ee4b:function(e,t,n){"use strict";n.r(t);var a=n("f596"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},f596:function(e,t,n){var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("2909"));n("ac1f"),n("841c"),n("4e82"),n("99af");var r=a(n("6c92")),o=a(n("be7e")),l=n("3b02"),s=n("8194"),c={name:"index",inject:["returnToTop"],components:{SearchHeader:r.default,TableList:o.default},data:function(){return{table:{data:[],loading:!1},page:{pageSize:10,pageNumber:1},search:{},sort:{},level:[]}},methods:{getList:function(){var e=this;this.returnToTop(),this.table.loading=!0;var t=Object.assign({pagesize:this.page.pageSize,page:this.page.pageNumber},this.search,this.sort);this.$api.memberApi.getConsumeList(t).then((function(t){e.table.loading=!1,0===t.error&&(e.table.data=t.list,e.table.total=t.total)}))},getLevelList:function(){var e=this;this.$api.memberApi.getLevelList({is_all:1}).then((function(t){0===t.error&&(e.level=[{id:"all",level_name:"全部"}].concat((0,i.default)(t.list))||[])}))},changePage:function(e){this.page=e,this.getList()},handleSort:function(e){this.sort=e,this.refreshTable()},refreshTable:function(){var e;this.page={pageSize:10,pageNumber:1},null===(e=this.$refs["table_list"])||void 0===e||e.reset(),this.getList()},handleSearch:function(e){this.search=e,this.refreshTable()},handleExport:function(){var e=Object.assign({export:"1"},this.search);(0,l.Export)(s.memberApi.getConsumeList.api,e)}},mounted:function(){this.getList(),this.getLevelList()}};t.default=c},fde7:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"good-list-table-list"},[n("Table",{ref:"table",attrs:{columns:e.columns,data:e.data},on:{"on-sort-change":e.changeSort}}),n("div",{staticClass:"footer-page"},[n("kdx-page-component",{ref:"page",attrs:{total:e.total},on:{"on-change":e.changePage}})],1)],1)},i=[]}}]);