(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[154],{"0497":function(e,o,t){},2593:function(e,o,t){"use strict";t.r(o);var i=t("f2b0"),a=t("954f");for(var s in a)["default"].indexOf(s)<0&&function(e){t.d(o,e,(function(){return a[e]}))}(s);t("4bad3");var n=t("2877"),d=Object(n["a"])(a["default"],i["a"],i["b"],!1,null,"af99700c",null);o["default"]=d.exports},"4bad3":function(e,o,t){"use strict";t("0497")},"954f":function(e,o,t){"use strict";t.r(o);var i=t("f8e5"),a=t.n(i);for(var s in i)["default"].indexOf(s)<0&&function(e){t.d(o,e,(function(){return i[e]}))}(s);o["default"]=a.a},f2b0:function(e,o,t){"use strict";t.d(o,"a",(function(){return i})),t.d(o,"b",(function(){return a}));var i=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("kdx-content-bar",{attrs:{loading:e.loading},scopedSlots:e._u([{key:"btn",fn:function(){return[t("Button",{staticClass:"primary-long",on:{click:e.handleSave}},[e._v("提交")])]},proxy:!0}])},[t("div",{staticClass:"accessory-setting"},[t("kdx-form-title",[e._v("附件设置")]),t("Form",{ref:"form",attrs:{model:e.model,rules:e.rules,"label-width":120}},[t("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"图片类型：",prop:"imageType"}},[t("CheckboxGroup",{model:{value:e.model.imageType,callback:function(o){e.$set(e.model,"imageType",o)},expression:"model.imageType"}},e._l(e.optionType.image,(function(o){return t("Checkbox",{key:o,attrs:{label:o}},[e._v(e._s(o))])})),1),t("kdx-hint-text",[e._v("仅支持"+e._s(e.optionType.image.join("、")))])],1),t("FormItem",{attrs:{label:"图片大小限制：",prop:"imageSize"}},[t("Input",{staticClass:"width-160",model:{value:e.model.imageSize,callback:function(o){e.$set(e.model,"imageSize",o)},expression:"model.imageSize"}},[t("span",{attrs:{slot:"append"},slot:"append"},[e._v("KB")])]),t("kdx-hint-text",[e._v("默认为 10240KB")])],1),t("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"图片压缩：",prop:"imageCompress"}},[t("RadioGroup",{model:{value:e.model.imageCompress,callback:function(o){e.$set(e.model,"imageCompress",o)},expression:"model.imageCompress"}},[t("Radio",{attrs:{label:1}},[e._v("开启")]),t("Radio",{attrs:{label:0}},[e._v("关闭")])],1),1===e.model.imageCompress?[t("Input",{staticClass:"width-160",model:{value:e.model.imageCompressWidth,callback:function(o){e.$set(e.model,"imageCompressWidth",o)},expression:"model.imageCompressWidth"}},[t("span",{attrs:{slot:"append"},slot:"append"},[e._v("PX")])])]:e._e(),t("kdx-hint-text",[e._v("手机端图片是否开启压缩")])],2),t("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"音频类型：",prop:"audioType"}},[t("CheckboxGroup",{model:{value:e.model.audioType,callback:function(o){e.$set(e.model,"audioType",o)},expression:"model.audioType"}},e._l(e.optionType.audio,(function(o){return t("Checkbox",{key:o,attrs:{label:o}},[e._v(e._s(o))])})),1)],1),t("FormItem",{attrs:{label:"音频大小限制：",prop:"audioSize"}},[t("Input",{staticClass:"width-160",model:{value:e.model.audioSize,callback:function(o){e.$set(e.model,"audioSize",o)},expression:"model.audioSize"}},[t("span",{attrs:{slot:"append"},slot:"append"},[e._v("KB")])]),t("kdx-hint-text",[e._v("默认为 20480KB")])],1),t("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"视频类型：",prop:"videoType"}},[t("CheckboxGroup",{model:{value:e.model.videoType,callback:function(o){e.$set(e.model,"videoType",o)},expression:"model.videoType"}},e._l(e.optionType.video,(function(o){return t("Checkbox",{key:o,attrs:{label:o}},[e._v(e._s(o))])})),1)],1),t("FormItem",{attrs:{label:"视频大小限制：",prop:"videoSize"}},[t("Input",{staticClass:"width-160",model:{value:e.model.videoSize,callback:function(o){e.$set(e.model,"videoSize",o)},expression:"model.videoSize"}},[t("span",{attrs:{slot:"append"},slot:"append"},[e._v("KB")])]),t("kdx-hint-text",[e._v("默认为 10240KB")])],1)],1)],1)])},a=[]},f8e5:function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t={data:function(){return{model:{imageType:[],imageSize:"",imageCompress:1,imageCompressWidth:"",videoType:[],videoSize:"",audioType:[],audioSize:""},rules:{imageType:[{required:!0,type:"array",message:"图片类型必填"}],audioType:[{required:!0,type:"array",message:"音频类型必填"}],videoType:[{required:!0,type:"array",message:"视频类型必填"}]},optionType:{usable_type:[],image:[],video:[]},loading:!1}},created:function(){this.getData()},methods:{getData:function(){var e=this;this.$api.systemApi.getAccessorySetting().then((function(o){var t=o.error,i=o.settings,a=o.usable_type;if(0===t){e.optionType=a;var s=i.image,n=i.video,d=i.audio;e.model={imageType:(null===s||void 0===s?void 0:s.extensions)||[],imageSize:null===s||void 0===s?void 0:s.max_size,imageCompress:null===s||void 0===s?void 0:s.compress,imageCompressWidth:null===s||void 0===s?void 0:s.compress_width,videoType:n.extensions,videoSize:n.max_size,audioType:d.extensions,audioSize:d.max_size}}}))},handleSave:function(){var e=this;this.$refs["form"].validate((function(o){if(o){var t={max_size:e.model.imageSize,extensions:e.model.imageType,compress:e.model.imageCompress,compress_width:e.model.imageCompressWidth},i={max_size:e.model.videoSize,extensions:e.model.videoType},a={max_size:e.model.audioSize,extensions:e.model.audioType},s={image:t,video:i,audio:a};e.$api.systemApi.setAccessorySetting(s).then((function(o){0===o.error&&(e.$Message.success("附件设置保存成功"),e.getData())}))}}))},resetModel:function(){this.model={}}}};o.default=t}}]);