(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[47],{"0b1d":function(t,e,a){"use strict";a.r(e);var n=a("27ca"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"0c25":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-header-title"},[a("div",{staticClass:"left"},[a("span",{staticClass:"title"},[t._v(t._s(t.title))]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.text,expression:"text"}],staticClass:"text"},[t._v(t._s(t.text))]),t.$slots.tooltip?a("kdx-hint-tooltip",{attrs:{type:"form","max-width":t.maxWidth}},[t._t("tooltip")],2):t._e()],1),a("div",{staticClass:"right"},[t._t("right")],2)])},i=[]},"1f63":function(t,e,a){"use strict";a("6574")},2515:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n={name:"MultiSpecification",props:{id:{type:[Number,String]}},data:function(){this.$createElement;return{value:!1,columns:[{title:"规格",key:"title"},{title:"销量(件)",key:"total",render:function(t,e){return e.row[e.column.key]?t("div",[e.row[e.column.key]]):t("div",["-"])}},{title:"销售额(元)",key:"price",render:function(t,e){return e.row[e.column.key]?t("div",[e.row[e.column.key]]):t("div",["-"])}}],data:[],loading:!1}},methods:{setValue:function(){this.value=!this.value,this.value&&this.getData()},getData:function(){var t=this;this.loading=!0,this.$api.homeApi.getGoodsDetail({id:this.id}).then((function(e){t.loading=!1,0===e.error&&(t.data=e.data||[])}))},handleCancel:function(){this.setValue()},handleOk:function(){this.setValue()}}};e.default=n},"278a":function(t,e,a){"use strict";a.r(e);var n=a("0c25"),i=a("4b04");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("1f63");var r=a("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"24513577",null);e["default"]=s.exports},"27ca":function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("278a")),o=n(a("2d50")),r=a("d1be"),s={name:"SearchHeader",components:{HeaderTitle:i.default,CardPanel:o.default},props:{data:{type:Object,default:function(){}},loading:{type:Boolean,default:!1}},data:function(){return{date:(0,r.formatDate)(new Date(new Date-864e5),"yyyy-MM-dd"),dateOptions:{disabledDate:function(t){return t.valueOf()>Date.now()-864e5}}}},computed:{updateTimeText:function(){var t,e;return null===(t=this.$store.state.config)||void 0===t||null===(e=t.data)||void 0===e?void 0:e.updateTimeText}},methods:{changeDate:function(t){this.date=t},okDate:function(){this.$emit("on-date-change",this.date)}}};e.default=s},"2d50":function(t,e,a){"use strict";a.r(e);var n=a("638b"),i=a("553d");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("f3d6");var r=a("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"2a17712f",null);e["default"]=s.exports},3592:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"CardPanel",props:{type:{type:String,validate:["info","success","warning","danger","blue","purple"]},icon:{type:String},image:{type:String},title:{type:String}},methods:{handleClick:function(){this.$emit("click")}}};e.default=a},"3e12":function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n={name:"HeaderTitle",props:{title:{type:[String,Number]},text:{type:[String,Number]},maxWidth:{type:Number}}};e.default=n},4262:function(t,e,a){},"4b04":function(t,e,a){"use strict";a.r(e);var n=a("3e12"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"4bbe":function(t,e,a){},"50c0":function(t,e,a){},"553d":function(t,e,a){"use strict";a.r(e);var n=a("3592"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"59a2":function(t,e,a){"use strict";a.r(e);var n=a("8258"),i=a("b9ec");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("8416");var r=a("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"484ede0a",null);e["default"]=s.exports},"638b":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-card-panel",on:{click:t.handleClick}},[a("div",{staticClass:"card-panel-box",class:["card-panel-"+t.type]},[t.icon?a("div",{staticClass:"icon"},[a("span",{class:["iconfont",t.icon]})]):t.image?a("div",{staticClass:"image"},[a("img",{attrs:{src:t.image,alt:""}})]):t._e(),a("div",{staticClass:"card-panel-description"},[a("p",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")]),a("p",{staticClass:"data"},[t._t("default")],2)])])])},i=[]},6574:function(t,e,a){},"6c14":function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var i=n(a("278a")),o=a("d1be"),r=n(a("59a2")),s={name:"TableList",components:{HeaderTitle:i.default,MultiSpecification:r.default},props:{data:{type:Array,default:function(){return[]}},total:{type:Number,default:0}},data:function(){var t=this;this.$createElement;return{columns:[{title:"商品",key:"shop",minWidth:150,render:function(e,a){return e("div",{class:"shop-box"},[e("div",{class:"image"},[e("img",{attrs:{src:t.$media(a.row.thumb)},on:{error:function(e){t.replaceImage(e)}}})]),e("div",{class:"content"},[e("div",{class:"content-text"},[e("span",{class:"mark",style:{display:"1"===a.row.has_option?"inline-block":"none"}},["多"]),e("span",{class:"text"},[a.row.title])])])])}},{title:"销售量(件)",key:"total",sortable:"custom"},{title:"销售额",key:"price",sortable:"custom",render:function(t,e){return t("div",["￥",e.row[e.column.key]])}},{title:"浏览量(次)",key:"pv",sortable:"custom"},{title:"商品状态",key:"status",render:function(t,e){return"1"==e.row.status?t("kdx-status-text",{attrs:{type:"success"}},["出售中"]):"2"==e.row.status?t("kdx-status-text",{attrs:{type:"danger"}},["已售罄"]):"3"==e.row.status?t("kdx-status-text",{attrs:{type:"warning"}},["仓库中"]):"4"==e.row.status?t("kdx-status-text",{attrs:{type:"disabled"}},["回收站"]):void 0}},{title:"操作",key:"action",width:100,render:function(e,a){return"1"===a.row.has_option?e("div",{attrs:{className:"action"}},[e("Button",{attrs:{type:"text"},on:{click:function(){t.lookDetail(a.row)}}},["查看详情"])]):e("div",["-"])}}],page:{pageSize:10,pageNumber:1},date:[(0,o.formatDate)(new Date(new Date-2592e6),"yyyy-MM-dd"),(0,o.formatDate)(new Date(new Date-864e5),"yyyy-MM-dd")],dateOptions:{disabledDate:function(t){return t.valueOf()>Date.now()-864e5}},id:""}},methods:{reset:function(){var t;null===(t=this.$refs["page"])||void 0===t||t.reset()},changeDate:function(t){this.date=t},okDate:function(){this.$emit("on-table-date-change",this.date)},changePage:function(t){this.$emit("on-page-change",t)},changeSort:function(t){var e=t.key,a=t.order;this.$emit("on-sort",{sort:e,by:a})},lookDetail:function(t){var e=this;this.id=t.id,this.$nextTick((function(){e.$refs["multi_specification"].setValue()}))}}};e.default=s},7092:function(t,e,a){"use strict";a.r(e);var n=a("9d54"),i=a("0b1d");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("b6a3");var r=a("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"384b328c",null);e["default"]=s.exports},8258:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("kdx-modal-frame",{attrs:{title:"多规格商品",width:880},on:{"on-cancel":t.handleCancel,"on-ok":t.handleOk},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("div",{staticClass:"multi-specification"},[a("Table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",attrs:{border:"",columns:t.columns,data:t.data}})],1)])},i=[]},8416:function(t,e,a){"use strict";a("4262")},"8e23":function(t,e,a){"use strict";a("4bbe")},9771:function(t,e,a){"use strict";a.r(e);var n=a("fbb6"),i=a("b0a6");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("d30c");var r=a("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"0103e61d",null);e["default"]=s.exports},9950:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"market-coupons-all"},[a("goods-info",{ref:"goods_info",attrs:{data:t.goods.data,loading:t.goods.loading},on:{"on-date-change":t.changeDate}}),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.table.loading,expression:"table.loading"}],staticClass:"table-list"},[a("table-list",{ref:"table_list",attrs:{data:t.table.data,total:t.table.total},on:{"on-page-change":t.changePage,"on-refresh":t.refreshTable,"on-sort":t.handleSort,"on-table-date-change":t.changeTableDate}})],1),t._t("default")],2)},i=[]},"9d54":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"data-goods-info-header"},[a("header-title",{attrs:{title:"商品信息",text:t.updateTimeText,"max-width":340},scopedSlots:t._u([{key:"right",fn:function(){return[a("DatePicker",{staticClass:"width-250",attrs:{type:"date",options:t.dateOptions,confirm:"","split-panels":"",placeholder:"时间",clearable:!1},on:{"on-change":t.changeDate,"on-ok":t.okDate},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})]},proxy:!0},{key:"tooltip",fn:function(){return[a("Form",{attrs:{"label-width":115}},[a("FormItem",{attrs:{label:"被浏览商品数量/件："}},[t._v(" 统计时间内，商品详情页浏览次数大于0的商品数 ")]),a("FormItem",{attrs:{label:"加购商品数量/件："}},[t._v(" 统计时间内，成功添加至购物车的商品件数。 ")]),a("FormItem",{attrs:{label:"购买商品数量/件："}},[t._v(" 统计时间内，成功付款的商品件数之和（包含退款订单） ")])],1)]},proxy:!0}])}),a("Row",[a("Col",{attrs:{span:"8"}},[a("card-panel",{attrs:{type:"warning",icon:"icon-fenxiao-leijiyongjin-",title:"被浏览商品数量(件)"}},[t._v(" "+t._s(t.data.goods_pv_count||"0")+" ")])],1),a("Col",{attrs:{span:"8"}},[a("card-panel",{attrs:{type:"warning",icon:"icon-shuju-jiagou",title:"加购商品数量(件)"}},[t._v(" "+t._s(t.data.cart_goods_count||"0")+" ")])],1),a("Col",{attrs:{span:"8"}},[a("card-panel",{attrs:{type:"warning",icon:"icon-shuju-shouchu",title:"购买商品数量(件)"}},[t._v(" "+t._s(t.data.pay_goods_count||"0")+" ")])],1)],1)],1)},i=[]},b0a6:function(t,e,a){"use strict";a.r(e);var n=a("6c14"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},b6a3:function(t,e,a){"use strict";a("e366")},b9ec:function(t,e,a){"use strict";a.r(e);var n=a("2515"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},c527:function(t,e,a){"use strict";a.r(e);var n=a("ee4e"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},d30c:function(t,e,a){"use strict";a("e96e")},e366:function(t,e,a){},e96e:function(t,e,a){},ee4e:function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("4e82");var i=n(a("7092")),o=n(a("9771")),r=a("d1be"),s={name:"index",components:{GoodsInfo:i.default,TableList:o.default},data:function(){return{goods:{data:{},loading:!1,date:(0,r.formatDate)(new Date(new Date-864e5),"yyyy-MM-dd")},table:{data:[],total:0,loading:!1,date:{start_time:(0,r.formatDate)(new Date(new Date-2592e6),"yyyy-MM-dd"),end_time:(0,r.formatDate)(new Date(new Date-864e5),"yyyy-MM-dd")}},page:{pageSize:10,pageNumber:1},sort:{}}},methods:{changeDate:function(t){this.goods.date=t,this.getGoods()},changeTableDate:function(t){this.table.date.start_time=t[0],this.table.date.end_time=t[1],this.refreshTable()},handleSort:function(t){this.sort=t,this.refreshTable()},getList:function(){var t=this;this.table.loading=!0;var e=Object.assign({pagesize:this.page.pageSize,page:this.page.pageNumber},this.sort,this.table.date);this.$api.homeApi.getGoodsRank(e).then((function(e){t.table.loading=!1,0===e.error&&(t.table.data=e.list,t.table.total=e.total)}))},getGoods:function(){var t=this;this.goods.loading=!0,this.$api.homeApi.getGoodsInfo({goods_date:this.goods.date}).then((function(e){t.goods.loading=!1,0===e.error&&(t.goods.data=e)}))},refreshTable:function(){var t;this.page={pageSize:10,pageNumber:1},null===(t=this.$refs["table_list"])||void 0===t||t.reset(),this.getList()},changePage:function(t){this.page=t,this.getList()}},mounted:function(){this.getGoods(),this.refreshTable()}};e.default=s},f3d6:function(t,e,a){"use strict";a("50c0")},f6d9:function(t,e,a){"use strict";a.r(e);var n=a("9950"),i=a("c527");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("8e23");var r=a("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"220298ed",null);e["default"]=s.exports},fbb6:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-goods-list"},[a("header-title",{attrs:{title:"全部排行"},scopedSlots:t._u([{key:"right",fn:function(){return[a("DatePicker",{staticClass:"width-250",attrs:{type:"daterange",options:t.dateOptions,confirm:"","split-panels":"",placeholder:"时间",clearable:!1},on:{"on-change":t.changeDate,"on-ok":t.okDate},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})]},proxy:!0}])}),a("Table",{ref:"table",attrs:{columns:t.columns,data:t.data},on:{"on-sort-change":t.changeSort}}),a("div",{staticClass:"footer-page"},[a("kdx-page-component",{ref:"page",attrs:{total:t.total},on:{"on-change":t.changePage}})],1),a("multi-specification",{ref:"multi_specification",attrs:{id:t.id}})],1)},i=[]}}]);