(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"002d":function(e,t,a){"use strict";var n=a("19f9");a.o(n,"render")&&a.d(t,"render",(function(){return n["render"]})),a.o(n,"staticRenderFns")&&a.d(t,"staticRenderFns",(function(){return n["staticRenderFns"]}))},"19f9":function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0,a("b0c0"),a("ac1f"),a("841c");var n=function(){var e=this,t=e._self._c;return t("kdx-modal-frame",{attrs:{title:"商品组选择器",width:850},on:{"on-ok":e.handleOk,"on-cancel":e.handleCancel},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[t("div",{staticClass:"goods-group-selector"},[t("div",{ref:"scrollBox",staticClass:"goods-group-content"},[t("div",{staticClass:"search"},[t("Input",{staticClass:"width-250",attrs:{search:"","enter-button":"搜索",placeholder:"请输入"},on:{"on-search":e.handleSearch},model:{value:e.search.name,callback:function(t){e.$set(e.search,"name",t)},expression:"search.name"}})],1),t("Table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",attrs:{columns:e.columns,data:e.data}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.total>10,expression:"total > 10"}],staticClass:"footer-page"},[t("kdx-page-component",{ref:"page",attrs:{total:e.total},on:{"on-change":e.handlePageChange}})],1)])])};t.render=n;var s=[];t.staticRenderFns=s},"37c9":function(e,t,a){"use strict";a.r(t);var n=a("002d"),s=a("78c5");for(var i in s)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(i);a("ba8f");var o=a("2877"),r=Object(o["a"])(s["default"],n["render"],n["staticRenderFns"],!1,null,"4c6c20d0",null);t["default"]=r.exports},"40c7":function(e,t,a){"use strict";a.r(t);var n=a("8768"),s=a("dc24");for(var i in s)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(i);a("7ee3");var o=a("2877"),r=Object(o["a"])(s["default"],n["render"],n["staticRenderFns"],!1,null,"0aeda320",null);t["default"]=r.exports},"4d01":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0;var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"select-good-type"},[t("div",{staticClass:"type-table"},[t("Table",{attrs:{border:"",columns:e.columns,data:e.getCate,size:"small"}}),e.getCate.length?e._e():t("div",{staticClass:"add",on:{click:e.selectLink}},[e._v("+添加分组")])],1),t("group-selector",{ref:"groupSelector",attrs:{current:e.getCate[0]},on:{"on-change":e.selectGroup}})],1)};t.render=a;var n=[];t.staticRenderFns=n},"655c":function(e,t,a){var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a("b85c"));a("ac1f"),a("841c"),a("4de4"),a("d3b7"),a("159b");var i={name:"GoodsGroupSelector",props:{current:{type:[String,Object],default:function(){}},currentList:{type:Array,default:function(){return[]}},multiple:{type:Boolean,default:!1}},data:function(){var e=this;this.$createElement;return{value:!1,search:{name:""},columns:[{title:"商品分组",key:"name"},{title:"操作",key:"action",width:80,render:function(t,a){return t("div",{class:"action"},[t("Button",{class:"default-primary",style:{display:a.row.checked?"none":"block"},on:{click:function(){e.setChecked(a.index,!0)}}},["选择"]),t("Button",{attrs:{type:"primary"},style:{display:a.row.checked?"block":"none"},on:{click:function(){e.setChecked(a.index,!1)}}},["已选"])])}}],data:[],total:0,page:{pageSize:10,pageNumber:1},selectRow:{},selectRows:[],loading:!1}},methods:{setValue:function(){this.value=!this.value,this.value&&(this.resetSearch(),this.resetPage(),this.getList())},handleSearch:function(){this.resetPage(),this.getList()},resetSearch:function(){this.search={name:""}},resetPage:function(){var e;this.page={pageSize:10,pageNumber:1},null===(e=this.$refs["page"])||void 0===e||e.reset()},setChecked:function(e,t){var a=this;this.multiple?(this.$set(this.data[e],"checked",t),0===this.selectRows.length||t?this.selectRows.push(this.data[e]):this.selectRows=this.selectRows.filter((function(t){return t.id!==a.data[e].id}))):(this.data.forEach((function(e,t){a.$set(a.data[t],"checked",!1)})),this.$set(this.data[e],"checked",t),this.selectRow=t?this.data[e]:{})},defaultChecked:function(){var e=this;this.multiple?(this.selectRows=this.currentList,this.data.forEach((function(t,a){var n,i=(0,s.default)(e.currentList);try{for(i.s();!(n=i.n()).done;){var o=n.value;if(o.id===t.id){e.$set(e.data[a],"checked",!0);break}}}catch(r){i.e(r)}finally{i.f()}}))):(this.selectRow=this.current,this.data.forEach((function(t,a){e.current&&t.id===e.current.id?e.$set(e.data[a],"checked",!0):e.$set(e.data[a],"checked",!1)})))},handlePageChange:function(e){this.page=e,this.getList();try{this.$refs.scrollBox.scrollTop=0}catch(t){console.log(t)}},handleOk:function(){this.multiple?this.$emit("on-change",this.selectRows):this.$emit("on-change",this.selectRow),this.setValue()},handleCancel:function(){this.setValue()},getList:function(){var e=this;this.loading=!0;var t=Object.assign({pagesize:this.page.pageSize,page:this.page.pageNumber,status:"1",pager:1},this.search);this.$api.goodsApi.goodGroupList(t).then((function(t){0===t.error&&(e.data=t.list,e.total=t.total,e.defaultChecked(),e.loading=!1)}))}}};t.default=i},"78c5":function(e,t,a){"use strict";a.r(t);var n=a("655c"),s=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=s.a},"7ee3":function(e,t,a){"use strict";a("8cef")},8768:function(e,t,a){"use strict";var n=a("4d01");a.o(n,"render")&&a.d(t,"render",(function(){return n["render"]})),a.o(n,"staticRenderFns")&&a.d(t,"staticRenderFns",(function(){return n["staticRenderFns"]}))},"8cef":function(e,t,a){},ba8f:function(e,t,a){"use strict";a("ccf7")},c5bb:function(e,t,a){var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("b0c0"),a("d81d");var s=n(a("aee3")),i=n(a("37c9")),o={components:{GroupSelector:i.default},mixins:[s.default],props:{currentInfo:{type:Object,default:function(){}}},data:function(){var e=this;this.$createElement;return{componentData:{},columns:[{key:"thumb",title:"分组名称",align:"left",render:function(e,t){return e("div",{class:"category"},[e("div",{class:"title"},[t.row.title])])}},{key:"option",title:"操作",align:"center",width:100,render:function(t,a){return t("p",{class:"option",style:"text-align:center;"},[t("span",{on:{click:function(){e.selectLink(a)}}},["替换"]),t("span",{on:{click:function(){e.delete(a)}}},["删除"])])}}]}},watch:{"componentData.params.goodssort":{immediate:!0,handler:function(){this.selectGroup()}}},computed:{getCate:function(){var e=[{title:this.componentData.params.groupname,id:this.componentData.params.groupid}];return this.componentData.params.groupid?e:[]}},created:function(){this.componentData=this.currentInfo||this.currentModal},methods:{delete:function(){this.componentData.params.groupid="",this.componentData.params.groupname="",this.componentData.data=[]},selectGroup:function(){var e,t,a,n,s=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:null===(e=this.componentData.params)||void 0===e?void 0:e.groupid,name:null===(t=this.componentData.params)||void 0===t?void 0:t.groupname};if("goods"==(null===(a=this.errorInfo)||void 0===a?void 0:a.id)&&this.$emit("validateGoodsForm"),i.id){var o={0:{key:"",by:"desc"},1:{key:"sales",by:"desc"},2:{key:"price",by:"desc"},3:{key:"price",by:"asc"}};this.componentData.params.groupname=i.name,this.componentData.params.groupid=i.id;var r={pageCount:1,pagesize:50,status:1,group_id:null!==(n=null===i||void 0===i?void 0:i.id)&&void 0!==n?n:"",label_field:isNaN(1*this.componentData.params.goodsdata)?this.componentData.params.goodsdata:"",sort:o[this.componentData.params.goodssort].key,by:o[this.componentData.params.goodssort].by};this.$api.goodsApi.goodsList(r).then((function(e){0==e.error&&(s.componentData.data=e.list.map((function(e){return{thumb:e.thumb,price:e.price,productprice:e.original_price,sales:1*e.sales+1*e.real_sales,title:e.title,sub_name:e.sub_name,gid:e.id,bargain:0,credit:0,ctype:0}})))}))}else this.componentData.data=[]},selectLink:function(){this.$refs.groupSelector.setValue()}}};t.default=o},ccf7:function(e,t,a){},dc24:function(e,t,a){"use strict";a.r(t);var n=a("c5bb"),s=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=s.a}}]);