(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"0a522":function(e,n,a){"use strict";a.r(n);var i=a("88fe"),t=a("1ef4");for(var d in t)["default"].indexOf(d)<0&&function(e){a.d(n,e,(function(){return t[e]}))}(d);a("13ba");var s=a("2877"),r=Object(s["a"])(t["default"],i["a"],i["b"],!1,null,"c4d9ded6",null);n["default"]=r.exports},"13ba":function(e,n,a){"use strict";a("892e")},"1ef4":function(e,n,a){"use strict";a.r(n);var i=a("baac"),t=a.n(i);for(var d in i)["default"].indexOf(d)<0&&function(e){a.d(n,e,(function(){return i[e]}))}(d);n["default"]=t.a},"88fe":function(e,n,a){"use strict";a.d(n,"a",(function(){return i})),a.d(n,"b",(function(){return t}));var i=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("kdx-modal-frame",{attrs:{title:"区域信息",width:"810"},on:{"on-ok":e.handleOk,"on-cancel":e.handleCancel},model:{value:e.visible,callback:function(n){e.visible=n},expression:"visible"}},[a("div",{staticClass:"region-select"},[a("Icon",{staticClass:"jiantou",attrs:{type:"ios-arrow-forward"}}),a("div",{staticClass:"region-body"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.panelShow,expression:"panelShow"}],staticClass:"es-panel panel-all"},[a("div",{staticClass:"panel-header"},[a("div",[e._v("地区选择")]),a("div",{staticClass:"pull-right"},[a("div",{staticClass:"pull-left inp-box"},[a("Input",{staticClass:"width-160",attrs:{placeholder:"搜索省/市/区"},on:{"on-change":function(n){return e.search()}},model:{value:e.keywords,callback:function(n){e.keywords=n},expression:"keywords"}})],1)])]),a("div",{staticClass:"panel-body"},[a("ul",{staticClass:"provinces"},e._l(e.address,(function(n,i){return a("li",{directives:[{name:"show",rawName:"v-show",value:n.show,expression:"p.show"}],key:i,class:n.expand_left?"active":""},[a("p",{staticClass:"bar",on:{click:function(a){return e.expand(1,n.id)}}},[a("Icon",{directives:[{name:"show",rawName:"v-show",value:n.children.length>0&&"990100"!=n.children[0].code_id,expression:"p.children.length > 0 && p.children[0].code_id!='990100'"}],staticClass:"icon",attrs:{type:n.expand_left?"ios-arrow-down":"ios-arrow-forward"}}),a("span",{staticClass:"name"},[e._v(e._s(n.name))]),n.disabled?a("span",{staticClass:"plus disabled",on:{click:function(e){e.stopPropagation()}}},[e._v("选择")]):a("span",{staticClass:"plus",on:{click:function(a){return e.add(n.id)}}},[e._v("选择")])],1),n.children&&n.children.length>0?a("ul",{staticClass:"citys"},e._l(n.children,(function(i,t){return a("li",{directives:[{name:"show",rawName:"v-show",value:i.show,expression:"c.show"}],key:t,class:i.expand_left?"active":""},[a("p",{staticClass:"bar",on:{click:function(a){return e.expand(1,n.id,i.id)}}},[i.children.length>0?a("Icon",{staticClass:"icon",attrs:{type:i.expand_left?"ios-arrow-down":"ios-arrow-forward"}}):e._e(),a("span",{staticClass:"name",class:[i.children.length<=0?"noareas":""]},[e._v(e._s(i.name))]),i.disabled?a("span",{staticClass:"plus disabled",on:{click:function(e){e.stopPropagation()}}},[e._v("选择")]):a("span",{staticClass:"plus",on:{click:function(a){return e.add(n.id,i.id)}}},[e._v("选择")])],1),i.children&&i.children.length>0?a("ul",{staticClass:"areas"},e._l(i.children,(function(t,d){return a("li",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"a.show"}],key:d},[a("p",{staticClass:"bar"},[a("span",{staticClass:"name"},[e._v(e._s(t.name))]),t.disabled?a("span",{staticClass:"plus disabled",on:{click:function(e){e.stopPropagation()}}},[e._v("选择")]):a("span",{staticClass:"plus",on:{click:function(a){return e.add(n.id,i.id,t.id)}}},[e._v("选择")])])])})),0):e._e()])})),0):e._e()])})),0)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.panelShow,expression:"panelShow"}],staticClass:"es-panel panel-selected"},[a("div",{staticClass:"panel-header"},[e._v("已选择")]),a("div",{staticClass:"panel-body"},[a("ul",{staticClass:"provinces"},[e._l(e.address,(function(n,i){return[n.add?a("li",{key:i,class:n.expand_right?"active":""},[a("p",{staticClass:"bar",on:{click:function(a){return e.expand(2,n.id)}}},[a("Icon",{directives:[{name:"show",rawName:"v-show",value:n.children.length>0&&"990100"!=n.children[0].code_id,expression:"p.children.length > 0 && p.children[0].code_id!='990100'"}],staticClass:"icon",attrs:{type:n.expand_right?"ios-arrow-down":"ios-arrow-forward"}}),a("span",{staticClass:"name"},[e._v(e._s(n.name))]),a("span",{staticClass:"remove",on:{click:function(a){return e.remove(n.id)}}},[e._v("取消")])],1),n.children&&n.children.length>0?a("ul",{staticClass:"citys"},[e._l(n.children,(function(i,t){return[i.add?a("li",{key:t,class:i.expand_right?"active":""},[a("p",{staticClass:"bar",on:{click:function(a){return e.expand(2,n.id,i.id)}}},[a("Icon",{directives:[{name:"show",rawName:"v-show",value:i.children.length>0,expression:"c.children.length > 0"}],staticClass:"icon",attrs:{type:i.expand_right?"ios-arrow-down":"ios-arrow-forward"}}),a("span",{staticClass:"name"},[e._v(e._s(i.name))]),a("span",{staticClass:"remove",on:{click:function(a){return e.remove(n.id,i.id)}}},[e._v("取消")])],1),i.children&&i.children.length>0?a("ul",{staticClass:"areas"},[e._l(i.children,(function(t,d){return[t.add?a("li",{key:d},[a("p",{staticClass:"bar"},[a("span",{domProps:{textContent:e._s(t.name)}}),a("span",{staticClass:"remove",on:{click:function(a){return e.remove(n.id,i.id,t.id)}}},[e._v("取消")])])]):e._e()]}))],2):e._e()]):e._e()]}))],2):e._e()]):e._e()]}))],2)])])])],1)])},t=[]},"892e":function(e,n,a){},baac:function(e,n,a){var i=a("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,a("96cf");var t=i(a("1da1"));a("e9c4"),a("d3b7"),a("159b"),a("b0c0"),a("a15b");var d={add:!1,all_add:!1,code_id:"990000",expand:!1,expand_left:!1,expand_right:!1,id:"990000",label:"国外",letter:"guowai",level:"1",location:"",name:"国外",parent_id:"0",show:!0,sort:"G",value:"国外",children:[{add:!1,all_add:!1,code_id:"990100",expand:!1,expand_left:!1,expand_right:!1,id:"990100",label:"国外",letter:"guowai",level:"2",location:"",name:"国外",parent_id:"990000",show:!0,sort:"G",value:"国外",children:[{add:!1,all_add:!1,code_id:"990101",expand:!1,expand_left:!1,expand_right:!1,id:"990101",label:"国外",letter:"guowai",level:"3",location:"",name:"国外",parent_id:"990100",show:!0,sort:"G",value:"国外",children:[]}]}]},s={name:"SelectorRegion",props:{visible:{type:Boolean,default:!1},list:{type:Object,default:function(){return{}}},limitList:{type:Array,default:function(){return[]}}},data:function(){return{address:[],panelShow:!0,selecteds:{},hides:{provinces:[],citys:[],areas:[]},keywords:"",all_text:"",all_text_show:!1,selected_text:"没有选择任何区域",selected_text_show:!0}},created:function(){this.selecteds=this.list},watch:{show_modal:function(e){e&&this.init()},list:function(e){this.selecteds=e,this.init()}},mounted:function(){var e=this;this.$store.dispatch("config/getAddress").then((function(){var n,a,i=JSON.parse(JSON.stringify(null===(n=e.$store.state)||void 0===n||null===(a=n.config)||void 0===a?void 0:a.address))||[];i.length&&i.push(d),e.address=i}))},methods:{handleOk:function(){this.$emit("on-ok",this.submit())},handleCancel:function(){this.$emit("on-cancel",!1)},init:function(){var e=this;return(0,t.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$store.dispatch("config/getAddress");case 2:e.address&&0!==e.address.length||(e.address=e.$store.state.config.address),e.selected_text_show=!0,e.clearAdd(),e.checkHide(),e.selecteds&&e.selecteds.areas&&(e.address.forEach((function(n){var a=0;n.disabled=!1,n.children.forEach((function(i){var t=0;i.disabled=!1,i.children.forEach((function(n){n.disabled=!1,e.selecteds.areas.indexOf(n.id)>-1&&(n.add=!0,n.show=!1,t++)})),t>0&&(n.add=!0,i.add=!0,i.show=t!==i.children.length,!i.show&&a++)})),a>0&&(n.show=a!==n.children.length)})),e.selected_text_show=!1,e.panelShow=!0),e.initDisabled();case 8:case"end":return n.stop()}}),n)})))()},expand:function(e,n,a){99e4!=n&&("undefined"!==typeof a?this.address.forEach((function(i){n===i.id&&i.children.forEach((function(n){if(a===n.id)return 1===e?n.expand_left=!n.expand_left:n.expand_right=!n.expand_right,n.expand=!n.expand,!1}))})):"undefined"!==typeof n&&this.address.forEach((function(a){if(n===a.id)return 1===e?a.expand_left=!a.expand_left:a.expand_right=!a.expand_right,a.expand=!a.expand,!1})))},closeExpand:function(){this.address.forEach((function(e){e.expand_left=!1,e.children.forEach((function(e){e.expand_left=!1}))}))},add:function(e,n,a){event.stopPropagation(),"undefined"!==typeof a?this.address.forEach((function(i){if(e===i.id)return i.children.forEach((function(e){if(n===e.id)return e.children.forEach((function(e){if(e.id===a)return e.add=!0,e.show=!1,!1})),!1})),!1})):"undefined"!==typeof n?this.address.forEach((function(a){if(e===a.id)return a.children.forEach((function(e){if(n===e.id)return e.children.forEach((function(e){e.add=!0,e.show=!1})),!1})),!1})):"undefined"!==typeof e&&this.address.forEach((function(n){if(e===n.id)return n.children.forEach((function(e){e.children.forEach((function(e){e.add=!0,e.show=!1}))})),!1})),this.check(1,e),this.address=JSON.parse(JSON.stringify(this.address))},remove:function(e,n,a){event.stopPropagation(),"undefined"!==typeof a?this.address.forEach((function(i){if(e===i.id)return i.children.forEach((function(e){if(n===e.id)return e.children.forEach((function(e){if(e.id===a)return e.add=!1,e.show=!0,!1})),!1})),!1})):"undefined"!==typeof n?this.address.forEach((function(a){if(e===a.id)return a.children.forEach((function(e){if(n===e.id)return e.children.forEach((function(e){e.add=!1,e.show=!0})),!1})),!1})):"undefined"!==typeof e&&this.address.forEach((function(n){if(e===n.id)return n.children.forEach((function(e){e.children.forEach((function(e){e.add=!1,e.show=!0}))})),!1})),this.check(0,e)},check:function(e,n){this.address.forEach((function(a){var i=0,t=0;if(a.id===n){var d=0;i+=a.children.length,0!==a.children.length?(a.children.forEach((function(n){i+=n.children.length;var a=0;0!==n.children.length?(n.children.forEach((function(e){e.add&&(a++,t++)})),n.add=a>0,n.show=a<n.children.length,n.add_all=a>=n.children.length,a>=n.children.length&&t++):1===e?(n.add=!0,n.add_all=!0,n.show=!1,t++):(n.add=!1,n.add_all=!1,n.show=!0),n.add&&d++})),a.add=d>0,a.show=t<i,a.add_all=t>=i):1===e?(a.add=!0,a.add_all=!0,a.show=!1,t++):(a.add=!1,a.add_all=!1,a.show=!0),a.add}}))},checkHide:function(){var e=this;this.hide=this.selecteds,this.address.forEach((function(n){n.children.forEach((function(n){n.children.forEach((function(n){e.hides.areas.forEach((function(e){e===n.id&&(n.show=!1)}))}))}))}))},clearShow:function(){this.address.forEach((function(e){e.children.forEach((function(e){e.children.forEach((function(e){e.show=!1})),e.show=!1,e.expand=!1,e.expand_left=!1})),e.show=!1,e.expand=!1,e.expand_left=!1}))},clearAdd:function(){this.address.forEach((function(e){e.children.forEach((function(e){e.children.forEach((function(e){e.add=!1,e.show=!0,e.disabled=!1})),e.add=!1,e.add_all=!1,e.show=!0,e.expand=!1,e.expand_left=!1,e.expand_right=!1,e.disabled=!1})),e.add=!1,e.add_all=!1,e.show=!0,e.expand=!1,e.expand_left=!1,e.expand_right=!1,e.disabled=!1}))},search:function(){var e=this;this.clearShow(),this.address.forEach((function(n){n.children.forEach((function(a){var i=!1;a.children.forEach((function(t){-1===t.name.indexOf(e.keywords)||t.add||(i=!0,t.show=!0,a.show=!0,a.expand=!0,a.expand_left=!0,n.show=!0,n.expand=!0,n.expand_left=!0)})),-1===a.name.indexOf(e.keywords)&&!i||a.add_all||(a.children.forEach((function(e){e.add||(e.show=!0)})),a.show=!0,a.expand=!0,a.expand_left=!0,n.show=!0,n.expand=!0,n.expand_left=!0)})),-1===n.name.indexOf(e.keywords)||n.add_all||(n.children.forEach((function(e){e.add_all||(e.children.forEach((function(e){e.add||(e.show=!0)})),e.show=!0,e.expand=!1,e.expand_left=!1)})),n.show=!0,n.expand=!0,n.expand_left=!0)})),""===this.keywords&&this.closeExpand()},submit:function(){var e=this,n=[],a=[],i=[],t="",d=[],s=[];return this.address.forEach((function(e){e.add&&(n.push(e.id),e.children.forEach((function(e){e.add&&(a.push(e.id),e.children.forEach((function(e){e.add&&i.push(e.id)})))})))})),n.forEach((function(n){e.address.forEach((function(e){n===e.id&&(t+=(t.length>0?"，":"")+e.name,d.push(e.name),e.show&&(t+="【",a.forEach((function(n){e.children.forEach((function(e){if(n===e.id&&(t+="【"===t[t.length-1]?e.name:"，".concat(e.name),s.push(e.name),e.show)){t+="(";var a=[];i.forEach((function(n){e.children.forEach((function(e){n===e.id&&a.push(e.name)}))})),t+=a.join(",")+")"}}))})),t+=t.length>0?"】":""))}))})),{provinces:n,citys:a,areas:i,text:t,provinceName:d,cityName:s}},initDisabled:function(){var e=this;this.limitList.length>0&&this.address.forEach((function(n){n.children.forEach((function(a){a.children.forEach((function(i){!i.add&&e.limitList.indexOf(i.id)>-1&&(i.disabled=!0,a.add||(a.disabled=!0),n.add||(n.disabled=!0))}))}))}))}}};n.default=s}}]);