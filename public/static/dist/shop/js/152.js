(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[152],{"49b3":function(e,t,a){"use strict";a("4ca9")},"4ca9":function(e,t,a){},6404:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return n}));var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("kdx-content-bar",{scopedSlots:e._u([{key:"btn",fn:function(){return[o("Button",{staticClass:"primary-long",attrs:{disabled:e.noManagePerm},on:{click:e.handleSave}},[e._v("保存")])]},proxy:!0}])},[o("div",{staticClass:"content"},[o("kdx-form-title",[e._v("交易设置")]),o("Form",{ref:"form",attrs:{model:e.model,rules:e.rules,"label-width":150}},[o("FormItem",{attrs:{label:"未付款订单：",prop:"close_type"}},[o("RadioGroup",{model:{value:e.model.close_type,callback:function(t){e.$set(e.model,"close_type",t)},expression:"model.close_type"}},[o("Radio",{attrs:{label:"1",disabled:e.noManagePerm}},[o("span",[e._v("永不关闭")])]),o("Radio",{attrs:{label:"2",disabled:e.noManagePerm}},[o("span",[e._v("自定义关闭时间")])])],1),"2"===e.model.close_type?o("div",{staticClass:"payment-setting-main"},[o("FormItem",{staticClass:"number-input no-width",attrs:{label:"拍下未付款订单：",prop:"close_time"}},[o("div",{staticClass:"flex width-160"},[o("kdx-rr-input",{attrs:{number:"",minValue:20,maxValue:1440,fixed:0,disabled:e.noManagePerm},model:{value:e.model.close_time,callback:function(t){e.$set(e.model,"close_time",t)},expression:"model.close_time"}}),o("span",{staticClass:"ivu-input-group-append item-append"},[e._v("分钟")])],1),o("span",{staticClass:"paddingL"},[e._v("内未付款，自动关闭订单")])]),o("kdx-hint-text",{staticClass:"ml-150"},[e._v("订单取消时间必须在20-1440分钟之间。")])],1):e._e()],1),o("FormItem",{staticClass:"label-width-140",attrs:{label:"自动收货："}},[o("RadioGroup",{model:{value:e.model.auto_receive,callback:function(t){e.$set(e.model,"auto_receive",t)},expression:"model.auto_receive"}},[o("Radio",{attrs:{label:"1",disabled:e.noManagePerm}},[o("span",[e._v("不自动收货")])]),o("Radio",{attrs:{label:"2",disabled:e.noManagePerm}},[o("span",[e._v("自定义收货时间")])])],1),"2"===e.model.auto_receive?o("div",{staticClass:"payment-setting-main"},[o("FormItem",{staticClass:"number-input send-goods",attrs:{label:"发货：","label-width":150,prop:"auto_receive_days"}},[o("div",{staticClass:"flex width-160"},[o("kdx-rr-input",{attrs:{number:"",minValue:7,fixed:0,maxValue:30,disabled:e.noManagePerm},model:{value:e.model.auto_receive_days,callback:function(t){e.$set(e.model,"auto_receive_days",t)},expression:"model.auto_receive_days"}}),o("span",{staticClass:"ivu-input-group-append item-append"},[e._v("天")])],1),o("span",{staticClass:"paddingL"},[e._v("后自动收货")])]),o("kdx-hint-text",{staticClass:"ml-150"},[e._v("自动确认收货时间必须在7-30天之间。")])],1):e._e()],1),o("FormItem",{staticClass:"label-width-140",attrs:{label:"发票设置："}},[o("CheckboxGroup",{on:{"on-change":e.invoiceChoose},model:{value:e.invoice,callback:function(t){e.invoice=t},expression:"invoice"}},[o("Checkbox",{attrs:{label:"1",disabled:e.noManagePerm}},[e._v("纸质发票")]),o("Checkbox",{attrs:{label:"2",disabled:e.noManagePerm}},[e._v("电子发票")])],1)],1),o("kdx-form-title",[e._v("评价设置")]),o("FormItem",{attrs:{label:"订单评价："}},[o("RadioGroup",{model:{value:e.model.order_comment,callback:function(t){e.$set(e.model,"order_comment",t)},expression:"model.order_comment"}},[o("Radio",{attrs:{label:"1",disabled:e.noManagePerm}},[o("span",[e._v("开启")])]),o("Radio",{attrs:{label:"0",disabled:e.noManagePerm}},[o("span",[e._v("关闭")])])],1)],1),o("FormItem",{attrs:{label:"显示评价："}},[o("RadioGroup",{model:{value:e.model.show_comment,callback:function(t){e.$set(e.model,"show_comment",t)},expression:"model.show_comment"}},[o("Radio",{attrs:{label:"1",disabled:e.noManagePerm}},[o("span",[e._v("开启")])]),o("Radio",{attrs:{label:"0",disabled:e.noManagePerm}},[o("span",[e._v("关闭")])])],1),o("kdx-hint-text",[e._v("关闭时建议同步在商品详情页装修版块移除【商品评价】组件")])],1),o("FormItem",{attrs:{label:"评价审核："}},[o("RadioGroup",{model:{value:e.model.comment_audit,callback:function(t){e.$set(e.model,"comment_audit",t)},expression:"model.comment_audit"}},[o("Radio",{attrs:{label:"1",disabled:e.noManagePerm}},[o("span",[e._v("开启")])]),o("Radio",{attrs:{label:"0",disabled:e.noManagePerm}},[o("span",[e._v("关闭")])])],1)],1),o("FormItem",{attrs:{label:"评价会员昵称脱敏："}},[o("RadioGroup",{model:{value:e.model.comment_desensitization,callback:function(t){e.$set(e.model,"comment_desensitization",t)},expression:"model.comment_desensitization"}},[o("Radio",{attrs:{label:"1",disabled:e.noManagePerm}},[o("span",[e._v("开启")])]),o("Radio",{attrs:{label:"0",disabled:e.noManagePerm}},[o("span",[e._v("关闭")]),o("kdx-hint-tooltip",{attrs:{type:"image",image:a("f514")}})],1)],1)],1),o("FormItem",{attrs:{label:"自动默认评价："}},[o("RadioGroup",{model:{value:e.model.auto_comment,callback:function(t){e.$set(e.model,"auto_comment",t)},expression:"model.auto_comment"}},[o("Radio",{attrs:{label:"1",disabled:e.noManagePerm}},[o("span",[e._v("开启")])]),o("Radio",{attrs:{label:"0",disabled:e.noManagePerm}},[o("span",[e._v("关闭")])])],1),o("kdx-hint-text",[e._v("自动默认评价生成后默认审核通过，在用户端显示")]),"1"===e.model.auto_comment?o("div",{staticClass:"payment-setting-main"},[o("FormItem",{attrs:{label:"自动评价时间：",prop:"auto_comment_day"}},[o("div",{staticClass:"flex"},[o("span",{staticClass:"paddingR"},[e._v("订单完成")]),o("kdx-rr-input",{staticClass:"width-160",attrs:{number:"",minValue:7,maxValue:180,fixed:0,disabled:e.noManagePerm},model:{value:e.model.auto_comment_day,callback:function(t){e.$set(e.model,"auto_comment_day",t)},expression:"model.auto_comment_day"}},[o("span",{attrs:{slot:"append"},slot:"append"},[e._v("天")])]),o("span",{staticClass:"paddingL"},[e._v("买家未评价的，自动生成默认五星评价")])],1),o("kdx-hint-text",{staticClass:"ml-150"},[e._v("自动评价时间支持7-180天")])],1),o("FormItem",{staticClass:"r-form-item-checkbox",staticStyle:{"margin-top":"30px"},attrs:{label:"默认评价内容：",prop:"auto_comment_content"}},[o("Input",{staticClass:"width-430",attrs:{type:"textarea",autosize:{minRows:3},maxlength:"500","show-word-limit":"",placeholder:"请输入评价"},model:{value:e.model.auto_comment_content,callback:function(t){e.$set(e.model,"auto_comment_content",t)},expression:"model.auto_comment_content"}})],1)],1):e._e()],1)],1)],1)])},n=[]},6793:function(e,t,a){"use strict";a.r(t);var o=a("6404"),n=a("ed82");for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a("49b3");var i=a("2877"),l=Object(i["a"])(n["default"],o["a"],o["b"],!1,null,"5c4a91ce",null);t["default"]=l.exports},bb51:function(e,t,a){var o=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("d3b7"),a("4de4");var n=o(a("5530")),s=o(a("15fd")),i=["error"],l={name:"index",data:function(){var e=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];t[2]()};return{model:{close_type:"2",close_time:20,auto_receive:"2",auto_receive_days:7,invoice:"0",order_comment:"0",show_comment:"0",comment_audit:"0",comment_desensitization:"1",auto_comment:"",auto_comment_day:"",auto_comment_content:"此用户没有填写评价"},defaultInfo:{},invoice:[],rules:{close_type:[{validator:e}],close_time:[{required:!0,message:"请输入订单取消时间"}],auto_receive_days:[{required:!0,message:"请输入自动收货天数"}],auto_comment_day:[{required:!0,message:"订单时间必填"}],auto_comment_content:[{required:!0,message:"评价内容必填"}]}}},computed:{noManagePerm:function(){return!this.$getPermMap("sysset.trade.manage")}},mounted:function(){this.getData()},methods:{getData:function(){var e=this;this.$api.settingApi.getBusinessSetting().then((function(t){var a=t.error,o=(0,s.default)(t,i);if(0===a){var l=["close_time","auto_receive_days"];e.$store.commit("config/setBusiness",o),l.forEach((function(t){o[t]=e.stringToNum(o[t])})),e.invoice=e.parseInvoice(o.invoice),e.model=(0,n.default)({},o),e.defaultInfo=(0,n.default)({},o)}}))},parseInvoice:function(e){var t="string"===typeof e,a=[{id:"0",arr:[]},{id:"3",arr:["1","2"]}];if(t){var o=a.filter((function(t){return t.id===e}));return o.length?o[0].arr:[e]}var n=a.filter((function(t){return t.arr.length===e.length}));return n.length?n[0].id:e[0]},stringToNum:function(e){return"string"===typeof e&&"null"!=e?parseFloat(e):null},invoiceChoose:function(e){this.model.invoice=this.parseInvoice(e)},handleSave:function(){var e=this;this.$refs.form.validate((function(t){t&&e.$api.settingApi.editBusinessSetting(e.dealData()).then((function(t){0==t.error&&(e.getData(),e.$Message.success("操作成功"))}))}))},dealData:function(){var e=(0,n.default)({},this.model);return"1"==e.close_type&&delete e.close_time,"1"==e.auto_receive&&delete e.auto_receive_days,e=(0,n.default)((0,n.default)({},this.defaultInfo),e),e}}};t.default=l},ed82:function(e,t,a){"use strict";a.r(t);var o=a("bb51"),n=a.n(o);for(var s in o)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(s);t["default"]=n.a},f514:function(e,t,a){e.exports=a.p+"static/dist/shop/img/desensitization.png"}}]);