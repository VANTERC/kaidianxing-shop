(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[169],{"0601":function(t,i,o){var e=o("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e(o("c984")),n={mixins:[a.default],name:"distributor",data:function(){return{}},computed:{},methods:{checkLevel:function(){this.$emit("custom-event",{target:"distributor/checkLevel"})},goWithDraw:function(){this.$emit("custom-event",{target:"distributor/goWithDraw"})},checkCommission:function(){this.$emit("custom-event",{target:"distributor/checkCommission"})}}};i.default=n},"0fb9":function(t,i,o){"use strict";o.r(i);var e=o("28ca"),a=o("3ef1");for(var n in a)["default"].indexOf(n)<0&&function(t){o.d(i,t,(function(){return a[t]}))}(n);o("1911");var r,c=o("f0c5"),d=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"6f8a5c96",null,!1,e["a"],r);i["default"]=d.exports},1911:function(t,i,o){"use strict";var e=o("fbde"),a=o.n(e);a.a},"28ca":function(t,i,o){"use strict";var e;o.d(i,"b",(function(){return a})),o.d(i,"c",(function(){return n})),o.d(i,"a",(function(){return e}));var a=function(){var t=this,i=t.$createElement,o=t._self._c||i;return t.componentData&&"distributor"==t.componentData.id?o("div",{staticClass:"distributor decorate"},[o("div",{staticClass:"top-info",style:{background:t.componentData.style.background}},[o("div",{staticClass:"left-img"},[o("div",{staticClass:"img-box"},[o("img",{staticClass:"avart",attrs:{"lazy-load":!0,mode:"widthFix",src:t.$utils.mediaUrl(t.componentData.params.avatar)||t.$utils.staticMediaUrl("login/avatar_default.png"),alt:""}})])]),o("div",{staticClass:"right-info",class:{center:1==t.componentData.params.show_commission_level}},[o("p",{staticClass:"title",style:{color:t.componentData.style.nicknamecolor}},[t._v(t._s(t.componentData.params.nickname))]),1==t.componentData.params.show_commission_level?o("p",{staticClass:"level",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.checkLevel.apply(void 0,arguments)}}},[o("img",{staticClass:"level-icon",attrs:{src:t.$utils.staticMediaUrl("commission/commission-level.png"),alt:""}}),t._v(t._s(t.componentData.params.levelname))]):t._e(),o("p",{staticClass:"recommender",style:{color:t.componentData.style.recommendercolor}},[t._v("推荐人："+t._s(t.componentData.params.recommender))])])]),o("div",{staticClass:"bottom-info"},[o("div",{staticClass:"left-info"},[o("p",{staticClass:"title",style:{color:t.componentData.style.titlecolor}},[t._v(t._s(t.componentData.params.canwithdrawtext||"可"+(t.componentData.params.withdrawtext||"提现")+(t.componentData.params.moneytext||""))+"（元）")]),o("p",{staticClass:"money havemoney",style:{color:t.componentData.style.hightlightcolor}},[t._v(t._s(t.componentData.params.havemoney))]),o("p",{staticClass:"withdraw btn",style:{background:t.componentData.style.hightlightcolor},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goWithDraw.apply(void 0,arguments)}}},[t._v(t._s(t.componentData.params.withdrawtext||"提现"))])]),o("div",{staticClass:"right-info"},[o("p",{staticClass:"title",style:{color:t.componentData.style.titlecolor}},[t._v(t._s(t.componentData.params.waitrecordtext||"待入账"+(t.componentData.params.moneytext||""))+" (元)"),o("span",{staticClass:"check",style:{color:t.componentData.style.hightlightcolor},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.checkCommission.apply(void 0,arguments)}}},[t._v("查看")])]),o("p",{staticClass:"money pending",style:{color:t.componentData.style.moneycolor}},[t._v(t._s(t.componentData.params.pending))]),o("p",{staticClass:"title",style:{color:t.componentData.style.titlecolor}},[t._v("成功"+t._s(t.componentData.params.withdrawtext||"")+t._s(t.componentData.params.moneytext||"")+" (元)")]),o("p",{staticClass:"money withdraw",style:{color:t.componentData.style.moneycolor}},[t._v(t._s(t.componentData.params.withdraw||""))])])])]):t._e()},n=[]},"3ef1":function(t,i,o){"use strict";o.r(i);var e=o("0601"),a=o.n(e);for(var n in e)["default"].indexOf(n)<0&&function(t){o.d(i,t,(function(){return e[t]}))}(n);i["default"]=a.a},"9e97":function(t,i,o){var e=o("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */.isbottom[data-v-6f8a5c96], .istop[data-v-6f8a5c96]{z-index:999990}._i[data-v-6f8a5c96]{display:inline}uni-view[data-v-6f8a5c96]{box-sizing:border-box}.def-pad[data-v-6f8a5c96]{padding:%?8?% %?16?%}*[data-v-6f8a5c96]{box-sizing:border-box;margin:0;padding:0;border:none}li[data-v-6f8a5c96]{list-style:none}ul[data-v-6f8a5c96]{padding:0}uni-image[data-v-6f8a5c96]{height:auto}.distributor.decorate[data-v-6f8a5c96]{width:%?750?%;overflow:hidden;position:relative;padding-bottom:%?144?%}.distributor.decorate .img-box[data-v-6f8a5c96]{overflow:hidden;border-radius:50%}.distributor.decorate .top-info[data-v-6f8a5c96]{width:100%;padding:%?48?% %?52?% %?178?%;background:#ff6f29;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.distributor.decorate .top-info .left-img[data-v-6f8a5c96]{width:%?120?%;height:%?120?%;-webkit-flex-shrink:0;flex-shrink:0;border:%?1?% solid #e6e7eb;box-sizing:border-box;border-radius:50%;margin:auto %?24?% auto 0;overflow:hidden}.distributor.decorate .top-info .left-img .avart[data-v-6f8a5c96], .distributor.decorate .top-info .left-img .img-box[data-v-6f8a5c96]{width:100%;height:100%}.distributor.decorate .top-info .right-info[data-v-6f8a5c96]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;min-height:%?120?%}.distributor.decorate .top-info .right-info.center[data-v-6f8a5c96]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.distributor.decorate .top-info .right-info .title[data-v-6f8a5c96]{font-family:PingFang SC;font-style:normal;font-size:%?32?%;line-height:%?44?%;color:#fff;font-weight:700}.distributor.decorate .top-info .right-info .level[data-v-6f8a5c96]{width:-webkit-fit-content;width:fit-content;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center;position:relative;font-size:%?16?%;font-weight:700;line-height:%?0?%;padding:%?14?% %?6?% %?12?% %?26?%;border-radius:%?4?%;vertical-align:middle;background:#565656;color:#ffe382;margin:%?10?% %?14?%}.distributor.decorate .top-info .right-info .level .level-icon[data-v-6f8a5c96]{position:absolute;top:50%;left:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:%?30?%;height:%?30?%;margin:auto 0}.distributor.decorate .top-info .right-info .recommender[data-v-6f8a5c96]{font-size:%?20?%;line-height:%?28?%;color:#fff}.distributor.decorate .bottom-info[data-v-6f8a5c96]{width:%?700?%;height:%?294?%;background:#fff;border-radius:%?12?%;position:absolute;left:0;right:0;bottom:0;margin:0 auto;box-sizing:border-box;padding:%?48?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.distributor.decorate .bottom-info .left-info[data-v-6f8a5c96],\r\n.distributor.decorate .bottom-info .right-info[data-v-6f8a5c96]{width:50%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.distributor.decorate .bottom-info .left-info .title[data-v-6f8a5c96],\r\n.distributor.decorate .bottom-info .right-info .title[data-v-6f8a5c96]{font-size:%?24?%;color:#969696;line-height:%?34?%}.distributor.decorate .bottom-info .left-info .money[data-v-6f8a5c96],\r\n.distributor.decorate .bottom-info .right-info .money[data-v-6f8a5c96]{font-size:%?32?%;font-weight:500;line-height:%?44?%;color:#000}.distributor.decorate .bottom-info .left-info .havemoney[data-v-6f8a5c96],\r\n.distributor.decorate .bottom-info .right-info .havemoney[data-v-6f8a5c96]{font-size:%?48?%;line-height:%?68?%;color:#ff6f29}.distributor.decorate .bottom-info .left-info .withdraw.btn[data-v-6f8a5c96],\r\n.distributor.decorate .bottom-info .right-info .withdraw.btn[data-v-6f8a5c96]{width:%?124?%;height:%?50?%;border-radius:%?80?%;background:#ff6f29;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center;font-size:%?24?%;color:#fff;margin-top:%?20?%}.distributor.decorate .bottom-info .left-info[data-v-6f8a5c96]{border-right:%?1?% solid #e6e7eb}.distributor.decorate .bottom-info .right-info[data-v-6f8a5c96]{padding-left:%?48?%}.distributor.decorate .bottom-info .right-info .pending[data-v-6f8a5c96]{margin-bottom:%?16?%}.distributor.decorate .bottom-info .right-info .check[data-v-6f8a5c96]{color:#ff6f29;margin-left:%?16?%}',""]),t.exports=i},fbde:function(t,i,o){var e=o("9e97");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=o("4f06").default;a("c0f86016",e,!0,{sourceMap:!1,shadowMode:!1})}}]);