(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[80],{"07c9":function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0,a("9911");var n=function(){var t=this,e=t._self._c;return e("kdx-content-bar",{scopedSlots:t._u([{key:"btn",fn:function(){return[e("Button",{staticClass:"primary-long",attrs:{loading:t.submitLoading},on:{click:t.handleSave}},[t._v(" 保存 ")])]},proxy:!0}])},[e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("kdx-form-title",[t._v(t._s(t.formTitle))])],1),e("Form",{ref:"form",attrs:{model:t.formData,"label-width":120,rules:t.rules}},[e("FormItem",{attrs:{label:"公告排序",prop:"sort_by"}},[e("kdx-rr-input",{staticClass:"width-340",attrs:{placeholder:"请输入",number:"",fixed:0,maxValue:9999},model:{value:t.formData.sort_by,callback:function(e){t.$set(t.formData,"sort_by",e)},expression:"formData.sort_by"}})],1),e("FormItem",{attrs:{label:"公告标题",prop:"title"}},[e("Input",{staticClass:"width-340",attrs:{placeholder:"请输入"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),e("FormItem",{attrs:{label:"公告状态",prop:"status"}},[e("RadioGroup",{model:{value:t.formData.status,callback:function(e){t.$set(t.formData,"status",e)},expression:"formData.status"}},[e("Radio",{attrs:{label:"1"}},[e("span",[t._v("显示")])]),e("Radio",{attrs:{label:"0"}},[e("span",[t._v("隐藏")])])],1)],1),e("FormItem",{attrs:{label:"展示方式",prop:"show_type"}},[e("RadioGroup",{model:{value:t.formData.show_type,callback:function(e){t.$set(t.formData,"show_type",e)},expression:"formData.show_type"}},[e("Radio",{attrs:{label:"0"}},[e("span",[t._v("显示内容")])]),e("Radio",{attrs:{label:"1"}},[e("span",[t._v("链接跳转")])])],1),"0"===t.formData.show_type?e("div",{staticClass:"type-box"},[e("FormItem",{attrs:{label:"",prop:"detail"}},[e("editor",{attrs:{height:400},on:{input:t.contentInput},model:{value:t.formData.detail,callback:function(e){t.$set(t.formData,"detail",e)},expression:"formData.detail"}})],1)],1):t._e(),"1"===t.formData.show_type?e("div",{staticClass:"type-box"},[e("FormItem",{attrs:{label:"",prop:"link"}},[e("i-input",{staticClass:"width-430",attrs:{placeholder:"请填写以https://开头的有效链接"},model:{value:t.formData.link,callback:function(e){t.$set(t.formData,"link",e)},expression:"formData.link"}},[e("Button",{attrs:{slot:"append"},on:{click:function(e){t.show=!0}},slot:"append"},[t._v(" 选择链接 ")])],1)],1)],1):t._e()],1)],1),e("link-selector",{attrs:{current:t.formData.link},on:{"on-cancel":t.handleCancel,"on-change":t.changeLink},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1),t._t("default")],2)};e.render=n;var i=[];e.staticRenderFns=i},3107:function(t,e,a){"use strict";var n=a("ebb8");a.o(n,"render")&&a.d(e,"render",(function(){return n["render"]})),a.o(n,"staticRenderFns")&&a.d(e,"staticRenderFns",(function(){return n["staticRenderFns"]}))},"4eaf":function(t,e,a){},"52a9":function(t,e,a){"use strict";a("4eaf")},5511:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("d3b7"),a("159b"),a("b0c0"),a("ac1f"),a("841c"),a("d81d"),a("4de4"),a("9911");var n={name:"LinkSelector",props:{current:{type:[Object,String],required:!0},value:{type:Boolean,default:!1}},data:function(){return{name:"shop",search:{content:""},data:[],list:[],selectRow:null,loading:!1,link:"",keyword:["shop","goods","member"]}},methods:{handleSearch:function(){var t=this,e=[];this.data.forEach((function(a){var n;if(a.name.indexOf(t.search.content)>-1)e.push(a);else if(null!==(n=a.links)&&void 0!==n&&n.length){var i=[];a.links.forEach((function(e){e.name.indexOf(t.search.content)>-1&&i.push(e)})),i.length>0&&e.push({item:a,links:i})}})),this.list=e},defaultChecked:function(){var t=this;this.list.forEach((function(e,a){e.links&&e.links.length>0&&e.links.forEach((function(e,n){var i;e.url===(null===(i=t.selectRow)||void 0===i?void 0:i.url)?t.$set(t.list[a].links[n],"checked",!0):t.$set(t.list[a].links[n],"checked",!1)}))}))},setChecked:function(t,e){var a=this,n=this.list[t].links[e];n.checked?(this.selectRow={},this.$set(this.list[t].links[e],"checked",!1)):(this.list.forEach((function(t,e){t.links.forEach((function(t,n){a.$set(a.list[e].links[n],"checked",!1)}))})),this.$set(this.list[t].links[e],"checked",!0),this.selectRow=this.list[t].links[e])},getData:function(){var t=this;this.loading=!0,this.$api.shopApi.getLinkList().then((function(e){t.loading=!1,0===e.error&&(t.data=e.list.map((function(t){return t.links=t.links.filter((function(t){return"wx_service"!=t.url})),t})),t.list=t.data,t.defaultChecked())}))},handleSave:function(){"custom"===this.name?this.$emit("on-change",{url:this.link}):this.$emit("on-change",this.selectRow),this.handleCancel()},handleCancel:function(){this.$emit("on-cancel")}},watch:{value:{handler:function(t){t&&(this.getData(),this.current?"string"===typeof this.current?this.selectRow={url:this.current}:this.selectRow=this.current:this.selectRow={},this.name="shop",this.link="",this.search.content="")},immediate:!0}}};e.default=n},"55f7":function(t,e,a){"use strict";a("ce9b")},5895:function(t,e,a){"use strict";a.r(e);var n=a("e1933"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},8083:function(t,e,a){"use strict";a("b0c9")},9911:function(t,e,a){"use strict";var n=a("23e7"),i=a("857a"),s=a("af03");n({target:"String",proto:!0,forced:s("link")},{link:function(t){return i(this,"a","href",t)}})},a58b:function(t,e,a){"use strict";a.r(e);var n=a("3107"),i=a("c6ed");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("55f7"),a("52a9");var r=a("2877"),o=Object(r["a"])(i["default"],n["render"],n["staticRenderFns"],!1,null,"90370ac6",null);e["default"]=o.exports},b0c9:function(t,e,a){},b8e0:function(t,e,a){"use strict";var n=a("07c9");a.o(n,"render")&&a.d(e,"render",(function(){return n["render"]})),a.o(n,"staticRenderFns")&&a.d(e,"staticRenderFns",(function(){return n["staticRenderFns"]}))},c6ed:function(t,e,a){"use strict";a.r(e);var n=a("5511"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},ce9b:function(t,e,a){},e1933:function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("9911");var i=n(a("5530")),s=n(a("ceb0")),r=n(a("a58b")),o={components:{Editor:s.default,LinkSelector:r.default},data:function(){return{id:"",formTitle:"",formData:{sort_by:"",title:"",status:"1",show_type:"0",detail:"",link:""},rules:{sort_by:[{required:!0,message:"请填写公告排序"}],title:[{required:!0,message:"请填写公告标题"}],status:[{required:!0,message:""}],show_type:[{required:!0,message:""}],detail:[{required:!0,message:"请填写公告内容"}],link:[{required:!0,message:"请填写公告链接"}]},submitLoading:!1,show:!1}},created:function(){this.$route.query.id?(this.id=this.$route.query.id,this.formTitle="编辑公告",this.getNoticeDetail()):this.formTitle="添加公告"},methods:{getNoticeDetail:function(){var t=this;this.$api.settingApi.getNoticeDetail({id:this.id}).then((function(e){0==e.error&&(t.formData=(0,i.default)((0,i.default)({},t.formData),{},{sort_by:e.data.sort_by,title:e.data.title,status:e.data.status+"",show_type:e.data.show_type+"",detail:e.data.detail,link:e.data.link}))}))},handleSave:function(){var t=this;this.$refs["form"].validate().then((function(e){e&&(t.submitLoading=!0,t.id?t.editSysNotice():t.addNotice())}))},editSysNotice:function(){var t=this,e=(0,i.default)((0,i.default)({},this.formData),{},{detail:"0"===this.formData.show_type?this.formData.detail:"",link:"1"===this.formData.show_type?this.formData.link:"",id:this.id});this.$api.settingApi.editSysNotice((0,i.default)({},e)).then((function(e){t.submitLoading=!1,0==e.error&&(t.$Message.success("保存成功"),t.$router.go(-1))}))},addNotice:function(){var t=this,e=(0,i.default)((0,i.default)({},this.formData),{},{detail:"0"===this.formData.show_type?this.formData.detail:"",link:"1"===this.formData.show_type?this.formData.link:""});this.$api.settingApi.addNotice((0,i.default)({},e)).then((function(e){t.submitLoading=!1,0==e.error&&(t.$Message.success("保存成功"),t.$router.go(-1))}))},handleCancel:function(){this.show=!1},changeLink:function(t){this.formData.link=t.url,this.show=!1},contentInput:function(){}}};e.default=o},ebb8:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0,a("b0c0"),a("ac1f"),a("841c"),a("9911");var n=function(){var t=this,e=t._self._c;return e("kdx-modal-frame",{attrs:{value:t.value,title:"链接选择器",width:"1000",loading:t.loading,"ok-text":"保存"},on:{"on-ok":t.handleSave,"on-cancel":t.handleCancel}},[e("div",{staticClass:"selector-shopping-mall"},[e("Tabs",{model:{value:t.name,callback:function(e){t.name=e},expression:"name"}},[e("TabPane",{attrs:{label:"商城链接",name:"shop"}},[e("div",{staticClass:"shopping-mall-link"},[e("div",{staticClass:"search"},[e("Input",{staticClass:"width-300",attrs:{search:"","enter-button":"搜索",placeholder:"请输入"},on:{"on-search":t.handleSearch},model:{value:t.search.content,callback:function(e){t.$set(t.search,"content",e)},expression:"search.content"}})],1),t.list&&t.list.length>0?e("div",{staticClass:"content"},t._l(t.list,(function(a,n){return e("div",{key:n,staticClass:"content-item"},[e("p",{staticClass:"title"},[t._v(" "+t._s(a.name)+" ")]),a.links&&a.links.length>0?e("ul",t._l(a.links,(function(a,i){return e("li",{key:i,class:{checked:a.checked},on:{click:function(e){return t.setChecked(n,i)}}},[e("Icon",{attrs:{type:a.icon}}),e("span",{staticClass:"name"},[t._v(t._s(a.name))])],1)})),0):t._e()])})),0):e("div",{staticStyle:{"text-align":"center"}},[t._v("暂无数据")])])]),e("TabPane",{attrs:{label:"自定义链接",name:"custom"}},[e("div",{staticClass:"image-selector-network"},[e("Form",{staticClass:"custom-link",attrs:{"label-width":120},nativeOn:{submit:function(t){t.preventDefault()}}},[e("FormItem",{attrs:{label:"链接地址："}},[e("Input",{attrs:{"enter-button":"提取链接",search:"",placeholder:"请输入"},on:{"on-search":t.handleSave},model:{value:t.link,callback:function(e){t.link=e},expression:"link"}})],1)],1)],1)])],1)],1)])};e.render=n;var i=[];e.staticRenderFns=i},f68d:function(t,e,a){"use strict";a.r(e);var n=a("b8e0"),i=a("5895");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("8083");var r=a("2877"),o=Object(r["a"])(i["default"],n["render"],n["staticRenderFns"],!1,null,"7fc0365e",null);e["default"]=o.exports}}]);