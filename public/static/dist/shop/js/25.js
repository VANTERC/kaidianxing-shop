(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"2b4b":function(e,t,n){"use strict";n.r(t);var a=n("4b61"),r=n("7770");for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("4361");var i=n("2877"),s=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,"3de77975",null);t["default"]=s.exports},4361:function(e,t,n){"use strict";n("f329")},"4b61":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Modal",{staticStyle:{"z-index":"10000"},attrs:{width:"700"},on:{"on-cancel":function(t){return e.saveAsModel("cancel")}},model:{value:e.openModel,callback:function(t){e.openModel=t},expression:"openModel"}},[n("p",{staticStyle:{height:"29px","font-weight":"bold","font-size":"16px",padding:"0 4px","line-height":"30px"},attrs:{slot:"header"},slot:"header"},[e._v("另存为模板")]),n("div",{staticClass:"save-model-body",staticStyle:{height:"351px"}},[n("Form",{ref:"formValidate",attrs:{model:e.formItem,rules:e.rules,"label-width":114},nativeOn:{submit:function(e){e.preventDefault()}}},[n("FormItem",{attrs:{label:"模板名称：",prop:"tpl_name",required:""}},[n("Input",{staticStyle:{width:"430px"},attrs:{placeholder:"请输入模板名称"},on:{"on-blur":e.onBlur},model:{value:e.formItem.tpl_name,callback:function(t){e.$set(e.formItem,"tpl_name",t)},expression:"formItem.tpl_name"}})],1),n("FormItem",{attrs:{label:"缩略图："}},[n("div",{staticClass:"preview-img-box"},[n("img",{attrs:{src:e.previewImage,alt:""}})])])],1)],1),n("div",{staticClass:"save-model-footer",attrs:{slot:"footer"},slot:"footer"},[n("Button",{staticClass:"cancel btn",attrs:{type:"default"},on:{click:function(t){return e.saveAsModel("cancel")}}},[e._v("取消")]),n("Button",{staticClass:"save btn",attrs:{type:"primary"},on:{click:function(t){return e.saveAsModel("save")}}},[e._v("保存")])],1)])},r=[]},7770:function(e,t,n){"use strict";n.r(t);var a=n("f7c0"),r=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=r.a},f329:function(e,t,n){},f7c0:function(e,t,n){var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d3b7"),n("e9c4");var r=a(n("5530")),o=n("2f62"),i={index:10,"goods-detail":11,"vip-center":12,custom:0,distribution:20},s={computed:(0,r.default)({},(0,o.mapState)("decorate",{pageInfo:function(e){return e.pageInfo},pageList:function(e){return e.pageList}})),data:function(){var e=this;return{rules:{tpl_name:[{validator:function(t,n,a){e.formItem.tpl_name?a():a(new Error("请填写模板名称"))},trigger:"blur"}]},openModel:!1,formItem:{tpl_name:"",thumb:""},previewImage:"",resolve:null,reject:null}},methods:{onBlur:function(){this.$refs.formValidate.validate()},toggleModal:function(e){var t=this;return this.previewImage=e,this.openModel=!this.openModel,new Promise((function(e,n){t.resolve=e,t.reject=n}))},saveAsModel:function(e){var t=this;if("save"==e){var n=this.$route.params.page,a=Object.assign({},this.pageInfo);if(!this.formItem.tpl_name)return this.$refs.formValidate.validate(),void this.$Message.error("请填写模板名称");var r={type:i[n],id:void 0,name:this.formItem.tpl_name,thumb:this.previewImage,common:JSON.stringify(a),content:JSON.stringify(this.pageList)};this.$api.decorateApi.saveNewTpl(r).then((function(e){0==e.error?(t.resolve(e),t.$Message.success("保存模板成功")):t.reject(e)})).catch((function(e){t.reject(e)}))}else this.reject();this.openModel=!1}}};t.default=s}}]);