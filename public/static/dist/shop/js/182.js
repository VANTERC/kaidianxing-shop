(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[182],{"0dfb":function(t,a,e){"use strict";e.d(a,"a",(function(){return i})),e.d(a,"b",(function(){return s}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("kdx-content-bar",{scopedSlots:t._u([{key:"btn",fn:function(){return[e("Button",{staticClass:"default-long",on:{click:t.getBack}},[t._v("返回")])]},proxy:!0}])},[e("div",{staticClass:"action"},[t.setData.comment_reward_status&&t.setData.choice_status?t._e():e("kdx-hint-alert",{staticStyle:{"margin-bottom":"10px"}},[e("div",[t.setData.comment_reward_status?t._e():e("span",[t._v("【评价奖励发放】")]),t.setData.choice_status?t._e():e("span",[t._v("【精选评价设置】")]),t._v(" 当前不可用，请到 "),e("Button",{attrs:{type:"text"},on:{click:function(a){return t.handleClick("toSet")}}},[t._v("【评价助手】")]),t._v("应用中开启 ")],1)]),e("Button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.handleAudit}},[t._v(t._s(1==t.data.status?"审核通过":0==t.data.status?"待审核":"审核拒绝"))]),e("Button",{staticClass:"btn mL-20 mR-20",attrs:{type:"primary"},on:{click:t.handleReward}},[t._v(t._s(1==t.data.is_reward?"已发放奖励":"评价奖励发放"))]),e("Button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.setSift}},[t._v("精选评价设置")])],1),e("div",{staticClass:"order-evaluate-audit"},[e("div",{staticClass:"content"},[e("kdx-form-title",[t._v("评价审核")]),e("Form",{attrs:{"label-width":120}},[e("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"订单号："}},[e("span",{staticClass:"click-hover",on:{click:function(a){return t.openDetailPage(t.data.order_info.status)}}},[t._v(t._s(t.data.order_info?t.data.order_info.order_no:""))])]),e("FormItem",{attrs:{label:"评价商品："}},[e("div",{staticClass:"goods"},[e("div",{staticClass:"image",on:{click:function(a){return t.handleClick("goods")}}},[e("img",{attrs:{src:t.$media(t.data.goods_info.thumb),alt:""},on:{error:t.replaceImage}})]),e("div",{staticClass:"content"},[1===+t.data.goods_info.has_option?e("span",{staticClass:"mark more"},[t._v("多")]):t._e(),0===+t.data.goods_info.type?e("span",{staticClass:"mark real"},[t._v("实")]):1===+t.data.goods_info.type?e("span",{staticClass:"mark virtual"},[t._v("虚")]):e("span",{staticClass:"mark card"},[t._v("密")]),e("span",{staticClass:"click-hover",on:{click:function(a){return t.handleClick("goods")}}},[t._v(t._s(t.data.goods_info.title))])])])]),e("FormItem",{attrs:{label:"评价会员："}},[e("div",{staticClass:"valuator"},[e("div",{staticClass:"valuator-image",on:{click:function(a){return t.handleClick("vip")}}},[e("img",{attrs:{src:t.data.avatar,alt:""},on:{error:function(a){return t.replaceImage(a,"avatar")}}})]),e("div",{staticClass:"valuator-name click-hover",on:{click:function(a){return t.handleClick("vip")}}},[t._v(" "+t._s(t.data.nickname)+" ")])])]),e("FormItem",{attrs:{label:"评价等级："}},[e("div",{staticClass:"start pointer"},t._l(5,(function(a,i){return e("i",{key:i,staticClass:"iconfont icon-xingji-shixin",class:{active:t.data.level>=a}})})),0)]),e("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"评价内容："}},[e("div",{staticClass:"paragraph"},[t._v(t._s(t.data.content))]),t.data.images.length>0?[e("div",{staticClass:"image-box"},t._l(t.data.images,(function(a,i){return e("div",{key:i,staticClass:"image"},[e("img",{attrs:{src:t.$media(a),alt:""},on:{error:t.replaceImage}}),e("div",{staticClass:"shade",on:{mousedown:function(a){return t.previewImg(!0,i)}}},[e("div",{staticClass:"shade-content"},[e("p",[e("Icon",{attrs:{type:"ios-search"}})],1),e("p",[t._v("查看")])])])])})),0)]:t._e()],2)],1)],1)]),e("preview-img",{directives:[{name:"show",rawName:"v-show",value:t.imgModal,expression:"imgModal"}],attrs:{imgList:t.previewImages||[],currentIndex:t.current},on:{"on-close":function(a){return t.previewImg(!1)}}}),e("sift-comment",{attrs:{"sift-data":t.siftData},on:{handleOk:t.siftOk},model:{value:t.siftModel,callback:function(a){t.siftModel=a},expression:"siftModel"}}),e("reward-comment",{attrs:{"reward-data":t.rewardData},on:{handleOk:t.rewardOk},model:{value:t.rewardModel,callback:function(a){t.rewardModel=a},expression:"rewardModel"}}),e("audit-comment",{attrs:{"audit-data":t.auditData},on:{handleOk:t.changeAuditStatus},model:{value:t.auditModel,callback:function(a){t.auditModel=a},expression:"auditModel"}})],1)},s=[]},"44c1":function(t,a,e){"use strict";e.r(a);var i=e("798c"),s=e.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=s.a},"5c47":function(t,a,e){},"798c":function(t,a,e){var i=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("d81d");var s=i(e("329f")),n=i(e("effd")),r=i(e("036a")),o=i(e("9d4d")),d={name:"index",components:{PreviewImg:s.default,SiftComment:n.default,RewardComment:r.default,AuditComment:o.default},data:function(){return{data:{status:"",goods_info:"",images:[]},id:0,previewImages:[],imgModal:!1,current:0,siftModel:!1,siftData:{},rewardModel:!1,rewardData:{},auditModel:!1,auditData:{},setData:{choice_status:1,comment_reward_status:1}}},computed:{},mounted:function(){this.id=this.$route.query.id,this.getEvaluateData()},methods:{getSet:function(){var t=this;this.$api.commentHelperApi.getSetting({}).then((function(a){var e;0===a.error&&(t.setData={choice_status:+a.data.choice_status,comment_reward_status:+(null===(e=a.data)||void 0===e?void 0:e.comment_reward_status)})}))},handleSave:function(){var t=this;this.$api.orderApi.checkComment({id:this.id,status:this.data.status}).then((function(a){0===a.error&&(t.$Message.success("审核评论操作成功"),t.$router.go(-1))}))},getEvaluateData:function(){var t=this;this.$api.orderApi.getCommentData({id:this.id}).then((function(a){0===a.error&&(t.data=a.item,t.data.level=parseInt(a.item.level)||0,t.previewImages=t.data.images.map((function(a){return t.$media(a)})))}))},getBack:function(){this.$router.go(-1)},previewImg:function(t,a){a&&(this.current=a),this.imgModal=t},handleClick:function(t){var a,e={};if("vip"===t)a="/member/detail",e={id:this.data.member_id};else if("goods"===t){var i,s;if(2==(null===(i=this.data)||void 0===i||null===(s=i.goods_info)||void 0===s?void 0:s.is_deleted))return void this.$Message.error("商品不存在");a="/goods/add",e={id:this.data.goods_id,operate:"edit",status:this.data.goods_info.status}}else"toSet"===t&&(a="/commentHelper/set/index");this.$utils.openNewWindowPage(a,e)},openDetailPage:function(t){var a="",e={id:this.data.order_id};"10"==t||"11"==t?a="/order/detail/send":"0"==t?a="/order/detail/payment":"20"==t?a="/order/detail/receive":"30"==t?a="/order/detail/achieve":"-1"==t&&(a="/order/detail/close"),this.$utils.openNewWindowPage(a,e)},setSift:function(){this.siftData={sort_by:this.data.sort_by,is_choice:+this.data.is_choice,id:this.data.id},this.siftModel=!0},siftOk:function(t){var a=this;this.$api.commentHelperApi.setChoice(t).then((function(t){0===t.error&&(a.$Message.success("修改成功"),a.getEvaluateData())}))},handleReward:function(){var t,a;this.rewardData={id:this.data.id,member_id:this.data.member_id,is_reward:(null===(t=this.data)||void 0===t?void 0:t.is_reward)||0,reward_content:(null===(a=this.data)||void 0===a?void 0:a.reward_content)||null},this.rewardModel=!0},rewardOk:function(t){var a=this;this.$api.commentHelperApi.saveReward(t).then((function(t){0===t.error&&a.$Message.success("保存成功")}))},handleAudit:function(){this.auditData={id:this.data.id,status:+this.data.status},this.auditModel=!0},changeAuditStatus:function(t){var a=this;this.$api.orderApi.checkComment(t).then((function(t){0===t.error&&a.$Message.success("修改成功")}))}}};a.default=d},"9b76":function(t,a,e){"use strict";e.r(a);var i=e("0dfb"),s=e("44c1");for(var n in s)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return s[t]}))}(n);e("e21c");var r=e("2877"),o=Object(r["a"])(s["default"],i["a"],i["b"],!1,null,"647da598",null);a["default"]=o.exports},e21c:function(t,a,e){"use strict";e("5c47")}}]);