(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[168],{"0175":function(e,t,a){},"2ba44":function(e,t,a){"use strict";a.r(t);var n=a("2e83"),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=r.a},"2e83":function(e,t,a){var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("ade3")),i=n(a("5530")),c=n(a("2909"));a("d3b7"),a("159b"),a("caad"),a("2532"),a("b0c0"),a("fb6a"),a("ac1f"),a("1276"),a("6062"),a("3ca3"),a("ddb0"),a("5319"),a("c740"),a("a15b");var o={data:function(){return{id:"",formData:{name:"",status:"1",perms:[]},rule:{name:[{required:!0,message:"请填写角色名称"}]},submitLoading:!1}},computed:{allSelectedFlag:function(){return!this.formData.perms.some((function(e){return!1===e.checked||!0===e.indeterminate}))},indeterminate:function(){var e=this.formData.perms.some((function(e){return!0===e.indeterminate})),t=this.formData.perms.some((function(e){return!1===e.checked})),a=this.formData.perms.some((function(e){return!0===e.checked}));return e||t&&a}},created:function(){this.$route.query.id?(this.id=this.$route.query.id,this.editRole()):this.getAllPerms()},methods:{getAllPerms:function(){var e=this;this.$api.settingApi.getAllPerms({}).then((function(t){0==t.error&&(t.data.forEach((function(e){e["checked"]=!1,e["showFlag"]=!1,e.children.forEach((function(e){e["checked"]=!1,e.perm.forEach((function(e){e["checked"]=!1}))}))})),e.formData.perms=(0,c.default)(t.data))}))},editRole:function(){var e=this;this.$api.settingApi.editRole({id:this.id}).then((function(t){0==t.error&&(t.data.all_perm.forEach((function(e){if(e["showFlag"]=!1,e.children&&e.children.length>0){e.children.forEach((function(e){if(e.perm&&e.perm.length>0){e.perm.forEach((function(e){t.data.has_perm.includes(e.perm_key)?e.checked=!0:e.checked=!1}));var a=e.perm.some((function(e){return!1===e.checked})),n=e.perm.some((function(e){return!0===e.checked}));e.indeterminate=a&&n,e.checked=!a}else e.checked=!1}));var a=e.children.some((function(e){return!0===e.indeterminate})),n=e.children.some((function(e){return!1===e.checked})),r=e.children.some((function(e){return!0===e.checked}));e.indeterminate=a||n&&r,e.checked=!n}else e.checked=!1})),e.formData=(0,i.default)((0,i.default)({},e.formData),{},{name:t.data.name,status:t.data.status+"",perms:(0,c.default)(t.data.all_perm)}))}))},changeAllSelectedFlag:function(e){this.formData.perms.forEach((function(t){t.checked=e,t.indeterminate=!1,t.children.forEach((function(t){t.checked=e,t.indeterminate=!1,t.perm.forEach((function(t){t.checked=e,t.indeterminate=!1}))}))}))},changeChecked:function(e){this.formData.perms[e].indeterminate=!1;var t=this.formData.perms[e].checked;this.formData.perms[e].children.forEach((function(e){e.indeterminate=!1,e.checked=t,e.perm.forEach((function(e){e.checked=t}))})),this.formData.perms=this.formData.perms.slice(0)},changeSecChecked:function(e,t){this.formData.perms[e].children[t].indeterminate=!1;var a=this.formData.perms[e].children[t].checked;this.formData.perms[e].children[t].perm.forEach((function(e){e.checked=a})),this.handleCheckedChange(e)},changeThiChecked:function(e,t,a){var n=this.formData.perms[e].children[t].perm[a].checked,r=this.formData.perms[e].children[t].perm,i=r[a].perm_key,c=i.split(".");if(n){if(new Set(c).has("manage")){var o=i.replace(/manage/g,"view"),s=r.findIndex((function(e){return e.perm_key===o}));-1!==s&&(this.formData.perms[e].children[t].perm[s].checked=n)}}else if(new Set(c).has("view")){var h=i.replace(/view/g,"manage"),d=r.findIndex((function(e){return e.perm_key===h}));-1!==d&&(this.formData.perms[e].children[t].perm[d].checked=n)}var m=this.formData.perms[e].children[t].perm.some((function(e){return!1===e.checked})),l=this.formData.perms[e].children[t].perm.some((function(e){return!0===e.checked}));this.formData.perms[e].children[t].indeterminate=m&&l,this.formData.perms[e].children[t].checked=!m,this.handleCheckedChange(e)},handleCheckedChange:function(e){var t=this.formData.perms[e].children.some((function(e){return!0===e.indeterminate})),a=this.formData.perms[e].children.some((function(e){return!1===e.checked})),n=this.formData.perms[e].children.some((function(e){return!0===e.checked}));this.formData.perms[e].indeterminate=t||a&&n,this.formData.perms[e].checked=!a,this.formData.perms=this.formData.perms.slice(0)},onValidate:function(e,t){this.cacheError=(0,i.default)((0,i.default)({},this.cacheError),{},(0,r.default)({},e,t))},validate:function(){var e=this;return new Promise((function(t){e.$refs["form"].validate((function(a){t(a),e.$nextTick((function(){if(!a)for(var t in e.cacheError)if(!e.cacheError[t]){e.$focusError(t);break}}))}))}))},handleSave:function(){var e=this;this.validate().then((function(t){t&&(e.submitLoading=!0,e.id?e.saveRole():e.createRole())}))},saveRole:function(){var e=this,t=[];this.formData.perms.forEach((function(e){e.children&&e.children.length>0&&e.children.forEach((function(e){e.perm&&e.perm.length>0&&e.perm.forEach((function(e){e.checked&&t.push(e.perm_key)}))}))}));var a={id:this.id,name:this.formData.name,status:this.formData.status,perms:t.join("|")};this.$api.settingApi.saveRole((0,i.default)({},a)).then((function(t){e.submitLoading=!1,0==t.error&&(e.$Message.success("保存成功"),e.$router.go(-1))}))},createRole:function(){var e=this,t=[];this.formData.perms.forEach((function(e){e.children&&e.children.length>0&&e.children.forEach((function(e){e.perm&&e.perm.length>0&&e.perm.forEach((function(e){e.checked&&t.push(e.perm_key)}))}))}));var a={name:this.formData.name,status:this.formData.status,perms:t.join("|")};this.$api.settingApi.createRole((0,i.default)({},a)).then((function(t){e.submitLoading=!1,0==t.error&&(e.$Message.success("保存成功"),e.$router.go(-1))}))}}};t.default=o},3978:function(e,t,a){"use strict";a.r(t);var n=a("447f"),r=a("2ba44");for(var i in r)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(i);a("c021");var c=a("2877"),o=Object(c["a"])(r["default"],n["a"],n["b"],!1,null,"4c6119bd",null);t["default"]=o.exports},"447f":function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kdx-content-bar",{scopedSlots:e._u([{key:"btn",fn:function(){return[a("Button",{staticClass:"primary-long",attrs:{loading:e.submitLoading},on:{click:e.handleSave}},[e._v(" 保存 ")])]},proxy:!0}])},[a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[a("kdx-form-title",[e._v("编辑角色")])],1),a("Form",{ref:"form",attrs:{model:e.formData,"label-width":120,rules:e.rule},on:{"on-validate":e.onValidate}},[a("FormItem",{directives:[{name:"error-item",rawName:"v-error-item.name",modifiers:{name:!0}}],attrs:{label:"角色：",prop:"name"}},[a("Input",{staticClass:"width-340",attrs:{placeholder:"请输入",maxlength:"15","show-word-limit":""},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),a("FormItem",{attrs:{label:"状态："}},[a("RadioGroup",{model:{value:e.formData.status,callback:function(t){e.$set(e.formData,"status",t)},expression:"formData.status"}},[a("Radio",{attrs:{label:"1"}},[a("span",[e._v("启用")])]),a("Radio",{attrs:{label:"0"}},[a("span",[e._v("禁用")])])],1),a("kdx-hint-text",[e._v(" 如果禁用，则当前角色的操作员全部会禁止使用 ")])],1),e.formData.perms.length?a("FormItem",{attrs:{label:"可用权限：",prop:"perms"}},[a("div",{staticClass:"all"},[a("Checkbox",{attrs:{border:"",value:e.allSelectedFlag,indeterminate:e.indeterminate},on:{"on-change":e.changeAllSelectedFlag}},[e._v(" 全部选择 ")])],1),a("div",{staticClass:"collapse"},[a("ul",e._l(e.formData.perms,(function(t,n){return a("li",{key:n,staticClass:"collapse-item"},[a("div",{staticClass:"header"},[a("span",{staticClass:"icon iconfont",class:{"icon-full-right":!t.showFlag,"icon-full-down":t.showFlag},on:{click:function(e){t.showFlag=!t.showFlag}}}),a("Checkbox",{attrs:{indeterminate:t.indeterminate},on:{"on-change":function(t){return e.changeChecked(n)}},model:{value:t.checked,callback:function(a){e.$set(t,"checked",a)},expression:"item.checked"}},[e._v(" "+e._s(t.title)+" ")])],1),a("div",{staticClass:"body",class:{show:t.showFlag}},[a("ul",e._l(t.children,(function(t,r){return a("li",{key:r},[a("div",{staticClass:"left"},[a("Checkbox",{attrs:{indeterminate:t.indeterminate},on:{"on-change":function(t){return e.changeSecChecked(n,r)}},model:{value:t.checked,callback:function(a){e.$set(t,"checked",a)},expression:"secItem.checked"}},[e._v(" "+e._s(t.title)+" ")])],1),a("div",{staticClass:"right"},e._l(t.perm,(function(t,i){return a("div",{key:i},[a("Checkbox",{on:{"on-change":function(t){return e.changeThiChecked(n,r,i)}},model:{value:t.checked,callback:function(a){e.$set(t,"checked",a)},expression:"\n                                                        thiItem.checked\n                                                    "}},[e._v(" "+e._s(t.title)+" ")])],1)})),0)])})),0)])])})),0)])]):e._e()],1)],1)])},r=[]},c021:function(e,t,a){"use strict";a("0175")}}]);