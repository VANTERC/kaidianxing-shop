(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[169],{"0510":function(t,e,n){"use strict";n.r(e);var a=n("60ec"),i=n("2d1f");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("a65a0");var c=n("2877"),s=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,"c2efa1b0",null);e["default"]=s.exports},"14aa":function(t,e,n){var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("1276");var i=a(n("7177")),o={components:{ImageSelector:i.default},data:function(){return{model:{containtype:"text",content:""},imgPath:"",content:"",imageObj:{path:""}}},computed:{noManagePerm:function(){return!this.$getPermMap("channel.wechat.manage")}},created:function(){this.getReplySet()},methods:{getReplySet:function(){var t=this;this.$api.homeApi.getWechatFollowReply().then((function(e){if(0===e.error){var n=e.data||{},a=n.path,i=n.type,o=n.content;if(t.model.containtype=i,"text"==i)t.content=o;else{t.imgPath=a;var c=a.split("_id=")||[];t.imageObj={path:(null===c||void 0===c?void 0:c[0])||"",id:(null===c||void 0===c?void 0:c[1])||""}}}}))},handleSave:function(){var t=this,e={containtype:this.model.containtype};"images"==this.model.containtype?(this.model.content=this.imgPath,e.content=this.imageObj.path+"_id="+this.imageObj.id,e.attachment_id=this.imageObj.id):e.content=this.content,e.content?this.$api.homeApi.setWechatFollowReply(e).then((function(e){0==e.error&&(t.$Message.success("设置成功"),t.getReplySet())})):this.$Message.error("请先填写内容")},chooseImg:function(){this.$refs.img.setValue()},changeHandler:function(t){this.imageObj=t}}};e.default=o},"2d1f":function(t,e,n){"use strict";n.r(e);var a=n("14aa"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"60ec":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("kdx-content-bar",{scopedSlots:t._u([{key:"btn",fn:function(){return[n("Button",{staticClass:"primary-long",attrs:{disabled:t.noManagePerm},on:{click:t.handleSave}},[t._v("保存")])]},proxy:!0}])},[n("kdx-hint-alert",{staticClass:"margin-t"},[t._v("粉丝在关注您的公众号时，会自动发送您设置的文字/图片/语音/视频给粉丝或触发关键词")]),n("div",{staticClass:"main"},[n("Tabs",{model:{value:t.model.containtype,callback:function(e){t.$set(t.model,"containtype",e)},expression:"model.containtype"}},[n("TabPane",{attrs:{label:"文字",name:"text"}},[n("div",{staticClass:"main-content"},[n("Input",{attrs:{type:"textarea"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)]),n("TabPane",{attrs:{label:"图片",name:"images"}},[n("div",{staticClass:"main-content"},[t.imageObj.path?n("div",{staticClass:"img-box",on:{click:t.chooseImg}},[n("img",{staticClass:"img",attrs:{src:t.$media(t.imageObj.path)}})]):n("div",{staticClass:"img-box",on:{click:t.chooseImg}},[n("i",{staticClass:"iconfont icon-tianjiatupian add-icon"}),n("span",{staticClass:"add-text"},[t._v("添加图片")])])])])],1)],1),n("image-selector",{ref:"img",attrs:{current:t.imageObj,"return-type":"object"},on:{"on-change":t.changeHandler}})],1)},i=[]},"907c":function(t,e,n){},a65a0:function(t,e,n){"use strict";n("907c")}}]);