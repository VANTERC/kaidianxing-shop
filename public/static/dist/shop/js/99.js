(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[99],{"048a":function(e,a,t){},"2b37":function(e,a,t){"use strict";t("c4b3")},"718d":function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.staticRenderFns=a.render=void 0;var t=function(){var e=this,a=e._self._c;return a("div",{staticClass:"dispatch-address"},[a("kdx-form-title",[e._v("商城不配送区域设置")]),a("Form",{ref:"form",attrs:{"label-width":120}},[a("FormItem",{attrs:{label:"区域类型："}},[a("RadioGroup",{attrs:{value:e.value},on:{"on-change":e.changeType}},[a("Radio",{attrs:{disabled:e.noManagePerm,label:"1"}},[a("span",[e._v("只配送区域")])]),a("Radio",{attrs:{disabled:e.noManagePerm,label:"0"}},[a("span",[e._v("不配送区域")])])],1)],1),"0"==e.value?a("FormItem",{attrs:{label:"不配送区域："}},[a("div",{staticClass:"un-express"},[e.not_dispatch_areas.text?e._e():a("p",{staticClass:"pointer",on:{click:function(a){return e.showRegionSelect(e.not_dispatch_areas)}}},[e._v(" +添加不配送区域 ")]),e.not_dispatch_areas.text?a("table",[a("tr",[a("td",[a("div",[e._v(e._s(e.not_dispatch_areas.text))]),a("span",{staticClass:"rr-brand-color pointer",on:{click:function(a){return e.showRegionSelect(e.not_dispatch_areas)}}},[e._v("编辑")]),a("span",{staticClass:"rr-brand-color pointer marginL-10",on:{click:e.handleDelNotDispatchAreas}},[e._v("清空")])])])]):e._e()])]):e._e(),"1"==e.value?a("FormItem",{attrs:{label:"只配送区域："}},[a("div",{staticClass:"un-express"},[e.delivery_areas.text?e._e():a("p",{staticClass:"pointer",on:{click:function(a){return e.showRegionSelect(e.delivery_areas)}}},[e._v(" +添加配送区域 ")]),e.delivery_areas.text?a("table",[a("tr",[a("td",[a("div",[e._v(e._s(e.delivery_areas.text))]),a("span",{staticClass:"rr-brand-color pointer",on:{click:function(a){return e.showRegionSelect(e.delivery_areas)}}},[e._v("编辑")]),a("span",{staticClass:"rr-brand-color pointer marginL-10",on:{click:e.handleDelNotDispatchAreas}},[e._v("清空")])])])]):e._e()])]):e._e()],1),a("selector-region",{attrs:{visible:e.regionModal,list:e.regionData},on:{"on-ok":e.regionSelectOk,"on-cancel":e.regionSelectCancel}})],1)};a.render=t;var r=[];a.staticRenderFns=r},"734d":function(e,a,t){"use strict";t.r(a);var r=t("b125"),n=t.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){t.d(a,e,(function(){return r[e]}))}(s);a["default"]=n.a},a65a:function(e,a,t){"use strict";t.r(a);var r=t("e9b2"),n=t.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){t.d(a,e,(function(){return r[e]}))}(s);a["default"]=n.a},b125:function(e,a,t){var r=t("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t("5530"));t("a9e3");var s=r(t("0a52")),i={components:{SelectorRegion:s.default},props:{deny_area:{type:[Object,String]},delivery_area:{type:[Object,String]},value:{type:[String,Number],default:"0"}},data:function(){return{regionModal:!1,regionData:{},dispath_type:"0",not_dispatch_areas:{},delivery_areas:{}}},watch:{deny_area:function(e){e&&(this.not_dispatch_areas=(0,n.default)({},e))},delivery_area:function(e){e&&(this.delivery_areas=(0,n.default)({},e))}},computed:{noManagePerm:function(){return!this.$getPermMap("sysset.address_set.manage")}},created:function(){},mounted:function(){},methods:{changeType:function(e){this.$emit("input",e)},showRegionSelect:function(e){this.regionModal=!0;var a={provinces:e.provinces,citys:e.citys,areas:e.areas,text:e.text};this.regionData=(0,n.default)({},a)},handleDelNotDispatchAreas:function(){"0"==this.delivery_area?this.not_dispatch_areas={}:this.delivery_areas={},this.$emit("regionSelectOk")},regionSelectOk:function(e){"0"==this.delivery_area?this.not_dispatch_areas=e:this.delivery_areas=e,this.regionData=e,this.regionSelectCancel(),this.$emit("regionSelectOk",this.regionData)},regionSelectCancel:function(){this.regionModal=!1}}};a.default=i},c0b6:function(e,a,t){"use strict";var r=t("718d");t.o(r,"render")&&t.d(a,"render",(function(){return r["render"]})),t.o(r,"staticRenderFns")&&t.d(a,"staticRenderFns",(function(){return r["staticRenderFns"]}))},c4b3:function(e,a,t){},d9ad:function(e,a,t){"use strict";var r=t("f734");t.o(r,"render")&&t.d(a,"render",(function(){return r["render"]})),t.o(r,"staticRenderFns")&&t.d(a,"staticRenderFns",(function(){return r["staticRenderFns"]}))},e2fb:function(e,a,t){"use strict";t.r(a);var r=t("c0b6"),n=t("734d");for(var s in n)["default"].indexOf(s)<0&&function(e){t.d(a,e,(function(){return n[e]}))}(s);t("2b37");var i=t("2877"),d=Object(i["a"])(n["default"],r["render"],r["staticRenderFns"],!1,null,null,null);a["default"]=d.exports},e9b2:function(e,a,t){var r=t("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("e9c4");var n=r(t("5530")),s=r(t("e2fb")),i={components:{Dispatch:s.default},props:{},data:function(){return{addressData:{deny_area:{},wechat_address:"0",address_type:2,street_state:1,delivery_type:"0",delivery_area:{}},noDispatch:{}}},computed:{noManagePerm:function(){return!this.$getPermMap("sysset.address_set.manage")}},created:function(){},mounted:function(){this.getData()},methods:{getData:function(){var e=this;this.$api.settingApi.getAddressInfo({}).then((function(a){0==a.error&&(e.addressData=a,e.addressData.deny_area=a.deny_area?JSON.parse(a.deny_area):"",e.addressData.delivery_area=a.delivery_area?JSON.parse(a.delivery_area):"",e.addressData.delivery_type=a.delivery_type||"0")}))},regionSelectOk:function(e){"1"==this.addressData.delivery_type?this.addressData.delivery_area=e||{}:this.addressData.deny_area=e||{}},handleSave:function(){var e=this,a=(0,n.default)((0,n.default)({},this.addressData),{},{deny_area:JSON.stringify(this.addressData.deny_area),delivery_area:JSON.stringify(this.addressData.delivery_area)});this.$api.settingApi.setAddressInfo(a).then((function(a){0==a.error&&(e.getData(),e.$Message.success("保存成功"))}))}}};a.default=i},ede4:function(e,a,t){"use strict";t("048a")},f734:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.staticRenderFns=a.render=void 0;var t=function(){var e=this,a=e._self._c;return a("kdx-content-bar",{scopedSlots:e._u([{key:"btn",fn:function(){return[a("Button",{staticClass:"primary-long",attrs:{disabled:e.noManagePerm},on:{click:e.handleSave}},[e._v("保存")])]},proxy:!0}])},[a("div",{staticClass:"address-area"},[a("dispatch",{attrs:{deny_area:e.addressData.deny_area,delivery_area:e.addressData.delivery_area},on:{regionSelectOk:e.regionSelectOk},model:{value:e.addressData.delivery_type,callback:function(a){e.$set(e.addressData,"delivery_type",a)},expression:"addressData.delivery_type"}}),a("div",{staticClass:"wechat-share-address"},[a("kdx-form-title",[e._v("获取微信共享收货地址")]),a("Form",{ref:"form",attrs:{"label-width":120}},[a("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"是否开启："}},[a("RadioGroup",{model:{value:e.addressData.wechat_address,callback:function(a){e.$set(e.addressData,"wechat_address",a)},expression:"addressData.wechat_address"}},[a("Radio",{attrs:{disabled:e.noManagePerm,label:"1"}},[a("span",[e._v("开启")])]),a("Radio",{attrs:{disabled:e.noManagePerm,label:"0"}},[a("span",[e._v("关闭")])])],1),a("kdx-hint-text",[e._v("是否在用户添加收货地址时获取用户的微信收货地址")])],1)],1)],1)],1)])};a.render=t;var r=[];a.staticRenderFns=r},feb8:function(e,a,t){"use strict";t.r(a);var r=t("d9ad"),n=t("a65a");for(var s in n)["default"].indexOf(s)<0&&function(e){t.d(a,e,(function(){return n[e]}))}(s);t("ede4");var i=t("2877"),d=Object(i["a"])(n["default"],r["render"],r["staticRenderFns"],!1,null,null,null);a["default"]=d.exports}}]);