(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[71],{"0c09":function(t,e,n){"use strict";var s=n("5809");n.o(s,"render")&&n.d(e,"render",(function(){return s["render"]})),n.o(s,"staticRenderFns")&&n.d(e,"staticRenderFns",(function(){return s["staticRenderFns"]}))},"0fe0":function(t,e,n){"use strict";n.r(e);var s=n("38f3"),i=n.n(s);for(var a in s)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(a);e["default"]=i.a},2549:function(t,e,n){"use strict";var s=n("abd4");n.o(s,"render")&&n.d(e,"render",(function(){return s["render"]})),n.o(s,"staticRenderFns")&&n.d(e,"staticRenderFns",(function(){return s["staticRenderFns"]}))},"38f3":function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d3b7"),n("6062"),n("3ca3"),n("ddb0");var s={props:["value","loading","step","tipsText"],data:function(){return{progress:0,timeId:null,interval:10}},computed:{check_start:function(){return new Set(["","50"]).has(this.step)},checking:function(){return new Set(["","0"]).has(this.step)||"1"===this.step&&this.loading},check_finished:function(){return"1"===this.step},process_success:function(){return new Set(["1"]).has(this.step)&&!this.loading},process_fail:function(){return new Set(["12"]).has(this.step)}},watch:{loading:{handler:function(t){var e=this;t?(this.progress=0,this.interval=10,this.timeId=setInterval((function(){e.progress+=e.interval,e.progress>=90&&1!=e.step?e.progress=90:e.progress,e.progress>=100&&clearInterval(e.timeId)}),1e3)):this.timeId&&clearInterval(this.timeId)},immediate:!0}},methods:{fnCloseModal:function(){this.timeId&&clearInterval(this.timeId),this.$emit("input",!1)}}};e.default=s},"49de8":function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"index",props:{value:{type:Boolean,default:!1}},methods:{inputHandler:function(t){console.log(t)},handleCancel:function(){this.$emit("on-cancel")},handleOk:function(){this.$emit("on-ok")}}};e.default=n},5599:function(t,e,n){"use strict";var s=n("bb9d");n.o(s,"render")&&n.d(e,"render",(function(){return s["render"]})),n.o(s,"staticRenderFns")&&n.d(e,"staticRenderFns",(function(){return s["staticRenderFns"]}))},5809:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var n=function(){var t=this,e=t._self._c;return e("kdx-modal-frame",{attrs:{value:t.value,width:430,closable:!1,okText:"确认"},on:{"on-cancel":t.handleCancel,"on-ok":t.handleOk}},[e("div",{staticClass:"order-list-refund-modal"},[e("div",{staticClass:"refund-box"},[e("div",{staticClass:"icon"},[e("Icon",{attrs:{type:"ios-help-circle"}})],1),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[t._v(" 提示 ")]),t._t("default")],2)])])])};e.render=n;var s=[];e.staticRenderFns=s},"66b1":function(t,e,n){"use strict";n.r(e);var s=n("2549"),i=n("0fe0");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("a4a30");var r=n("2877"),o=Object(r["a"])(i["default"],s["render"],s["staticRenderFns"],!1,null,"56a3714a",null);e["default"]=o.exports},8415:function(t,e,n){"use strict";n.r(e);var s=n("49de8"),i=n.n(s);for(var a in s)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(a);e["default"]=i.a},"89f5":function(t,e,n){"use strict";n.r(e);var s=n("0c09"),i=n("8415");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("f10d");var r=n("2877"),o=Object(r["a"])(i["default"],s["render"],s["staticRenderFns"],!1,null,"5073e61a",null);e["default"]=o.exports},a3aa:function(t,e,n){},a4a30:function(t,e,n){"use strict";n("f71b")},abd4:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var n=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"modal",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"modal-mask"}),e("div",{staticClass:"modal-content"},[e("div",{staticClass:"close",on:{click:t.fnCloseModal}},[e("Icon",{attrs:{type:"ios-close",size:24}})],1),t.checking?e("div",{staticClass:"icon iconfont icon-xitong-sousuo"}):t._e(),t.process_success?e("div",{staticClass:"icon iconfont icon-yes"}):t._e(),t.process_fail?e("div",{staticClass:"icon iconfont icon-del"}):t._e(),e("div",{staticClass:"tips"},[t._v(t._s(t.tipsText))]),e("div",{staticClass:"check"},[t.loading?e("div",{staticClass:"progress"},[e("div",{staticClass:"bg"},[e("div",{staticClass:"current",style:"width: ".concat(t.progress,"%;")})])]):t._e()])])])};e.render=n;var s=[];e.staticRenderFns=s},bb9d:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"system-base"},[e("div",{staticClass:"system-base-box"},[e("Form",{ref:"form"},[e("kdx-form-title",[t._v(" 检查队列 ")]),e("FormItem",[e("kdx-hint-alert",{staticClass:"hint-alert",attrs:{showIcon:!0}},[e("div",{staticClass:"hint-alert-content"},[e("div",{staticClass:"text"},[t._v("检查系统队列以是否正常执行，保证系统部分业务正常进行，例如 系统数据每日更新、短信发送、消息模板等能够正常收发。")])])]),e("Button",{staticClass:"primary-long marginT-20",on:{click:t.checkQueue}},[t._v("检查队列")])],1),e("kdx-form-title",[t._v(" 清除缓存 ")]),e("FormItem",[e("kdx-hint-alert",{staticClass:"hint-alert",attrs:{showIcon:!0}},[e("div",{staticClass:"hint-alert-content"},[e("div",{staticClass:"text"},[t._v("如数据读取有偏差时，清除缓存已确保数据同步。")])])]),e("div",{staticClass:"cacheData marginT-10"},[t._v("当前缓存数据："+t._s(t.cacheData))]),e("Button",{staticClass:"primary-long marginT-20",on:{click:t.clearCache}},[t._v("立即清除缓存")])],1)],1),e("check-modal",{attrs:{loading:t.loading,tipsText:t.tipsText,step:t.step},on:{input:t.clickStop},model:{value:t.modalShowFlag,callback:function(e){t.modalShowFlag=e},expression:"modalShowFlag"}}),e("modal-tip",{attrs:{value:t.modalShow},on:{"on-ok":t.handleOk,"on-cancel":t.handleCancel}},[e("div",{staticClass:"clearText"},[t._v(" 确定清除缓存？ ")])]),t._t("default")],2)])};e.render=n;var s=[];e.staticRenderFns=s},cb99:function(t,e,n){var s=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(n("66b1")),a=s(n("89f5")),r={name:"index",components:{CheckModal:i.default,ModalTip:a.default},data:function(){return{cacheData:"",modalShowFlag:!1,modalShow:!1,tipsText:"正在检测队列是否正常执行",step:"",loading:!1,tmp_job_id:"",times:0,timer:null,stopGet:!0}},created:function(){this.getCacheData()},methods:{getCacheData:function(){var t=this;this.$api.systemApi.getCacheData().then((function(e){0===e.error&&(t.cacheData=e.redis.used_memory_human)}))},checkQueue:function(){var t=this;this.loading=!0,this.step="0",this.stopGet=!0,this.modalShowFlag=!0,this.times=0,this.tipsText="正在检测队列是否正常执行",this.$api.systemApi.checkQueue().then((function(e){0===e.error&&(t.tmp_job_id=e.tmp_job_id,t.queueStatus())}))},queueStatus:function(){var t=this;if(this.times++>50)clearTimeout(this.timer),this.loading=!1,this.step="12",this.stopGet=!0,this.tipsText="队列异常，请检查队列";else{if(!this.stopGet&&"1"!=this.step)return clearTimeout(this.timer),this.stopGet=!0,this.loading=!1,void(this.times=0);this.$api.systemApi.queueStatus({tmp_job_id:this.tmp_job_id},{message:!1}).then((function(e){0===e.error?(setTimeout((function(){t.loading=!1,t.step="1",t.tipsText="队列正常运行"}),1e3),clearTimeout(t.timer)):(clearTimeout(t.timer),t.step="0",t.timer=setTimeout(t.queueStatus,1e3))}))}},clearCache:function(){this.modalShow=!0},handleOk:function(){var t=this;this.$api.systemApi.clearCacheData({}).then((function(e){0===e.error&&(t.modalShow=!1,t.$Message.success("清除成功"),t.getCacheData())}))},handleCancel:function(){this.modalShow=!1},clickStop:function(t){this.stopGet=this.times>50||t}}};e.default=r},d480:function(t,e,n){},e17f:function(t,e,n){"use strict";n.r(e);var s=n("cb99"),i=n.n(s);for(var a in s)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(a);e["default"]=i.a},f061:function(t,e,n){"use strict";n("d480")},f10d:function(t,e,n){"use strict";n("a3aa")},f71b:function(t,e,n){},fc16:function(t,e,n){"use strict";n.r(e);var s=n("5599"),i=n("e17f");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("f061");var r=n("2877"),o=Object(r["a"])(i["default"],s["render"],s["staticRenderFns"],!1,null,"9e87a766",null);e["default"]=o.exports}}]);