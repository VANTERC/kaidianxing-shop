(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[166],{"1eeb":function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return r}));var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("kdx-content-bar",{scopedSlots:e._u([{key:"btn",fn:function(){return[o("Button",{staticClass:"handler-btn primary-long",attrs:{disabled:e.noManagePerm},on:{click:e.handleSave}},[e._v("保存")])]},proxy:!0}])},[o("div",{staticClass:"container"},[o("Form",{ref:"form",staticClass:"content",attrs:{model:e.model,rules:e.rules,"label-width":140},on:{"on-validate":e.onValidate}},[o("div",{staticClass:"content-box"},[o("kdx-form-title",[e._v("基本设置")]),o("FormItem",{attrs:{label:"菜单状态：",prop:"status"}},[o("RadioGroup",{model:{value:e.model.status,callback:function(t){e.$set(e.model,"status",t)},expression:"model.status"}},[o("Radio",{attrs:{disabled:e.noManagePerm,label:1}},[o("span",[e._v("开启")])]),o("Radio",{attrs:{disabled:e.noManagePerm,label:0}},[o("span",[e._v("关闭")])])],1),o("kdx-hint-text",[e._v("开启后，PC商城首页顶部菜单会显示。")])],1),o("FormItem",{attrs:{label:"菜单名称：",prop:"name"}},[o("Input",{staticClass:"width-300",attrs:{disabled:e.noManagePerm,placeholder:"请输入",maxlength:"6","show-word-limit":""},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),"2"==e.addType?o("FormItem",{attrs:{label:"底部支持：",prop:"img"}},[o("kdx-image-video",{attrs:{type:"image",current:e.model.img},on:{"on-change":function(t){return e.changeThumb(t,"img")}}}),o("kdx-hint-text",[e._v("最多可添加1张，建议尺寸：100*100")])],1):e._e(),o("FormItem",{attrs:{label:" 菜单跳转链接：",prop:"url"}},[o("Input",{staticClass:"width-300",attrs:{placeholder:"请填写跳转pc页面的访问路径"},model:{value:e.model.url,callback:function(t){e.$set(e.model,"url",t)},expression:"model.url"}})],1),o("FormItem",{attrs:{label:"菜单排序：",prop:"sort_order"}},[o("Input",{staticClass:"width-300",attrs:{disabled:e.noManagePerm,type:"number",placeholder:"请输入数字"},model:{value:e.model.sort_order,callback:function(t){e.$set(e.model,"sort_order",t)},expression:"model.sort_order"}}),o("div",{staticClass:"flex"},[o("kdx-hint-text",{attrs:{content:"最多4位数字，数字越大，排名越靠前，默认排序为创建时间。"}})],1)],1)],1)])],1)])},r=[]},4794:function(e,t,o){"use strict";o.r(t);var n=o("1eeb"),r=o("5b7f");for(var a in r)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(a);o("fc19");var s=o("2877"),i=Object(s["a"])(r["default"],n["a"],n["b"],!1,null,"716eb565",null);t["default"]=i.exports},"5b7f":function(e,t,o){"use strict";o.r(t);var n=o("c40b"),r=o.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"9ac1":function(e,t,o){},c40b:function(e,t,o){var n=o("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o("d3b7");var r=n(o("ade3")),a=n(o("5530")),s=o("2f62"),i={name:"index",computed:(0,a.default)((0,a.default)({},(0,s.mapState)("account",{shopId:function(e){return e.shop.shopId}})),{},{noManagePerm:function(){return!this.$getPermMap("pc.menus.manage")},isRoot:function(){var e,t;return 1==(null===(e=this.$store.state.config)||void 0===e||null===(t=e.user)||void 0===t?void 0:t.is_root)},goodSelector:function(){return 0==this.goodsSelectType||1==this.goodsSelectType||2==this.goodsSelectType?"GoodSelector"+this.goodsSelectType:""},addGoods:function(){var e=this;return!this.goodsList.some((function(t){return e.goodsSelectType&&e.goodsSelectType==t.id}))}}),data:function(){return{showUnionSelect:!1,menusId:"",addType:"1",model:{status:1,id:"",name:"",sort_order:"",url:"",img:""},rules:{status:[{required:!0,message:"请选择菜单状态"}],name:[{required:!0,message:"请输入菜单名称"}],img:[{required:!0,message:"请上传菜单图片"}],url:[{required:!0,message:"请输入跳转链接",trigger:"blue"}],sort_order:[{required:!0,validator:function(e,t,o){t.length>4?o(new Error("最多为4位数")):t?o():o(new Error("请输入菜单排序"))}}]}}},methods:{changeLink:function(e){this.model.mall_close_url=e.url},changeThumb:function(e,t){this.$set(this.model,t,e)},showSelect:function(){this.showUnionSelect=!this.showUnionSelect},getData:function(){var e=this;this.$api.homeApi.menuDetail({id:this.menusId}).then((function(t){0===t.error&&(e.model=Object.assign({},t.data))}))},onValidate:function(e,t){this.cacheError=(0,a.default)((0,a.default)({},this.cacheError),{},(0,r.default)({},e,t))},validate:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return new Promise((function(o){e.$refs["form"].validate((function(n){o(n),t(n),e.$nextTick((function(){if(!n)for(var t in e.cacheError)if(!e.cacheError[t]){e.$focusError(t);break}}))}))}))},handleSave:function(){var e=this;console.log(this.model,"model"),this.validate((function(t){if(t){var o="menuEdit";""==e.menusId&&(o="menuAdd"),e.model.id=e.menusId,e.model.type=e.$route.query.type,e.$api.homeApi[o](e.model).then((function(t){0===t.error?(e.$Message.success("保存成功"),setTimeout((function(){e.$router.go(-1)}),1e3)):e.$Message.error(t.message)}))}}))}},mounted:function(){this.addType=this.$route.query.type||"1",this.$route.query.hasOwnProperty("id")&&(this.menusId=this.$route.query.id,this.getData())}};t.default=i},fc19:function(e,t,o){"use strict";o("9ac1")}}]);