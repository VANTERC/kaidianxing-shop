(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[53,140],{"0d58":function(t,e,a){"use strict";a.r(e);var n=a("e354"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"11de":function(t,e,a){},1943:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-header-title"},[a("div",{staticClass:"left"},[a("span",{staticClass:"title"},[t._v(t._s(t.title))]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.text,expression:"text"}],staticClass:"text"},[t._v(t._s(t.text))]),t.$slots.tooltip?a("kdx-hint-tooltip",{attrs:{type:"form","max-width":t.maxWidth}},[t._t("tooltip")],2):t._e()],1),a("div",{staticClass:"right"},[t._t("right")],2)])},i=[]},"1d30":function(t,e,a){"use strict";a("a8e8")},"28fd":function(t,e,a){"use strict";a.r(e);var n=a("1943"),i=a("3b43");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("c997");var s=a("2877"),d=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"46bf749c",null);e["default"]=d.exports},"2ee7":function(t,e,a){"use strict";a.r(e);var n=a("6648"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},3248:function(t,e,a){},"3b3a":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-vip-increase"},[a("header-title",{attrs:{title:"会员增长趋势"},scopedSlots:t._u([{key:"right",fn:function(){return[a("RadioGroup",{attrs:{type:"button"},on:{"on-change":t.changeType},model:{value:t.date.interval,callback:function(e){t.$set(t.date,"interval",e)},expression:"date.interval"}},[a("Radio",{attrs:{label:"day",disabled:t.disabled}},[t._v("日")]),a("Radio",{attrs:{label:"month"}},[t._v("月")]),a("Radio",{attrs:{label:"year"}},[t._v("年")])],1),a("DatePicker",{staticClass:"width-250",attrs:{type:"daterange",options:t.dateOptions,confirm:"","split-panels":"",placeholder:"时间",clearable:!1},on:{"on-change":t.changeDate,"on-ok":t.okDate},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})]},proxy:!0}])}),a("chart-line",{ref:"chart_line",attrs:{id:"vip_crease",data:t.chart.data,xAxis:t.chart.xAxis,yAxis:t.chart.yAxis,legend:t.chart.legend,grid:t.chart.grid}})],1)},i=[]},"3b43":function(t,e,a){"use strict";a.r(e);var n=a("f0e4"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},4204:function(t,e,a){"use strict";a.r(e);var n=a("7813"),i=a("487fe");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("be2e");var s=a("2877"),d=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"12bb2f6a",null);e["default"]=d.exports},4379:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"CardPanel",props:{type:{type:String,validate:["info","success","warning","danger","blue","purple"]},icon:{type:String},image:{type:String},title:{type:String}},methods:{handleClick:function(){this.$emit("click")}}};e.default=a},"487fe":function(t,e,a){"use strict";a.r(e);var n=a("4379"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"4bba":function(t,e,a){"use strict";a.r(e);var n=a("6029"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"5ba2":function(t,e,a){"use strict";a("9d9e")},6029:function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("b64b"),a("d3b7"),a("159b");var i=n(a("28fd")),r=a("d1be"),s=n(a("6ab3")),d={name:"VipIncrease",components:{HeaderTitle:i.default,ChartLine:s.default},data:function(){return{date:{interval:"day",start_date:(0,r.formatDate)(new Date(new Date-2592e6),"yyyy-MM-dd"),end_date:(0,r.formatDate)(new Date(new Date-864e5),"yyyy-MM-dd")},time:[(0,r.formatDate)(new Date(new Date-2592e6),"yyyy-MM-dd"),(0,r.formatDate)(new Date(new Date-864e5),"yyyy-MM-dd")],dateOptions:{disabledDate:function(t){return t.valueOf()>Date.now()-864e5}},chart:{data:[[],[]],xAxis:[],yAxis:{name:"单位 (人)",splitLine:{lineStyle:{type:"dashed"}},minInterval:1},legend:["新增会员数","新增访客数"],grid:{left:50,right:30}},disabled:!1}},methods:{changeDate:function(t){this.date.start_date=t[0],this.date.end_date=t[1]},okDate:function(){this.dealDate(),this.getChartData()},dealDate:function(){new Date(this.date.end_date)-new Date(this.date.start_date)>15552e6?(this.disabled=!0,"day"===this.date.interval&&(this.date.interval="month")):this.disabled=!1},changeType:function(){this.getChartData()},getChartData:function(){var t=this;this.$api.memberApi.getVipIncrease(this.date).then((function(e){if(0===e.error){var a=e;delete a.error,t.formatChartData(a)}}))},formatChartData:function(t){var e=this,a=Object.keys(t),n=[],i=[];a.forEach((function(e){n.push(t[e].member_count),i.push(t[e].member_pv_count)})),this.chart.data=[n,i],this.chart.xAxis=a,this.$nextTick((function(){e.$refs["chart_line"].render()}))}},mounted:function(){this.getChartData()}};e.default=d},"62dd":function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530"));a("a9e3"),a("e9c4"),a("d81d"),a("d3b7"),a("159b"),a("b680"),a("b0c0"),a("99af");var r=n(a("313e")),s=n(a("89bd")),d={name:"ChartLine",props:{id:{type:String,required:!0},data:{type:Array,default:function(){return[]}},legend:{type:Array,default:function(){return[]}},legendStyle:{type:Object,default:function(){return{right:"0",top:"25"}}},xAxis:{type:Array,default:function(){return[]}},yAxis:{type:[Array,Object],default:function(){}},height:{type:Number,default:450},isAreaStyle:{type:Boolean,default:!1},areaStyle:{type:[Array,Object],default:function(){return[]}},loading:{type:Boolean,default:!1},grid:{type:Object,default:function(){}},lineColors:{type:Array,default:function(){return[]}},showYAxis:{type:Boolean,default:!1}},data:function(){return{myCharts:null,option:{title:{},grid:{left:"3%",right:"4%",bottom:"10%",containLabel:!1},tooltip:{trigger:"axis",axisPointer:{animation:!1,lineStyle:{color:"#BFBFBF"}},padding:[0],textStyle:{color:"#262B30",fontSize:12}},legend:(0,i.default)({icon:"circle",itemWidth:8,itemHeight:8,textStyle:{color:"#939799"},data:this.legend},this.legendStyle),xAxis:{type:"category",boundaryGap:!1,data:this.xAxis},yAxis:{nameTextStyle:{color:"#262B30"},splitLine:{lineStyle:{type:"dashed"}},axisLabel:{}},series:this.data}}},methods:{init:function(){r.default.registerTheme("theme",s.default),this.myCharts=r.default.init(document.getElementById("line_".concat(this.id)),s.default)},render:function(){var t=this;this.myCharts||this.init();var e=JSON.parse(JSON.stringify(this.option));if(Object.assign(e.grid,this.grid),e.legend.data=this.legend,this.lineColors.length&&(e.color=this.lineColors),e.xAxis.data=this.xAxis,this.yAxis instanceof Array)e.yAxis=this.yAxis.map((function(a,n){return a.splitLine=e.yAxis.splitLine,t.showYAxis&&1==n&&(a.inverse=!1),a}))||[],e.yAxis.forEach((function(t){var e;null!==t&&void 0!==t&&null!==(e=t.axisLabel)&&void 0!==e&&e.formatter||(t.axisLabel=(0,i.default)((0,i.default)({},t.axisLabel),{},{formatter:function(t){return t>=1e3?"".concat(parseFloat(t/1e3).toFixed(1),"K"):t}}))}));else if(this.yAxis instanceof Object){var a,n;e.yAxis=Object.assign(e.yAxis,this.yAxis),null!==(a=e.yAxis)&&void 0!==a&&null!==(n=a.axisLabel)&&void 0!==n&&n.formatter||(e.yAxis.axisLabel.formatter=function(t){return t>=1e3?"".concat(parseFloat(t/1e3).toFixed(1),"K"):t})}this.legend.length>1?e.series=this.legend.map((function(e,a){var n={name:e,type:"line",data:t.data[a]||[]};return t.showYAxis&&1==a&&(n.yAxisIndex=1),t.isAreaStyle&&(n.areaStyle=t.areaStyle[a]||{}),n})):(e.series=[{name:this.legend[0],type:"line",data:this.data||[]}],this.isAreaStyle&&(e.series[0].areaStyle=this.areaStyle||{})),e.tooltip.formatter=function(t){var e="",a=t[0].name;return t.forEach((function(t){var a=t.seriesName,n=t.value,i=t.color;e+='\n                                  <div style="display:flex;align-items:center;margin-top:4px;">\n                                  <span style="display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:8px;background:'.concat(i,';"></span>\n                                  <span style="color:#636669;">').concat(a,"：").concat(n,"</span>\n                                  </div>")})),'<div style="background:#fff;border-radius: 2px;padding: 12px 48px 12px 12px;box-shadow: 0px 4px 10px rgba(0, 49, 95, 0.08);">\n                                <div>'.concat(a,"</div>\n                                ").concat(e,"\n                        </div>")},this.myCharts.setOption(e)},handleResize:function(){this.myCharts&&this.myCharts.resize()}},mounted:function(){this.$emit("chartLineMounted"),window.addEventListener("resize",this.handleResize)}};e.default=d},6648:function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("28fd")),r=n(a("4204")),s={name:"SearchHeader",components:{HeaderTitle:i.default,CardPanel:r.default},props:{data:{type:Object,default:function(){}}},computed:{updateTimeText:function(){var t,e;return null===(t=this.$store.state.config)||void 0===t||null===(e=t.data)||void 0===e?void 0:e.updateTimeText}}};e.default=s},"6ab3":function(t,e,a){"use strict";a.r(e);var n=a("eff1"),i=a("e17c");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("9f05");var s=a("2877"),d=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"8c3f8a16",null);e["default"]=d.exports},"6e88":function(t,e,a){"use strict";a.r(e);var n=a("ca4e"),i=a("2ee7");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("939a");var s=a("2877"),d=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"501ea374",null);e["default"]=d.exports},7813:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-card-panel",on:{click:t.handleClick}},[a("div",{staticClass:"card-panel-box",class:["card-panel-"+t.type]},[t.icon?a("div",{staticClass:"icon"},[a("span",{class:["iconfont",t.icon]})]):t.image?a("div",{staticClass:"image"},[a("img",{attrs:{src:t.image,alt:""}})]):t._e(),a("div",{staticClass:"card-panel-description"},[a("p",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")]),a("p",{staticClass:"data"},[t._t("default")],2)])])])},i=[]},"7a39":function(t,e,a){},"86d6":function(t,e,a){},8948:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-vip"},[a("vip-info",{ref:"vip_info",attrs:{data:t.info.data}}),a("vip-increase"),t._t("default")],2)},i=[]},"939a":function(t,e,a){"use strict";a("11de")},"9d9e":function(t,e,a){},"9f05":function(t,e,a){"use strict";a("7a39")},a8e8:function(t,e,a){},b4d8:function(t,e,a){"use strict";a.r(e);var n=a("8948"),i=a("0d58");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("5ba2");var s=a("2877"),d=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"1c1aefea",null);e["default"]=d.exports},be2e:function(t,e,a){"use strict";a("3248")},c997:function(t,e,a){"use strict";a("86d6")},ca4e:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-vip-info-header"},[a("header-title",{attrs:{title:"会员累计数据",text:t.updateTimeText,"max-width":340},scopedSlots:t._u([{key:"tooltip",fn:function(){return[a("Form",{attrs:{"label-width":90}},[a("FormItem",{attrs:{label:"累计会员数/人："}},[t._v(" 注册会员总数 ")]),a("FormItem",{attrs:{label:"访问会员数/人："}},[t._v(" 访问商城登录会员数 ")]),a("FormItem",{attrs:{label:"付款会员/人："}},[t._v(" 累计所有成功付款的会员数，一人多次付款记为一人。货到付款在发货后，计入付款订单（包含退款订单） ")]),a("FormItem",{attrs:{label:"流失率："}},[t._v(" (30天内未访问商城的会员数/累计会员）*100% ")])],1)]},proxy:!0}])}),a("Row",[a("Col",{attrs:{span:"6"}},[a("card-panel",{attrs:{type:"success",icon:"icon-shuju-huiyuanshu",title:"累计会员数"}},[t._v(" "+t._s(t.data.member_count||"0")+" ")])],1),a("Col",{attrs:{span:"6"}},[a("card-panel",{attrs:{type:"success",icon:"icon-shuju-liulanliang",title:"访问会员数"}},[t._v(" "+t._s(t.data.member_pv_count||"0")+" ")])],1),a("Col",{attrs:{span:"6"}},[a("card-panel",{attrs:{type:"success",icon:"icon-shuju-fufeihuiyuan",title:"付费会员数"}},[t._v(" "+t._s(t.data.order_pay_member_count||"0")+" ")])],1),a("Col",{attrs:{span:"6"}},[a("card-panel",{attrs:{type:"success",icon:"icon-shuju-liushishuai",title:"流失率"}},[t._v(" "+t._s(parseFloat(t.data.un_view_scale)||"0")+"% ")])],1)],1)],1)},i=[]},e17c:function(t,e,a){"use strict";a.r(e);var n=a("62dd"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},e354:function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("6e88")),r=n(a("fd8d")),s={name:"index",components:{VipInfo:i.default,VipIncrease:r.default},data:function(){return{info:{data:{}}}},methods:{changeDate:function(t){this.info.date=t,this.getInfo()},getInfo:function(){var t=this;this.$api.memberApi.getVipInfo().then((function(e){0===e.error&&(t.info.data=e)}))}},mounted:function(){this.getInfo()}};e.default=s},eff1:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"data_charts_line"},[a("div",{style:{width:"100%",height:t.height+"px"},attrs:{id:"line_"+t.id}})])},i=[]},f0e4:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n={name:"HeaderTitle",props:{title:{type:[String,Number]},text:{type:[String,Number]},maxWidth:{type:Number}}};e.default=n},fd8d:function(t,e,a){"use strict";a.r(e);var n=a("3b3a"),i=a("4bba");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("1d30");var s=a("2877"),d=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"038abbea",null);e["default"]=d.exports}}]);