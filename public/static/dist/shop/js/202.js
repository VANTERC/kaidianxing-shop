(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[202],{"00dc":function(t,e,i){},"2c18":function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("vdr",{class:{activedItem:t.currentModal===t.item},style:{zIndex:t.getZIndex},attrs:{w:t.w,h:t.h,x:t.x,y:t.y,parent:!0,"lock-aspect-ratio":t.lockAspectRatio,draggable:t.draggable,resizable:t.resizable,"class-name":"dragable-resize-item-box","class-name-active":"dragable-resize-item-box-active",grid:[1,1]},on:{dragging:t.onDrag,resizing:t.onResize,deactivated:t.onDeactivated,activated:t.clickTmp}},[t._t("default"),!1!==t.item.params.delable?i("p",{staticClass:"delitem",attrs:{"data-html2canvas-ignore":""},on:{click:t.del}},[i("i",{staticClass:"iconfont icon-huiyuan-shanchu"})]):t._e(),t.showDelModal?i("div",{staticClass:"sure-modal",attrs:{"data-html2canvas-ignore":""}},[i("p",{staticClass:"p1"},[t._v("确认删除该组件吗？")]),i("p",{staticClass:"btn btn1",on:{click:function(e){return t.delItem(!0)}}},[t._v("确认")]),i("p",{staticClass:"btn btn2",on:{click:function(e){return t.delItem(!1)}}},[t._v("取消")])]):t._e()],2)},a=[]},"7e1f":function(t,e,i){"use strict";i("00dc")},a246:function(t,e,i){"use strict";i.r(e);var n=i("2c18"),a=i("efa0");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("7e1f");var r=i("2877"),o=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"96876ff2",null);e["default"]=o.exports},e0d2:function(t,e,i){var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac1f"),i("5319");var a=n(i("5530")),s=n(i("611b"));i("c78c");var r=i("2f62"),o=!1,l={width:375,height:667},c={components:{vdr:s.default},props:{item:{type:Object,default:null}},data:function(){return{vLine:[],hLine:[],showDelModal:!1}},computed:(0,a.default)((0,a.default)({},(0,r.mapState)("decorate",{currentModal:function(t){return t.currentModal},errorInfo:function(t){return t.errorInfo}})),{},{getZIndex:function(){return"poster_bgimg"!==this.item.id?this.item===this.currentModal?1e4:this.item.style.zIndex:1},lockAspectRatio:function(){return 0==this.item.params.imgscaletype},draggable:function(){return!1!==this.item.params.draggable},resizable:function(){return!1!==this.item.params.resizable},x:function(){return this.item.style.left/2},y:function(){return this.item.style.top/2},w:function(){return"number"==typeof this.item.style.width?this.item.style.width/2:"string"==typeof this.item.style.width?this.item.style.width.indexOf("%")>-1?l.width*(this.item.style.width.replace("%","")/100):this.item.style.width/2:100},h:function(){return"number"==typeof this.item.style.height?this.item.style.height/2:"string"==typeof this.item.style.height?this.item.style.height.indexOf("%")>-1?l.height*(this.item.style.height.replace("%","")/100):this.item.style.height/2:100}}),methods:(0,a.default)((0,a.default)({},(0,r.mapMutations)("decorate",["delModal","changeFocus"])),{},{onDeactivated:function(){this.showDelModal=!1},del:function(){this.showDelModal=!0},delItem:function(t){t&&this.delModal({item:this.item,pageId:this.$route.params.page}),this.showDelModal=!1},clickTmp:function(){var t=this;this.item!==this.currentModal&&(this.$emit("beforeChange",this.item),this.$nextTick((function(){t.changeFocus({item:t.item,pageId:t.$route.params.page})})))},px2rpx:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return t/2*e},onResize:function(t,e,i,n){var a=this;o||(o=!0,setTimeout((function(){a.item.style.width=2*i,a.item.style.height=2*n,a.item.style.left=2*t,a.item.style.top=2*e,o=!1}),60))},onDrag:function(t,e){this.item.style.left=2*t,this.item.style.top=2*e}})};e.default=c},efa0:function(t,e,i){"use strict";i.r(e);var n=i("e0d2"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a}}]);