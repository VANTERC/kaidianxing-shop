(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[85],{1667:function(e,t,a){},1873:function(e,t,a){var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(a("5530")),n=i(a("b85c")),o=i(a("2909"));a("a9e3"),a("ac1f"),a("841c"),a("4de4"),a("d3b7"),a("159b");var r={name:"VipSelector",props:{current:{type:[String,Object],default:function(){}},currentList:{type:Array,default:function(){return[]}},multiple:{type:Boolean,default:!1},restParams:{type:Object,default:function(){}},passId:{type:[String,Number]},source:{type:String},type:{type:String,default:"vip"}},data:function(){var e=this;this.$createElement;return{value:!1,search:{keyword:"",level_id:"all",group_id:"all"},columns:[{title:"会员",key:"shop",minWidth:200,render:function(t,a){var i={10:t("kdx-svg-icon",{attrs:{type:"icon-H"},class:"platform-icon"}),20:t("kdx-svg-icon",{attrs:{type:"icon-weixin"},class:"platform-icon"}),21:t("kdx-svg-icon",{attrs:{type:"icon-weixinxiaochengxu"},class:"platform-icon"}),30:t("kdx-svg-icon",{attrs:{type:"icon-qudao-toutiao2"},class:"platform-icon"}),31:t("kdx-svg-icon",{attrs:{type:"icon-douyin"},class:"platform-icon"}),32:t("kdx-svg-icon",{attrs:{type:"icon-qudao-toutiaojisuban"},class:"platform-icon"})},s=i[a.row.source];return t("div",{class:"vip-info"},[t("div",{class:"user-image"},[t("img",{attrs:{src:e.$media(a.row.avatar),alt:""},on:{error:function(t){e.replaceImage(t,"avatar")}}})]),t("div",{class:"vip-content"},[t("p",{class:"vip-name line-hide"},[a.row.nickname]),t("div",{class:"vip-platform"},[s])])])}},{title:"会员等级",key:"level_name",minWidth:100,render:function(e,t){return e("div",[t.row.level_name?t.row.level_name:"普通会员"])}},{title:"标签组",key:"group_name",minWidth:100,render:function(e,t){return e("div",[t.row.group_name?t.row.group_name:"-"])}},{title:"注册时间",key:"created_at",width:180},{title:"操作",key:"action",width:80,render:function(t,a){return t("div",{class:"action"},[t("Button",{class:"default-primary",style:{display:a.row.checked?"none":"block"},attrs:{disabled:e.disabledBtn(a.row)&&e.passId!==a.row.id},on:{click:function(){e.setChecked(a.index,!0)}}},["选择"]),t("Button",{attrs:{type:"primary"},style:{display:a.row.checked?"block":"none"},on:{click:function(){e.setChecked(a.index,!1)}}},["已选"])])}}],data:[],levels:[],groups:[],total:0,page:{pageSize:10,pageNumber:1},selectRow:{},loading:!1}},methods:{setValue:function(){this.value=!this.value,this.value&&(this.multiple?this.selectRows=(0,o.default)(this.currentList):this.selectRow=this.current,this.resetSearch(),this.resetPage(),this.getList())},handleSearch:function(){this.resetPage(),this.getList()},resetSearch:function(){this.search={keyword:"",level_id:"all",group_id:"all"}},resetPage:function(){var e;this.page={pageSize:10,pageNumber:1},null===(e=this.$refs["page"])||void 0===e||e.reset()},setChecked:function(e,t){var a=this;this.multiple?(this.$set(this.data[e],"checked",t),0===this.selectRows.length||t?this.selectRows.push(this.data[e]):this.selectRows=this.selectRows.filter((function(t){return t.id!==a.data[e].id}))):(this.data.forEach((function(e,t){a.$set(a.data[t],"checked",!1)})),this.$set(this.data[e],"checked",t),this.selectRow=t?this.data[e]:{},this.$emit("on-change",this.selectRow))},defaultChecked:function(){var e=this;this.multiple?this.data.forEach((function(t,a){var i,s=(0,n.default)(e.selectRows);try{for(s.s();!(i=s.n()).done;){var o=i.value;if(o.id===t.id){e.$set(e.data[a],"checked",!0);break}}}catch(r){s.e(r)}finally{s.f()}})):this.data.forEach((function(t,a){e.current&&t.id===e.selectRow.id?e.$set(e.data[a],"checked",!0):e.$set(e.data[a],"checked",!1)}))},handlePageChange:function(e){this.page=e,this.getList();try{this.$refs.scrollBox.scrollTop=0}catch(t){console.log(t)}},handleOk:function(){this.multiple?this.$emit("on-change",this.selectRows):this.$emit("on-change",this.selectRow),this.setValue()},handleCancel:function(){this.setValue()},getList:function(){var e=this;this.loading=!0;var t={};this.source&&(t.source=this.source);var a=(0,s.default)((0,s.default)({},this.search),{},{level_id:"all"===this.search.level_id?"":this.search.level_id,group_id:"all"===this.search.group_id?"":this.search.group_id}),i=Object.assign({pagesize:this.page.pageSize,page:this.page.pageNumber},a,this.restParams,t);this.$api.memberApi["vip"===this.type?"memberList":"videoMemberList"](i).then((function(t){0===t.error&&(e.data=t.list,e.total=t.total,t.groups.unshift({id:"all",group_name:"全部"}),t.levels.unshift({id:"all",level_name:"全部"}),e.groups=t.groups,e.levels=t.levels,e.defaultChecked(),e.loading=!1)}))},disabledBtn:function(e){return 1==e.is_use_verify}}};t.default=r},"3bf3":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kdx-modal-frame",{attrs:{title:"会员选择器",width:850},on:{"on-ok":e.handleOk,"on-cancel":e.handleCancel},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("div",{staticClass:"vip-selector"},[a("div",{ref:"scrollBox",staticClass:"vip-selector-content"},[a("div",{staticClass:"search"},[a("Form",{ref:"form",attrs:{model:e.search,"label-width":100,inline:""},nativeOn:{submit:function(e){e.preventDefault()}}},[a("FormItem",{staticClass:"search-content"},[a("Input",{staticClass:"width-250",attrs:{search:"","enter-button":"搜索",placeholder:"请输入"},on:{"on-search":e.handleSearch},model:{value:e.search.keyword,callback:function(t){e.$set(e.search,"keyword",t)},expression:"search.keyword"}})],1),a("FormItem",{attrs:{label:"用户等级："}},[a("Select",{staticClass:"width-160",attrs:{placeholder:"请选择"},on:{"on-change":e.handleSearch},model:{value:e.search.level_id,callback:function(t){e.$set(e.search,"level_id",t)},expression:"search.level_id"}},e._l(e.levels,(function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.level_name))])})),1)],1),a("FormItem",{attrs:{label:"标签组："}},[a("Select",{staticClass:"width-160",attrs:{placeholder:"请选择"},on:{"on-change":e.handleSearch},model:{value:e.search.group_id,callback:function(t){e.$set(e.search,"group_id",t)},expression:"search.group_id"}},e._l(e.groups,(function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.group_name))])})),1)],1)],1)],1),a("Table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",attrs:{columns:e.columns,data:e.data}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.total>10,expression:"total > 10"}],staticClass:"footer-page"},[a("kdx-page-component",{ref:"page",attrs:{total:e.total},on:{"on-change":e.handlePageChange}})],1)])])},s=[]},"5dcb":function(e,t,a){var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a434");var s=i(a("a8bf")),n={name:"index",components:{VipSelector:s.default},props:{},data:function(){var e=this;this.$createElement;return{loading:!1,model:{url:"",token:"",encoding_aes_key:"",member_id:""},memberList:[],columns:[{title:"会员",slot:"nickname"},{key:"option",title:"操作",width:120,align:"center",render:function(t,a){return t("p",{class:"option",style:"text-align:center;"},[t("span",{style:"color: $brand-color;font-size: 14px;cursor:pointer;",on:{click:function(){e.delete(a.index)}}},["删除"])])}}]}},computed:{},created:function(){},mounted:function(){this.getData(),this.getDevelopment()},methods:{getData:function(){var e=this;this.$api.wxTransactionComponentApi.getConfigParam().then((function(t){0==t.error&&(e.model=t.data)}))},getDevelopment:function(){var e=this;this.$api.wxTransactionComponentApi.getDevelopment().then((function(t){var a,i;0===t.error&&(e.memberList=null!=(null===(a=t.data)||void 0===a?void 0:a.memberList)?[null===(i=t.data)||void 0===i?void 0:i.memberList]:[],e.model.member_id=t.data.member_id)}))},getmemberList:function(e){this.memberList=[{id:e.id,source:e.source,avatar:e.avatar,nickname:e.nickname}],this.model.member_id=e.id,this.$emit("input",this.model)},delete:function(e){this.memberList.splice(e,1),this.model.member_id="",this.$emit("input",this.model)},selectVip:function(){this.$refs.VipSelector.setValue()},handleSave:function(){var e=this;this.$api.wxTransactionComponentApi.saveDevelopment({member_id:this.model.member_id,memberList:this.memberList}).then((function(t){0===t.error&&(e.$Message.success("保存成功"),e.getDevelopment())}))}}};t.default=n},"718c":function(e,t,a){"use strict";a.r(t);var i=a("f0da"),s=a("c676");for(var n in s)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(n);a("beb0");var o=a("2877"),r=Object(o["a"])(s["default"],i["a"],i["b"],!1,null,"615bd035",null);t["default"]=r.exports},"7efb":function(e,t,a){"use strict";a("ccbe")},a8bf:function(e,t,a){"use strict";a.r(t);var i=a("3bf3"),s=a("f064");for(var n in s)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(n);a("7efb");var o=a("2877"),r=Object(o["a"])(s["default"],i["a"],i["b"],!1,null,"9862936c",null);t["default"]=r.exports},beb0:function(e,t,a){"use strict";a("1667")},c676:function(e,t,a){"use strict";a.r(t);var i=a("5dcb"),s=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(n);t["default"]=s.a},ccbe:function(e,t,a){},f064:function(e,t,a){"use strict";a.r(t);var i=a("1873"),s=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(n);t["default"]=s.a},f0da:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kdx-content-bar",{scopedSlots:e._u([{key:"btn",fn:function(){return[a("Button",{staticClass:"primary-long",on:{click:e.handleSave}},[e._v("保存")])]},proxy:!0}])},[a("div",{staticClass:"container"},[a("Form",{ref:"form",staticClass:"content",attrs:{model:e.model,"label-width":140}},[a("kdx-form-title",[e._v("配置参数")]),a("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"URL："}},[a("span",{staticClass:"width-430 marginR-10",staticStyle:{display:"inline-block"}},[e._v(e._s(e.model.url))]),a("kdx-copy-text",{attrs:{text:e.model.url}},[a("Button",{attrs:{type:"text",size:"small"}},[e._v("复制")])],1)],1),a("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"Token："}},[a("span",{staticClass:"width-430 marginR-10",staticStyle:{display:"inline-block"}},[e._v(e._s(e.model.token))]),a("kdx-copy-text",{attrs:{text:e.model.token}},[a("Button",{attrs:{type:"text",size:"small"}},[e._v("复制")])],1)],1),a("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"EncodingAESKey："}},[a("span",{staticClass:"width-430 marginR-10",staticStyle:{display:"inline-block"}},[e._v(e._s(e.model.encoding_aes_key))]),a("kdx-copy-text",{attrs:{text:e.model.encoding_aes_key}},[a("Button",{attrs:{type:"text",size:"small"}},[e._v("复制")])],1)],1),a("kdx-form-title",[e._v("定向设置")]),a("kdx-hint-alert",{staticClass:"marginB-10",attrs:{showIcon:!1}},[a("p",{staticClass:"danger-color"},[e._v("自定义交易组件的新用户请选择会员并保存，用于调取有关接口开通组件（往期已接入过的无需设置）；")]),e._v(" 此处选择的会员在微信小程序产生的订单均视为视频号订单；成功接入自定义交易组件后可移除此处设置的会员，移除后恢复下单渠道判定 ")]),a("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"选择会员：",prop:"member_id"}},[a("Button",{staticClass:"default-primary",on:{click:e.selectVip}},[e._v("选择")]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.memberList.length>0,expression:"memberList.length > 0"}],staticClass:"vip-table"},[a("Table",{attrs:{columns:e.columns,data:e.memberList,size:"small"},scopedSlots:e._u([{key:"nickname",fn:function(t){var i=t.row;return[a("div",{staticClass:"vip-info"},[a("img",{attrs:{src:i.avatar,alt:""},on:{error:function(t){return e.replaceImage(t,"avatar")}}}),a("p",{staticClass:"name"},[a("span",{staticStyle:{"margin-bottom":"4px"}},[e._v(e._s(i.nickname))]),new Set(["10","20","21"]).has(i.source)?a("i",{staticClass:"iconfont",class:{"icon-H":"10"===i.source,"icon-weixin":"20"===i.source,"icon-weixinxiaochengxu":"21"===i.source}}):"30"===i.source?a("svg-icon",{staticClass:"iconfont",attrs:{type:"icon-qudao-toutiao2"}}):"32"===i.source?a("svg-icon",{staticClass:"iconfont",attrs:{type:"icon-qudao-toutiaojisuban"}}):"31"===i.source?a("svg-icon",{staticClass:"iconfont",attrs:{type:"icon-douyin"}}):"40"===i.source?a("svg-icon",{staticClass:"iconfont",attrs:{type:"icon-qudao-App"}}):e._e()],1)])]}}])})],1)],1)],1)],1),a("vip-selector",{ref:"VipSelector",attrs:{current:e.memberList[0],source:"21"},on:{"on-change":e.getmemberList}})],1)},s=[]}}]);