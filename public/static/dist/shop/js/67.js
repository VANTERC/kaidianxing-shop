(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[67],{"05e3":function(t,e,a){"use strict";a.r(e);var n=a("7b2a"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},1103:function(t,e,a){},"1fcc":function(t,e,a){},"2bfb":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wx-transaction"},[a("kdx-header-bar",{attrs:{type:"little"},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"header-btn"},[a("Button",{staticClass:"marginR-10",attrs:{type:"primary",disabled:t.noManagePerm},on:{click:function(e){return t.handleAction("add")}}},[t._v("+新增类目")]),a("Button",{staticClass:"primary-border",attrs:{disabled:t.noManagePerm},on:{click:function(e){return t.handleAction("refresh")}}},[t._v("同步刷新")])],1)]},proxy:!0}])}),a("table-list",{ref:"table",attrs:{data:t.tableData,"page-size":t.page.pageSize,current:t.page.pageNumber,total:t.total,loading:t.loading},on:{"on-page-change":t.changePage,"on-refresh":t.handleRefresh,"on-edit":t.handleEdit}}),a("add-category",{ref:"add_category",attrs:{id:t.categoryId},on:{"on-refresh":t.handleRefresh}}),t._t("default")],2)},i=[]},"2d60":function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n={name:"TableList",props:{data:{type:Array,default:function(){return[]}},pageSize:{type:Number,default:10},current:{type:Number,default:1},total:{type:Number,default:0},loading:{type:Boolean,default:!1}},data:function(){return{columns:[{title:"审核单号",key:"audit_id"},{title:"分类名称",key:"category_name"},{title:"审核状态",slot:"audit_status",maxWidth:200},{title:"操作",slot:"action",maxWidth:200}],option:{status:{1:{title:"出售中",type:"success"},2:{title:"已售罄",type:"danger"},3:{title:"仓库中",type:"warning"},4:{title:"回收站",type:"disabled"}},auditStatus:{0:{title:"审核中",type:"warning"},1:{title:"审核成功",type:"success"},9:{title:"审核失败",type:"danger"}}}}},computed:{noManagePerm:function(){return!this.$getPermMap("wxTransactionComponent.category.manage")}},methods:{changePage:function(t){this.$emit("on-page-change",t)},reset:function(t){var e;null===(e=this.$refs["page"])||void 0===e||e.reset(t)},handleEdit:function(t){this.$emit("on-edit",t.id)},recallAudit:function(t){var e=this;this.$api.wxTransactionComponentApi.recallAudit({id:t.id}).then((function(t){0===t.error&&(e.$Message.success("撤销审核成功"),e.$emit("on-refresh"))}))},handleDelete:function(t){var e=this;this.$Modal.confirm({title:"提示",content:"确认删除？",onOk:function(){e.$api.wxTransactionComponentApi.deleteCategoryAudit({id:t.id}).then((function(t){0===t.error&&(e.$Message.success("商品删除成功"),e.$emit("on-refresh"))}))}})}}};e.default=n},"3b0d":function(t,e,a){"use strict";a.r(e);var n=a("94e48"),i=a("a440");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("4257");var s=a("2877"),o=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"10d239bc",null);e["default"]=o.exports},4126:function(t,e,a){},4257:function(t,e,a){"use strict";a("1fcc")},"59c7":function(t,e,a){"use strict";a.r(e);var n=a("2bfb"),i=a("05e3");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("f03d");var s=a("2877"),o=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"468e16fc",null);e["default"]=o.exports},"643a":function(t,e,a){"use strict";a("1103")},"7b2a":function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530"));a("ac1f"),a("841c"),a("d3b7");var r=n(a("3b0d")),s=n(a("b19a1")),o={name:"index",components:{TableList:r.default,AddCategory:s.default},data:function(){return{search:{},tableData:[],page:{pageSize:10,pageNumber:1},total:0,loading:!1,categoryId:""}},computed:{noManagePerm:function(){return!this.$getPermMap("wxTransactionComponent.category.manage")}},created:function(){this.handleRefresh()},methods:{handleSearch:function(t){this.search=t,this.handleRefresh()},changePage:function(t){this.page=t,this.getData()},getData:function(){var t=this;this.loading=!0;var e=(0,i.default)({pagesize:this.page.pageSize,page:this.page.pageNumber},this.search);this.$api.wxTransactionComponentApi.getCategoryList(e).then((function(e){0===e.error&&(t.tableData=e.data.list,t.total=e.data.total)})).finally((function(){t.loading=!1}))},handleRefresh:function(){this.resetPage(),this.getData()},handleAction:function(t){if(!this.noManagePerm)switch(t){case"add":this.categoryId="",this.$refs["add_category"].setValue();break;case"refresh":this.syncRefresh();break}},resetPage:function(){var t;this.page={pageSize:10,pageNumber:1},null===(t=this.$refs["table"])||void 0===t||t.reset()},syncRefresh:function(){var t=this;this.loading=!0;var e={page_size:this.page.pageSize,page:this.page.pageNumber};this.$api.wxTransactionComponentApi.updateCategoryAuditStatus(e).then((function(e){0===e.error&&t.getData()})).finally((function(){t.loading=!1}))},handleEdit:function(t){var e=this;this.categoryId=t,this.$nextTick((function(){e.$refs["add_category"].setValue()}))}}};e.default=o},"937d":function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var i=n(a("b85c")),r=n(a("1da1"));a("a9e3"),a("d3b7"),a("d81d"),a("4de4"),a("159b");var s={name:"AddGoods",props:{id:{type:[Number,String]}},data:function(){return{value:!1,model:{classify:"",business:"",certificate:[]},Cascader:[],rules:{classify:[{required:!0,message:"分类必填"}],business:[{required:!0,message:"营业执照必填"}],certificate:[{required:!0,message:"资质材料必填"}]},loading:!1,classifyData:[],certificateHint:"",business:[],certificate:[]}},methods:{setValue:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.value=!t.value,!t.value){e.next=11;break}return t.loading=!0,t.resetModel(),e.next=6,t.getCategory();case 6:if(e.t0=t.id,!e.t0){e.next=10;break}return e.next=10,t.getDetail();case 10:t.loading=!1;case 11:case"end":return e.stop()}}),e)})))()},getCategory:function(){var t=this;return new Promise((function(e){t.$api.wxTransactionComponentApi.getCategory({sign:!0}).then((function(e){0===e.error&&(t.classifyData=e.data||[])})).finally((function(){e()}))}))},getDetail:function(){var t=this;return new Promise((function(e){t.$api.wxTransactionComponentApi.getCategoryAuditDetail({id:t.id}).then((function(e){var a,n,i,r;0===e.error&&(t.getCascader(e.data.category_id,t.classifyData),t.business=(null===(a=e.data.path)||void 0===a?void 0:a.license)||[],t.certificate=(null===(n=e.data.path)||void 0===n?void 0:n.certificate)||[],t.model={classify:e.data.category_id,business:(null===(i=t.business)||void 0===i||null===(r=i[0])||void 0===r?void 0:r.path)||"",certificate:t.certificate.map((function(t){return t.path}))})})).finally((function(){e()}))}))},getCascader:function(t,e){var a,n=[],r=(0,i.default)(e);try{for(r.s();!(a=r.n()).done;){var s,o=a.value;if(n=[o.value],null!==(s=o.children)&&void 0!==s&&s.length){var c,u=(0,i.default)(o.children);try{for(u.s();!(c=u.n()).done;){var l=c.value;if(n=[n[0],l.value],l.children){var d,f=(0,i.default)(l.children);try{for(f.s();!(d=f.n()).done;){var h=d.value;h.value===t&&(n.push(h.value),this.Cascader=n)}}catch(m){f.e(m)}finally{f.f()}}}}catch(m){u.e(m)}finally{u.f()}}}}catch(m){r.e(m)}finally{r.f()}var g,p=(0,i.default)(e);try{for(p.s();!(g=p.n()).done;){var v=g.value;if(v.value===this.Cascader[0]){this.certificateHint=v.qualification;break}}}catch(m){p.e(m)}finally{p.f()}},handleOk:function(){var t=this;this.$refs["form"].validate((function(e){if(e){t.loading=!0;var a={cat_id:t.model.classify,path:{license:t.getPathParams(t.business,[t.model.business]),certificate:t.getPathParams(t.certificate,t.model.certificate)}};t.id&&(a.id=t.id),console.log("params",a,t.model.certificate),t.$api.wxTransactionComponentApi.addCategoryAudit(a).then((function(e){if(0===e.error){var a=t.id?"类目编辑成功":"类目添加审核成功";t.$Message.success(a),t.setValue(),t.$emit("on-refresh")}})).finally((function(){t.loading=!1}))}}))},getPathParams:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.map((function(e){var a=t.filter((function(t){return t.path===e}));return a.length>0?a[0]:{path:e}}))},handleCancel:function(){this.setValue()},changeClassify:function(t,e){var a;null!==(a=e)&&void 0!==a&&a.length?this.certificateHint=e[0].qualification:e=this.getSelectClassify(t,this.classifyData);var n=e[e.length-1];this.model.classify=n.value,this.Cascader=t.map((function(t){return parseInt(t)}))},getSelectClassify:function(t,e){var a=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return e.forEach((function(e){var i;e.value===+t[(null===n||void 0===n?void 0:n.length)||0]&&(n.push(e),(null===(i=e.children)||void 0===i?void 0:i.length)&&a.getSelectClassify(t,e.children,n),e.qualification&&(a.certificateHint=e.qualification))})),n},resetModel:function(){this.$refs["form"].resetFields(),console.log("model",this.model),this.Cascader=[],this.certificateHint=""},changeImage:function(t,e){this.model[e]=t}}};e.default=s},"94e48":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-list"},[a("Table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"tab",attrs:{columns:t.columns,data:t.data},scopedSlots:t._u([{key:"status",fn:function(e){var n=e.row;return[a("kdx-tag-label",{attrs:{type:t.option.status[n.goods_status].type}},[t._v(t._s(t.option.status[n.goods_status].title))])]}},{key:"audit_status",fn:function(e){var n=e.row;return[a("kdx-status-text",{attrs:{type:t.option.auditStatus[n.status].type}},[t._v(t._s(t.option.auditStatus[n.status].title)+" ")])]}},{key:"action",fn:function(e){var n=e.row;return[a("div",{staticClass:"action"},["1"!=n.status?a("Button",{attrs:{type:"text",disabled:t.noManagePerm},on:{click:function(e){return t.handleEdit(n)}}},[t._v("编辑")]):t._e(),"9"==n.status?a("Button",{attrs:{type:"text",disabled:t.noManagePerm},on:{click:function(e){return t.handleDelete(n)}}},[t._v("删除")]):t._e()],1)]}}])}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.total>10,expression:"total > 10"}],staticClass:"footer-page"},[a("kdx-page-component",{ref:"page",attrs:{current:t.current,pageSize:t.pageSize,total:t.total},on:{"on-change":t.changePage}})],1)],1)},i=[]},a440:function(t,e,a){"use strict";a.r(e);var n=a("2d60"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},b19a1:function(t,e,a){"use strict";a.r(e);var n=a("f387"),i=a("e331");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("643a");var s=a("2877"),o=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"4a226eb0",null);e["default"]=o.exports},e331:function(t,e,a){"use strict";a.r(e);var n=a("937d"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},f03d:function(t,e,a){"use strict";a("4126")},f387:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("kdx-modal-frame",{attrs:{title:t.id?"编辑类目":"新增类目",width:650,loading:t.loading},on:{"on-cancel":t.handleCancel,"on-ok":t.handleOk},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("div",{staticClass:"add-goods"},[a("Form",{ref:"form",attrs:{model:t.model,rules:t.rules,"label-width":100},nativeOn:{submit:function(t){t.preventDefault()}}},[a("FormItem",{attrs:{label:"选择分类：",prop:"classify"}},[a("Cascader",{staticClass:"width-340",attrs:{value:t.Cascader,data:t.classifyData,transfer:"",filterable:"",disabled:!!t.id},on:{"on-change":t.changeClassify}}),a("kdx-hint-text",[t._v("选择需要进行类目审核的商品分类")])],1),a("FormItem",{attrs:{label:"营业执照：",prop:"business"}},[a("kdx-image-video",{attrs:{current:t.model.business,width:80,height:80},on:{"on-change":function(e){return t.changeImage(e,"business")}}}),a("kdx-hint-text",[t._v("营业执照或组织机构代码证")])],1),a("FormItem",{attrs:{label:"资质材料：",prop:"certificate"}},[a("kdx-image-video",{attrs:{"current-list":t.model.certificate,multiple:"",limit:50,width:80,height:80},on:{"on-change":function(e){return t.changeImage(e,"certificate")}}}),a("kdx-hint-text",{style:{"margin-top":t.model.certificate.length>=50?"0":"-20px"}},[t._v(t._s(t.certificateHint))])],1)],1)],1)])},i=[]}}]);