(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[174],{"7d9a":function(t,e,a){"use strict";a.r(e);var n=a("e690"),i=a("e193");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("f897");var o=a("2877"),l=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,"7c21ecdb",null);e["default"]=l.exports},"7e57":function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530"));a("d3b7");var r={data:function(){return{loading:!1,model:{status:"1"},rule:{status:[{required:!0,message:"请选择是否开启朋友圈推广"}]}}},created:function(){this.getData()},computed:{noManagePerm:function(){return!this.$getPermMap("material.setting.manage")}},methods:{getData:function(){var t=this;this.loading=!0,this.$api.materialApi.getMaterialSetting().then((function(e){0===e.error&&(t.model=(0,i.default)({},e.data))})).finally((function(){t.loading=!1}))},handleSave:function(){var t=this;this.loading=!0,this.$refs["form"].validate((function(e){if(e){var a=(0,i.default)({},t.model);t.$api.materialApi.setMaterialSetting(a).then((function(e){0===e.error&&t.$Message.success("操作成功")}))}})).finally((function(){t.loading=!1}))}}};e.default=r},9136:function(t,e,a){},e193:function(t,e,a){"use strict";a.r(e);var n=a("7e57"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},e690:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("kdx-content-bar",{attrs:{loading:t.loading},scopedSlots:t._u([{key:"btn",fn:function(){return[a("Button",{staticClass:"primary-long",attrs:{disabled:t.noManagePerm},on:{click:t.handleSave}},[t._v("保存")])]},proxy:!0}])},[a("br"),a("kdx-hint-alert",[a("div",[t._v("朋友圈推广入口，仅支持在小程序端一键保存图文，需要您到微信小程序后台配置下载域名，方法如下：")]),a("div",[t._v("1.咨询您的商城服务商，到管理端后台获取【系统设置】-【远程存储】下的访问url")]),a("div",[t._v("2.若您的存储方式“本地存储”，则使用您业务端后台主域名进行操作")]),a("div",[t._v("3.进入微信第三方平台，修改您的平台信息，在【开发资料】中找到【小程序服务器域名】项，将该url填入并保存")]),a("div",[t._v("4.然后进入微信小程序的后台，进入【开发】-【开发设置】-【配置服务器信息】")]),a("div",[t._v("5.找到【downloadFile合法域名】项，将该url填入并保存")]),a("div",[t._v("6.至此，您的朋友圈素材才可支持图片下载")])]),a("div",{staticClass:"settings"},[a("kdx-form-title",[t._v("基础设置")]),a("Form",{ref:"form",attrs:{model:t.model,"label-width":120,rules:t.rule},nativeOn:{submit:function(t){t.preventDefault()}}},[a("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"一键发圈：",prop:"status"}},[a("RadioGroup",{model:{value:t.model.status,callback:function(e){t.$set(t.model,"status",e)},expression:"model.status"}},[a("Radio",{attrs:{label:"1"}},[t._v("开启")]),a("Radio",{attrs:{label:"0"}},[t._v("关闭")])],1),a("kdx-hint-text",[t._v(" 全场商品的朋友圈素材将自动读取系统默认文案和商品主图、轮播图，可在【素材管理】中为特定商品定制推广文案和图片 ")])],1)],1)],1)],1)},i=[]},f897:function(t,e,a){"use strict";a("9136")}}]);