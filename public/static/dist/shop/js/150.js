(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[150],{"1baf":function(e,t,a){},"2b34":function(e,t,a){var r=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(a("5530")),n=r(a("c7eb")),i=r(a("1da1"));a("d3b7");var d={props:{},data:function(){return{type:"添加退货地址",id:"",submitLoading:!1,refundData:{is_default:0,title:"",name:"",mobile:"",tel:"",zip_code:"",address:""},chooseArea:[],error:"",rule:{title:[{required:!0,message:"请填写退货地址名称"}],name:[{required:!0,message:"请填写联系人"}],mobile:[{required:!0,message:"请填写手机号"},{pattern:/^1[3-9]\d{9}$/,message:"请输入正确的手机号码"}],address:[{required:!0,message:"请填写详细地址"}]}}},computed:{addressData:function(){return this.$store.state.config.address}},created:function(){this.$store.dispatch("config/getAddress")},mounted:function(){"edit"==this.$route.params.type&&(this.type="编辑退货地址",this.id=this.$route.query.id,this.getDetail())},methods:{getDetail:function(){var e=this;this.$api.settingApi.detailRefundAddress({id:this.id}).then((function(t){0==t.error&&(e.refundData=t.data,e.chooseArea=[t.data.province,t.data.city,t.data.area])}))},changeArea:function(e){console.log("area",e),e.length&&(this.error="")},validateForm:function(){var e=this;return new Promise((function(t,a){e.$refs["form"].validate((function(r){r?t(r):(a(),e.chooseArea.length<=0&&(e.error="请添加所属地区"))}))}))},handleSave:function(){this.submitLoading=!0,this.customForm()},customForm:function(){var e=this;return(0,i.default)((0,n.default)().mark((function t(){return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.validateForm();case 3:e.submit(),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.submitLoading=!1;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},submit:function(){var e=this;if(this.chooseArea.length<=0)return this.error="请添加所属地区",void(this.submitLoading=!1);var t=(0,s.default)((0,s.default)({},this.refundData),{},{province:this.chooseArea[0]||"",city:this.chooseArea[1]||"",area:this.chooseArea[2]||""});this.id&&(t.id=this.id),this.$api.settingApi[this.id?"editRefundAddress":"addRefundAddress"]((0,s.default)({},t)).then((function(t){0==t.error&&(e.$Message.success("保存成功"),setTimeout((function(){e.$router.push({path:"/setting/address/refundAddress/list"})}),1500)),e.submitLoading=!1}))},handleCancel:function(){this.$router.push({path:"/setting/address/refundAddress/list"})}}};t.default=d},"51bc":function(e,t,a){"use strict";a.r(t);var r=a("9bcf"),s=a("d0c4");for(var n in s)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(n);a("bdda");var i=a("2877"),d=Object(i["a"])(s["default"],r["a"],r["b"],!1,null,null,null);t["default"]=d.exports},"9bcf":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kdx-content-bar",{scopedSlots:e._u([{key:"btn",fn:function(){return[a("Button",{staticClass:"primary-long",attrs:{loading:e.submitLoading},on:{click:e.handleSave}},[e._v("保存")]),a("Button",{staticClass:"default-long",on:{click:e.handleCancel}},[e._v("取消")])]},proxy:!0}])},[a("div",{staticClass:"refund-address"},[a("kdx-form-title",[e._v(e._s(e.type))]),a("Form",{ref:"form",attrs:{"label-width":120,model:e.refundData,rules:e.rule}},[a("FormItem",{attrs:{label:"退货地址名称：",prop:"title"}},[a("Input",{staticClass:"width-250",model:{value:e.refundData.title,callback:function(t){e.$set(e.refundData,"title",t)},expression:"refundData.title"}})],1),a("FormItem",{attrs:{label:"联系人：",prop:"name"}},[a("Input",{staticClass:"width-250",model:{value:e.refundData.name,callback:function(t){e.$set(e.refundData,"name",t)},expression:"refundData.name"}})],1),a("FormItem",{attrs:{label:"手机号：",prop:"mobile"}},[a("kdx-rr-input",{staticClass:"width-250",attrs:{number:"",fixed:0},model:{value:e.refundData.mobile,callback:function(t){e.$set(e.refundData,"mobile",t)},expression:"refundData.mobile"}})],1),a("FormItem",{attrs:{label:"电话："}},[a("Input",{staticClass:"width-250",model:{value:e.refundData.tel,callback:function(t){e.$set(e.refundData,"tel",t)},expression:"refundData.tel"}})],1),a("FormItem",{attrs:{label:"邮编："}},[a("Input",{staticClass:"width-250",model:{value:e.refundData.zip_code,callback:function(t){e.$set(e.refundData,"zip_code",t)},expression:"refundData.zip_code"}})],1),a("FormItem",{attrs:{label:"所属地区：",required:"",error:e.error}},[a("Cascader",{staticClass:"width-430",attrs:{data:e.addressData},on:{"on-change":e.changeArea},model:{value:e.chooseArea,callback:function(t){e.chooseArea=t},expression:"chooseArea"}})],1),a("FormItem",{attrs:{label:"详细地址：",prop:"address"}},[a("Input",{staticClass:"width-430",attrs:{placeholder:"请输入"},model:{value:e.refundData.address,callback:function(t){e.$set(e.refundData,"address",t)},expression:"refundData.address"}})],1),a("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"是否默认："}},[a("RadioGroup",{model:{value:e.refundData.is_default,callback:function(t){e.$set(e.refundData,"is_default",t)},expression:"refundData.is_default"}},[a("Radio",{attrs:{label:1}},[a("span",[e._v("是")])]),a("Radio",{attrs:{label:0}},[a("span",[e._v("否")])])],1)],1)],1)],1)])},s=[]},bdda:function(e,t,a){"use strict";a("1baf")},d0c4:function(e,t,a){"use strict";a.r(t);var r=a("2b34"),s=a.n(r);for(var n in r)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(n);t["default"]=s.a}}]);