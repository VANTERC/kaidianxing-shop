(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[161],{"097f":function(n,i,t){Object.defineProperty(i,"__esModule",{value:!0}),i.staticRenderFns=i.render=void 0,t("b0c0");var e=function(){var n=this,i=n._self._c;return i("div",{staticClass:"nav-bar"},[i("div",{staticClass:"left"},[i("div",{staticClass:"modal-name",on:{click:n.goBack}},[i("Icon",{attrs:{type:"md-arrow-back"}}),n._v("返回 ")],1),i("div",{staticClass:"tabs"},n._l(n.getMenuTab,(function(t){return i("div",{key:t.id,staticClass:"tab",class:{on:n.checkId==t.id},on:{click:function(i){return n.clickTab(t.id)}}},[i("i",{staticClass:"iconfont tab-icon",class:t.icon}),i("span",{staticClass:"tab-name"},[n._v(n._s(t.name))])])})),0)]),1001!=n.checkId?i("div",{staticClass:"right"},[i("div",{staticClass:"btn-group"},n._l(n.getBtns,(function(t,e){return i("div",{key:e,class:"primary"==t.btntype?"btn-apply":"btn",on:{click:function(i){return n.clickBtn(t.id,t.action)}}},["pageSet"==t.id?i("i",{staticClass:"iconfont icon-zujian-yemianshezhi apply-icon pageSet-icon"}):n._e(),i("div",[n._v(n._s(t.name))]),"primary"==t.btntype?i("i",{staticClass:"iconfont icon-send apply-icon"}):n._e()])})),0)]):n._e()])};i.render=e;var a=[];i.staticRenderFns=a},24253:function(n,i,t){"use strict";t("ec5f")},"2cf2d":function(n,i,t){"use strict";var e=t("097f");t.o(e,"render")&&t.d(i,"render",(function(){return e["render"]})),t.o(e,"staticRenderFns")&&t.d(i,"staticRenderFns",(function(){return e["staticRenderFns"]}))},a39a:function(n,i,t){"use strict";t.r(i);var e=t("df9f"),a=t.n(e);for(var c in e)["default"].indexOf(c)<0&&function(n){t.d(i,n,(function(){return e[n]}))}(c);i["default"]=a.a},df9f:function(n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t={computed:{getBtns:function(){var n={index:10,"goods-detail":11,"vip-center":12,distribution:20};if(null!=n[this.$route.params.page]){var i=[{id:"pageSet",name:"页面设置"},{id:"asTpl",name:"另存为模板"},{id:"preview",name:"保存并预览",btntype:"default"}];return i.push({id:"asPage",name:"发布",btntype:"primary",action:"publish"}),i}return"diymenu"==this.$route.params.page?[{id:"asPage",name:"保存菜单"},{id:"asPage",name:"保存并应用",btntype:"primary",action:"publish"}]:[{id:"asPage",name:"保存并设置",btntype:"primary"}]},getMenuTab:function(){var n={index:{id:10,name:"首页装修",icon:"icon-zujian-zhuangxiu-2"},"goods-detail":{id:11,name:"商品详情装修",icon:"icon-zujian-zhuangxiu-2"},"vip-center":{id:12,name:"会员中心装修",icon:"icon-zujian-zhuangxiu-2"},custom:{id:0,name:"自定义页面装修",icon:"icon-zujian-zhuangxiu-2"},distribution:{id:20,name:"分销中心装修",icon:"icon-zujian-zhuangxiu-2"}},i=this.$route.params.page;if(n[i]){var t=[];return t.push(n[i]),t}return"diymenu"==this.$route.params.page?[{id:1002,name:"底部菜单",icon:"icon-zujian-caidan-2"}]:[{id:4,name:"自定义页面装修"}]}},props:{loading:{type:Boolean,default:!1},backing:{type:Boolean,default:!1}},data:function(){return{checkId:null}},mounted:function(){this.checkId=this.getMenuTab[0].id},methods:{goBack:function(){this.backing||this.$router.go(-1)},clickBtn:function(n,i){this.loading||this.$emit("click",n,i)},clickTab:function(n){this.checkId!==n&&(this.checkId=n,this.$emit("clickTab",n))}}};i.default=t},e0ca:function(n,i,t){"use strict";t.r(i);var e=t("2cf2d"),a=t("a39a");for(var c in a)["default"].indexOf(c)<0&&function(n){t.d(i,n,(function(){return a[n]}))}(c);t("24253");var s=t("2877"),r=Object(s["a"])(a["default"],e["render"],e["staticRenderFns"],!1,null,"8f93d682",null);i["default"]=r.exports},ec5f:function(n,i,t){}}]);