(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[56],{1817:function(t,s,a){"use strict";a.r(s);var e=a("c235"),i=a.n(e);for(var n in e)["default"].indexOf(n)<0&&function(t){a.d(s,t,(function(){return e[t]}))}(n);s["default"]=i.a},"22c7":function(t,s,a){"use strict";a("328b")},"328b":function(t,s,a){},"3be9":function(t,s,a){"use strict";a.r(s);var e=a("c4d8"),i=a.n(e);for(var n in e)["default"].indexOf(n)<0&&function(t){a.d(s,t,(function(){return e[t]}))}(n);s["default"]=i.a},5138:function(t,s,a){"use strict";a.d(s,"a",(function(){return e})),a.d(s,"b",(function(){return i}));var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"order-detail"},[a("div",{staticClass:"steps"},[a("Steps",{attrs:{current:t.current}},[a("Step",{attrs:{title:"已开团",content:t.info.create_time}}),a("Step",{attrs:{title:t.lastStep,status:t.status,content:t.lastTime}})],1)],1),a("div",{staticClass:"box"},[a("order-status",{attrs:{data:t.info,"user-list":t.list},on:{"on-change":t.confirmGroups}}),a("order-list",{attrs:{data:t.table.list,info:t.info},on:{"on-order":t.routeOrder}})],1)])},i=[]},5482:function(t,s,a){"use strict";a.d(s,"a",(function(){return e})),a.d(s,"b",(function(){return i}));var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"order-list"},[a("div",{staticClass:"form-title"},[t._v(" 拼团订单 ")]),a("div",{staticClass:"table-list"},[a("Table",{ref:"table",attrs:{columns:t.columns,data:t.data},scopedSlots:t._u([{key:"title",fn:function(s){var e=s.row;return[a("div",{staticClass:"title-box line-hide"},[a("div",{staticClass:"icon"},["10"==e.create_from?a("span",{staticClass:"iconfont icon-H icon"}):"20"==e.create_from?a("span",{staticClass:"iconfont icon-weixin icon"}):"21"==e.create_from?a("span",{staticClass:"iconfont icon-weixinxiaochengxu icon"}):"30"==e.create_from?a("svg-icon",{staticClass:"iconfont icon",attrs:{type:"icon-qudao-toutiao2"}}):"32"==e.create_from?a("svg-icon",{staticClass:"iconfont icon",attrs:{type:"icon-qudao-toutiaojisuban"}}):"31"==e.create_from?a("svg-icon",{staticClass:"iconfont icon",attrs:{type:"icon-douyin"}}):"40"==e.create_from?a("svg-icon",{staticClass:"iconfont icon",attrs:{type:"icon-qudao-App"}}):t._e()],1),a("div",{staticClass:"order-no line-hide",on:{click:function(s){return t.handleOrderNo(e.order_no)}}},[t._v(" "+t._s(e.order_no)+" ")])])]}},{key:"goods",fn:function(s){var e=s.row;return[a("div",{staticClass:"goods"},[a("div",{staticClass:"thumb"},[a("img",{attrs:{src:t.$media(e.thumb),alt:""},on:{error:t.replaceImage}})]),a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[t._v(" "+t._s(e.title)+" ")]),e.option_title?a("div",{staticClass:"option"},[t._v(" "+t._s(e.option_title)+" ")]):t._e()])])]}},{key:"price_num",fn:function(s){var e=s.row;return[a("div",{staticClass:"price-num"},[a("div",{staticClass:"price"},[t._v(" ￥"+t._s(e.price_unit)+" ")]),a("div",{staticClass:"num"},[t._v(" X "+t._s(e.total)+" ")])])]}},{key:"create_time",fn:function(s){var e=s.row;return[a("div",{staticClass:"create-time"},[t._v(" "+t._s(e.create_time)+" ")])]}},{key:"user",fn:function(s){var e=s.row;return[a("div",{staticClass:"user"},[a("div",{staticClass:"user-name"},[t._v(" "+t._s(e.nickname)+" ")]),a("div",{staticClass:"user-tele"},[t._v(" "+t._s(e.mobile)+" ")])])]}},{key:"payment",fn:function(s){var e=s.row;return[a("div",{staticClass:"payment"},[a("div",{staticClass:"price"},[t._v(" ￥"+t._s(e.price)+" ")]),a("div",{staticClass:"freight"},[t._v(" (含运费：¥"+t._s(e.dispatch_price)+") ")])])]}},{key:"payment_type",fn:function(s){var e=s.row;return[30==e.pay_type?a("div",{staticClass:"payment-type alipay"},[a("span",{staticClass:"iconfont icon-alipay"}),a("span",[t._v("支付宝")])]):t._e(),20==e.pay_type?a("div",{staticClass:"payment-type weichat"},[a("span",{staticClass:"iconfont icon-wechatpay"}),a("span",[t._v("微信支付")])]):t._e(),2==e.pay_type?a("div",{staticClass:"payment-type balance"},[a("span",{staticClass:"iconfont icon-money-pay"}),a("span",[t._v("余额支付")])]):t._e()]}},{key:"order_status",fn:function(s){var e=s.row;return[10==e.status&&0==t.info.success?a("div",{staticClass:"order-status wait brand-color"},[t._v(" 待成团 ")]):10==e.status&&1==t.info.success?a("div",{staticClass:"order-status success warning-color"},[t._v(" 待发货 ")]):-1==e.status?a("div",{staticClass:"order-status success disabled-color"},[t._v(" 已关闭 ")]):30==e.status?a("div",{staticClass:"order-status success success-color"},[t._v(" 已完成 ")]):20==e.status&&20===+e.dispatch_type?a("div",{staticClass:"order-status success warning-color"},[t._v(" 待核销 ")]):20==e.status&&20!==+e.dispatch_type?a("div",{staticClass:"order-status success brand-color"},[t._v(" 待收货 ")]):t._e()]}}])})],1)])},i=[]},"6ddc":function(t,s,a){"use strict";a("9780")},"78c4":function(t,s,a){"use strict";a.r(s);var e=a("fdf2"),i=a("8267");for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(s,t,(function(){return i[t]}))}(n);a("c186");var r=a("2877"),o=Object(r["a"])(i["default"],e["a"],e["b"],!1,null,"4c7187dc",null);s["default"]=o.exports},8267:function(t,s,a){"use strict";a.r(s);var e=a("a1d5"),i=a.n(e);for(var n in e)["default"].indexOf(n)<0&&function(t){a.d(s,t,(function(){return e[t]}))}(n);s["default"]=i.a},8889:function(t,s,a){"use strict";a.r(s);var e=a("fe3b"),i=a.n(e);for(var n in e)["default"].indexOf(n)<0&&function(t){a.d(s,t,(function(){return e[t]}))}(n);s["default"]=i.a},"8a35":function(t,s,a){"use strict";a.r(s);var e=a("5138"),i=a("8889");for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(s,t,(function(){return i[t]}))}(n);a("6ddc");var r=a("2877"),o=Object(r["a"])(i["default"],e["a"],e["b"],!1,null,"4863c478",null);s["default"]=o.exports},"8b90":function(t,s,a){"use strict";a.d(s,"a",(function(){return e})),a.d(s,"b",(function(){return i}));var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"order-status-box"},[a("ul",[a("li",{staticClass:"order-status"},[a("div",{staticClass:"title"},[t._v(" 当前拼团状态 ")]),a("div",{staticClass:"status"},[a("div",{staticClass:"icon"},[1==t.data.success?a("span",{staticClass:"iconfont icon-zujian-yingxiaoxinxi-duihao success-color"}):a("span",{staticClass:"iconfont icon-pintuan2-1"})]),0==t.data.success?a("div",{staticClass:"name"},[t._v(" 待成团 ")]):t._e(),1==t.data.success?a("div",{staticClass:"name success-color"},[t._v(" 已成团 ")]):t._e(),2==t.data.success?a("div",{staticClass:"name danger-color"},[t._v(" 未成团 ")]):t._e()]),0==t.data.success&&t.data.countTime?a("div",{staticClass:"surplus-time"},[t._v(" 剩余拼团时间："),a("span",{staticClass:"danger-color"},[t._v(t._s(t.data.countTime))])]):t._e(),0==t.data.success&&t.pastGroups?a("div",{staticClass:"action-btn"},[a("Button",{staticClass:"status-btn",attrs:{type:"primary"},on:{click:t.confirmGroups}},[t._v(" 确认成团 ")])],1):t._e(),2==t.data.success?a("div",{staticClass:"explain-text"},[t._v(" 团长有效期内未成团，已付款订单自动退款 ")]):t._e(),1==t.data.success?a("div",{staticClass:"explain-text"},[t._v(" 拼团成功，请及时发货 ")]):t._e()]),a("li",{staticClass:"order-info"},[a("div",{staticClass:"title"},[t._v(" 拼团信息 ")]),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[t._v(" 拼团编号： ")]),a("div",{staticClass:"content team-no"},[a("span",[t._v(t._s(t.data.team_no))]),a("kdx-copy-text",{attrs:{text:t.data.team_no}},[a("Button",{attrs:{type:"text"}},[t._v("复制")])],1)],1)]),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[t._v(" 开团时间： ")]),a("div",{staticClass:"content"},[t._v(" "+t._s(t.data.create_time)+" ")])]),a("div",{staticClass:"item group-type"},[a("div",{staticClass:"label"},[t._v(" 拼团类型： ")]),1==t.data.is_ladder?a("div",{staticClass:"content flex"},[a("span",{staticClass:"iconfont icon-yingyong-pintuan-jieti2 warning-color"}),a("span",{staticClass:"text warning-color"},[t._v("阶梯拼团 "),1==t.data.is_fictitious?a("span",[t._v("(虚拟成团)")]):t._e()])]):0==t.data.is_ladder?a("div",{staticClass:"content flex"},[a("span",{staticClass:"iconfont icon-yingyong-pintuan-putong2 brand-color"}),a("span",{staticClass:"text brand-color"},[t._v("普通拼团 "),1==t.data.is_fictitious?a("span",[t._v("(虚拟成团)")]):t._e()])]):t._e()])]),a("li",{staticClass:"order-progress"},[a("div",{staticClass:"title"},[t._v(" 拼团进度 ")]),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[t._v(" 当前进度： ")]),a("div",{staticClass:"content"},[a("progress-bar",{attrs:{current:t.data.count,total:t.data.success_num}})],1)]),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[t._v(" 拼团成员： ")]),a("div",{staticClass:"content user"},[t._l(t.userList,(function(s,e){return[e<5?a("kdx-hint-tooltip",{key:s.id,scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{key:s.id,staticClass:"header-list"},[a("img",{attrs:{src:t.$media(s.avatar),alt:""},on:{error:function(s){return t.replaceImage(s,"avatar")}}})])]},proxy:!0}],null,!0)},[a("div",{staticClass:"text"},[t._v(" "+t._s(s.order_no?s.nickname:"虚拟")+" ")])]):t._e()]})),t.userList.length>5?a("div",{staticClass:"all"},[a("span",[t._v("...")]),a("Button",{attrs:{type:"text"},on:{click:t.readAll}},[t._v("查看全部")])],1):t._e()],2)])])]),a("group-user",{ref:"group_user",attrs:{data:t.userList}})],1)},i=[]},"8fb0":function(t,s,a){"use strict";a.d(s,"a",(function(){return e})),a.d(s,"b",(function(){return i}));var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"progress-bar"},[a("div",{staticClass:"progress-bg"},[a("div",{staticClass:"progress",class:{success:100===t.progress},style:{width:t.progress+"%"}})]),a("div",{staticClass:"num",class:{success:100===t.progress}},[a("span",{staticClass:"current"},[t._v(t._s(t.current))]),t._v(" / "),a("span",{staticClass:"total"},[t._v(t._s(t.total))])])])},i=[]},9099:function(t,s,a){var e=a("4ea4").default;Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i=e(a("5530")),n=e(a("99d3")),r=e(a("78c4")),o=a("2f62"),c={name:"OrderStatus",components:{ProgressBar:n.default,GroupUser:r.default},props:{data:{type:Object,default:function(){}},userList:{type:Array,default:function(){return[]}}},computed:(0,i.default)((0,i.default)({},(0,o.mapGetters)("config",["getAppPermMap"])),{},{pastGroups:function(){var t,s,a,e,i=null===(t=this.$store)||void 0===t||null===(s=t.state)||void 0===s||null===(a=s.config)||void 0===a||null===(e=a.apps)||void 0===e?void 0:e.groups;return this.getAppPermMap("groups")&&!(1!=(null===i||void 0===i?void 0:i.is_forever)&&1==(null===i||void 0===i?void 0:i.about_expire)&&1!=(null===i||void 0===i?void 0:i.is_free)&&0==(null===i||void 0===i?void 0:i.shop_app_status))}}),methods:{confirmGroups:function(){this.$emit("on-change")},readAll:function(){this.$refs["group_user"].setValue()}}};s.default=c},9780:function(t,s,a){},"99d3":function(t,s,a){"use strict";a.r(s);var e=a("8fb0"),i=a("1817");for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(s,t,(function(){return i[t]}))}(n);a("d8ec");var r=a("2877"),o=Object(r["a"])(i["default"],e["a"],e["b"],!1,null,"0b9531b0",null);s["default"]=o.exports},"9d9d":function(t,s,a){"use strict";a.r(s);var e=a("8b90"),i=a("eed1");for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(s,t,(function(){return i[t]}))}(n);a("22c7");var r=a("2877"),o=Object(r["a"])(i["default"],e["a"],e["b"],!1,null,"6ddd177a",null);s["default"]=o.exports},a1d5:function(t,s){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={name:"GroupUser",props:{data:{type:Array,default:function(){return[]}}},data:function(){return{value:!1}},methods:{setValue:function(){this.value=!this.value}}};s.default=a},b387:function(t,s,a){},c186:function(t,s,a){"use strict";a("f9bc")},c235:function(t,s,a){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0,a("a9e3");var e={name:"ProgressBar",props:{current:{type:[Number,String],default:0},total:{type:[Number,String],default:1}},computed:{progress:function(){return parseInt(this.current/this.total*100)}}};s.default=e},c4d8:function(t,s){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={name:"OrderList",props:{data:{type:Array,default:function(){return[]}},info:{type:Object,default:function(){}}},data:function(){return{columns:[{title:"订单编号",slot:"title"},{title:"商品名称",slot:"goods",minWidth:120},{title:"单价/数量",slot:"price_num",maxWidth:150},{title:"下单时间",slot:"create_time",maxWidth:200},{title:"买家",slot:"user",maxWidth:150},{title:"实付款",slot:"payment",maxWidth:250},{title:"支付方式",slot:"payment_type",maxWidth:200},{title:"订单状态",slot:"order_status",maxWidth:150}]}},methods:{handleOrderNo:function(t){this.$emit("on-order",t)}}};s.default=a},d65e:function(t,s,a){"use strict";a.r(s);var e=a("5482"),i=a("3be9");for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(s,t,(function(){return i[t]}))}(n);a("e550");var r=a("2877"),o=Object(r["a"])(i["default"],e["a"],e["b"],!1,null,"eef634e4",null);s["default"]=o.exports},d8ec:function(t,s,a){"use strict";a("ff5d")},e550:function(t,s,a){"use strict";a("b387")},eed1:function(t,s,a){"use strict";a.r(s);var e=a("9099"),i=a.n(e);for(var n in e)["default"].indexOf(n)<0&&function(t){a.d(s,t,(function(){return e[t]}))}(n);s["default"]=i.a},f9bc:function(t,s,a){},fdf2:function(t,s,a){"use strict";a.d(s,"a",(function(){return e})),a.d(s,"b",(function(){return i}));var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("kdx-modal-frame",{attrs:{value:t.value,title:"全部团成员",width:1e3,footerHide:""},on:{"on-cancel":t.setValue}},[a("div",{staticClass:"group-user"},[a("ul",t._l(t.data,(function(s,e){return a("li",{key:e},[a("div",{staticClass:"user-avatar"},[a("img",{attrs:{src:t.$media(s.avatar),alt:""},on:{error:function(s){return t.replaceImage(s,"avatar")}}})]),a("div",{staticClass:"user-name"},[t._v(" "+t._s(s.order_no?s.nickname:"虚拟")+" ")])])})),0)])])},i=[]},fe3b:function(t,s,a){var e=a("4ea4").default;Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0,a("d3b7"),a("159b");var i=e(a("d65e")),n=e(a("9d9d")),r={name:"index",components:{OrderList:i.default,OrderStatus:n.default},data:function(){return{info:{},list:[],table:{list:[]},id:"",loading:!1,current:1,lastStep:"待成团",lastTime:"",status:"process",countInterval:null}},mounted:function(){var t;this.id=(null===(t=this.$route.query)||void 0===t?void 0:t.id)||"",this.getData()},beforeDestroy:function(){clearInterval(this.countInterval)},methods:{getData:function(){var t=this;this.loading=!0,this.$api.groupsApi.getGroupsOrderDetail({id:this.id}).then((function(s){if(0===s.error){var a,e;t.lastStep="待成团",t.lastTime="",t.info=s.groups_detail,t.list=s.team_detail||[];var i=[];t.list.forEach((function(t){t.order_no&&i.push(t)})),t.table.list=i,t.status="process",0==(null===(a=s.groups_detail)||void 0===a?void 0:a.success)?(t.current=1,t.info.end_time&&t.setCount()):1==(null===(e=s.groups_detail)||void 0===e?void 0:e.success)?(t.current=2,t.lastStep="拼团成功",t.lastTime=t.info.success_time):(t.current=1,t.lastStep="拼团失败",t.status="error",t.lastTime=t.info.end_time)}})).finally((function(){t.loading=!1}))},setCount:function(){var t=this;clearInterval(this.countInterval),this.countDown(),this.countInterval=setInterval((function(){t.countDown()}),1e3)},countDown:function(){var t=new Date(this.info.end_time).getTime()/1e3,s=this.$utils.countDown(t,!1,!0),a=["天","时","分","秒"],e="";s?(s.forEach((function(t,s){t&&(e+=t+a[s])})),this.$set(this.info,"countTime",e)):(clearInterval(this.countInterval),this.getData())},confirmGroups:function(){var t=this;this.$Modal.confirm({title:"手动确认成团?",content:"此团下有待支付订单，确认成团后，待支付订单将自动关闭。",onOk:function(){t.$api.groupsApi.confirmGroups({id:t.id,success:1}).then((function(s){0===s.error&&(t.$Message.success("拼团成功"),t.getData())}))}})},routeOrder:function(t){this.$utils.openNewWindowPage("/order/list/all",{keywords:t,search_field:"order_no"})}}};s.default=r},ff5d:function(t,s,a){}}]);