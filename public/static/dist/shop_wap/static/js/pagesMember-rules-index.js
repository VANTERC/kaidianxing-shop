(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[113],{"0221":function(t,e,i){"use strict";var a=i("f9f8"),s=i.n(a);s.a},"1ec4":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.rules[data-v-b2a15a8e]{width:100%;height:100%;background-color:#fff}.credit-rules[data-v-b2a15a8e], .rules-explain[data-v-b2a15a8e]{padding:%?32?% %?24?%}.credit-rules .rules-item[data-v-b2a15a8e], .rules-explain .rules-item[data-v-b2a15a8e]{margin-bottom:%?32?%}.credit-rules .rules-item .item-title[data-v-b2a15a8e], .rules-explain .rules-item .item-title[data-v-b2a15a8e]{font-size:%?24?%;line-height:%?36?%;font-weight:600;margin-bottom:%?16?%}.credit-rules .rules-item .item-text[data-v-b2a15a8e], .rules-explain .rules-item .item-text[data-v-b2a15a8e]{font-size:12px;line-height:16px;color:#969696}',""]),t.exports=e},3636:function(t,e,i){"use strict";i.r(e);var a=i("c271"),s=i("7328");for(var r in s)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(r);i("0221");var n,c=i("f0c5"),u=Object(c["a"])(s["default"],a["b"],a["c"],!1,null,"b2a15a8e",null,!1,a["a"],n);e["default"]=u.exports},"4d03":function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{},data:function(){return{type:"",credit:{credit_text:"积分",credit_limit:"",credit_limit_type:"",basic_credit_num:"",credit_num:"",credit_state:"1"},explain:{refund_rule:"",finish_order_refund_type:"0",finish_order_refund_days:"n"}}},mounted:function(){this.getType(),this.getCreditSet(),this.getShopExplain()},methods:{getType:function(){this.type=this.$Route.query.type},getCreditSet:function(){var t=this;this.$api.memberApi.getCreditSet().then((function(e){0===e.error&&(t.credit=e.data,t.setNavigationBarTitle())}))},getShopExplain:function(){var t=this;this.$api.creditShopApi.shopStatus({},{errorToast:!1}).then((function(e){0===e.error&&(t.explain=e.data,t.setNavigationBarTitle())}))},setNavigationBarTitle:function(){var t="";"1"===this.type&&(t="".concat(this.credit.credit_text,"规则")),"2"===this.type&&(t="规则说明"),uni.setNavigationBarTitle({title:t})}}};e.default=i},7328:function(t,e,i){"use strict";i.r(e);var a=i("4d03"),s=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=s.a},c271:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"rules"},["1"==t.type?i("v-uni-view",[i("v-uni-view",{staticClass:"credit-rules"},[i("v-uni-view",{staticClass:"rules-item"},[i("v-uni-view",{staticClass:"item-title"},[t._v(t._s(t.credit.credit_text)+"上限")]),"2"==t.credit.credit_limit_type?i("v-uni-view",{staticClass:"item-text"},[t._v("最多可获得 "+t._s(t.credit.credit_limit)+" "+t._s(t.credit.credit_text))]):i("v-uni-view",{staticClass:"item-text"},[t._v("可获得"+t._s(t.credit.credit_text)+"无限制")])],1),i("v-uni-view",{staticClass:"rules-item"},[i("v-uni-view",{staticClass:"item-title"},[t._v(t._s(t.credit.credit_text)+"换算规则")]),i("v-uni-view",{staticClass:"item-text"},[t._v(t._s(t.credit.basic_credit_num)+" "+t._s(t.credit.credit_text)+" = "+t._s(t.credit.credit_num)+" 元")])],1),i("v-uni-view",{staticClass:"rules-item"},[i("v-uni-view",{staticClass:"item-title"},[t._v(t._s(t.credit.credit_text)+"抵扣")]),i("v-uni-view",{staticClass:"item-text"},["0"===t.credit.credit_state?i("span",[t._v("不")]):t._e(),i("span",[t._v("支持"+t._s(t.credit.credit_text)+"抵扣")])])],1)],1)],1):t._e(),"2"==t.type?i("v-uni-view",[i("v-uni-view",{staticClass:"rules-explain"},[i("v-uni-view",{staticClass:"rules-item"},[i("v-uni-view",{staticClass:"item-title"},[t._v("订单售后")]),"0"==t.explain.finish_order_refund_type?i("v-uni-view",{staticClass:"item-text"},[t._v("订单完成后不支持申请售后")]):t._e(),"1"==t.explain.finish_order_refund_type?i("v-uni-view",{staticClass:"item-text"},[t._v("订单完成后 "+t._s(t.explain.finish_order_refund_days)+" 天内支持申请售后")]):t._e()],1),i("v-uni-view",{staticClass:"rules-item"},[i("v-uni-view",{staticClass:"item-title"},[t._v(t._s(t.credit.credit_text)+"退还规则")]),i("v-uni-view",{staticClass:"item-text"},[t._v("售后退款时，"+t._s(t.credit.credit_text)+"部分"),"1"===t.explain.refund_rule?i("span",[t._v("不")]):t._e(),t._v("支持退还")])],1),i("v-uni-view",{staticClass:"rules-item"},[i("v-uni-view",{staticClass:"item-title"},[t._v("其他")]),i("v-uni-view",{staticClass:"item-text"},[t._v(t._s(t.credit.credit_text)+"商品订单不支持分销，不支持优惠叠加")])],1)],1)],1):t._e()],1)},r=[]},f9f8:function(t,e,i){var a=i("1ec4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("5585f9ff",a,!0,{sourceMap:!1,shadowMode:!1})}}]);