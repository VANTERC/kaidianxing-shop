(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[150,26,39,40,41,42,43,167,181,182,183,184,185,186,187],{"49cb":function(t,e,i){"use strict";i.r(e);var a=i("eccf"),o=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=o.a},"4d5b":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.componentData&&"cube"==t.componentData.id?i("div",{staticClass:"cube",style:{padding:t.px2rpx(t.componentData.style.margintop)+" "+t.px2rpx(t.componentData.style.marginleft)+" "+t.px2rpx(t.componentData.style.marginbottom)}},[0==t.getImgList.length?i("div",{staticClass:"cube-template",style:t.getStyle},[t.startLoadImg?i("img",{staticClass:"cube-template-img",attrs:{src:t.$utils.staticMediaUrl("decorate/cube_default.png")}}):t._e()]):i("div",{staticClass:"container"},["normal"==t.getCubeTemp?i("div",{staticClass:"normal-box",style:{margin:"0 "+t.px2rpx(0-t.componentData.style.margininside/2),borderRadius:t.px2rpx(t.componentData.style.topradius)+" "+t.px2rpx(t.componentData.style.topradius)+" "+t.px2rpx(t.componentData.style.bottomradius)+" "+t.px2rpx(t.componentData.style.bottomradius),height:t.px2rpx(t.getNormalHeight)}},t._l(t.componentData.data,(function(e,a){return i("img",{key:a,staticClass:"fit-img",style:{borderRadius:t.px2rpx(t.componentData.style.topradius)+" "+t.px2rpx(t.componentData.style.topradius)+" "+t.px2rpx(t.componentData.style.bottomradius)+" "+t.px2rpx(t.componentData.style.bottomradius),margin:"0 "+t.px2rpx(t.componentData.style.margininside/2),width:t.px2rpx(t.getNormalWidth)},attrs:{src:t.startLoadImg?t.$utils.mediaUrl(e.imgurl):"",mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(a)}}})})),0):"rect"==t.getCubeTemp?i("div",{staticClass:"rect-box",class:[t.componentData.params.cubestyle],style:{margin:""+t.px2rpx(0-t.componentData.style.margininside/2),height:t.getRectHeight}},[i("div",{staticClass:"rect-img-box",style:{borderRadius:t.getRectStyle.borderRadius,margin:t.getRectStyle.margin},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(0)}}},[t.getImgUrl(0)&&t.startLoadImg?i("img",{staticClass:"cube-img",attrs:{src:t.getImgUrl(0)}}):i("div",{staticClass:"cube-img"})]),i("div",{staticClass:"second_box"},[i("div",{staticClass:"rect-img-box",style:{borderRadius:t.getRectStyle.borderRadius,margin:t.getRectStyle.margin},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(1)}}},[t.getImgUrl(1)&&t.startLoadImg?i("img",{staticClass:"cube-img",attrs:{src:t.getImgUrl(1)}}):i("div",{staticClass:"cube-img"})]),"left1_right3"!=t.componentData.params.cubestyle&&t.startLoadImg?i("div",{staticClass:"rect-img-box",style:{borderRadius:t.getRectStyle.borderRadius,margin:t.getRectStyle.margin},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(2)}}},[t.getImgUrl(2)&&t.startLoadImg?i("img",{staticClass:"cube-img",attrs:{src:t.getImgUrl(2)}}):i("div",{staticClass:"cube-img"})]):i("div",{staticClass:"third-box"},[i("div",{staticClass:"rect-img-box",style:{borderRadius:t.getRectStyle.borderRadius,margin:t.getRectStyle.margin},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(2)}}},[t.getImgUrl(2)&&t.startLoadImg?i("img",{staticClass:"cube-img",attrs:{src:t.getImgUrl(2)}}):i("div",{staticClass:"cube-img"})]),i("div",{staticClass:"rect-img-box",style:{borderRadius:t.getRectStyle.borderRadius,margin:t.getRectStyle.margin},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(3)}}},[t.getImgUrl(3)&&t.startLoadImg?i("img",{staticClass:"cube-img",attrs:{src:t.getImgUrl(3)}}):i("div",{staticClass:"cube-img"})])])])]):"custom"==t.getCubeTemp?i("div",{staticClass:"custom-box",style:{margin:""+t.px2rpx(0-t.componentData.style.margininside/2),height:t.getRectHeight}},t._l(t.getImgList,(function(e,a){return i("div",{key:a,staticClass:"custom-img-box",style:{padding:""+t.px2rpx(t.componentData.style.margininside/2),left:t.getCustomStyle(e).left,top:t.getCustomStyle(e).top,width:t.getCustomStyle(e).width,height:t.getCustomStyle(e).height}},[t.startLoadImg?i("img",{staticClass:"custom-img",style:{borderRadius:t.px2rpx(t.componentData.style.topradius)+" "+t.px2rpx(t.componentData.style.topradius)+" "+t.px2rpx(t.componentData.style.bottomradius)+" "+t.px2rpx(t.componentData.style.bottomradius)},attrs:{src:t.$utils.mediaUrl(e.imgurl),mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(a)}}}):t._e()])})),0):t._e()])]):t._e(),t.componentData&&"hot_area"==t.componentData.id?i("div",{staticClass:"hot_area",style:{padding:t.px2rpx(t.componentData.style.margintop)+" "+t.px2rpx(t.componentData.style.marginleft)+" "+t.px2rpx(t.componentData.style.marginbottom)}},[i("div",{staticClass:"container"},[i("img",{staticClass:"hot_area_img",style:{borderRadius:t.px2rpx(t.componentData.style.topradius)+" "+t.px2rpx(t.componentData.style.topradius)+" "+t.px2rpx(t.componentData.style.bottomradius)+" "+t.px2rpx(t.componentData.style.bottomradius)},attrs:{src:t.$utils.mediaUrl(t.componentData.params.imgurl)||t.$utils.staticMediaUrl("decorate/goods_col1.png"),mode:"widthFix"}}),t._l(t.componentData.data,(function(e,a){return i("v-uni-button",{key:a,staticClass:"hot_item",style:{left:t.getPoint(e).left,top:t.getPoint(e).top,width:t.getPoint(e).width,height:t.getPoint(e).height,zIndex:t.getPoint(e).zIndex},attrs:{"open-type":"wx_service"==e.linkurl?"contact":""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickHotItem(e)}}})}))],2)]):t._e()])},r=[]},8318:function(t,e,i){var a=i("b35a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("5daf03aa",a,!0,{sourceMap:!1,shadowMode:!1})},b35a:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.cube .cube-template-img[data-v-6d74d564]{display:block;width:100%;height:100%;object-fit:cover}.cube .container[data-v-6d74d564]{overflow:hidden}.cube .normal-box[data-v-6d74d564]{border-radius:%?12?%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex}.cube .fit-img[data-v-6d74d564]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;-webkit-flex-shrink:0;flex-shrink:0;object-fit:cover}.cube-img[data-v-6d74d564]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:block;object-fit:cover}.cube .custom-box[data-v-6d74d564]{position:relative}.cube .custom-box .custom-img-box[data-v-6d74d564]{position:absolute}.cube .custom-box .custom-img[data-v-6d74d564]{border-radius:%?12?%;object-fit:cover;height:100%;width:100%}.cube .rect-box[data-v-6d74d564]{display:-webkit-box;display:-webkit-flex;display:flex}.cube .rect-box .rect-img-box[data-v-6d74d564]{-webkit-box-flex:1;-webkit-flex:1;flex:1;border-radius:%?12?%;overflow:hidden}.cube .rect-box .rect-img-box .cube-img[data-v-6d74d564]{width:100%;height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:block;object-fit:cover}.cube .rect-box .second_box[data-v-6d74d564]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden}.cube .rect-box.top1_bottom2[data-v-6d74d564]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.cube .rect-box.left1_right2 .second_box[data-v-6d74d564], .cube .rect-box.left1_right3 .second_box[data-v-6d74d564]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.cube .rect-box .third-box[data-v-6d74d564]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.hot_area .container[data-v-6d74d564]{position:relative}.hot_area .hot_item[data-v-6d74d564]{position:absolute;left:0;right:0;background-color:initial}.hot_area .hot_item[data-v-6d74d564]:after{border:0}.hot_area_img[data-v-6d74d564]{display:block;width:100%;border-radius:%?12?%}',""]),t.exports=e},c984:function(t,e,i){var a=i("4ea4");i("8e6e"),i("ac6a"),i("456d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("ade3")),r=i("2f62"),n=i("dc11");function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){(0,o.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var l={computed:s({},(0,r.mapState)("decorate",{pageList:function(t){return t.pageList}})),props:{startLoadImg:{type:Boolean,default:!0},componentData:{type:Object,default:function(){return{style:{},params:{}}}}},methods:{px2rpx:n.px2rpx}};e.default=l},d5bc:function(t,e,i){"use strict";var a=i("8318"),o=i.n(a);o.a},dc11:function(t,e,i){function a(){new Promise((function(t,e){uni?uni.getSystemInfo({success:function(e){t(e)}}):t({pixelRatio:window.devicePixelRatio})}))}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return void 0===t&&(t=i),t||(t=0),t*e+"rpx"}Object.defineProperty(e,"__esModule",{value:!0}),e.getSystemInfo=a,e.px2rpx=o,i("4917")},e7f9:function(t,e,i){"use strict";i.r(e);var a=i("4d5b"),o=i("49cb");for(var r in o)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("d5bc");var n,c=i("f0c5"),s=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"6d74d564",null,!1,a["a"],n);e["default"]=s.exports},eccf:function(t,e,i){var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5");var o=a(i("3835")),r=a(i("c984")),n={cell_two:2,cell_three:3},c={cell_two:"normal",cell_three:"normal",top1_bottom2:"rect",left1_right3:"rect",left1_right2:"rect",custom:"custom"},s={mixins:[r.default],computed:{getNormalWidth:function(){var t=n[this.componentData.params.cubestyle],e=this.componentData.style,i=e.margininside,a=e.marginleft;return(750-2*a-i*(t-1))/t},getNormalHeight:function(){var t=this.componentData.params,e=t.imgheight,i=t.imgwidth;return e*this.getNormalWidth/i},getRectHeight:function(){var t=this.componentData.style.marginleft;return this.px2rpx(750-2*t)},getCubeTemp:function(){return c[this.componentData.params.cubestyle]},getImgList:function(){return this.componentData.data.filter((function(t){return t.imgurl}))},getStyle:function(){var t=["cell_two","cell_three"],e=this.componentData.style.marginleft,i=750-2*e,a=t.indexOf(this.componentData.params.cubestyle)>-1?2:1;return{height:this.px2rpx(i/a),width:this.px2rpx(i)}},getRectStyle:function(){return{borderRadius:"".concat(this.px2rpx(this.componentData.style.topradius)," ").concat(this.px2rpx(this.componentData.style.topradius)," ").concat(this.px2rpx(this.componentData.style.bottomradius)," ").concat(this.px2rpx(this.componentData.style.bottomradius)),margin:"".concat(this.px2rpx(this.componentData.style.margininside/2))}}},methods:{clickItem:function(t){this.$emit("custom-event",{target:"cube/clickItem",data:this.componentData.data[t]})},getCustomStyle:function(t){if(t&&t.startP){var e=t.startP.split(","),i=(0,o.default)(e,2),a=i[0],r=i[1],n=t.endP.split(","),c=(0,o.default)(n,2),s=c[0],l=c[1],d=100/this.componentData.params.cubenum;return{left:(a-1)*d+"%",top:(r-1)*d+"%",width:(s-a+1)*d+"%",height:(l-r+1)*d+"%"}}},getImgUrl:function(t){var e;return this.componentData.data[t]?this.$utils.mediaUrl(null===(e=this.componentData.data[t])||void 0===e?void 0:e.imgurl):""},getPoint:function(t){return{left:t.x+"%",top:t.y+"%",width:t.w+"%",height:t.h+"%",zIndex:this.$isPC?-1:9999}},clickHotItem:function(t){this.$emit("custom-event",{target:"hot_area/clickItem",data:t})}}};e.default=s}}]);