(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38,39,40,41,42,43,180,187],{"0e5f":function(t,e,a){"use strict";a.r(e);var i=a("f04a"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"4f2f":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.componentData&&"tabbar"==t.componentData.id?a("div",{staticClass:"tabbar",style:{padding:t.px2rpx(t.insideStyle.margintop)+" 0 "+t.px2rpx(t.insideStyle.marginbottom)}},[a("div",{style:{padding:"0 "+t.px2rpx(t.insideStyle.marginleft),"margin-bottom":""+t.px2rpx(t.insideStyle.margininside)}},[a("div",{staticClass:"radius-box",class:t.$isPC?"":"isNotPC",style:{borderRadius:t.px2rpx(t.insideStyle.topradius)+" "+t.px2rpx(t.insideStyle.topradius)+" "+t.px2rpx(t.insideStyle.bottomradius)+" "+t.px2rpx(t.insideStyle.bottomradius)}},[a("ul",{staticClass:"tabbar-list",class:{"vertical-show":"2"==t.insideStyle.showtype},style:{background:t.insideStyle.background}},t._l(t.componentData.data,(function(e,i){return a("li",{key:i,staticClass:"tabbar-item",class:{active:t.isActive(i)},style:{color:t.isActive(i)?t.insideStyle.activecolor:t.insideStyle.textcolor,background:t.isActive(i)?t.insideStyle.activebgcolor:""},attrs:{"data-key":i},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clickItem(e,i)}}},[a("span",{staticClass:"_span"},[t._v(t._s(e.title)),a("i",{staticClass:"after",style:{background:t.isActive(i)?t.insideStyle.activecolor:t.insideStyle.textcolor}})])])})),0)])]),t.componentData.data[t.activeIndex]?a("Goods",{attrs:{"start-load-img":t.startLoadImg,componentData:t.componentData.data[t.activeIndex].goods},on:{"custom-event":function(e){arguments[0]=e=t.$handleEvent(e),t.eventHandler.apply(void 0,arguments)}}}):t._e()],1):t._e(),t.componentData&&"topmenu"==t.componentData.id?a("div",{staticClass:"topmenu"},[a("div",{staticClass:"radius-box",class:t.$isPC?"":"isNotPC"},[a("ul",{staticClass:"menu-list",style:{background:t.componentData.style.background}},t._l(t.componentData.data,(function(e,i){return a("li",{key:i,staticClass:"menu-item",class:{active:t.currentIndex==i},style:{color:t.currentIndex==i?t.componentData.style.activecolor:t.componentData.style.textcolor,background:t.currentIndex==i?t.componentData.style.activebgcolor:t.componentData.style.background},attrs:{"data-key":i},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clickTopItem(e,i)}}},[a("span",{staticClass:"_span"},[t._v(t._s(e.title)),a("i",{staticClass:"after",style:{background:t.currentIndex==i?t.componentData.style.activecolor:t.componentData.style.color}})])])})),0)])]):t._e()])},r=[]},7097:function(t,e,a){"use strict";a.r(e);var i=a("4f2f"),n=a("0e5f");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("7117");var o,d=a("f0c5"),s=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"ded48016",null,!1,i["a"],o);e["default"]=s.exports},7117:function(t,e,a){"use strict";var i=a("dc5d"),n=a.n(i);n.a},c984:function(t,e,a){var i=a("4ea4");a("8e6e"),a("ac6a"),a("456d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("ade3")),r=a("2f62"),o=a("dc11");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){(0,n.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var c={computed:s({},(0,r.mapState)("decorate",{pageList:function(t){return t.pageList}})),props:{startLoadImg:{type:Boolean,default:!0},componentData:{type:Object,default:function(){return{style:{},params:{}}}}},methods:{px2rpx:o.px2rpx}};e.default=c},dc5d:function(t,e,a){var i=a("e101");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("437cf4c9",i,!0,{sourceMap:!1,shadowMode:!1})},e101:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */.isbottom[data-v-ded48016], .istop[data-v-ded48016]{z-index:999990}._i[data-v-ded48016]{display:inline}uni-view[data-v-ded48016]{box-sizing:border-box}.def-pad[data-v-ded48016]{padding:%?8?% %?16?%}*[data-v-ded48016]{box-sizing:border-box;margin:0;padding:0;border:none}li[data-v-ded48016]{list-style:none}ul[data-v-ded48016]{padding:0}uni-image[data-v-ded48016]{height:auto}.tabbar .isNotPC[data-v-ded48016]::-webkit-scrollbar{display:none}.tabbar .tabbar-list[data-v-ded48016]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-align-self:center;align-self:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative;overflow:auto hidden;white-space:nowrap;line-height:%?80?%;background:#fff;width:-webkit-fit-content;width:fit-content;min-width:100%}.tabbar .tabbar-list .tabbar-item[data-v-ded48016]{color:#666;font-size:%?28?%;padding:0 %?32?%;min-width:%?150?%;-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;height:%?80?%;line-height:%?80?%;box-sizing:border-box;text-align:center;border:0;border-bottom:%?7.32899?% solid transparent;border-radius:0;text-align:center;position:relative;cursor:pointer;flex-shrink:0}.tabbar .tabbar-list .tabbar-item.active[data-v-ded48016]{color:#ef4f4f;font-weight:700}.tabbar .tabbar-list .tabbar-item.active ._span[data-v-ded48016]{display:inline-block;position:relative}.tabbar .tabbar-list .tabbar-item.active ._span .after[data-v-ded48016]{position:absolute;left:50%;bottom:0;-webkit-transform:translate(-50%);transform:translate(-50%);width:%?56?%;height:%?4?%;background:#ef4f4f;border-radius:%?12?%}.tabbar .vertical-show[data-v-ded48016]{-webkit-flex-wrap:wrap;flex-wrap:wrap;height:-webkit-fit-content;height:fit-content}.tabbar .vertical-show .tabbar-item[data-v-ded48016]{width:25%}.tabbar .radius-box[data-v-ded48016]{border-radius:%?12?%;overflow-x:auto;overflow-y:hidden}.tabbar .top-radius[data-v-ded48016]{border-top-left-radius:%?12?%;border-top-right-radius:%?12?%}.tabbar .bottom-radius[data-v-ded48016]{border-bottom-left-radius:%?12?%;border-bottom-right-radius:%?12?%}.topmenu .radius-box[data-v-ded48016]{overflow-x:auto;overflow-y:hidden}.topmenu .isNotPC[data-v-ded48016]::-webkit-scrollbar{display:none}.topmenu .menu-list[data-v-ded48016]{overflow-x:auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-align-self:center;align-self:center;background:#fff;position:relative;white-space:nowrap;width:%?750?%;line-height:%?80?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:-webkit-fit-content;width:fit-content;min-width:100%}.topmenu .menu-list .menu-item[data-v-ded48016]{color:#666;font-size:%?28?%;height:%?80?%;padding:0 %?32?%;min-width:%?150?%;-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;line-height:%?80?%;box-sizing:border-box;border:0;border-radius:0;text-align:center;position:relative;cursor:pointer;flex-shrink:0}.topmenu .menu-list .menu-item.active[data-v-ded48016]{color:#ef4f4f;font-weight:700;font-size:%?32?%}.topmenu .menu-list .menu-item.active ._span[data-v-ded48016]{display:inline-block;position:relative}.topmenu .menu-list .menu-item.active ._span .after[data-v-ded48016]{position:absolute;left:50%;bottom:0;-webkit-transform:translate(-50%);transform:translate(-50%);width:%?56?%;height:%?4?%;background:#ef4f4f}',""]),t.exports=e},f04a:function(t,e,a){var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("386d"),a("3b2b"),a("4917"),a("6762"),a("2fdb");var n=i(a("5942")),r=i(a("c984")),o={mixins:[r.default],components:{Goods:n.default},name:"tabbar",data:function(){var t,e,a;return{activeIndex:0,currentIndex:(null===(t=this.$store.state)||void 0===t||null===(e=t.decorate)||void 0===e||null===(a=e.indexPage)||void 0===a?void 0:a.topmenuActive)||0,clicking:!1}},computed:{insideStyle:function(){return this.componentData.style}},mounted:function(){var t=this;if("topmenu"==this.componentData.id){var e;this.$isPC?this.$watch("componentData",(function(){t.currentIndex!=t.componentData.params.current&&(t.currentIndex=t.componentData.params.current)}),{immediate:!0,deep:!0}):this.$watch("$store.state.decorate.indexPage.topmenuActive",(function(e){t.currentIndex=e||0}),{immediate:!0,deep:!0});var a=null;if(a=this.getUrlParams("pageId"),a&&null!=a||null!==(e=this.$Route.query)&&void 0!==e&&e.pageId&&null!=this.$Route.query.pageId){var i=this.componentData.data,n=a||this.$Route.query.pageId;i.map((function(e,a){var i=null===e||void 0===e?void 0:e.linkurl;i.includes(n)&&(t.activeIndex=a)})),this.$emit("custom-event",{target:"topmenu/clickItem",data:{value:this.componentData.data[this.activeIndex],key:this.activeIndex,data:this.componentData}})}}else this.$isPC&&this.$watch("componentData",(function(t){this.activeIndex=t.params.current}),{immediate:!0,deep:!0})},methods:{clickItem:function(t,e){this.$isPC||this.activeIndex==e||(this.activeIndex=e,this.$emit("custom-event",{target:"tabbar/clickItem",data:{value:t,key:e,data:this.componentData}}))},eventHandler:function(t){if(this.$emit("custom-event",t),!this.$isPC){var e=a("2350").default;e.call(this,t)}},isActive:function(t){return this.activeIndex==t},clickTopItem:function(t,e){this.$isPC||this.currentIndex==e||this.$store.state.decorate.indexPage.pageListGetting||this.$store.state.decorate.pageQuery.previewId&&(this.$toast("预览模式"),this.currentIndex=e);var a="/pages/index/index",i=/pageId=(\d+)$/,n=t.linkurl.match(i)?t.linkurl.match(i)[1]:null;if(n||t.linkurl.indexOf(a)>-1)return this.getPageExit({id:n,type:"0"}),void this.$emit("custom-event",{target:"topmenu/clickItem",data:{value:t,key:e,data:this.componentData}});this.$emit("custom-event",{target:"topmenu/toPage",data:{value:t,key:e,data:this.componentData}})},getPageExit:function(t){var e=this;this.$api.decorateApi.decorateNewIndex(t).then((function(t){0===t.error&&(t.page||(e.$emit("custom-event",{target:"topmenu/clickItem",data:{value:e.componentData.data[0],key:0,data:e.componentData}}),uni.showToast({title:"当前页面不存在",icon:"none"})))}))},getUrlParams:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),a=window.location.search.substr(1).match(e);return a&&a[2]}}};e.default=o}}]);