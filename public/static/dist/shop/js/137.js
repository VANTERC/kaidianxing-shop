(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[137],{"0a6b":function(t,e,a){"use strict";a.r(e);var o=a("f5c8"),n=a.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(i);e["default"]=n.a},"46b7":function(t,e,a){t.exports=a.p+"static/dist/shop/img/goods_detail.png"},6938:function(t,e,a){},"99b5":function(t,e,a){"use strict";a("6938")},b9fa:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return n}));var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("kdx-content-bar",{attrs:{loading:t.loading},scopedSlots:t._u([{key:"btn",fn:function(){return[o("Button",{staticClass:"primary-long",attrs:{type:"primary",disabled:t.noManagePerm},on:{click:t.handleSave}},[t._v("保存")])]},proxy:!0}])},[o("div",{staticClass:"content"},[o("kdx-form-title",[t._v("拼团设置")]),o("Form",{ref:"form",attrs:{model:t.model,rules:t.rules,"label-width":150}},[o("FormItem",{attrs:{label:"商品详情中团列表："}},[o("RadioGroup",{model:{value:t.model.team_list,callback:function(e){t.$set(t.model,"team_list",e)},expression:"model.team_list"}},[o("Radio",{attrs:{label:"1",disabled:t.noManagePerm}},[o("span",[t._v("开启")]),o("kdx-hint-tooltip",{attrs:{type:"image",image:a("46b7")}})],1),o("Radio",{attrs:{label:"0",disabled:t.noManagePerm}},[o("span",[t._v("关闭")])])],1),o("kdx-hint-text",[t._v(" 开启后，用户可使用参团功能，选择已开团团长进行拼单。若关闭则只支持团长开团 ")])],1),o("FormItem",{attrs:{label:"未付款订单：",prop:"order_status"}},[o("RadioGroup",{model:{value:t.model.auto_close_open,callback:function(e){t.$set(t.model,"auto_close_open",e)},expression:"model.auto_close_open"}},[o("Radio",{attrs:{label:"0",disabled:t.noManagePerm}},[o("span",[t._v("永不关闭")])]),o("Radio",{attrs:{label:"1",disabled:t.noManagePerm}},[o("span",[t._v("自定义关闭时间")])])],1),o("kdx-hint-text",[t._v(" 拼团只读取本交易规则设置 ")]),"1"==t.model.auto_close_open?o("div",{staticClass:"main marginT-10"},[o("FormItem",{staticClass:"number-input label-width-100 refund-input",attrs:{label:"拍下来付款订单：",prop:"auto_close_time"}},[o("div",{staticClass:"flex width-340 "},[o("kdx-rr-input",{attrs:{number:"",minValue:5,maxValue:60,fixed:0,disabled:t.noManagePerm},model:{value:t.model.auto_close_time,callback:function(e){t.$set(t.model,"auto_close_time",e)},expression:"model.auto_close_time"}}),o("span",{staticClass:"ivu-input-group-append item-append"},[t._v("分钟")]),o("span",{staticClass:"paddingL"},[t._v("內未付款，自动关闭订单")])],1)]),o("kdx-hint-text",{staticStyle:{"margin-left":"20px"}},[t._v("订单自动关闭时间必须在5-60分钟之间，订单关闭后自动退还库存。 ")])],1):t._e()],1)],1)],1)])},n=[]},d4ea:function(t,e,a){"use strict";a.r(e);var o=a("b9fa"),n=a("0a6b");for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);a("99b5");var s=a("2877"),l=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,"1f62050a",null);e["default"]=l.exports},f5c8:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("d3b7");var o={data:function(){return{model:{team_list:"0",auto_close_open:"1",auto_close_time:"5"},rules:{auto_close_time:[{required:!0,message:"请输入拍下来付款订单分钟"},{validator:function(t,e,a){e=parseInt(e),e<5?a(new Error("订单自动关闭时间要大于5")):e>60&&a(new Error("订单自动关闭时间要小于60")),a()}}]},loading:!1}},computed:{noManagePerm:function(){return!this.$getPermMap("groups_setting.manage")}},mounted:function(){this.getSetting()},methods:{getSetting:function(){var t=this;this.$api.groupsApi.getGroupsSetting().then((function(e){var a,o;0===e.error&&(console.log("res",e),t.model.team_list=e.data.team_list||"0",t.model.auto_close_open=(null===(a=e.data.auto_close)||void 0===a?void 0:a.open)||"0",t.model.auto_close_time=(null===(o=e.data.auto_close)||void 0===o?void 0:o.close_time)||"0")}))},handleSave:function(){var t=this;this.$refs["form"].validate((function(e){e&&(t.loading=!0,t.$api.groupsApi.setGroupsSetting(t.model).then((function(e){0===e.error&&t.$Message.success("拼团设置成功")})).finally((function(){t.loading=!1})))}))}}};e.default=o}}]);