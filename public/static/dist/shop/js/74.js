(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[74],{"0da9c":function(t,e,a){"use strict";a.r(e);var s=a("f8b2"),n=a("2bcd");for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);a("d11a");var r=a("2877"),l=Object(r["a"])(n["default"],s["a"],s["b"],!1,null,"c1b0469c",null);e["default"]=l.exports},10057:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("kdx-header-bar",[a("Form",{ref:"form",attrs:{model:t.model,"label-width":100,inline:""},nativeOn:{submit:function(t){t.preventDefault()}}},[a("FormItem",{attrs:{label:"活动名称："}},[a("i-input",{staticClass:"width-340",attrs:{type:"text",placeholder:"活动名称"},on:{"on-enter":t.handleSearch},model:{value:t.model.keyword,callback:function(e){t.$set(t.model,"keyword",e)},expression:"model.keyword"}})],1),a("FormItem",{attrs:{label:"拼团编号："}},[a("i-input",{staticClass:"width-340",attrs:{type:"text",placeholder:"拼团编号"},on:{"on-enter":t.handleSearch},model:{value:t.model.team_no,callback:function(e){t.$set(t.model,"team_no",e)},expression:"model.team_no"}})],1),a("FormItem",{attrs:{label:"拼团状态："}},[a("Select",{staticClass:"width-160",model:{value:t.model.status,callback:function(e){t.$set(t.model,"status",e)},expression:"model.status"}},t._l(t.statusList,(function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),1)],1),a("FormItem",{attrs:{label:"开团时间："}},[a("DatePicker",{staticClass:"width-340",attrs:{type:"datetimerange",format:"yyyy-MM-dd HH:mm",placeholder:"开团时间"},on:{"on-change":t.changeDate},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),a("div",{staticClass:"ivu-form-item-btn"},[a("Button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("搜索")]),a("Button",{attrs:{type:"text"},on:{click:t.handleReset}},[t._v("重置")])],1)],1)],1)},n=[]},1817:function(t,e,a){"use strict";a.r(e);var s=a("c235"),n=a.n(s);for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(i);e["default"]=n.a},2427:function(t,e,a){var s=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(a("5530")),i={data:function(){return{model:{keyword:"",team_no:"",status:"all",created_at:"",end_time:""},date:[],statusList:[{value:"all",label:"全部"},{value:"0",label:"待成团"},{value:"1",label:"已成团"},{value:"2",label:"未成团"}]}},methods:{addActivity:function(){this.$router.push({path:"/groups/activity/index",query:{type:"add"}})},changeDate:function(t){this.model.created_at=t[0],this.model.end_time=t[1]},handleSearch:function(){var t=(0,n.default)((0,n.default)({},this.model),{},{status:"all"===this.model.status?"":this.model.status});this.$emit("on-search",t)},handleReset:function(){this.reset(),this.handleSearch()},reset:function(){this.model={keyword:"",status:"all",created_at:"",end_time:""},this.date=[]}}};e.default=i},"2bcd":function(t,e,a){"use strict";a.r(e);var s=a("bc94"),n=a.n(s);for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(i);e["default"]=n.a},"326c":function(t,e,a){var s=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("ac1f"),a("841c"),a("d3b7");var n=s(a("363b")),i=s(a("0da9c")),r={name:"index",components:{SearchHeader:n.default,ListItem:i.default},data:function(){return{search:{},page:{pageSize:12,pageNumber:1},total:20,list:[],loading:!1}},created:function(){this.getList()},mounted:function(){this.$refs["page"].reset(this.page)},methods:{handleSearch:function(t){this.search=t,this.initPage()},getList:function(){var t=this;this.loading=!0;var e=Object.assign({pagesize:this.page.pageSize,page:this.page.pageNumber},this.search);this.$api.groupsApi.getGroupsOrderList(e).then((function(e){0===e.error&&(t.list=e.list,t.total=e.total)})).finally((function(){t.loading=!1}))},changePage:function(t){this.page=t,this.getList()},initPage:function(){var t;this.page={pageSize:12,pageNumber:1},null===(t=this.$refs["page"])||void 0===t||t.reset(this.page),this.getList()},clickItem:function(t){this.$router.push({path:"/groups/order/detail",query:{id:t}})}}};e.default=r},"363b":function(t,e,a){"use strict";a.r(e);var s=a("10057"),n=a("f07a");for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);var r=a("2877"),l=Object(r["a"])(n["default"],s["a"],s["b"],!1,null,"dbd63ec4",null);e["default"]=l.exports},"3b1a":function(t,e,a){"use strict";a.r(e);var s=a("3b4f"),n=a("83d5");for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);a("5f13");var r=a("2877"),l=Object(r["a"])(n["default"],s["a"],s["b"],!1,null,"0a05842b",null);e["default"]=l.exports},"3b4f":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spell-group-order-list"},[a("search-header",{on:{"on-search":t.handleSearch}}),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"table-list"},[t.list.length>0?a("div",{staticClass:"table-list-content"},t._l(t.list,(function(e){return a("list-item",{key:e.id,attrs:{data:e},on:{"on-click":t.clickItem}})})),1):t._e(),0===t.list.length?a("div",{staticClass:"table-no-list"},[t._v(" 暂无数据 ")]):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:t.list.length>0,expression:"list.length > 0"}],staticClass:"footer-page"},[a("kdx-page-component",{ref:"page",attrs:{total:t.total,showSizer:!1},on:{"on-change":t.changePage}})],1)]),t._t("default")],2)},n=[]},"3d41":function(t,e,a){},"5f13":function(t,e,a){"use strict";a("e315")},7708:function(t,e,a){},"83d5":function(t,e,a){"use strict";a.r(e);var s=a("326c"),n=a.n(s);for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(i);e["default"]=n.a},"99d3":function(t,e,a){"use strict";a.r(e);var s=a("f319"),n=a("1817");for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);a("d843");var r=a("2877"),l=Object(r["a"])(n["default"],s["a"],s["b"],!1,null,"7a18eecc",null);e["default"]=l.exports},bc94:function(t,e,a){var s=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(a("99d3")),i={name:"ListItem",components:{ProgressBar:n.default},props:{data:{type:Object,default:function(){}}},methods:{handleClick:function(){this.$emit("on-click",this.data.id)}}};e.default=i},c235:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var s={name:"ProgressBar",props:{current:{type:[Number,String],default:0},total:{type:[Number,String],default:1}},computed:{progress:function(){return parseInt(this.current/this.total*100)}}};e.default=s},d11a:function(t,e,a){"use strict";a("7708")},d843:function(t,e,a){"use strict";a("3d41")},e315:function(t,e,a){},f07a:function(t,e,a){"use strict";a.r(e);var s=a("2427"),n=a.n(s);for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(i);e["default"]=n.a},f319:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"progress-bar"},[a("div",{staticClass:"progress-bg"},[a("div",{staticClass:"progress",class:{success:100===t.progress},style:{width:t.progress+"%"}})]),a("div",{staticClass:"num",class:{success:100===t.progress}},[a("span",{staticClass:"current"},[t._v(t._s(t.current))]),t._v(" / "),a("span",{staticClass:"total"},[t._v(t._s(t.total))])])])},n=[]},f8b2:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-list-item-box"},[a("div",{staticClass:"order-list-item",on:{click:t.handleClick}},[a("div",{staticClass:"header"},[a("div",{staticClass:"group-no"},[a("span",[t._v("拼团编号: "+t._s(t.data.team_no))]),a("kdx-copy-text",{attrs:{text:t.data.team_no}},[a("Button",{attrs:{type:"text"}},[t._v("复制")])],1)],1),2==t.data.success?a("div",{staticClass:"status"},[t._v(" 未成团 ")]):1==t.data.success?a("div",{staticClass:"status success-color"},[t._v(" 已成团 ")]):0==t.data.success?a("div",{staticClass:"status brand-color"},[t._v(" 待成团 ")]):t._e()]),a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[t._v(" "+t._s(t.data.title)+" ")]),a("div",{staticClass:"info"},[a("div",{staticClass:"info-item"},[a("div",{staticClass:"info-label"},[t._v(" 拼团进度： ")]),a("div",{staticClass:"info-content"},[a("progress-bar",{attrs:{current:t.data.count,total:t.data.success_num}})],1)]),a("div",{staticClass:"info-item"},[a("div",{staticClass:"info-label"},[t._v(" 拼团类型： ")]),0==t.data.is_ladder?a("div",{staticClass:"info-type-brand flex"},[a("i",{staticClass:"iconfont icon-yingyong-pintuan-putong2"}),t._v(" 普通拼团 ")]):1==t.data.is_ladder?a("div",{staticClass:"info-type-warning flex"},[a("i",{staticClass:"iconfont icon-yingyong-pintuan-jieti2"}),t._v(" 阶梯拼团 ")]):t._e()]),a("div",{staticClass:"info-item"},[a("div",{staticClass:"info-label"},[t._v(" 开团时间： ")]),a("div",{staticClass:"info-content info-time"},[t._v(" "+t._s(t.data.create_time)+" ")])])]),a("div",{staticClass:"user-head"},[a("img",{attrs:{src:t.data.avatar,alt:""},on:{error:function(e){return t.replaceImage(e,"avatar")}}}),a("div",{staticClass:"user-mode"},[t._v(" 团长 ")])])])])])},n=[]}}]);