(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[173,36,185,186,187,192,188,190,191,189],{"0a8f":function(o,t,e){"use strict";var i=e("5d36"),a=e.n(i);a.a},2546:function(o,t,e){"use strict";e.r(t);var i=e("278f"),a=e.n(i);for(var n in i)["default"].indexOf(n)<0&&function(o){e.d(t,o,(function(){return i[o]}))}(n);t["default"]=a.a},"278f":function(o,t,e){var i=e("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(e("c984")),n={mixins:[a.default],name:"groupsgoods"};t.default=n},"5d36":function(o,t,e){var i=e("ec65");"string"===typeof i&&(i=[[o.i,i,""]]),i.locals&&(o.exports=i.locals);var a=e("4f06").default;a("cf052a36",i,!0,{sourceMap:!1,shadowMode:!1})},af38:function(o,t,e){"use strict";var i;e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){return i}));var a=function(){var o=this,t=o.$createElement,e=o._self._c||t;return o.componentData&&"groupsgoods"==o.componentData.id?e("div",{staticClass:"groupsgoods"},[e("ul",{staticClass:"goods",class:[o.componentData.style.liststyle]},o._l(o.componentData.data,(function(t,i){return e("li",{key:i,staticClass:"good"},[e("div",{staticClass:"container"},[e("div",{staticClass:"img-box"},[o.startLoadImg?e("img",{staticClass:"img",attrs:{mode:"widthFix","lazy-load":!0,src:o.$utils.media(t.thumb),alt:""}}):o._e(),e("span",{staticClass:"badge",style:{background:o.componentData.style.groupscorner}},[o._v("拼团")])]),e("div",{staticClass:"body"},[e("p",{staticClass:"title"},[o._v(o._s(t.title))]),e("p",{staticClass:"price",style:{color:o.componentData.style.productpricecolor}},[o._v("原价：￥"+o._s(t.productprice))]),e("p",{staticClass:"info"},[e("span",{staticClass:"groupprice",style:{color:o.componentData.style.pricecolor}},[o._v("￥"+o._s(t.price))]),e("span",{staticClass:"btn",style:{color:o.componentData.style.buybtncolor,borderColor:o.componentData.style.buybtncolor}},[o._v(o._s(t.bargain)+"人团")])])])])])})),0)]):o._e()},n=[]},c984:function(o,t,e){var i=e("288e");e("8e6e"),e("ac6a"),e("456d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(e("bd86")),n=e("2f62"),r=e("dc11");function d(o,t){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(o);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),e.push.apply(e,i)}return e}function s(o){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?d(Object(e),!0).forEach((function(t){(0,a.default)(o,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(e,t))}))}return o}var l={computed:s({},(0,n.mapState)("decorate",{pageList:function(o){return o.pageList}})),props:{startLoadImg:{type:Boolean,default:!0},componentData:{type:Object,default:function(){return{style:{},params:{}}}}},methods:{px2rpx:r.px2rpx}};t.default=l},dc11:function(o,t,e){function i(){new Promise((function(o,t){uni?uni.getSystemInfo({success:function(t){o(t)}}):o({pixelRatio:window.devicePixelRatio})}))}function a(o){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return void 0===o&&(o=e),o||(o=0),o*t+"rpx"}Object.defineProperty(t,"__esModule",{value:!0}),t.getSystemInfo=i,t.px2rpx=a,e("4917")},ec65:function(o,t,e){var i=e("24fb");t=i(!1),t.push([o.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.isbottom[data-v-979b268a], .istop[data-v-979b268a]{z-index:999990}._i[data-v-979b268a]{display:inline}uni-view[data-v-979b268a]{box-sizing:border-box}.def-pad[data-v-979b268a]{padding:%?8?% %?16?%}*[data-v-979b268a]{box-sizing:border-box;margin:0;padding:0;border:none}li[data-v-979b268a]{list-style:none}ul[data-v-979b268a]{padding:0}uni-image[data-v-979b268a]{height:auto}.groupsgoods[data-v-979b268a]{width:100%}.groupsgoods .goods[data-v-979b268a]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.groupsgoods .goods .good[data-v-979b268a]{width:100%;border-bottom:%?2.443?% solid #ddd}.groupsgoods .goods .good[data-v-979b268a]:last-child{border:none}.groupsgoods .goods .good .container[data-v-979b268a]{background:#fff;width:100%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;padding:%?24.42997?%}.groupsgoods .goods .good .container .img-box[data-v-979b268a]{width:%?280.94463?%;height:%?280.94463?%;display:-webkit-box;display:-webkit-flex;display:flex;position:relative;margin-right:%?24.42997?%;-webkit-flex-shrink:0;flex-shrink:0}.groupsgoods .goods .good .container .img-box .img[data-v-979b268a]{width:%?280.94463?%;max-height:%?280.94463?%;margin:auto;display:block}.groupsgoods .goods .good .container .img-box .badge[data-v-979b268a]{position:absolute;width:%?107.49186?%;height:%?48.85993?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;text-align:center;font-size:%?29.31596?%;color:#fff;background:#f55}.groupsgoods .goods .good .container .body[data-v-979b268a]{width:0;min-height:%?280.94463?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.groupsgoods .goods .good .container .title[data-v-979b268a]{width:100%;font-size:%?34.20195?%;line-height:%?48.85993?%;height:%?97.71987?%;overflow:hidden;-webkit-line-clamp:2;text-overflow:ellipsis;margin-bottom:%?48.85993?%;box-sizing:border-box\n  /*文本溢出时显示省略标记*/}.groupsgoods .goods .good .container .price[data-v-979b268a]{font-size:%?29.31596?%;color:#999;padding:%?9.77199?%;box-sizing:border-box}.groupsgoods .goods .good .container .info[data-v-979b268a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;box-sizing:border-box}.groupsgoods .goods .good .container .info .groupprice[data-v-979b268a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:0;font-size:%?34.20195?%;line-height:%?53.74593?%;color:#f55}.groupsgoods .goods .good .container .info .btn[data-v-979b268a]{-webkit-flex-shrink:0;flex-shrink:0;height:%?53.74593?%;border:%?1?% solid #f55;color:#f55;border-radius:%?4.88599?%;padding:0 %?17.10098?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;text-align:center;margin:0}.groupsgoods .goods.block[data-v-979b268a]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:space-around;justify-content:space-around;padding:%?19.54397?% %?9.77199?%}.groupsgoods .goods.block .good[data-v-979b268a]{width:%?346.90554?%;margin-bottom:%?19.54397?%;border:none}.groupsgoods .goods.block .good .container[data-v-979b268a]{background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:0}.groupsgoods .goods.block .good .container .img-box[data-v-979b268a]{height:%?346.90554?%;display:-webkit-box;display:-webkit-flex;display:flex;width:100%}.groupsgoods .goods.block .good .container .img-box .img[data-v-979b268a]{width:100%;max-height:100%;margin:auto;display:block}.groupsgoods .goods.block .good .container .body[data-v-979b268a]{width:100%;min-height:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.groupsgoods .goods.block .good .container .title[data-v-979b268a]{margin:0;padding:%?9.77199?%\n  /*文本溢出时显示省略标记*/}.groupsgoods .goods.block .good .container .info[data-v-979b268a]{padding:%?9.77199?% %?9.77199?% %?14.65798?% %?9.77199?%}',""]),o.exports=t},f878:function(o,t,e){"use strict";e.r(t);var i=e("af38"),a=e("2546");for(var n in a)["default"].indexOf(n)<0&&function(o){e.d(t,o,(function(){return a[o]}))}(n);e("0a8f");var r,d=e("f0c5"),s=Object(d["a"])(a["default"],i["b"],i["c"],!1,null,"979b268a",null,!1,i["a"],r);t["default"]=s.exports}}]);