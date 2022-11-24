(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[155],{"235e":function(e,t,a){"use strict";a("e42b")},"4c95":function(e,t,a){var l=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("d3b7");var i=l(a("5530")),n=a("8812"),o=a("2f62"),d={name:"index",computed:(0,i.default)((0,i.default)({},(0,n.modelMap)()),(0,o.mapState)("goodAddEdit",{model:function(e){return e.model}})),data:function(){return{creditStatus:!1,rules:{deduction_credit:[{required:!0,message:"最多积分抵扣额必填",trigger:"blur"}],deduction_balance:[{required:!0,message:"最多余额抵扣额必填"}],single_full_unit:[{required:!0,message:"单品满件包邮必填"}],single_full_quota:[{required:!0,message:"单品满额包邮必填"}],give_credit_num:[{required:!0,message:"赠送积分必填"}]}}},created:function(){this.getSetting()},mounted:function(){},methods:{getSetting:function(){var e=this;this.$api.settingApi.getCreditSetting().then((function(t){0===t.error&&(e.creditStatus=+t.give_credit_status&&1===+t.give_credit_type)}))},pointsDeductionChange:function(e){var t=this,a=this.$createElement;console.log("$store",this.$store.state.config.deduct),"1"!=this.$store.state.config.deduct.credit_state&&("1"!==e&&"2"!==e||this.$Modal.confirm({title:"您还未开启积分抵扣设置",okText:"积分管理",render:function(){return a("kdx-hint-text",[a("span",["设置单商品积分抵扣时,需要在设置"]),"【积分设置】",a("span",["中开启积分抵扣"])])},onOk:function(){var e=t.$router.resolve({path:"/setting/credit/index"});window.open(e.href,"_blank")},onCancel:function(){t.model_deduction_credit_type="0"}}))},balanceDeductionChange:function(e){var t=this,a=this.$createElement;"1"!=this.$store.state.config.deduct.balance_state&&("1"!==e&&"2"!==e||this.$Modal.confirm({title:"您还未开启余额抵扣设置",okText:"余额管理",render:function(){return a("kdx-hint-text",[a("span",["设置单商品余额抵扣时,需要在设置"]),"【余额设置】",a("span",["中开启余额抵扣"])])},onOk:function(){var e=t.$router.resolve({path:"/setting/balance/index"});window.open(e.href,"_blank")},onCancel:function(){t.model_deduction_balance_type="0"}}))},validate:function(){var e=this;return new Promise((function(t){e.$refs["form"].validate((function(e){t(e)}))}))}}};t.default=d},"6ace":function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return i}));var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"good-add-market"},[a("Form",{ref:"form",attrs:{model:e.model,rules:e.rules,"label-width":120},nativeOn:{submit:function(e){e.preventDefault()}}},[a("div",{staticClass:"box"},[a("kdx-form-title",[e._v(" 抵扣设置 ")]),a("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"积分抵扣：",prop:"deduction_credit_type"}},[a("RadioGroup",{on:{"on-change":e.pointsDeductionChange},model:{value:e.model_deduction_credit_type,callback:function(t){e.model_deduction_credit_type=t},expression:"model_deduction_credit_type"}},[a("Radio",{attrs:{label:"0"}},[e._v("关闭")]),a("Radio",{attrs:{label:"1"}},[e._v("不限制抵扣数量")]),a("Radio",{attrs:{label:"2"}},[e._v("自定义最多抵扣")])],1),"2"===e.model_deduction_credit_type?a("div",{staticClass:"nest-box"},[a("FormItem",{attrs:{label:"最多抵扣：",prop:"deduction_credit"}},[a("kdx-rr-input",{staticClass:"width-160",attrs:{number:"",fixed:2,"min-value":0,"max-value":9999999.99,maxlength:10,placeholder:"请输入"},model:{value:e.model_deduction_credit,callback:function(t){e.model_deduction_credit=t},expression:"model_deduction_credit"}},[a("span",{attrs:{slot:"append"},slot:"append"},[e._v("元")])]),a("Checkbox",{attrs:{"true-value":"1","false-value":"0"},model:{value:e.model_deduction_credit_repeat,callback:function(t){e.model_deduction_credit_repeat=t},expression:"model_deduction_credit_repeat"}},[e._v(" 允许多件累计抵扣 ")])],1)],1):e._e()],1),a("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"余额抵扣：",prop:"deduction_balance_type"}},[a("RadioGroup",{on:{"on-change":e.balanceDeductionChange},model:{value:e.model_deduction_balance_type,callback:function(t){e.model_deduction_balance_type=t},expression:"model_deduction_balance_type"}},[a("Radio",{attrs:{label:"0"}},[e._v("关闭")]),a("Radio",{attrs:{label:"1"}},[e._v("不限制抵扣数量")]),a("Radio",{attrs:{label:"2"}},[e._v("自定义最多抵扣")])],1),"2"===e.model_deduction_balance_type?a("div",{staticClass:"nest-box"},[a("FormItem",{attrs:{label:"最多抵扣：",prop:"deduction_balance"}},[a("kdx-rr-input",{staticClass:"width-160",attrs:{number:"",fixed:2,"min-value":0,"max-value":9999999.99,maxlength:10,placeholder:"请输入"},model:{value:e.model_deduction_balance,callback:function(t){e.model_deduction_balance=t},expression:"model_deduction_balance"}},[a("span",{attrs:{slot:"append"},slot:"append"},[e._v("元")])]),a("Checkbox",{attrs:{"true-value":"1","false-value":"0"},model:{value:e.model_deduction_balance_repeat,callback:function(t){e.model_deduction_balance_repeat=t},expression:"model_deduction_balance_repeat"}},[e._v(" 允许多件累计抵扣 ")])],1)],1):e._e()],1)],1),"2"!==e.model_type?a("div",{staticClass:"box"},[a("kdx-form-title",{staticStyle:{"margin-bottom":"0"}},[e._v(" 单件包邮 ")]),a("kdx-hint-alert",{staticClass:"alert",attrs:{"show-icon":""}},[e._v("开启后用户需单独购买该商品才支持满件/满额包邮")]),a("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"单品满件包邮：",prop:"single_full_unit_switch"}},[a("RadioGroup",{model:{value:e.model_single_full_unit_switch,callback:function(t){e.model_single_full_unit_switch=t},expression:"model_single_full_unit_switch"}},[a("Radio",{attrs:{label:"1"}},[e._v("开启")]),a("Radio",{attrs:{label:"0"}},[e._v("关闭")])],1),"1"===e.model_single_full_unit_switch?a("div",{staticClass:"nest-box"},[a("FormItem",{attrs:{label:"包邮条件：",prop:"single_full_unit"}},[a("kdx-rr-input",{staticClass:"width-250",attrs:{number:"",fixed:0,minValue:0,"max-value":999999999,placeholder:"请输入"},model:{value:e.model_single_full_unit,callback:function(t){e.model_single_full_unit=t},expression:"model_single_full_unit"}},[a("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("满")]),a("span",{attrs:{slot:"append"},slot:"append"},[e._v("件")])])],1)],1):e._e()],1),a("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"单品满额包邮：",prop:"single_full_quota_switch"}},[a("RadioGroup",{model:{value:e.model_single_full_quota_switch,callback:function(t){e.model_single_full_quota_switch=t},expression:"model_single_full_quota_switch"}},[a("Radio",{attrs:{label:"1"}},[e._v("开启")]),a("Radio",{attrs:{label:"0"}},[e._v("关闭")])],1),"1"===e.model_single_full_quota_switch?a("div",{staticClass:"nest-box"},[a("FormItem",{attrs:{label:"包邮条件：",prop:"single_full_quota"}},[a("kdx-rr-input",{staticClass:"width-250",attrs:{number:"",minValue:0,maxValue:9999999.99,fixed:2,placeholder:"请输入"},model:{value:e.model_single_full_quota,callback:function(t){e.model_single_full_quota=t},expression:"model_single_full_quota"}},[a("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("满")]),a("span",{attrs:{slot:"append"},slot:"append"},[e._v("元")])])],1)],1):e._e()],1)],1):e._e(),e.creditStatus?a("div",{staticClass:"box"},[a("kdx-form-title",[e._v("消费得积分")]),a("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"消费得积分：",prop:"give_credit_status"}},[a("RadioGroup",{model:{value:e.model_give_credit_status,callback:function(t){e.model_give_credit_status=t},expression:"model_give_credit_status"}},[a("Radio",{attrs:{label:"1"}},[e._v("开启")]),a("Radio",{attrs:{label:"0"}},[e._v("关闭")])],1),"1"===e.model_give_credit_status?a("div",{staticClass:"nest-box"},[a("FormItem",{attrs:{label:"赠送数量：",prop:"give_credit_num"}},[a("div",{staticClass:"flex",staticStyle:{padding:"2px 0"}},[a("span",{staticClass:"marginR-10"},[e._v("每件商品赠送")]),a("kdx-rr-input",{staticClass:"width-250",attrs:{number:"",fixed:0,minValue:0,"max-value":999999999,placeholder:"请输入"},model:{value:e.model_give_credit_num,callback:function(t){e.model_give_credit_num=t},expression:"model_give_credit_num"}},[a("span",{attrs:{slot:"append"},slot:"append"},[e._v("积分")])])],1)])],1):e._e()],1)],1):e._e()])],1)},i=[]},ab1c:function(e,t,a){"use strict";a.r(t);var l=a("4c95"),i=a.n(l);for(var n in l)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return l[e]}))}(n);t["default"]=i.a},c3b6:function(e,t,a){"use strict";a.r(t);var l=a("6ace"),i=a("ab1c");for(var n in i)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(n);a("235e");var o=a("2877"),d=Object(o["a"])(i["default"],l["a"],l["b"],!1,null,"0b25d9b3",null);t["default"]=d.exports},e42b:function(e,t,a){}}]);