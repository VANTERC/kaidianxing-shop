(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[52],{"070d":function(t,e,a){var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("5530")),n={props:["keywords"],data:function(){return{searchData:{keywords:"",type:""},statusList:[{id:"all",name:"全部"},{id:"",name:"业务插件"},{id:"",name:"营销玩法"},{id:"",name:"辅助工具"}]}},watch:{keywords:function(t){this.searchData.keywords=t}},methods:{handleSearch:function(){var t=(0,s.default)({},this.searchData);t.type="all"===t.type?"":t.type,this.$emit("handleSearch",t)},handleReset:function(){this.$emit("handleReset")}}};e.default=n},"0cf8":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-center"},[a("div",{staticClass:"app-center-box"},[a("application-header",{attrs:{keywords:t.keywords},on:{handleSearch:t.handleSearch,handleReset:t.handleReset}}),t.list&&t.list.length>0?a("app-list",{attrs:{list:t.list},on:{"on-route":t.navTo}}):t.loading||0!==t.list.length?t._e():a("div",{staticClass:"nodata"},[a("no-data",{on:{handleReset:t.handleReset}})],1)],1)])},s=[]},2051:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("caad");var i={name:"AppList",props:{list:{type:Array}},methods:{navTo:function(t){this.$emit("on-route",t)},navToMerchant:function(t){var e=["virtualAccount","seckill"];e.includes(t.identity)?this.$emit("on-route",t):this.$Message.error("平台端不支持使用")}}};e.default=i},"220e":function(t,e,a){},3726:function(t,e,a){"use strict";a.r(e);var i=a("070d"),s=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},"3ec3":function(t,e,a){"use strict";a.r(e);var i=a("ff43"),s=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},"416bf":function(t,e,a){var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("d3b7"),a("159b");var s=i(a("69d4")),n=i(a("f5e64")),r=i(a("7733")),o=i(a("e6ee")),c={components:{ApplicationHeader:s.default,NoData:n.default,AppList:r.default},data:function(){return{keywords:"",list:[],loading:!1,permMapper:null,buy:{data:{}}}},created:function(){this.permMapper=o.default,this.getAppsList()},computed:{permList:function(){var t;return(null===(t=this.$store.state.config.user)||void 0===t?void 0:t.perms)||[]},allRoutes:function(){return this.$store.state.config.routes}},methods:{navTo:function(t){t.route&&this.permMapper.getPermsMap(this.permList).hasPerm(t.route)?t.route?this.$router.push({path:t.route}):this.$Message.info("该功能暂未开启，敬请期待"):this.$Message.info("暂无权限")},getAppsList:function(){var t=this;this.loading=!0,this.$api.applicationApi["getAppsList"]({keywords:this.keywords}).then((function(e){t.loading=!1,0==e.error?(e.category_list&&e.category_list.length>0&&e.category_list.forEach((function(t){t.list&&t.list.length>0?t.list.forEach((function(t){t["statusFlag"]="1"===t.status})):t.list=[]})),t.list=e.category_list||[]):t.$Message.error(e.message)}))},handleSearch:function(t){this.keywords=t.keywords,this.list=[],this.getAppsList()},handleReset:function(){this.keywords="",this.list=[],this.getAppsList()}}};e.default=c},"69d4":function(t,e,a){"use strict";a.r(e);var i=a("f943"),s=a("3726");for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("75f0");var r=a("2877"),o=Object(r["a"])(s["default"],i["a"],i["b"],!1,null,"126ca9fa",null);e["default"]=o.exports},7096:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comp"},[t._m(0),a("div",{staticClass:"tips"},[t._v("暂无数据，请重新搜索或 "),a("span",{on:{click:t.handleReset}},[t._v("查看全部")])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"icon"},[a("span",{staticClass:"iconfont icon-fenxiao-leijiyongjin-"})])}]},"73b3":function(t,e,a){"use strict";a.r(e);var i=a("0cf8"),s=a("c1fa");for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("8f7a");var r=a("2877"),o=Object(r["a"])(s["default"],i["a"],i["b"],!1,null,"51bb8bde",null);e["default"]=o.exports},"75f0":function(t,e,a){"use strict";a("f2ce")},7733:function(t,e,a){"use strict";a.r(e);var i=a("da08"),s=a("e5d1");for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("bb46");var r=a("2877"),o=Object(r["a"])(s["default"],i["a"],i["b"],!1,null,"224d9397",null);e["default"]=o.exports},"8f7a":function(t,e,a){"use strict";a("220e")},bb46:function(t,e,a){"use strict";a("fcdb")},bbfd:function(t,e,a){},c1fa:function(t,e,a){"use strict";a.r(e);var i=a("416bf"),s=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},d00a:function(t,e,a){"use strict";a("bbfd")},da08:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-list"},[a("ul",[t._l(t.list,(function(e,i){return a("li",{key:i,staticClass:"wrap",class:{marginBto:e.list.length>0}},[e.list.length?["10"==e.category?a("div",{staticClass:"categoryTitle"},[a("h4",{staticClass:"title"},[t._v("业务插件")]),a("div",{staticClass:"en"},[t._v("高效管理商城业务运营")])]):"11"==e.category?a("div",{staticClass:"categoryTitle"},[a("h4",{staticClass:"title"},[t._v("分销管理")]),a("div",{staticClass:"en"},[t._v("系统化多维度助力分销拓客")])]):"12"==e.category?a("div",{staticClass:"categoryTitle"},[a("h4",{staticClass:"title"},[t._v("商城配套")]),a("div",{staticClass:"en"},[t._v("丰富配套满足商城基础运营")])]):"20"==e.category?a("div",{staticClass:"categoryTitle"},[a("h4",{staticClass:"title"},[t._v("营销插件")]),a("div",{staticClass:"en"},[t._v("助力实现低成本营销转化")])]):"30"==e.category?a("div",{staticClass:"categoryTitle"},[a("h4",{staticClass:"title"},[t._v("辅助工具")]),a("div",{staticClass:"en"},[t._v("深度提升商城运营效率")])]):t._e()]:t._e(),e.list.length?a("ul",t._l(e.list,(function(e,i){return a("li",{key:i,staticClass:"mantle",on:{click:function(a){return t.navTo(e)}}},[a("div",{staticClass:"box flex"},[a("div",{staticClass:"left"},[1==e.info_type?a("div",{staticClass:"img img-custom"},[a("img",{attrs:{src:t.$media(e.shop_show_logo,"manage")},on:{error:t.replaceImage}})]):a("div",{staticClass:"img"},[a("img",{attrs:{src:t.$media(e.logo,"manage")},on:{error:t.replaceImage}})])]),a("div",{staticClass:"right"},[a("div",{staticClass:"tit"},[1==e.info_type?a("div",{staticClass:"name line-hide"},[t._v(" "+t._s(e.shop_show_name)+" ")]):a("div",{staticClass:"name line-hide"},[t._v(t._s(e.name))])]),1==e.info_type?a("div",{staticClass:"desc line-hide"},[t._v(" "+t._s(e.shop_show_description)+" ")]):a("div",{staticClass:"desc line-hide"},[t._v(" "+t._s(e.description)+" ")])])])])})),0):t._e()],2)}))],2)])},s=[]},e5d1:function(t,e,a){"use strict";a.r(e);var i=a("2051"),s=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},f2ce:function(t,e,a){},f5e64:function(t,e,a){"use strict";a.r(e);var i=a("7096"),s=a("3ec3");for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("d00a");var r=a("2877"),o=Object(r["a"])(s["default"],i["a"],i["b"],!1,null,"82c3866a",null);e["default"]=o.exports},f943:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("kdx-header-bar",{attrs:{type:"little"},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"box"},[a("div",{staticClass:"box-tit"},[t._v("应用")]),a("div",{staticClass:"box-desc"},[t._v("应用营销插件 助力商城运营")])])]},proxy:!0}])},[a("Form",{ref:"form",attrs:{"label-width":100,inline:""},nativeOn:{submit:function(t){t.preventDefault()}}},[a("FormItem",{attrs:{label:"应用名称："}},[a("Input",{staticClass:"width-340",attrs:{type:"text",placeholder:"应用名称"},on:{"on-enter":t.handleSearch},model:{value:t.searchData.keywords,callback:function(e){t.$set(t.searchData,"keywords",e)},expression:"searchData.keywords"}})],1),a("div",{staticClass:"ivu-form-item-btn"},[a("Button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("搜索")]),a("Button",{attrs:{type:"text"},on:{click:t.handleReset}},[t._v("重置")])],1)],1)],1)],1)},s=[]},fcdb:function(t,e,a){},ff43:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:[],data:function(){return{}},methods:{handleReset:function(){this.$emit("handleReset")}}};e.default=a}}]);