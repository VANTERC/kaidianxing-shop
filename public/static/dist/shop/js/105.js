(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[105],{"049d":function(e,a,t){"use strict";t.r(a);var n=t("c3df"),i=t.n(n);for(var l in n)["default"].indexOf(l)<0&&function(e){t.d(a,e,(function(){return n[e]}))}(l);a["default"]=i.a},"04b6":function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return i}));var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("kdx-content-bar",[t("div",{staticClass:"content"},[t("Payment",{ref:"payment",attrs:{wechatTemp:e.wechatTemp,alipayTemp:e.alipayTemp,setting:e.setting}})],1),t("div",{attrs:{slot:"btn"},slot:"btn"},[t("Button",{staticClass:"primary-long",attrs:{disabled:e.noManagePerm},on:{click:e.handleSave}},[e._v("提交")])],1)])},i=[]},"0840":function(e,a,t){"use strict";t("2228")},"1b0b":function(e,a,t){"use strict";t("d860")},2228:function(e,a,t){},"691d":function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return i}));var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("Form",{ref:"form",attrs:{"label-width":120,model:e.model,rules:e.rules}},[t("div",{staticClass:"card-content"},[t("kdx-form-title",[e._v("支付宝打款")]),t("kdx-hint-alert",{staticClass:"alert",attrs:{"show-icon":!1}},[e._v('说明：新接口需签约"转账到支付宝账户" , 之前已经签约使用旧接口可以正常打款的无需修改')]),t("FormItem",{attrs:{label:"支付宝打款:",prop:"alipay.enable"}},[t("RadioGroup",{model:{value:e.model.alipay.enable,callback:function(a){e.$set(e.model.alipay,"enable",a)},expression:"model.alipay.enable"}},[t("Radio",{attrs:{disabled:e.noManagePerm,label:"1"}},[t("span",[e._v("开启")])]),t("Radio",{attrs:{disabled:e.noManagePerm,label:"0"}},[t("span",[e._v("关闭")])])],1),"1"===e.model.alipay.enable?t("div",{staticClass:"pay-detail"},[t("FormItem",{attrs:{label:"打款模板:",prop:"alipay.id"}},[t("Select",{staticClass:"width-430",attrs:{placeholder:"请选择"},model:{value:e.model.alipay.id,callback:function(a){e.$set(e.model.alipay,"id",a)},expression:"model.alipay.id"}},e._l(e.alipayTemp,(function(e){return t("Option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1)],1):e._e()],1)],1),t("div",{staticClass:"card-content"},[t("kdx-form-title",[e._v("微信打款")]),t("FormItem",{attrs:{label:"微信打款:"}},[t("RadioGroup",{model:{value:e.model.wechat.enable,callback:function(a){e.$set(e.model.wechat,"enable",a)},expression:"model.wechat.enable"}},[t("Radio",{attrs:{disabled:e.noManagePerm,label:"1"}},[t("span",[e._v("开启")])]),t("Radio",{attrs:{disabled:e.noManagePerm,label:"0"}},[t("span",[e._v("关闭")])])],1),"1"===e.model.wechat.enable?t("div",{staticClass:"pay-detail"},[t("FormItem",{attrs:{label:"公众号模板",prop:"wechat.wechat.id"}},[t("Select",{staticClass:"width-430",attrs:{disabled:e.noManagePerm,placeholder:"请选择"},model:{value:e.model.wechat.wechat.id,callback:function(a){e.$set(e.model.wechat.wechat,"id",a)},expression:"model.wechat.wechat.id"}},e._l(e.wechatTemp,(function(e){return t("Option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1),t("FormItem",{attrs:{label:"小程序模板",prop:"wechat.wxapp.id"}},[t("Select",{staticClass:"width-430",attrs:{disabled:e.noManagePerm,placeholder:"请选择"},model:{value:e.model.wechat.wxapp.id,callback:function(a){e.$set(e.model.wechat.wxapp,"id",a)},expression:"model.wechat.wxapp.id"}},e._l(e.wechatTemp,(function(e){return t("Option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1),t("FormItem",{attrs:{label:"佣金打款：",prop:"pay_type_commission"}},[t("RadioGroup",{model:{value:e.model.pay_type_commission,callback:function(a){e.$set(e.model,"pay_type_commission",a)},expression:"model.pay_type_commission"}},[t("Radio",{attrs:{disabled:e.noManagePerm,label:"1"}},[t("span",[e._v("企业打款")])]),t("Radio",{attrs:{disabled:e.noManagePerm,label:"2"}},[t("span",[e._v("红包付款")])])],1),t("div",{staticClass:"tip"},[t("kdx-hint-text",[e._v("一般 小额打款 可以使用微信红包 建议使用微信打款金额 超过1000")])],1)],1),t("FormItem",{attrs:{label:"提现申请：",prop:"pay_type_withdraw"}},[t("RadioGroup",{model:{value:e.model.pay_type_withdraw,callback:function(a){e.$set(e.model,"pay_type_withdraw",a)},expression:"model.pay_type_withdraw"}},[t("Radio",{attrs:{disabled:e.noManagePerm,label:"1"}},[t("span",[e._v("企业打款")])]),t("Radio",{attrs:{disabled:e.noManagePerm,label:"2"}},[t("span",[e._v("红包付款")])])],1),t("div",{staticClass:"tip"},[t("kdx-hint-text",[e._v("一般 小额打款 可以使用微信红包 建议使用微信打款金额 超过1000")])],1)],1),t("FormItem",{attrs:{label:"红包金额：",prop:"pay_red_pack_money"}},[t("RadioGroup",{model:{value:e.model.pay_red_pack_money,callback:function(a){e.$set(e.model,"pay_red_pack_money",a)},expression:"model.pay_red_pack_money"}},[t("Radio",{attrs:{disabled:e.noManagePerm,label:"1"}},[t("span",[e._v("188元")])]),t("Radio",{attrs:{disabled:e.noManagePerm,label:"2"}},[t("span",[e._v("288元")])]),t("Radio",{attrs:{disabled:e.noManagePerm,label:"3"}},[t("span",[e._v("388元")])])],1),t("div",{staticClass:"tip"},[t("kdx-hint-text",[e._v("如果选用 红包打款，请选择每个红包最大面值")]),t("kdx-hint-text",[e._v("如果申请额度是500元，选择的是188红包，将会发送两个188红包和一个124红包")])],1)],1)],1):e._e()],1)],1)])},i=[]},"6e04":function(e,a,t){"use strict";t.r(a);var n=t("d91f"),i=t.n(n);for(var l in n)["default"].indexOf(l)<0&&function(e){t.d(a,e,(function(){return n[e]}))}(l);a["default"]=i.a},bb93:function(e,a,t){"use strict";t.r(a);var n=t("04b6"),i=t("6e04");for(var l in i)["default"].indexOf(l)<0&&function(e){t.d(a,e,(function(){return i[e]}))}(l);t("0840");var d=t("2877"),o=Object(d["a"])(i["default"],n["a"],n["b"],!1,null,"b1b9af84",null);a["default"]=o.exports},c3df:function(e,a,t){var n=t("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("e9c4"),t("d3b7");var i=n(t("5530")),l={name:"wxPay",props:{setting:{type:Object,default:function(){}},wechatTemp:{type:Array,default:function(){return[]}},alipayTemp:{type:Array,default:function(){return[]}}},computed:{noManagePerm:function(){return!this.$getPermMap("sysset.pay_set.manage")}},data:function(){return{rules:{"alipay.id":[{required:!0,message:"请选择支付宝模板"}],"wechat.wechat.id":[{required:!0,message:"请选择微信模板"}],"wechat.wxapp.id":[{required:!0,message:"请选择小程序模板"}],pay_type_commission:[{required:!0}],pay_type_withdraw:[{required:!0}],pay_red_pack_money:[{required:!0}]},model:{wechat:{enable:"0",wechat:{id:""},wxapp:{id:""}},alipay:{enable:"0",id:""},pay_type_commission:"1",pay_type_withdraw:"1",pay_red_pack_money:"1"}}},watch:{setting:{handler:function(e){this.model=(0,i.default)((0,i.default)({},this.model),e)},immediate:!0}},methods:{validate:function(){var e=this,a=JSON.parse(JSON.stringify(this.model));return new Promise((function(t,n){e.$refs.form.validate((function(e){e?("0"==a.alipay.enable&&delete a.alipay.id,"0"==a.wechat.enable&&(delete a.wechat.wechat,delete a.wechat.wxapp),t(a)):n(!1)}))}))}}};a.default=l},d860:function(e,a,t){},d91f:function(e,a,t){var n=t("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t("e2f6")),l={name:"index",components:{Payment:i.default},data:function(){return{setting:{},wechatTemp:[],alipayTemp:[]}},computed:{noManagePerm:function(){return!this.$getPermMap("sysset.pay_set.manage")}},mounted:function(){this.getData()},methods:{handleSave:function(){var e=this;this.$refs.payment.validate().then((function(a){e.$api.settingApi.editPaySetting(a).then((function(a){0===a.error&&(e.$Message.success("操作成功"),e.getData())}))}))},getData:function(){var e=this;this.$api.settingApi.getPaySetting().then((function(a){if(0==a.error){var t=a.alipay_template,n=a.wechat_template,i=a.pay_type_commission,l=a.pay_type_withdraw,d=a.pay_red_pack_money,o=a.alipay,r=a.wechat;e.setting={alipay:o,wechat:r,pay_type_commission:i,pay_type_withdraw:l,pay_red_pack_money:d},e.wechatTemp=n,e.alipayTemp=t}}))}}};a.default=l},e2f6:function(e,a,t){"use strict";t.r(a);var n=t("691d"),i=t("049d");for(var l in i)["default"].indexOf(l)<0&&function(e){t.d(a,e,(function(){return i[e]}))}(l);t("1b0b");var d=t("2877"),o=Object(d["a"])(i["default"],n["a"],n["b"],!1,null,"2af0c521",null);a["default"]=o.exports}}]);