(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[166],{"241e5":function(t,a,i){"use strict";i.r(a);var s=i("6fa3"),e=i("ca4c");for(var n in e)["default"].indexOf(n)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(n);i("ba92");var o=i("2877"),r=Object(o["a"])(e["default"],s["a"],s["b"],!1,null,"b464ced2",null);a["default"]=r.exports},"6fa3":function(t,a,i){"use strict";i.d(a,"a",(function(){return s})),i.d(a,"b",(function(){return e}));var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"leaderboard-comp"},[i("div",{staticClass:"leaderboard-item goods"},[i("div",{staticClass:"item-header"},[t._m(0),i("div",{staticClass:"right",on:{click:function(a){return t.jumpPage("goods","",t.noPerm.goodsdata)}}},[t._v(" 全部商品排行 "),i("Icon",{attrs:{type:"ios-arrow-forward"}})],1)]),i("div",{staticClass:"table"},[i("div",{staticClass:"theader"},[i("ul",[i("li",[t._v("排行")]),i("li",[t._v("商品")]),i("li",[t._v("销售数量 "),i("kdx-hint-tooltip",{attrs:{type:"form","max-width":340}},[i("Form",{attrs:{"label-width":60}},[i("FormItem",{attrs:{label:"销售数量："}},[t._v("用户下单商品数量，不包含退款订单的商品数量")])],1)],1)],1)])]),i("div",{staticClass:"tbody"},[t.goodsList.length<=0?i("div",{staticClass:"no-data"},[t._v(" 暂无数据 ")]):t._l(t.goodsList,(function(a,s){return i("ul",{key:s,staticClass:"tr"},[i("li",[0===s?i("kdx-svg-icon",{attrs:{type:"icon-paihang-jinpai"}}):1===s?i("kdx-svg-icon",{attrs:{type:"icon-paihang-yinpai"}}):2===s?i("kdx-svg-icon",{attrs:{type:"icon-paihang-tongpai"}}):i("div",{staticClass:"text"},[t._v(t._s(s+1))])],1),i("li",[i("div",{staticClass:"left"},[i("img",{attrs:{src:t.$media(a.thumb),alt:""},on:{error:t.replaceImage}})]),i("div",{staticClass:"right"},["1"===a.has_option?i("span",{staticClass:"tag"},[t._v("多")]):t._e(),t._v(" "+t._s(a.title)+" ")])]),i("li",[i("span",[t._v(" "+t._s(a.total)+" ")]),t._v("件 ")])])}))],2)])]),i("div",{staticClass:"leaderboard-item user"},[i("div",{staticClass:"item-header"},[t._m(1),i("div",{staticClass:"right",on:{click:function(a){return t.jumpPage("money","",t.noPerm.memberdata)}}},[t._v(" 全部会员排行 "),i("Icon",{attrs:{type:"ios-arrow-forward"}})],1)]),i("div",{staticClass:"table"},[i("div",{staticClass:"theader"},[i("ul",[i("li",[t._v("排行")]),i("li",[t._v("用户")]),i("li",[t._v("消费额 "),i("kdx-hint-tooltip",{attrs:{type:"form","max-width":340}},[i("Form",{attrs:{"label-width":60}},[i("FormItem",{attrs:{label:"消费金额："}},[t._v("用户下单的实际支付金额，不包含维权退款订单金额")])],1)],1)],1)])]),i("div",{staticClass:"tbody"},[t.moneyList.length<=0?i("div",{staticClass:"no-data"},[t._v(" 暂无数据 ")]):t._l(t.moneyList,(function(a,s){return i("ul",{key:s,staticClass:"tr"},[i("li",[0===s?i("kdx-svg-icon",{attrs:{type:"icon-paihang-jinpai"}}):1===s?i("kdx-svg-icon",{attrs:{type:"icon-paihang-yinpai"}}):2===s?i("kdx-svg-icon",{attrs:{type:"icon-paihang-tongpai"}}):i("div",{staticClass:"text"},[t._v(t._s(s+1))])],1),i("li",[i("div",{staticClass:"left"},[i("img",{attrs:{src:a.avatar,alt:""},on:{error:function(a){return t.replaceImage(a,"avatar")}}})]),i("div",{staticClass:"right"},[i("div",{staticClass:"name line-hide",on:{click:function(i){return t.jumpPage("vip",a.id,t.noPerm.member)}}},[t._v(" "+t._s(a.nickname||"-")+" ")]),i("div",{staticClass:"icon"},["10"===a.source?i("span",{staticClass:"iconfont icon-H"}):"20"===a.source?i("span",{staticClass:"iconfont icon-weixin"}):"21"===a.source?i("span",{staticClass:"iconfont icon-weixinxiaochengxu"}):"30"===a.source?i("kdx-svg-icon",{staticClass:"iconfont",attrs:{type:"icon-qudao-toutiao2"}}):"32"===a.source?i("kdx-svg-icon",{staticClass:"iconfont",attrs:{type:"icon-qudao-toutiaojisuban"}}):"31"===a.source?i("kdx-svg-icon",{staticClass:"iconfont",attrs:{type:"icon-douyin"}}):"70"===a.source?i("span",{staticClass:"iconfont icon-PCduan",staticStyle:{color:"#12aa9c","font-size":"16px"}}):t._e()],1)])]),i("li",[t._v(" ￥"),i("span",[t._v(t._s(a.order_money))])])])}))],2)])])])},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"left"},[i("span",{staticClass:"iconfont icon-shopping-bag"}),t._v(" 商品销售TOP排行榜 ")])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"left"},[i("span",{staticClass:"iconfont icon-database"}),t._v(" 用户购买力TOP排行榜 ")])}]},"7f966":function(t,a,i){},ba92:function(t,a,i){"use strict";i("7f966")},ca4c:function(t,a,i){"use strict";i.r(a);var s=i("ea8d"),e=i.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(a,t,(function(){return s[t]}))}(n);a["default"]=e.a},ea8d:function(t,a,i){var s=i("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=s(i("2909")),n={props:[],data:function(){return{goodsList:[],moneyList:[]}},computed:{noPerm:function(){return{goodsdata:!this.$getPermMap("statistics.goods.view"),memberdata:!this.$getPermMap("statistics.member.view"),member:!this.$getPermMap("member.list.view")}}},created:function(){this.getGoodsRank(),this.getMoneyRank()},methods:{getGoodsRank:function(){var t=this;this.$api.homeApi.getGoodsRank({}).then((function(a){0===a.error&&(t.goodsList=(0,e.default)(a.data))}))},getMoneyRank:function(){var t=this;this.$api.homeApi.getMoneyRank({}).then((function(a){0===a.error&&(t.moneyList=(0,e.default)(a.data))}))},jumpPage:function(t,a,i){if(i)this.$Message.info("暂无查看权限");else{var s,e={};"goods"===t?s="/home/goods":"vip"===t?(s="/member/detail",e={id:a}):s="/member/consume",this.$utils.openNewWindowPage(s,e)}}}};a.default=n}}]);