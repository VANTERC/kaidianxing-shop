(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[69],{"050ba":function(e,t,o){},"0784":function(e,t,o){"use strict";o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return n}));var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("kdx-modal-frame",{attrs:{title:e.title,"ok-text":e.okText},on:{"on-ok":e.handleOk,"on-cancel":e.handleCancel},model:{value:e.showModal,callback:function(t){e.showModal=t},expression:"showModal"}},["modify"===e.type?o("div",{staticClass:"modal-content"},[o("div",{staticClass:"text"},[e._v(" 已设置的配送范围信息将被清空，请修改地址后记得重新配置配送范围； ")])]):e._e()])},n=[]},"09f8":function(e,t,o){"use strict";o.r(t);var a=o("2c8d"),n=o("1185");for(var l in n)["default"].indexOf(l)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(l);o("9073");var i=o("2877"),d=Object(i["a"])(n["default"],a["a"],a["b"],!1,null,"33ee4f4c",null);t["default"]=d.exports},1185:function(e,t,o){"use strict";o.r(t);var a=o("2946"),n=o.n(a);for(var l in a)["default"].indexOf(l)<0&&function(e){o.d(t,e,(function(){return a[e]}))}(l);t["default"]=n.a},1838:function(e,t,o){var a=o("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(o("2909")),l=a(o("5530"));o("d3b7"),o("ac1f"),o("841c"),o("4d63"),o("c607"),o("2c3e"),o("25f0"),o("99af"),o("5319"),o("159b"),o("d81d"),o("a434");var i=o("72d5"),d=null,r=null,s=null,c={props:["value","aMapKey","aMapCode","division_way","location","addMapClickEvent","formItemTip"],data:function(){return{circleList:[],polygonList:[]}},watch:{},beforeDestroy:function(){r&&r.destroy()},methods:{initMap:function(e,t){var o=this;return new Promise((function(a,n){(0,i.MapLoader)(e,t).then((function(e){console.log("地图加载成功"),d=e,r=new d.Map("container",{zoom:13,resizeEnable:!0}),a(),o.$emit("aMapInitFinished"),o.addPlugin(),o.addMapClickEvent&&r.on("click",(function(e){var t=e.lnglat;o.addMarker(t.lng,t.lat),console.log(t.lng,t.lat,"ssssssssssssssssss"),o.geocoder("getAddress",[t.lng,t.lat])}))}),(function(e){console.log("地图加载失败",e),o.$Message.error("地图加载失败"),n(e),o.$emit("aMapInitFinished")}))}))},addPlugin:function(){d.plugin(["AMap.ToolBar","AMap.Scale","AMap.OverView","AMap.MapType","AMap.Geolocation","AMap.Autocomplete","AMap.PlaceSearch"],(function(){r.addControl(new d.ToolBar),r.addControl(new d.Scale),r.addControl(new d.PlaceSearch),r.addControl(new d.Autocomplete);var e={city:"全国"},t=new d.Autocomplete(e);t.search("",(function(e,t){console.log(e,t)}))}))},geocoder:function(e,t){var o=this;console.log("this.location-----------",this.location),d.plugin("AMap.Geocoder",(function(){var a=new d.Geocoder({});"getLocation"===e?a.getLocation(o.location,(function(e,t){if("complete"===e&&"OK"===t.info){var a=t.geocodes[0].location.lng,n=t.geocodes[0].location.lat,l=t.geocodes[0].formattedAddress;r.setCenter([a,n]),o.addMarker(a,n,l),o.$emit("getAddress",{lng:a,lat:n})}else"error"===e&&("INVALID_USER_KEY"===t&&o.formItemTip?o.$emit("fail-search"):o.$Message.error(t))})):"getAddress"===e&&a.getAddress(t,(function(e,a){if("complete"===e&&"OK"===a.info){var n,l,i,d,r,s,c,u,f,m,p,v,h,g=[null===(n=a.regeocode)||void 0===n||null===(l=n.addressComponent)||void 0===l?void 0:l.province,null===(i=a.regeocode)||void 0===i||null===(d=i.addressComponent)||void 0===d?void 0:d.city,null===(r=a.regeocode)||void 0===r||null===(s=r.addressComponent)||void 0===s?void 0:s.district],y=new RegExp("".concat(null===(c=a.regeocode)||void 0===c||null===(u=c.addressComponent)||void 0===u?void 0:u.province).concat(null===(f=a.regeocode)||void 0===f||null===(m=f.addressComponent)||void 0===m?void 0:m.city).concat(null===(p=a.regeocode)||void 0===p||null===(v=p.addressComponent)||void 0===v?void 0:v.district)),b=null===(h=a.regeocode)||void 0===h?void 0:h.formattedAddress.replace(y,""),w=t[0],M=t[1];o.$emit("getAddress",{selectedAddress:g,address:b,lng:w,lat:M})}else"error"===e&&o.$Message.error(a)}))}))},addCircle:function(e,t){var o=this,a=new d.Circle({center:new d.LngLat(e.model.center_lng,e.model.center_lat),radius:1e3*e.model.radius,fillColor:e.color.backgroundColor,strokeColor:e.color.borderColor,strokeWeight:2});r.add(a),r.setFitView([a]);var n=null;r.plugin(["AMap.CircleEditor"],(function(){n=new d.CircleEditor(r,a),o.circleList.push({id:t,circle:a,circleEditor:n}),o.circleList.forEach((function(e,t){e.circleEditor.on("move",(function(e){o.circleEditorEventFun(e,t)})),e.circleEditor.on("adjust",(function(e){o.circleEditorEventFun(e,t)})),e.circle.on("click",(function(){var e=o;function a(){var o=t;return function(){e.showCircleEditor(o),e.$emit("changeRegionSelected",o)}}a()()}))}))}))},circleEditorEventFun:function(e,t){var o=this;function a(){var a=t;return function(){var t=o.value.map((function(t,o){return"move"===e.type?(0,l.default)((0,l.default)({},t),{},{model:(0,l.default)((0,l.default)({},t.model),{},{center_lng:o===a?e.lnglat.lng:t.model.center_lng,center_lat:o===a?e.lnglat.lat:t.model.center_lat})}):"adjust"===e.type?(0,l.default)((0,l.default)({},t),{},{model:(0,l.default)((0,l.default)({},t.model),{},{radius:o===a?e.radius/1e3:t.model.radius})}):void 0}));o.$emit("input",t)}}a()()},removeCircle:function(e){this.circleList[e].circleEditor.close(),r.remove(this.circleList[e].circle),this.circleList.splice(e,1)},changeCircleRadius:function(e,t){this.circleList[t].circle.setRadius(1e3*e.model.radius)},showCircleEditor:function(e){this.circleList.forEach((function(e){e.circleEditor.close()})),this.circleList[e].circleEditor.open()},addPolygon:function(e,t){var o,a=this,n=e.model.location.map((function(e){return new d.LngLat(e.lng,e.lat)})),l=new d.Polygon({path:n,fillColor:e.color.backgroundColor,strokeColor:e.color.borderColor,borderWeight:2});r.add(l),r.setFitView([l]),r.plugin(["AMap.PolyEditor"],(function(){o=new d.PolyEditor(r,l),a.polygonList.push({id:t,polygon:l,polyEditor:o}),a.polygonList.forEach((function(e,t){e.polyEditor.on("addnode",(function(o){a.polyEditorEventFun(e,o,t)})),e.polyEditor.on("removenode",(function(o){a.polyEditorEventFun(e,o,t)})),e.polyEditor.on("adjust",(function(o){a.polyEditorEventFun(e,o,t)})),e.polygon.on("click",(function(){var e=a;function o(){var o=t;return function(){e.showPolyEditor(o),e.$emit("changeRegionSelected",o)}}o()()}))}))}))},polyEditorEventFun:function(e,t,o){var a=this;function i(){var t=o;return function(){var o=e.polygon.getPath().map((function(e){return{lng:e.lng,lat:e.lat}}));console.log(o);var i=a.value.map((function(e,a){return(0,l.default)((0,l.default)({},e),{},{model:(0,l.default)((0,l.default)({},e.model),{},{location:a===t?(0,n.default)(o):e.model.location})})}));a.$emit("input",i)}}i()()},removePolygon:function(e){this.polygonList[e].polyEditor.close(),r.remove(this.polygonList[e].polygon),this.polygonList.splice(e,1)},showPolyEditor:function(e){this.polygonList.forEach((function(e){e.polyEditor.close()})),this.polygonList[e].polyEditor.open()},addMarker:function(e,t,o){s&&r.remove(s);var a={position:new d.LngLat(e,t)};o&&(a=(0,l.default)((0,l.default)({},a),{},{title:o})),s=new d.Marker(a),r.add(s)},setCenter:function(e,t){r.setCenter([e,t])},changeKey:function(e,t){var o=this;e||r&&r.destroy(),this.$nextTick((function(){r&&r.destroy(),o.initMap(e,t).then((function(){0===o.division_way?o.$emit("addCircle"):1===o.division_way&&o.$emit("addPolygon")}))}))}}};t.default=c},2946:function(e,t,o){var a=o("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(o("b85c")),l=a(o("3835")),i=a(o("2909")),d=a(o("5530"));o("99af"),o("a15b"),o("498a"),o("b0c0");var r=a(o("a0be")),s=a(o("5ef1")),c={components:{Map:r.default,ModifyAddressModal:s.default},data:function(){return{loading:!1,showModal:!1,cacheModel:{address:{lng:"",lat:""}},model:{amap_key:"",amap_code:"",web_key:"",contact:"",tel1:"",tel2:"",selectedAddress:[],detail:"",lng:"",lat:""},location:"",rules:{amap_key:[{required:!0,message:"高德Web端(JS API)Key必填"}],web_key:[{required:!0,message:"高德Web服务接口Key必填"}],contact:[{required:!0,message:"联系人必填"}],tel1:[{required:!0,message:"联系方式1必填"}],selectedAddress:[{required:!0,message:"所属区域必选"}],detail:[{required:!0,message:"详细地址必填"}]}}},computed:{addressData:function(){var e;return(null===(e=this.$store.state.config)||void 0===e?void 0:e.address)||[]},noManagePerm:function(){return!this.$getPermMap("sysset.mall.contact.manage")}},created:function(){this.$store.dispatch("config/getAddress"),this.getContactDetail()},methods:{fnGoAMap:function(){window.open("https://lbs.amap.com")},aMapInitFinished:function(){if(this.model.lng&&this.model.lat){var e="".concat(this.model.selectedAddress.join("")).concat(this.model.detail);this.$refs["amap"].addMarker(this.model.lng,this.model.lat,e),this.$refs["amap"].setCenter(this.model.lng,this.model.lat)}},getContactDetail:function(){var e=this;this.loading=!0,this.$api.orderApi.getContactDetail({}).then((function(t){if(e.loading=!1,0===t.error){var o,a,n,l,i;if(null!==(o=t.data)&&void 0!==o&&null!==(a=o.address)&&void 0!==a&&a.lng&&(t.data.address.lng=parseFloat(t.data.address.lng)),null!==(n=t.data)&&void 0!==n&&null!==(l=n.address)&&void 0!==l&&l.lat&&(t.data.address.lat=parseFloat(t.data.address.lat)),e.cacheModel=(0,d.default)({},t.data),e.model=(0,d.default)((0,d.default)((0,d.default)({},e.model),t.data),null===(i=t.data)||void 0===i?void 0:i.address),e.model.province&&e.model.city&&e.model.area){var r=[e.model.province,e.model.city,e.model.area];e.model.selectedAddress=[].concat(r)}else e.model.selectedAddress=[];e.configBlur()}}))},searchMap:function(){var e=this;setTimeout((function(){e.location="".concat(e.model.selectedAddress.join("")).concat(e.model.detail),e.location&&e.$nextTick((function(){e.$refs.amap.geocoder("getLocation")}))}),800)},configBlur:function(){this.$refs.amap.changeKey(this.model.amap_key.trim(),this.model.amap_code.trim())},getAddress:function(e){var t,o,a,n,l,d,r,s;e.selectedAddress&&(this.model.selectedAddress=(0,i.default)(e.selectedAddress)),e.address&&(this.model.detail=e.address),this.model.lng=e.lng,this.model.lat=e.lat,(this.model.lng!==(null===(t=this.cacheModel)||void 0===t||null===(o=t.address)||void 0===o?void 0:o.lng)&&null!==(a=this.cacheModel)&&void 0!==a&&null!==(n=a.address)&&void 0!==n&&n.lng||this.model.lat!==(null===(l=this.cacheModel)||void 0===l||null===(d=l.address)||void 0===d?void 0:d.lat)&&null!==(r=this.cacheModel)&&void 0!==r&&null!==(s=r.address)&&void 0!==s&&s.lat)&&this.$Message.warning("店铺地址发生变化，注意及时保存哦")},handleSave:function(){var e=this;this.$refs["form"].validate((function(t){if(t)if(e.model.lng&&e.model.lat){var o,a,n,l;if(e.model.lng!==(null===(o=e.cacheModel)||void 0===o||null===(a=o.address)||void 0===a?void 0:a.lng)||e.model.lat!==(null===(n=e.cacheModel)||void 0===n||null===(l=n.address)||void 0===l?void 0:l.lat))return void e.handleOk();var i=e.formatParam();e.saveContact(i)}else e.$Message.error("获取定位失败，请点击搜索地图重新定位")}))},formatParam:function(){var e,t,o,a,i,r,s,c,u,f,m=(0,l.default)(this.model.selectedAddress,3),p=m[0],v=m[1],h=m[2],g=(0,n.default)(this.addressData);try{for(g.s();!(f=g.n()).done;)if(s=f.value,s.name===p)break}catch(J){g.e(J)}finally{g.f()}var y,b=(0,n.default)(s.children);try{for(b.s();!(y=b.n()).done;)if(c=y.value,c.name===v)break}catch(J){b.e(J)}finally{b.f()}var w,M=(0,n.default)(c.children);try{for(M.s();!(w=M.n()).done;)if(u=w.value,u.name===h)break}catch(J){M.e(J)}finally{M.f()}var k={province:null===(e=s)||void 0===e?void 0:e.label,province_code:null===(t=s)||void 0===t?void 0:t.id,city:null===(o=c)||void 0===o?void 0:o.label,city_code:null===(a=c)||void 0===a?void 0:a.id,area:null===(i=u)||void 0===i?void 0:i.label,area_code:null===(r=u)||void 0===r?void 0:r.id};this.model=(0,d.default)((0,d.default)({},this.model),k);var _=this.model,C=_.amap_key,A=_.amap_code,x=_.web_key,E=_.contact,$=_.tel1,P=_.tel2,I=_.province,L=_.province_code,F=_.city,O=_.city_code,S=_.area,j=_.area_code,K=_.detail,T=_.lng,W=_.lat,B={amap_key:C.trim(),amap_code:A,web_key:x.trim(),contact:E,tel1:$,tel2:P,province:I,province_code:L,city:F,city_code:O,area:S,area_code:j,detail:K,lng:T,lat:W};return B},formatParam1:function(){var e=this.model,t=e.contact,o=e.tel1,a=e.tel2,n={contact:t,tel1:o,tel2:a};return n},saveContact:function(e){var t=this;this.$api.orderApi.saveContact(e).then((function(e){0===e.error&&(t.$Message.success("保存成功"),t.cacheModel.address.lng=t.model.lng,t.cacheModel.address.lat=t.model.lat)}))},handleOk:function(){var e=this.formatParam();this.saveContact(e)}}};t.default=c},"2c8d":function(e,t,o){"use strict";o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return n}));var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kdx-content-bar",{attrs:{loading:e.loading},scopedSlots:e._u([{key:"btn",fn:function(){return[a("Button",{staticClass:"primary-long",attrs:{disabled:e.noManagePerm},on:{click:e.handleSave}},[e._v("保存")])]},proxy:!0}])},[a("div",{staticClass:"contact-us"},[a("Form",{ref:"form",attrs:{model:e.model,rules:e.rules,"label-width":120}},[a("kdx-form-title",[e._v("联系我们")]),a("FormItem",{attrs:{label:"高德Web端(JS API)Key：",prop:"amap_key"}},[a("Input",{staticClass:"width-430",attrs:{placeholder:"请输入",disabled:e.noManagePerm},model:{value:e.model.amap_key,callback:function(t){e.$set(e.model,"amap_key",t)},expression:"model.amap_key"}}),a("kdx-hint-text",[a("div",{staticClass:"flex align-center"},[a("div",{staticClass:"text"},[e._v(" 注册高德地图帐号并访问高德开放平台申请高德Web端(JS API)key， ")]),a("div",{staticClass:"btn-box"},[a("Button",{attrs:{type:"text"},on:{click:e.fnGoAMap}},[e._v(" 立即申请 ")])],1),a("kdx-hint-tooltip",{attrs:{type:"image",image:o("ff00a"),maxWidth:730,width:"690px"}})],1)])],1),a("FormItem",{attrs:{label:"高德Web端(JS API)安全密钥：",prop:"amap_code"}},[a("Input",{staticClass:"width-430",attrs:{placeholder:"请输入",disabled:e.noManagePerm},on:{"on-blur":e.configBlur},model:{value:e.model.amap_code,callback:function(t){e.$set(e.model,"amap_code",t)},expression:"model.amap_code"}})],1),a("FormItem",{directives:[{name:"error-item",rawName:"v-error-item.web_key",modifiers:{web_key:!0}}],attrs:{label:"高德Web服务接口Key：",prop:"web_key"}},[a("Input",{staticClass:"width-430",attrs:{placeholder:"请输入","show-word-limit":"",maxlength:50},model:{value:e.model.web_key,callback:function(t){e.$set(e.model,"web_key",t)},expression:"model.web_key"}}),a("kdx-hint-text",[a("div",{staticClass:"flex align-center"},[a("div",{staticClass:"text"},[e._v(" 注册高德地图帐号并访问高德开放平台申请Web服务接口key，此web服务接口key ， ")]),a("div",{staticClass:"btn-box"},[a("Button",{attrs:{type:"text"},on:{click:e.fnGoAMap}},[e._v(" 立即申请 ")])],1),a("kdx-hint-tooltip",{attrs:{type:"image",image:o("6461"),maxWidth:730,width:"690px"}})],1)])],1),a("FormItem",{attrs:{label:"联系人：",prop:"contact"}},[a("Input",{staticClass:"width-330",attrs:{placeholder:"请输入",disabled:e.noManagePerm},model:{value:e.model.contact,callback:function(t){e.$set(e.model,"contact",t)},expression:"model.contact"}})],1),a("FormItem",{attrs:{label:"联系电话1：",prop:"tel1"}},[a("Input",{staticClass:"width-330",attrs:{placeholder:"请输入",disabled:e.noManagePerm},model:{value:e.model.tel1,callback:function(t){e.$set(e.model,"tel1",t)},expression:"model.tel1"}})],1),a("FormItem",{attrs:{label:"联系电话2：",prop:"tel2"}},[a("Input",{staticClass:"width-330",attrs:{placeholder:"请输入",disabled:e.noManagePerm},model:{value:e.model.tel2,callback:function(t){e.$set(e.model,"tel2",t)},expression:"model.tel2"}})],1),a("FormItem",{attrs:{label:"所属区域：",prop:"selectedAddress"}},[a("Cascader",{staticClass:"width-330",attrs:{data:e.addressData,disabled:e.noManagePerm},model:{value:e.model.selectedAddress,callback:function(t){e.$set(e.model,"selectedAddress",t)},expression:"model.selectedAddress"}})],1),a("FormItem",{attrs:{label:"详细地址：",prop:"detail"}},[a("i-input",{staticClass:"width-500",attrs:{placeholder:"请输入",disabled:e.noManagePerm},model:{value:e.model.detail,callback:function(t){e.$set(e.model,"detail",t)},expression:"model.detail"}},[a("span",{staticClass:"search",attrs:{slot:"append"},on:{click:e.searchMap},slot:"append"},[e._v(" 搜索地图 ")])])],1),a("FormItem",{attrs:{label:"地图定位："}},[a("div",{staticClass:"map-box"},[a("Map",{ref:"amap",attrs:{aMapKey:e.model.amap_key,aMapCode:e.model.amap_code,location:e.location,addMapClickEvent:!0},on:{aMapInitFinished:e.aMapInitFinished,getAddress:e.getAddress}})],1)])],1)],1),a("modify-address-modal",{attrs:{okText:"确定"},on:{handleOk:e.handleOk},model:{value:e.showModal,callback:function(t){e.showModal=t},expression:"showModal"}})],1)},n=[]},"34cd":function(e,t,o){"use strict";o("050ba")},"40d9":function(e,t,o){"use strict";o.r(t);var a=o("1838"),n=o.n(a);for(var l in a)["default"].indexOf(l)<0&&function(e){o.d(t,e,(function(){return a[e]}))}(l);t["default"]=n.a},"49dd":function(e,t,o){},"5ef1":function(e,t,o){"use strict";o.r(t);var a=o("0784"),n=o("baee");for(var l in n)["default"].indexOf(l)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(l);o("34cd");var i=o("2877"),d=Object(i["a"])(n["default"],a["a"],a["b"],!1,null,"62e87bbf",null);t["default"]=d.exports},6461:function(e,t,o){e.exports=o.p+"static/dist/shop/img/amap_web_service.png"},"72d5":function(e,t,o){function a(e,t){return new Promise((function(o,a){var n,l;if(window._AMapSecurityConfig={securityJsCode:null},(null===(n=window.AMap)||void 0===n?void 0:n.User.key)!==e||(null===(l=window)||void 0===l?void 0:l._AMapSecurityConfig.securityJsCode)!==t){t&&(window._AMapSecurityConfig={securityJsCode:t});var i=document.createElement("script");i.type="text/javascript",i.id="amapKey",i.async=!0,i.src="https://webapi.amap.com/maps?v=1.4.15&callback=initAMap&key="+e,i.onerror=a;var d=document.getElementById("amapKey");d&&d.parentNode.removeChild(d),document.head.appendChild(i),window.initAMap=function(){o(window.AMap)}}else window.AMap&&o(window.AMap)}))}Object.defineProperty(t,"__esModule",{value:!0}),t.MapLoader=a,o("d3b7")},"80f3":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={props:{value:{type:Boolean,default:!1},type:{type:String,default:"modify"},title:{type:String,default:"地址修改提示"},okText:{type:String,default:"去修改"}},data:function(){return{showModal:!1}},watch:{value:{handler:function(e){this.showModal=e},immediate:!0}},methods:{handleOk:function(){this.$emit("handleOk"),this.$emit("input",!1)},handleCancel:function(){this.showModal=!1,this.$emit("input",!1)}}};t.default=o},9073:function(e,t,o){"use strict";o("dfce")},a0be:function(e,t,o){"use strict";o.r(t);var a=o("dc0d"),n=o("40d9");for(var l in n)["default"].indexOf(l)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(l);o("aad6");var i=o("2877"),d=Object(i["a"])(n["default"],a["a"],a["b"],!1,null,"624a5ae0",null);t["default"]=d.exports},aad6:function(e,t,o){"use strict";o("49dd")},baee:function(e,t,o){"use strict";o.r(t);var a=o("80f3"),n=o.n(a);for(var l in a)["default"].indexOf(l)<0&&function(e){o.d(t,e,(function(){return a[e]}))}(l);t["default"]=n.a},dc0d:function(e,t,o){"use strict";o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return n}));var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"amap"},[o("div",{staticClass:"amap-box",attrs:{id:"container"}})])}]},dfce:function(e,t,o){},ff00a:function(e,t,o){e.exports=o.p+"static/dist/shop/img/amap_web_jsapi.png"}}]);