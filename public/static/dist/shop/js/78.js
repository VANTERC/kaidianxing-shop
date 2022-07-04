(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[78],{2084:function(e,t,a){"use strict";a("e092")},3107:function(e,t,a){"use strict";var n=a("ebb8");a.o(n,"render")&&a.d(t,"render",(function(){return n["render"]})),a.o(n,"staticRenderFns")&&a.d(t,"staticRenderFns",(function(){return n["staticRenderFns"]}))},"4eaf":function(e,t,a){},"52a9":function(e,t,a){"use strict";a("4eaf")},5511:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("d3b7"),a("159b"),a("b0c0"),a("ac1f"),a("841c"),a("d81d"),a("4de4"),a("9911");var n={name:"LinkSelector",props:{current:{type:[Object,String],required:!0},value:{type:Boolean,default:!1}},data:function(){return{name:"shop",search:{content:""},data:[],list:[],selectRow:null,loading:!1,link:"",keyword:["shop","goods","member"]}},methods:{handleSearch:function(){var e=this,t=[];this.data.forEach((function(a){var n;if(a.name.indexOf(e.search.content)>-1)t.push(a);else if(null!==(n=a.links)&&void 0!==n&&n.length){var i=[];a.links.forEach((function(t){t.name.indexOf(e.search.content)>-1&&i.push(t)})),i.length>0&&t.push({item:a,links:i})}})),this.list=t},defaultChecked:function(){var e=this;this.list.forEach((function(t,a){t.links&&t.links.length>0&&t.links.forEach((function(t,n){var i;t.url===(null===(i=e.selectRow)||void 0===i?void 0:i.url)?e.$set(e.list[a].links[n],"checked",!0):e.$set(e.list[a].links[n],"checked",!1)}))}))},setChecked:function(e,t){var a=this,n=this.list[e].links[t];n.checked?(this.selectRow={},this.$set(this.list[e].links[t],"checked",!1)):(this.list.forEach((function(e,t){e.links.forEach((function(e,n){a.$set(a.list[t].links[n],"checked",!1)}))})),this.$set(this.list[e].links[t],"checked",!0),this.selectRow=this.list[e].links[t])},getData:function(){var e=this;this.loading=!0,this.$api.shopApi.getLinkList().then((function(t){e.loading=!1,0===t.error&&(e.data=t.list.map((function(e){return e.links=e.links.filter((function(e){return"wx_service"!=e.url})),e})),e.list=e.data,e.defaultChecked())}))},handleSave:function(){"custom"===this.name?this.$emit("on-change",{url:this.link}):this.$emit("on-change",this.selectRow),this.handleCancel()},handleCancel:function(){this.$emit("on-cancel")}},watch:{value:{handler:function(e){e&&(this.getData(),this.current?"string"===typeof this.current?this.selectRow={url:this.current}:this.selectRow=this.current:this.selectRow={},this.name="shop",this.link="",this.search.content="")},immediate:!0}}};t.default=n},"55f7":function(e,t,a){"use strict";a("ce9b")},"5cbb":function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0,a("ac1f"),a("841c"),a("9911");var n=function(){var e=this,t=e._self._c;return t("kdx-content-bar",{scopedSlots:e._u([{key:"btn",fn:function(){return[t("Button",{staticClass:"primary-long",attrs:{disabled:e.noManagePerm},on:{click:e.handleSave}},[e._v("保存")])]},proxy:!0}])},[t("div",{staticClass:"content"},[t("kdx-form-title",[t("span",[e._v("商城分享设置")]),t("kdx-hint-tooltip",{staticStyle:{"margin-left":"0px","line-height":"1"},attrs:{type:"image",image:a("a1a7")}})],1),t("Form",{ref:"form",attrs:{model:e.formValidate,"label-width":140,rules:e.rules}},[t("FormItem",{attrs:{label:"分享标题：",prop:"title_type"}},[t("div",{staticClass:"flex-column"},[t("RadioGroup",{model:{value:e.formValidate.title_type,callback:function(t){e.$set(e.formValidate,"title_type",t)},expression:"formValidate.title_type"}},[t("Radio",{attrs:{disabled:e.noManagePerm,label:"1"}},[t("span",[e._v("商城名称")])]),t("Radio",{attrs:{disabled:e.noManagePerm,label:"2"}},[t("span",[e._v("自定义名称")])])],1),2==e.formValidate.title_type?t("Input",{staticClass:"mall-name",attrs:{disabled:e.noManagePerm,placeholder:"请输入自定义名称"},model:{value:e.formValidate.title,callback:function(t){e.$set(e.formValidate,"title",t)},expression:"formValidate.title"}}):e._e()],1)]),t("FormItem",{attrs:{label:"分享图标：",prop:"logo_type"}},[t("RadioGroup",{model:{value:e.formValidate.logo_type,callback:function(t){e.$set(e.formValidate,"logo_type",t)},expression:"formValidate.logo_type"}},[t("Radio",{attrs:{disabled:e.noManagePerm,label:"1"}},[t("span",[e._v("商城LOGO")])]),t("Radio",{attrs:{disabled:e.noManagePerm,label:"2"}},[t("span",[e._v("自定义图标")])])],1),2==e.formValidate.logo_type?t("div",{staticClass:"img-box"},[t("kdx-image-video",{attrs:{type:"image",current:e.formValidate.logo},on:{"on-change":e.changeThumb}}),t("kdx-hint-text",[e._v("建议尺寸800*800像素")])],1):e._e()],1),t("FormItem",{attrs:{label:"分享描述：",prop:"share_description_type"}},[t("RadioGroup",{model:{value:e.formValidate.share_description_type,callback:function(t){e.$set(e.formValidate,"share_description_type",t)},expression:"formValidate.share_description_type"}},[t("Radio",{attrs:{disabled:e.noManagePerm,label:"1"}},[t("span",[e._v("商城默认描述")])]),t("Radio",{attrs:{disabled:e.noManagePerm,label:"2"}},[t("span",[e._v("自定义描述")])])],1),t("div",{staticClass:"flex custom-input"},[2==e.formValidate.share_description_type?t("Input",{staticClass:"desc-input",attrs:{disabled:e.noManagePerm,placeholder:"请输入商城描述",type:"textarea",autosize:{minRows:2}},model:{value:e.formValidate.share_description,callback:function(t){e.$set(e.formValidate,"share_description",t)},expression:"formValidate.share_description"}}):e._e()],1)],1),t("FormItem",{attrs:{label:"分享链接：",prop:"link_type"}},[t("div",{staticClass:"flex-column"},[t("RadioGroup",{model:{value:e.formValidate.link_type,callback:function(t){e.$set(e.formValidate,"link_type",t)},expression:"formValidate.link_type"}},[t("Radio",{attrs:{disabled:e.noManagePerm,label:"1"}},[t("span",[e._v("默认商城首页")])]),t("Radio",{attrs:{disabled:e.noManagePerm,label:"2"}},[t("span",[e._v("自定义跳转链接")])])],1),t("div",{staticClass:"flex custom-input"},[2==e.formValidate.link_type?t("Input",{staticClass:"share-input",attrs:{disabled:e.noManagePerm,placeholder:"请选择链接","enter-button":"选择链接",readonly:"",search:""},on:{"on-search":e.search},model:{value:e.formValidate.link,callback:function(t){e.$set(e.formValidate,"link",t)},expression:"formValidate.link"}}):e._e()],1)],1)])],1)],1),t("link-selector",{attrs:{current:{url:e.formValidate.link}},on:{"on-cancel":e.handleCancel,"on-change":e.changeLink},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)};t.render=n;var i=[];t.staticRenderFns=i},"5ef5":function(e,t,a){"use strict";var n=a("5cbb");a.o(n,"render")&&a.d(t,"render",(function(){return n["render"]})),a.o(n,"staticRenderFns")&&a.d(t,"staticRenderFns",(function(){return n["staticRenderFns"]}))},"76e3":function(e,t,a){var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("5530"));a("ac1f"),a("5319"),a("498a"),a("d9e2"),a("d3b7"),a("9911");var s=n(a("a58b")),r={name:"index",components:{LinkSelector:s.default},computed:{noManagePerm:function(){return!this.$getPermMap("sysset.mall.share.manage")}},data:function(){var e=this,t={title:"请输入自定义名称",logo:"请上传自定义图标",share_description:"请输入分享描述",link:"请选择链接"},a=function(a,n,i){var s=a.field;if(!e.isSubmit)return i();var r=s.replace("_type","");"2"===e.formValidate[s]&&""===e.formValidate[r].trim()?i(new Error(t[r])):i()};return{formValidate:{title_type:"1",title:"",logo_type:"1",logo:"",link_type:"1",link:"",share_description_type:"1",share_description:""},rules:{title_type:[{required:!0,validator:a}],logo_type:[{required:!0,validator:a}],share_description_type:[{required:!0,validator:a}],link_type:[{required:!0,validator:a}]},show:!1,isSubmit:!1}},mounted:function(){this.getData()},methods:{changeThumb:function(e){this.formValidate.logo=e},getData:function(){var e=this;this.$api.settingApi.getShareSetting().then((function(t){0===t.error&&(delete t.error,e.formValidate=(0,i.default)((0,i.default)({},e.formValidate),t))}))},handleSave:function(){var e=this;this.isSubmit=!0,this.$refs.form.validate((function(t){if(t){var a=(0,i.default)({},e.formValidate);e.$api.settingApi.editShareSetting((0,i.default)({},a)).then((function(t){0==t.error&&(e.getData(),e.$Message.success("保存成功"))}))}})).finally((function(){e.isSubmit=!1}))},search:function(){this.show=!0},handleCancel:function(){this.show=!1},changeLink:function(e){var t=e.url;this.formValidate.link=t}}};t.default=r},"7a6a":function(e,t,a){"use strict";a.r(t);var n=a("5ef5"),i=a("9791");for(var s in i)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(s);a("2084");var r=a("2877"),l=Object(r["a"])(i["default"],n["render"],n["staticRenderFns"],!1,null,"31ce4bd5",null);t["default"]=l.exports},9791:function(e,t,a){"use strict";a.r(t);var n=a("76e3"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=i.a},9911:function(e,t,a){"use strict";var n=a("23e7"),i=a("857a"),s=a("af03");n({target:"String",proto:!0,forced:s("link")},{link:function(e){return i(this,"a","href",e)}})},a1a7:function(e,t,a){e.exports=a.p+"static/dist/shop/img/share_img.png"},a58b:function(e,t,a){"use strict";a.r(t);var n=a("3107"),i=a("c6ed");for(var s in i)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(s);a("55f7"),a("52a9");var r=a("2877"),l=Object(r["a"])(i["default"],n["render"],n["staticRenderFns"],!1,null,"90370ac6",null);t["default"]=l.exports},c6ed:function(e,t,a){"use strict";a.r(t);var n=a("5511"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=i.a},ce9b:function(e,t,a){},e092:function(e,t,a){},ebb8:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0,a("b0c0"),a("ac1f"),a("841c"),a("9911");var n=function(){var e=this,t=e._self._c;return t("kdx-modal-frame",{attrs:{value:e.value,title:"链接选择器",width:"1000",loading:e.loading,"ok-text":"保存"},on:{"on-ok":e.handleSave,"on-cancel":e.handleCancel}},[t("div",{staticClass:"selector-shopping-mall"},[t("Tabs",{model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[t("TabPane",{attrs:{label:"商城链接",name:"shop"}},[t("div",{staticClass:"shopping-mall-link"},[t("div",{staticClass:"search"},[t("Input",{staticClass:"width-300",attrs:{search:"","enter-button":"搜索",placeholder:"请输入"},on:{"on-search":e.handleSearch},model:{value:e.search.content,callback:function(t){e.$set(e.search,"content",t)},expression:"search.content"}})],1),e.list&&e.list.length>0?t("div",{staticClass:"content"},e._l(e.list,(function(a,n){return t("div",{key:n,staticClass:"content-item"},[t("p",{staticClass:"title"},[e._v(" "+e._s(a.name)+" ")]),a.links&&a.links.length>0?t("ul",e._l(a.links,(function(a,i){return t("li",{key:i,class:{checked:a.checked},on:{click:function(t){return e.setChecked(n,i)}}},[t("Icon",{attrs:{type:a.icon}}),t("span",{staticClass:"name"},[e._v(e._s(a.name))])],1)})),0):e._e()])})),0):t("div",{staticStyle:{"text-align":"center"}},[e._v("暂无数据")])])]),t("TabPane",{attrs:{label:"自定义链接",name:"custom"}},[t("div",{staticClass:"image-selector-network"},[t("Form",{staticClass:"custom-link",attrs:{"label-width":120},nativeOn:{submit:function(e){e.preventDefault()}}},[t("FormItem",{attrs:{label:"链接地址："}},[t("Input",{attrs:{"enter-button":"提取链接",search:"",placeholder:"请输入"},on:{"on-search":e.handleSave},model:{value:e.link,callback:function(t){e.link=t},expression:"link"}})],1)],1)],1)])],1)],1)])};t.render=n;var i=[];t.staticRenderFns=i}}]);