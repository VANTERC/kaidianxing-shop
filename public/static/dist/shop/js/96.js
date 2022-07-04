(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[96],{"0a2e":function(e,t,s){"use strict";s("ce6df")},"1ded":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0;var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"order-detail-refund"},[t("Card",[t("Steps",{attrs:{current:e.getCurrent,status:e.getStatus}},[t("Step",{attrs:{title:"客户申请维权",content:e._f("getTime")(e.refund_info.created_at)}}),t("Step",{attrs:{title:"处理维权",content:e._f("getTime")(e.refund_info.seller_accept_time)}}),e.showCustom?t("Step",{attrs:{title:"客户退回商品",content:e._f("getTime")(e.refund_info.member_express_time)}}):e._e(),-1!==e.status?t("Step",{attrs:{title:"商家重新发货",content:e._f("getTime")(e.refund_info.seller_express_time)}}):e._e(),t("Step",{attrs:{title:e.step.lastTitle,content:e._f("getTime")(e.refund_info.finish_time)}})],1)],1),t("div",{staticClass:"order-detail-content"},[e.info.refund_info?t("refund-detail",{attrs:{data:e.info,isExchange:""}},[t("refund-modal",{attrs:{visible:e.modal.refundModal,data:e.info,status:e.refund_info.status}})],1):e._e()],1),t("div",{staticClass:"order-detail-con"},[t("ul",{staticClass:"detail_tab"},[t("li",{staticClass:"tab",class:{active:0==e.clickIndex},on:{click:function(t){return e.clickTab(0)}}},[e._v("商品信息")]),e.commission_info?t("li",{staticClass:"tab",class:{active:1==e.clickIndex},on:{click:function(t){return e.clickTab(1)}}},[e._v("分销商信息")]):e._e(),e.form.content?t("li",{staticClass:"tab",class:{active:2==e.clickIndex},on:{click:function(t){return e.clickTab(2)}}},[e._v("表单信息")]):e._e()]),e.form.content&&2==e.clickIndex?t("form-info",{attrs:{data:e.form.content,isShow:!1}}):e._e(),e.commission_info&&1==e.clickIndex?t("distributor-information",{attrs:{info:e.commission_info},on:{edit:e.editCommision}}):e._e(),0==e.clickIndex?t("order-detail-list",{attrs:{"is-refund":"",data:e.info},on:{"on-change-goods-info":e.changeGoodsInfo}}):e._e(),t("commission-edit",{attrs:{orderId:e.id,orderNo:e.orderNo,memberId:e.member_id,visible:e.visible},on:{"update:visible":function(t){e.visible=t},"on-success":e.getData}})],1)],1)};t.render=s;var n=[];t.staticRenderFns=n},3588:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0;var s=function(){var e=this,t=e._self._c;return t("kdx-modal-frame",{attrs:{title:"维权处理",width:700},on:{"on-cancel":e.handleCancel,"on-ok":e.handleOk},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[t("Form",{ref:"form",staticClass:"order-refund-detail-refund-modal",attrs:{"label-width":120,model:e.model,rules:e.rules}},[t("FormItem",{staticClass:"r-form-item-text",attrs:{label:"维权类型："}},[t("kdx-tag-label",{attrs:{type:"danger",size:"small"}},[e._v("换货")])],1),t("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"处理方式：",porp:"type"}},[t("RadioGroup",{model:{value:e.model.type,callback:function(t){e.$set(e.model,"type",t)},expression:"model.type"}},[0===e.status?t("Radio",{attrs:{label:"0"}},[e._v("驳回申请")]):e._e(),0===e.status?t("Radio",{attrs:{label:"1"}},[e._v("通过申请")]):e._e(),e.status<3?t("Radio",{attrs:{label:"2"}},[e._v("确认发货")]):e._e(),3===e.status?t("Radio",{attrs:{label:"3"}},[e._v(" 关闭申请（确认换货完成） ")]):e._e()],1),t("kdx-hint-alert",{directives:[{name:"show",rawName:"v-show",value:"1"===e.model.type,expression:"model.type === '1'"}],attrs:{"show-icon":!1,type:"info"}},[e._v(" 通过申请后需要收到客户寄回商品才可进行下一步操作 ")]),t("kdx-hint-alert",{directives:[{name:"show",rawName:"v-show",value:"2"===e.model.type&&e.status<2,expression:"model.type === '2' && status < 2"}],attrs:{"show-icon":!1,type:"info"}},[e._v(" 无需客户寄回商品，商家直接发换货商品 ")])],1),t("FormItem",{directives:[{name:"show",rawName:"v-show",value:"0"===e.model.type,expression:"model.type === '0'"}],attrs:{label:"驳回原因：",porp:"reason"}},[t("Input",{staticClass:"width-430",attrs:{type:"textarea",placeholder:"请输入",autosize:"",maxlength:200},model:{value:e.model.reason,callback:function(t){e.$set(e.model,"reason",t)},expression:"model.reason"}})],1),"1"===e.model.type?t("FormItem",{attrs:{label:"退货地址：",prop:"address"}},[t("Select",{staticClass:"width-430",model:{value:e.model.address,callback:function(t){e.$set(e.model,"address",t)},expression:"model.address"}},e._l(e.address.list,(function(e){return t("Option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1):e._e(),"2"===e.model.type?t("FormItem",{attrs:{label:"选择快递公司：",prop:"express_com"}},[t("select-express",{staticClass:"width-340",attrs:{value:e.model.express_com,"option-data":e.express.list},on:{"update:value":function(t){return e.$set(e.model,"express_com",t)}}})],1):e._e(),"2"===e.model.type?t("FormItem",{attrs:{label:"快递单号：",prop:"express_sn"}},[t("i-input",{staticClass:"width-340",attrs:{placeholder:"请输入"},model:{value:e.model.express_sn,callback:function(t){e.$set(e.model,"express_sn",t)},expression:"model.express_sn"}})],1):e._e()],1)],1)};t.render=s;var n=[];t.staticRenderFns=n},"3a80":function(e,t,s){"use strict";s.r(t);var n=s("c822"),r=s.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){s.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"687a":function(e,t,s){"use strict";s("d2f9")},"6bdd":function(e,t,s){var n=s("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(s("39c2")),a=n(s("92c2")),i=n(s("f8a2")),o=n(s("ca29")),d=n(s("1c03")),l=n(s("fa75")),c=n(s("5791")),u={name:"index",mixins:[c.default],components:{RefundDetail:r.default,RefundModal:a.default,DistributorInformation:i.default,OrderDetailList:o.default,CommissionEdit:d.default,FormInfo:l.default},computed:{getCurrent:function(){var e=this.status;return 0<=this.status&&this.status<=3&&e++,-1===this.status&&(e=2),10!==this.status&&11!==this.status||(e=5,this.showCustom&&e--),e},showCustom:function(){return-1!==this.status&&!!(10!==this.status&&11!==this.status&&3!==this.status||this.refund_info.member_express_sn)}},watch:{status:function(e){this.step.lastTitle=0===e?"换货完成":e>0?"换货成功":"换货失败"}},data:function(){return{clickIndex:0}},methods:{clickTab:function(e){this.clickIndex=e}}};t.default=u},"6f07":function(e,t,s){"use strict";s.r(t);var n=s("d9918"),r=s("c3d1");for(var a in r)["default"].indexOf(a)<0&&function(e){s.d(t,e,(function(){return r[e]}))}(a);s("687a");var i=s("2877"),o=Object(i["a"])(r["default"],n["render"],n["staticRenderFns"],!1,null,"350e888c",null);t["default"]=o.exports},"92c2":function(e,t,s){"use strict";s.r(t);var n=s("cbea"),r=s("3a80");for(var a in r)["default"].indexOf(a)<0&&function(e){s.d(t,e,(function(){return r[e]}))}(a);s("0a2e");var i=s("2877"),o=Object(i["a"])(r["default"],n["render"],n["staticRenderFns"],!1,null,"0c581864",null);t["default"]=o.exports},c3d1:function(e,t,s){"use strict";s.r(t);var n=s("6bdd"),r=s.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){s.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},c822:function(e,t,s){var n=s("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,s("a9e3"),s("d3b7"),s("4de4"),s("b0c0");var r=n(s("392e")),a={name:"RefundModal",components:{SelectExpress:r.default},props:{visible:{type:Number,default:0},data:{type:Object,default:function(){}},status:{type:Number,default:0}},data:function(){return{value:!1,model:{type:"0",address:"",express_com:"",express_sn:"",dispatch_type:"30"},address:{list:[]},express:{list:[]},rules:{address:[{required:!0,message:"请选择退货地址"}],express_com:[{required:!0,message:"请选择快递公司"}],express_sn:[{required:!0,message:"请输快递单号",trigger:"blur"}],dispatch_type:[{required:!0,message:"配送方式必选"}]}}},watch:{visible:function(){this.value=!0,this.getAddress(),this.getExpress()},status:{handler:function(e){1==e||2==e?this.model.type="2":3==e&&(this.model.type="3")},immediate:!0}},methods:{getAddress:function(){var e=this;this.address.list.length||this.$api.settingApi.getAllRefundAddress().then((function(t){0===t.error&&(e.address.list=t.list)}))},getExpress:function(){var e=this;this.express.list.length||this.$api.settingApi.getExpressList().then((function(t){0===t.error&&(e.express.list=t.list)}))},handleCancel:function(){this.value=!1,this.$refs.form.resetFields()},handleOk:function(){var e=this.model.type,t=this.data,s=t.id,n=t.refund_type,r=t.refund_info.order_goods_id,a={order_id:s};"2"==n&&(a.order_goods_id=r),"0"===e?this.rejectHandler(a):"1"===e?this.agreeHandler(a):"2"===e?this.sureHandler(a):this.closeHandler(a)},closeHandler:function(e){var t=this;this.$api.orderApi.exchangeClose(e).then((function(e){0===e.error&&(t.$Message.success("操作成功"),t.$parent.$parent.getData())})).finally((function(){t.value=!1}))},sureHandler:function(e){var t=this;this.$refs.form.validate((function(s){if(s){var n=t.express.list.filter((function(e){return e.id===t.model.express_com}))[0],r=n.code,a=n.name,i=n.key;e=Object.assign(e,{seller_express_sn:t.model.express_sn,seller_express_name:a,seller_express_code:r,seller_express_encoding:i}),t.$api.orderApi.exchangeSend(e).then((function(e){0===e.error&&(t.$Message.success("操作成功"),t.$parent.$parent.getData())})).finally((function(){t.value=!1}))}}))},agreeHandler:function(e){var t=this;e.refund_address_id=this.model.address,this.$refs.form.validate((function(s){s&&t.$api.orderApi.agreeReturn(e).then((function(e){0===e.error&&(t.$Message.success("操作成功"),t.$parent.$parent.getData())})).finally((function(){t.value=!1}))}))},autoHandler:function(e){var t=this;this.$api.orderApi.autoRefund(e).then((function(e){0===e.error&&(t.$Message.success("操作成功"),t.$parent.$parent.getData())})).finally((function(){t.value=!1}))},manualHandler:function(e){var t=this;this.$api.orderApi.manualRefund(e).then((function(e){0===e.error&&(t.$Message.success("操作成功"),t.$parent.$parent.getData())})).finally((function(){t.value=!1}))},rejectHandler:function(e){var t=this;this.model.reason&&(e.reject_reason=this.model.reason),this.$api.orderApi.refundRejectOrder(e).then((function(e){0===e.error&&(t.$Message.success("操作成功"),t.$parent.$parent.getData())})).finally((function(){t.value=!1}))}}};t.default=a},cbea:function(e,t,s){"use strict";var n=s("3588");s.o(n,"render")&&s.d(t,"render",(function(){return n["render"]})),s.o(n,"staticRenderFns")&&s.d(t,"staticRenderFns",(function(){return n["staticRenderFns"]}))},ce6df:function(e,t,s){},d2f9:function(e,t,s){},d9918:function(e,t,s){"use strict";var n=s("1ded");s.o(n,"render")&&s.d(t,"render",(function(){return n["render"]})),s.o(n,"staticRenderFns")&&s.d(t,"staticRenderFns",(function(){return n["staticRenderFns"]}))}}]);