(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[161],{"0a0d":function(t,e,n){var a=n("50a0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("35fec8e5",a,!0,{sourceMap:!1,shadowMode:!1})},1310:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.componentData&&"detail_spec"==t.componentData.id&&!1!==t.componentData.show&&1==t.componentData.form_status?n("div",{staticClass:"detail_spec",style:{padding:t.px2rpx(t.componentData.style.margintop)+" "+t.px2rpx(t.componentData.style.marginleft)+"  "+t.px2rpx(t.componentData.style.marginbottom)},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem.apply(void 0,arguments)}}},[n("div",{staticStyle:{overflow:"hidden"},style:{"border-radius":t.px2rpx(t.componentData.style.topradius)+" "+t.px2rpx(t.componentData.style.topradius)+" "+t.px2rpx(t.componentData.style.bottomradius)+" "+t.px2rpx(t.componentData.style.bottomradius)}},[n("div",{staticClass:"container",style:{background:t.componentData.style.background}},[t.componentData.params.specs?n("span",{staticClass:"label",style:{color:t.componentData.style.titlecolor}},[t._v("已选")]):n("span",{staticClass:"label",style:{color:t.componentData.style.titlecolor}},[t._v("选择")]),n("span",{staticClass:"content",style:{color:t.componentData.style.textcolor}},[t._v(t._s(t.componentData.params.specs||"请选择商品规格"))]),n("i",{staticClass:"iconfont-m- icon-m-right",style:{color:t.componentData.style.arrowcolor}})])])]):t._e()},i=[]},3341:function(t,e,n){var a=n("4ea4");n("8e6e"),n("ac6a"),n("456d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("ade3")),i=n("2f62"),r=n("dc11");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){(0,o.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={computed:s({},(0,i.mapState)("decorate",{pageList:function(t){return t.pageList}})),props:{startLoadImg:{type:Boolean,default:!0},componentData:{type:Object,default:function(){return{style:{},params:{}}}}},methods:{px2rpx:r.px2rpx}};e.default=l},"4cd8":function(t,e,n){var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("3341")),i={mixins:[o.default],name:"detail_spec",methods:{clickItem:function(){this.componentData.params.virtual_account?this.$toast("商品暂时无法购买"):this.$emit("custom-event",{target:"detail_spec/clickItem",data:this.componentData})}}};e.default=i},"4d8c":function(t,e,n){"use strict";n.r(e);var a=n("1310"),o=n("6415");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("8d0b");var r,c=n("f0c5"),s=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"8453efea",null,!1,a["a"],r);e["default"]=s.exports},"50a0":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */.isbottom[data-v-8453efea], .istop[data-v-8453efea]{z-index:999990}._i[data-v-8453efea]{display:inline}uni-view[data-v-8453efea]{box-sizing:border-box}.def-pad[data-v-8453efea]{padding:%?8?% %?16?%}*[data-v-8453efea]{box-sizing:border-box;margin:0;padding:0;border:none}li[data-v-8453efea]{list-style:none}ul[data-v-8453efea]{padding:0}uni-image[data-v-8453efea]{height:auto}.detail_spec[data-v-8453efea]{width:100%}.detail_spec .container[data-v-8453efea]{width:100%;height:%?85.50489?%;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;font-family:PingFang SC;font-style:normal;font-weight:400}.detail_spec .container .label[data-v-8453efea]{font-size:%?24?%;line-height:%?24?%;margin:auto %?24?%;color:#969696;-webkit-flex-shrink:0;flex-shrink:0}.detail_spec .container .content[data-v-8453efea]{width:0;-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;line-height:%?88?%;box-sizing:border-box;padding:0 %?12.21498?% 0 %?24.42997?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:auto 0;color:#212121}.detail_spec .container .icon-m-right[data-v-8453efea]{height:%?85.50489?%;-webkit-flex-shrink:0;flex-shrink:0;line-height:%?85.50489?%;margin-right:%?24?%;font-size:%?32?%;color:#888}',""]),t.exports=e},6415:function(t,e,n){"use strict";n.r(e);var a=n("4cd8"),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"8d0b":function(t,e,n){"use strict";var a=n("0a0d"),o=n.n(a);o.a}}]);