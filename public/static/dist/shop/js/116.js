(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[116],{"0c63f":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("kdx-content-bar",{scopedSlots:t._u([{key:"btn",fn:function(){return[a("Button",{attrs:{type:"primary",loading:t.submitLoading},on:{click:t.handleExport}},[t._v(" 导出 ")])]},proxy:!0}])},[a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[a("kdx-form-title",{attrs:{hasMargin:!1}},[t._v("下载对账单")])],1),a("div",{staticClass:"tips"},[a("kdx-hint-alert",{attrs:{showIcon:!1}},[a("p",[t._v(" 每日9:00前完成数据更新，当前数据更新至 2020-01-13 ")]),a("p",[t._v(" 微信在次日9点启动生成前一天的对账单，建议商户10点后再获取； ")]),a("p",[t._v(" 对账单中涉及金额的字段单位为“元”。 ")]),a("p",[t._v(" 下载账单接口为单日期接口，请尽量保持账单时间段不要过长。 ")])])],1),a("Form",{ref:"form",attrs:{model:t.formData,"label-width":120}},[a("FormItem",{attrs:{label:"账单类型："}},[a("RadioGroup",{model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}},[a("Radio",{attrs:{label:"1"}},[a("span",[t._v("所有账单")])]),a("Radio",{attrs:{label:"2"}},[a("span",[t._v("支付账单")])]),a("Radio",{attrs:{label:"3"}},[a("span",[t._v("退款账单")])])],1)],1),a("FormItem",{attrs:{label:"账单时间："}},[a("DatePicker",{staticClass:"width-340",attrs:{type:"datetimerange",format:"yyyy-MM-dd HH:mm",placeholder:"请选择",confirm:!0},model:{value:t.selectDate,callback:function(e){t.selectDate=e},expression:"selectDate"}})],1)],1)],1)])],1)},r=[]},"4bf3":function(t,e,a){"use strict";a.r(e);var n=a("97af"),r=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},"97af":function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("d1be"),r={components:{},props:{},data:function(){return{selectDate:["",""],formData:{startTime:"",endTime:"",type:""},submitLoading:!1}},watch:{selectDate:{handler:function(t){this.formData.startTime=""===t[0]?"":(0,n.formatDate)(new Date(t[0]),"yyyy-MM-dd hh:mm:ss"),this.formData.endTime=""===t[1]?"":(0,n.formatDate)(new Date(t[1]),"yyyy-MM-dd hh:mm:ss")},deep:!0,immediate:!0}},created:function(){},methods:{handleExport:function(){}}};e.default=r},"9f4b":function(t,e,a){"use strict";a.r(e);var n=a("0c63f"),r=a("4bf3");for(var o in r)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(o);a("ebb1");var i=a("2877"),s=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,"81aefd88",null);e["default"]=s.exports},e341:function(t,e,a){},ebb1:function(t,e,a){"use strict";a("e341")}}]);