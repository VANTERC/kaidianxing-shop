(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[53],{"0761":function(t,e,s){"use strict";s.r(e);var a=s("6615"),o=s("3972");for(var i in o)["default"].indexOf(i)<0&&function(t){s.d(e,t,(function(){return o[t]}))}(i);s("b55af");var l=s("2877"),r=Object(l["a"])(o["default"],a["a"],a["b"],!1,null,"64ed2e86",null);e["default"]=r.exports},"0d32":function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={name:"CheckLabel",props:{checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!1}},methods:{handleClick:function(){this.disabled||this.$emit("on-change",!this.checked)}}};e.default=s},"10fe":function(t,e,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,s("d3b7");var a={name:"FTP",props:{oldStorageUrl:{type:Array,default:function(){return[]}},mode:{type:String,default:""}},data:function(){return{model:{host:"",port:"",username:"",password:"",url:"",scheme:"http://",path:"",timeout:"",passive_mode:"1",ssl:"1"},rules:{host:[{required:!0,message:"服务器地址必填"}],port:[{required:!0,message:"端口必填"}],username:[{required:!0,message:"账号必填"}],password:[{required:!0,message:"密码必填"}]}}},methods:{validate:function(){var t=this;return new Promise((function(e){t.$refs["form"].validate().then((function(t){return e(t)}))}))},getModel:function(){return this.model},resetModel:function(t){this.model=Object.assign({host:"",port:"",username:"",password:"",url:"",scheme:"http://",path:"",timeout:"",passive_mode:"1",ssl:"1"},t)}}};e.default=a},1430:function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return o}));var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"storage-info"},[t._l(t.option,(function(e){return s("check-label",{key:e.key,attrs:{"show-icon":"",checked:t.type===e.key},on:{"on-change":function(s){return t.setLabelStatus(e.key)}}},[t._v(t._s(e.name)+" ")])})),s("div",{staticClass:"label-box"},["local"===t.type&&"shop"===t.mode&&t.oldStorageUrl.length?s("div",{staticClass:"local"},[s("kdx-hint-alert",{attrs:{"show-icon":!1}},[s("div",{staticClass:"old-url-box"},[s("div",{staticClass:"label"},[t._v(" 当前店铺的附件地址： ")]),s("div",{staticClass:"old-url"},t._l(t.oldStorageUrl,(function(e,a){return s("div",{key:a,staticClass:"old-url-item"},[t._v(" "+t._s(e)+"； ")])})),0)])])],1):t._e(),"ftp"===t.type?s("ftp",{ref:"ftp",attrs:{mode:t.mode,oldStorageUrl:t.oldStorageUrl}}):"qiniu"===t.type?s("qi-niu",{ref:"qiniu",attrs:{mode:t.mode,oldStorageUrl:t.oldStorageUrl}}):"oss"===t.type?s("ali",{ref:"oss",attrs:{mode:t.mode,oldStorageUrl:t.oldStorageUrl}}):"cos"===t.type?s("tencent",{ref:"cos",attrs:{mode:t.mode,oldStorageUrl:t.oldStorageUrl}}):t._e()],1)],2)},o=[]},"195d":function(t,e,s){},"28d4":function(t,e,s){},"2aec":function(t,e,s){"use strict";s.r(e);var a=s("36b4"),o=s("86bb");for(var i in o)["default"].indexOf(i)<0&&function(t){s.d(e,t,(function(){return o[t]}))}(i);s("f390");var l=s("2877"),r=Object(l["a"])(o["default"],a["a"],a["b"],!1,null,"a91c5b72",null);e["default"]=r.exports},"30b1":function(t,e,s){"use strict";s.r(e);var a=s("f3f5"),o=s("d896");for(var i in o)["default"].indexOf(i)<0&&function(t){s.d(e,t,(function(){return o[t]}))}(i);s("392c");var l=s("2877"),r=Object(l["a"])(o["default"],a["a"],a["b"],!1,null,"272b08a4",null);e["default"]=r.exports},"36b4":function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return o}));var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"remote-storage-ali"},[s("kdx-hint-alert",{attrs:{"show-icon":!1}},[s("p",{staticClass:"ali-text"},[t._v(" 如果切换到OSS后，需要将原有设置的附件传输至阿里云OSS ")]),s("p",{staticClass:"ali-text"},[t._v(" 相关工具： "),s("a",{attrs:{href:"https://market.aliyun.com/products/53690006/cmgj000281.html#sku=biaozhunban",target:"_blank"}},[t._v(" 官方推荐OSS客户端工具（Windows版） ")]),s("a",{attrs:{href:"https://developer.aliyun.com/ask/191405?spm=a2c6h.13524658",target:"_blank"}},[t._v(" 其他官方推荐工具 ")])]),s("div",{staticClass:"old-url-box"},[s("div",{staticClass:"label"},[t._v(" 当前店铺的附件地址： ")]),s("div",{staticClass:"old-url"},t._l(t.oldStorageUrl,(function(e,a){return s("div",{key:a,staticClass:"old-url-item"},[t._v(" "+t._s(e)+"； ")])})),0)])]),s("Form",{ref:"form",attrs:{model:t.model,rules:t.rules,"label-width":160}},[s("FormItem",{attrs:{label:"Access Key ID：",prop:"access_key"}},[s("Input",{staticClass:"width-250",model:{value:t.model.access_key,callback:function(e){t.$set(t.model,"access_key",e)},expression:"model.access_key"}}),s("kdx-hint-text",[t._v("Access Key ID是您访问阿里云API的密钥。")])],1),s("FormItem",{attrs:{label:"Access Key Secret：",prop:"secret_key"}},[s("Input",{staticClass:"width-340",attrs:{search:"","enter-button":"获取Buckets"},on:{"on-search":t.getBucket},model:{value:t.model.secret_key,callback:function(e){t.$set(t.model,"secret_key",e)},expression:"model.secret_key"}}),s("kdx-hint-text",[t._v(" Access Key Secret是您访问阿里云API的密钥。 ")])],1),s("FormItem",{attrs:{label:"存储空间(Bucket)：",prop:"bucket"}},[s("Select",{staticClass:"width-250",model:{value:t.model.bucket,callback:function(e){t.$set(t.model,"bucket",e)},expression:"model.bucket"}},t._l(t.option.bucket,(function(e){return s("Option",{key:e.name,attrs:{value:e.bucket}},[t._v(" "+t._s(e.bucket+"("+e.data_center+")")+" ")])})),1),s("kdx-hint-text",[t._v("请保证存储空间(Bucket),为可公共读取的")])],1),s("FormItem",{attrs:{label:"自定义访问URL：",prop:"url"}},[s("Input",{staticClass:"width-250",model:{value:t.model.url,callback:function(e){t.$set(t.model,"url",e)},expression:"model.url"}},[s("Select",{staticStyle:{width:"80px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:t.model.scheme,callback:function(e){t.$set(t.model,"scheme",e)},expression:"model.scheme"}},[s("Option",{attrs:{value:"http://"}},[t._v("http://")]),s("Option",{attrs:{value:"https://"}},[t._v("https://")])],1)],1),s("kdx-hint-text",[t._v(" 自定义访问域名，请以 http:// 或 https:// 开头，如不填写会使用OSS默认域名 ")])],1),"shop"===t.mode?s("FormItem",{attrs:{label:"图片自动压缩："}},[s("RadioGroup",{model:{value:t.model.image_compression,callback:function(e){t.$set(t.model,"image_compression",e)},expression:"model.image_compression"}},[s("Radio",{attrs:{label:1}},[s("span",[t._v("启用")])]),s("Radio",{attrs:{label:0}},[s("span",[t._v("不启用")])])],1),s("kdx-hint-text",[t._v("启用自动压缩可以减少流量消耗，提高用户端访问速度")]),1===+t.model.image_compression?s("div",{staticClass:"next-box"},[s("FormItem",{attrs:{label:"压缩规则："}},[s("RadioGroup",{model:{value:t.model.image_compression_rule.is_default,callback:function(e){t.$set(t.model.image_compression_rule,"is_default",e)},expression:"model.image_compression_rule.is_default"}},[s("Radio",{attrs:{label:1}},[s("span",[t._v("系统默认")])]),s("Radio",{attrs:{label:0}},[s("span",[t._v("自定义")])])],1)],1),0===+t.model.image_compression_rule.is_default?s("FormItem",{attrs:{label:"图片样式代码："}},[s("Input",{staticClass:"width-250",attrs:{placeholder:"请输入压缩代码"},model:{value:t.model.image_compression_rule.rule,callback:function(e){t.$set(t.model.image_compression_rule,"rule",e)},expression:"model.image_compression_rule.rule"}}),s("kdx-hint-tooltip",{attrs:{type:"text"},scopedSlots:t._u([{key:"header",fn:function(){return[s("div",{staticClass:"tooltip-header"},[s("i",{staticClass:"iconfont icon-icon-test",staticStyle:{"vertical-align":"-1px","margin-left":"5px"}}),s("span",{staticClass:"hint-text"},[t._v("代码获取说明")])])]},proxy:!0}],null,!1,186440304)},[s("div",{staticClass:"storage-hint-tooltip"},[s("p",{staticClass:"title"},[t._v("阿里云OSS图片压缩使用说明")]),s("div",{staticClass:"item"},[s("p",{staticClass:"number"},[t._v(" 1. ")]),s("p",{staticClass:"text"},[t._v(" 到https://www.aliyun.com/登录您的阿里云存储账号 ")])]),s("div",{staticClass:"item"},[s("p",{staticClass:"number"},[t._v(" 2. ")]),s("p",{staticClass:"text"},[t._v(" 进入【控制台】 ")])]),s("div",{staticClass:"item"},[s("p",{staticClass:"number"},[t._v(" 3. ")]),s("p",{staticClass:"text"},[t._v(" 点击【对象存储OSS】 ")])]),s("div",{staticClass:"item"},[s("p",{staticClass:"number"},[t._v(" 4. ")]),s("p",{staticClass:"text"},[t._v(" 在左侧存储空间中，选择您正在使用的Bucket，点击进入 ")])]),s("div",{staticClass:"item"},[s("p",{staticClass:"number"},[t._v(" 5. ")]),s("p",{staticClass:"text"},[t._v(" 点击【图片处理】 ")])]),s("div",{staticClass:"item"},[s("p",{staticClass:"number"},[t._v(" 6. ")]),s("p",{staticClass:"text"},[t._v(" 点击【新建样式】，按照您的要求，创建您的图片压缩规则 ")])]),s("div",{staticClass:"item"},[s("p",{staticClass:"number"},[t._v(" 7. ")]),s("p",{staticClass:"text"},[t._v(" 保存完成后，到【图片处理】选项卡中，复制该样式的代码，在管理端的操作弹窗中粘贴保存即可。 ")])])])])],1):t._e()],1):t._e()],1):t._e()],1)],1)},o=[]},"392c":function(t,e,s){"use strict";s("195d")},3972:function(t,e,s){"use strict";s.r(e);var a=s("10fe"),o=s.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"3f5d":function(t,e,s){"use strict";s.r(e);var a=s("987d"),o=s.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},4438:function(t,e,s){"use strict";s.r(e);var a=s("e9c8"),o=s.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"4a3f4":function(t,e,s){"use strict";s.r(e);var a=s("bd12"),o=s.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"4ec4":function(t,e,s){"use strict";s("9c7e")},"5d8d":function(t,e,s){"use strict";s.r(e);var a=s("f8ad"),o=s("4a3f4");for(var i in o)["default"].indexOf(i)<0&&function(t){s.d(e,t,(function(){return o[t]}))}(i);s("83f3");var l=s("2877"),r=Object(l["a"])(o["default"],a["a"],a["b"],!1,null,"7a055260",null);e["default"]=r.exports},6615:function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return o}));var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"remote-storage-ftp"},[s("kdx-hint-alert",{attrs:{"show-icon":!1}},[s("p",[t._v("如果切换到FTP后，需要将原有设置的附件传输至相应的FTP中")]),s("div",{staticClass:"old-url-box"},[s("div",{staticClass:"label"},[t._v(" 当前店铺的附件地址： ")]),"shop"===t.mode&&t.oldStorageUrl.length?s("div",{staticClass:"old-url"},t._l(t.oldStorageUrl,(function(e,a){return s("div",{key:a,staticClass:"old-url-item"},[t._v(" "+t._s(e)+"； ")])})),0):t._e()])]),s("Form",{ref:"form",attrs:{model:t.model,rules:t.rules,"label-width":140}},[s("FormItem",{attrs:{label:"服务器地址：",prop:"host"}},[s("Input",{staticClass:"width-250",model:{value:t.model.host,callback:function(e){t.$set(t.model,"host",e)},expression:"model.host"}})],1),s("FormItem",{attrs:{label:"端口：",prop:"port"}},[s("Input",{staticClass:"width-250",model:{value:t.model.port,callback:function(e){t.$set(t.model,"port",e)},expression:"model.port"}})],1),s("FormItem",{attrs:{label:"账号：",prop:"username"}},[s("Input",{staticClass:"width-250",model:{value:t.model.username,callback:function(e){t.$set(t.model,"username",e)},expression:"model.username"}})],1),s("FormItem",{attrs:{label:"密码：",prop:"password"}},[s("Input",{staticClass:"width-250",model:{value:t.model.password,callback:function(e){t.$set(t.model,"password",e)},expression:"model.password"}})],1),s("FormItem",{attrs:{label:"访问URL：",prop:"url"}},[s("Input",{staticClass:"width-250",model:{value:t.model.url,callback:function(e){t.$set(t.model,"url",e)},expression:"model.url"}},[s("Select",{staticStyle:{width:"80px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:t.model.scheme,callback:function(e){t.$set(t.model,"scheme",e)},expression:"model.scheme"}},[s("Option",{attrs:{value:"http://"}},[t._v("http://")]),s("Option",{attrs:{value:"https://"}},[t._v("https://")])],1)],1),s("kdx-hint-text",[t._v("访问域名，请以http://或者https://开头")])],1),s("FormItem",{attrs:{label:"附件目录：",prop:"path"}},[s("Input",{staticClass:"width-250",model:{value:t.model.path,callback:function(e){t.$set(t.model,"path",e)},expression:"model.path"}}),s("kdx-hint-text",[t._v("远程附件目录的绝对路径，默认为FTP主目录")])],1),s("FormItem",{attrs:{label:"超时时间：",prop:"timeout"}},[s("Input",{staticClass:"width-250",model:{value:t.model.timeout,callback:function(e){t.$set(t.model,"timeout",e)},expression:"model.timeout"}},[s("span",{attrs:{slot:"append"},slot:"append"},[t._v("秒")])]),s("kdx-hint-text",[t._v("0为服务器默认")])],1),s("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"被动模式：",prop:"passive_mode"}},[s("RadioGroup",{model:{value:t.model.passive_mode,callback:function(e){t.$set(t.model,"passive_mode",e)},expression:"model.passive_mode"}},[s("Radio",{attrs:{label:1}},[t._v("是")]),s("Radio",{attrs:{label:0}},[t._v("否")])],1)],1),s("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"SSL：",prop:"ssl"}},[s("RadioGroup",{model:{value:t.model.ssl,callback:function(e){t.$set(t.model,"ssl",e)},expression:"model.ssl"}},[s("Radio",{attrs:{label:1}},[t._v("是")]),s("Radio",{attrs:{label:0}},[t._v("否")])],1)],1)],1)],1)},o=[]},"6b7b":function(t,e,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,s("d3b7"),s("b0c0");var a={name:"FTP",props:{mode:{type:String},oldStorageUrl:{type:Array,default:function(){return[]}}},data:function(){return{model:{access_key:"",secret_key:"",bucket:"",url:"",scheme:"http://"},rules:{access_key:[{required:!0,message:"Access Key ID必填"}],secret_key:[{required:!0,message:"Access Key Secret必填"}],bucket:[{required:!0,message:"存储空间（Bucket）必填"}]},option:{bucket:[]}}},methods:{validate:function(){var t=this;return new Promise((function(e){t.$refs["form"].validate().then((function(t){return e(t)}))}))},getModel:function(){return this.model},getBucket:function(){var t=this;if(this.model.access_key&&this.model.secret_key){var e="storage"===this.$route.name?0:this.$route.query.id,s={access_key:this.model.access_key,secret_key:this.model.secret_key,shop_id:e};this.$api.systemApi.getAliBucket(s).then((function(e){0===e.error&&(t.option.bucket=e.bucket_list||[])}))}},resetModel:function(t){var e={};"shop"===this.mode&&(e={image_compression:0,image_compression_rule:{is_default:0,rule:""}}),this.model=Object.assign({access_key:"",secret_key:"",bucket:"",url:"",scheme:"http://"},e,t),this.getBucket()}}};e.default=a},7615:function(t,e,s){"use strict";s.r(e);var a=s("f672"),o=s("d900");for(var i in o)["default"].indexOf(i)<0&&function(t){s.d(e,t,(function(){return o[t]}))}(i);s("4ec4");var l=s("2877"),r=Object(l["a"])(o["default"],a["a"],a["b"],!1,null,"348c98de",null);e["default"]=r.exports},"7a85":function(t,e,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,s("d3b7"),s("b0c0"),s("d81d");var a={name:"FTP",props:{mode:{type:String},oldStorageUrl:{type:Array,default:function(){return[]}}},data:function(){return{model:{access_key:"",secret_key:"",bucket:"",url:"",scheme:"http://",image_compression:0,image_compression_rule:{is_default:0,rule:""}},rules:{access_key:[{required:!0,message:"AccessKey必填"}],secret_key:[{required:!0,message:"SecretKey必填"}],bucket:[{required:!0,message:"存储空间(Bucket)必填"}],url:[{required:!0,message:"访问URL必填"}]},loading:!1,optionData:{url:[]}}},methods:{validate:function(){var t=this;return new Promise((function(e){t.$refs["form"].validate().then((function(t){return e(t)}))}))},getModel:function(){return this.model},blurData:function(){if(this.model.access_key&&this.model.secret_key&&this.model.bucket){var t="storage"===this.$route.name?0:this.$route.query.id,e={access_key:this.model.access_key,secret_key:this.model.secret_key,bucket:this.model.bucket,shop_id:t};this.getUrl(e)}},getUrl:function(t){var e=this;this.$api.systemApi.getQiniuUrl(t).then((function(t){var s=t.error,a=t.domain_list,o=void 0===a?[]:a;0===s&&(e.optionData.url=o.map((function(t){return{id:t,name:t}})))}))},resetModel:function(t){var e={};"shop"===this.mode&&(e={image_compression:0,image_compression_rule:{is_default:1,rule:""}}),this.model=Object.assign({access_key:"",secret_key:"",bucket:"",url:"",scheme:"http://"},e,t),this.blurData()},handleSetting:function(){this.$refs["photo_compression"].setValue()},checkUsing:function(){this.$refs["use_direction"].setValue()}}};e.default=a},"7bda":function(t,e,s){"use strict";s.r(e);var a=s("83b2"),o=s("3f5d");for(var i in o)["default"].indexOf(i)<0&&function(t){s.d(e,t,(function(){return o[t]}))}(i);s("b894");var l=s("2877"),r=Object(l["a"])(o["default"],a["a"],a["b"],!1,null,"ce861e54",null);e["default"]=r.exports},"83b2":function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return o}));var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"remote-storage-ftp"},[s("kdx-hint-alert",{attrs:{"show-icon":!1}},[t._v(" 如果切换到COS后，需要将原有设置的附件传输至腾讯COS, 相关工具： "),s("a",{attrs:{href:"https://developer.aliyun.com/ask/191405?spm=a2c6h.13524658",target:"_blank"}},[t._v("官方工具")]),s("div",{staticClass:"old-url-box"},[s("div",{staticClass:"label"},[t._v(" 当前店铺的附件地址： ")]),s("div",{staticClass:"old-url"},t._l(t.oldStorageUrl,(function(e,a){return s("div",{key:a,staticClass:"old-url-item"},[t._v(" "+t._s(e)+"； ")])})),0)])]),s("Form",{ref:"form",attrs:{model:t.model,rules:t.rules,"label-width":150}},[s("FormItem",{attrs:{label:"App ID：",prop:"app_id"}},[s("Input",{staticClass:"width-250",model:{value:t.model.app_id,callback:function(e){t.$set(t.model,"app_id",e)},expression:"model.app_id"}}),s("kdx-hint-text",[t._v("App ID 是您项目的ID")])],1),s("FormItem",{attrs:{label:"Secret ID：",prop:"secret_id"}},[s("Input",{staticClass:"width-250",model:{value:t.model.secret_id,callback:function(e){t.$set(t.model,"secret_id",e)},expression:"model.secret_id"}}),s("kdx-hint-text",[t._v("Secret ID 是您项目的安全秘钥，具有该账户完全的权限，请妥善保管")])],1),s("FormItem",{attrs:{label:"Secret Key：",prop:"secret_key"}},[s("Input",{staticClass:"width-250",attrs:{search:"","enter-button":"获取Buckets"},on:{"on-search":t.getBucket},model:{value:t.model.secret_key,callback:function(e){t.$set(t.model,"secret_key",e)},expression:"model.secret_key"}}),s("kdx-hint-text",[t._v("Secret Key 是您项目的安全秘钥，具有该账户完全的权限，请妥善保管")])],1),s("FormItem",{attrs:{label:"存储空间(Bucket)：",prop:"bucket"}},[s("Select",{staticClass:"width-250",on:{"on-change":t.getRegion},model:{value:t.model.bucket,callback:function(e){t.$set(t.model,"bucket",e)},expression:"model.bucket"}},t._l(t.option.bucket,(function(e){return s("Option",{key:e.bucket,attrs:{value:e.bucket}},[t._v(t._s(e.bucket))])})),1),s("kdx-hint-text",[t._v("请保证空间属性为 公有读私有写")])],1),s("FormItem",{attrs:{label:"地域：",prop:"region"}},[s("Select",{staticClass:"width-250",model:{value:t.model.region,callback:function(e){t.$set(t.model,"region",e)},expression:"model.region"}},t._l(t.option.region,(function(e,a){return s("Option",{key:a,attrs:{value:e.region}},[t._v(t._s(e.region))])})),1),s("kdx-hint-text",[t._v("存储空间(Bucket)所在的地域")])],1),s("FormItem",{attrs:{label:"自定义访问URL：",prop:"url"}},[s("Input",{staticClass:"width-250",model:{value:t.model.url,callback:function(e){t.$set(t.model,"url",e)},expression:"model.url"}},[s("Select",{staticStyle:{width:"80px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:t.model.scheme,callback:function(e){t.$set(t.model,"scheme",e)},expression:"model.scheme"}},[s("Option",{attrs:{value:"http://"}},[t._v("http://")]),s("Option",{attrs:{value:"https://"}},[t._v("https://")])],1)],1),s("kdx-hint-text",[t._v("自定义访问域名，请以 http:// 或 https:// 开头，如不填写会使用OSS默认域名")])],1)],1)],1)},o=[]},"83f3":function(t,e,s){"use strict";s("28d4")},"86bb":function(t,e,s){"use strict";s.r(e);var a=s("6b7b"),o=s.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"987d":function(t,e,s){var a=s("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(s("2909"));s("d3b7"),s("b0c0"),s("4de4");var i={name:"FTP",props:{oldStorageUrl:{type:Array,default:function(){return[]}},mode:{type:String,default:""}},data:function(){return{model:{app_id:"",secret_id:"",secret_key:"",bucket:"",region:"",url:"",scheme:"http://"},rules:{app_id:[{required:!0,message:"APP ID必填"}],secret_id:[{required:!0,message:"Secret ID必填"}],secret_key:[{required:!0,message:"Secret Key必填"}],bucket:[{required:!0,message:"存储空间(Bucket)必填"}],region:[{required:!0,message:"地域必填"}]},option:{bucket:[],region:[]}}},methods:{validate:function(){var t=this;return new Promise((function(e){t.$refs["form"].validate().then((function(t){return e(t)}))}))},getModel:function(){return this.model},getBucket:function(){var t=this;if(this.model.app_id&&this.model.secret_id&&this.model.secret_key){var e="storage"===this.$route.name?0:this.$route.query.id,s={app_id:this.model.app_id,secret_id:this.model.secret_id,secret_key:this.model.secret_key,shop_id:e};this.$api.systemApi.getTencentBucket(s).then((function(e){0===e.error&&(t.option.bucket=e.bucket_list||[],t.getRegion("res"))}))}},getRegion:function(t){var e,s=this;null!==(e=this.option.bucket)&&void 0!==e&&e.length?this.model.bucket?this.option.region=this.option.bucket.filter((function(t){return t.bucket===s.model.bucket})):this.option.region=(0,o.default)(this.option.bucket):this.option.region=[],"res"!==t&&(this.model.region="")},resetModel:function(t){this.model=Object.assign({app_id:"",secret_id:"",secret_key:"",bucket:"",region:"",url:"",scheme:"http://"},t),this.getBucket()}}};e.default=i},"9c7e":function(t,e,s){},a39ad:function(t,e,s){},b55af:function(t,e,s){"use strict";s("a39ad")},b894:function(t,e,s){"use strict";s("f74a")},bd12:function(t,e,s){var a=s("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(s("ade3")),i=a(s("15fd")),l=a(s("e395")),r=["type"],n={name:"index",components:{StorageInfo:l.default},data:function(){return{type:"local",loading:!1}},created:function(){this.getData()},methods:{setLabelStatus:function(t){this.type=t},getData:function(){var t=this;this.loading=!0,this.$api.systemApi.getStorage().then((function(e){if(t.loading=!1,0===e.error){var s=e.settings,a=s.type,o=(0,i.default)(s,r);t.type=a,t.$refs["storage_info"].resetData(o)}}))},handleSave:function(){var t=this;"local"===this.type?this.$api.systemApi.setStorage({type:this.type}).then((function(e){0===e.error&&(t.$Message.success("本地存储保存成功"),t.getData())})):this.$refs["storage_info"].validate().then((function(e){if(e){var s,a=(s={},(0,o.default)(s,t.type,t.$refs["storage_info"].getModel()),(0,o.default)(s,"type",t.type),s);t.$api.systemApi.setStorage(a).then((function(e){0===e.error&&(t.$Message.success("本地存储保存成功"),t.getData())}))}}))}}};e.default=n},c621:function(t,e,s){},d896:function(t,e,s){"use strict";s.r(e);var a=s("0d32"),o=s.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},d900:function(t,e,s){"use strict";s.r(e);var a=s("7a85"),o=s.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},e395:function(t,e,s){"use strict";s.r(e);var a=s("1430"),o=s("4438");for(var i in o)["default"].indexOf(i)<0&&function(t){s.d(e,t,(function(){return o[t]}))}(i);s("ea86");var l=s("2877"),r=Object(l["a"])(o["default"],a["a"],a["b"],!1,null,"628a9790",null);e["default"]=r.exports},e9c8:function(t,e,s){var a=s("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(s("30b1")),i=a(s("0761")),l=a(s("7615")),r=a(s("2aec")),n=a(s("7bda")),c={name:"index",components:{CheckLabel:o.default,Ftp:i.default,QiNiu:l.default,Ali:r.default,Tencent:n.default},props:{type:{type:String,default:"local"},mode:{type:String,default:""},oldStorageUrl:{type:Array,default:function(){return[]}}},data:function(){return{data:{ftp:{},qiniu:{},oss:{},cos:{}},option:[{key:"local",name:"本地存储"},{key:"ftp",name:"FTP"},{key:"qiniu",name:"七牛云存储"},{key:"oss",name:"阿里云OSS"},{key:"cos",name:"腾讯云COS"}]}},watch:{type:{handler:function(){this.setData()},immediate:!0}},methods:{setLabelStatus:function(t){this.$emit("update:type",t)},resetData:function(t){this.data=t,this.setData()},validate:function(){return this.$refs[this.type].validate()},getModel:function(){return this.$refs[this.type].getModel()},setData:function(){var t=this;"local"!==this.type&&this.$nextTick((function(){t.$refs[t.type].resetModel(t.data[t.type])}))}}};e.default=c},ea86:function(t,e,s){"use strict";s("ee575")},ee575:function(t,e,s){},f390:function(t,e,s){"use strict";s("c621")},f3f5:function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return o}));var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"check-label"},[s("div",{staticClass:"label-item",class:{"label-checked":t.checked,"label-disabled":t.disabled},on:{click:t.handleClick}},[s("span",[t._t("default")],2),t.showIcon?s("kdx-svg-icon",{staticClass:"icon",attrs:{type:"icon-chenggong-shixin"}}):t._e()],1)])},o=[]},f672:function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return o}));var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"remote-storage-ftp"},[s("kdx-hint-alert",{attrs:{"show-icon":!1}},[t._v("如果切换到七牛云存储后，需要将原有设置的附件传输至七牛云存储，相关工具： "),s("a",{attrs:{href:"https://developer.qiniu.com/sdk#tool",target:"_blank"}},[t._v("官方工具")]),s("div",{staticClass:"old-url-box"},[s("div",{staticClass:"label"},[t._v(" 当前店铺的附件地址： ")]),s("div",{staticClass:"old-url"},t._l(t.oldStorageUrl,(function(e,a){return s("div",{key:a,staticClass:"old-url-item"},[t._v(" "+t._s(e)+"； ")])})),0)])]),s("Form",{ref:"form",attrs:{model:t.model,rules:t.rules,"label-width":150}},[s("FormItem",{attrs:{label:"AccessKey：",prop:"access_key"}},[s("Input",{staticClass:"width-250",on:{"on-blur":t.blurData},model:{value:t.model.access_key,callback:function(e){t.$set(t.model,"access_key",e)},expression:"model.access_key"}}),s("kdx-hint-text",[t._v("用于签名的公钥，从 "),s("a",{attrs:{href:"https://portal.qiniu.com/user/key",target:"_blank"}},[t._v(" https://portal.qiniu.com/user/key ")]),t._v("获取 ")])],1),s("FormItem",{attrs:{label:"SecretKey：",prop:"secret_key"}},[s("Input",{staticClass:"width-250",on:{"on-blur":t.blurData},model:{value:t.model.secret_key,callback:function(e){t.$set(t.model,"secret_key",e)},expression:"model.secret_key"}}),s("kdx-hint-text",[t._v("用于签名的公钥，从 "),s("a",{attrs:{href:"https://portal.qiniu.com/user/key",target:"_blank"}},[t._v(" https://portal.qiniu.com/user/key ")]),t._v("获取 ")])],1),s("FormItem",{attrs:{label:"存储空间(Bucket)：",prop:"bucket"}},[s("Input",{staticClass:"width-250",on:{"on-blur":t.blurData},model:{value:t.model.bucket,callback:function(e){t.$set(t.model,"bucket",e)},expression:"model.bucket"}}),s("kdx-hint-text",[t._v("空间名称，请保证为公开空间")])],1),s("FormItem",{attrs:{label:"访问URL：",prop:"url"}},[s("Select",{staticClass:"url-http-select",staticStyle:{width:"80px"},model:{value:t.model.scheme,callback:function(e){t.$set(t.model,"scheme",e)},expression:"model.scheme"}},[s("Option",{attrs:{value:"http://"}},[t._v("http://")]),s("Option",{attrs:{value:"https://"}},[t._v("https://")])],1),s("Select",{staticStyle:{width:"170px"},model:{value:t.model.url,callback:function(e){t.$set(t.model,"url",e)},expression:"model.url"}},t._l(t.optionData.url,(function(e,a){return s("Option",{key:a,attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1),s("kdx-hint-text",[t._v("访问域名，请以http://或者https://开头")])],1),"shop"===t.mode?s("FormItem",{attrs:{label:"图片自动压缩："}},[s("RadioGroup",{model:{value:t.model.image_compression,callback:function(e){t.$set(t.model,"image_compression",e)},expression:"model.image_compression"}},[s("Radio",{attrs:{label:1}},[s("span",[t._v("启用")])]),s("Radio",{attrs:{label:0}},[s("span",[t._v("不启用")])])],1),s("kdx-hint-text",[t._v("启用自动压缩可以减少流量消耗，提高用户端访问速度")]),1===+t.model.image_compression?s("div",{staticClass:"next-box"},[s("FormItem",{attrs:{label:"压缩规则："}},[s("RadioGroup",{model:{value:t.model.image_compression_rule.is_default,callback:function(e){t.$set(t.model.image_compression_rule,"is_default",e)},expression:"model.image_compression_rule.is_default"}},[s("Radio",{attrs:{label:1}},[s("span",[t._v("系统默认")])]),s("Radio",{attrs:{label:0}},[s("span",[t._v("自定义")])])],1)],1),0===+t.model.image_compression_rule.is_default?s("FormItem",{attrs:{label:"图片样式代码："}},[s("Input",{staticClass:"width-250",attrs:{placeholder:"请输入压缩代码"},model:{value:t.model.image_compression_rule.rule,callback:function(e){t.$set(t.model.image_compression_rule,"rule",e)},expression:"model.image_compression_rule.rule"}}),s("kdx-hint-tooltip",{attrs:{type:"text"},scopedSlots:t._u([{key:"header",fn:function(){return[s("div",{staticClass:"tooltip-header"},[s("i",{staticClass:"iconfont icon-icon-test",staticStyle:{"vertical-align":"-1px","margin-left":"5px"}}),s("span",{staticClass:"hint-text"},[t._v("代码获取说明")])])]},proxy:!0}],null,!1,186440304)},[s("div",{staticClass:"storage-hint-tooltip"},[s("p",{staticClass:"title"},[t._v("七牛云图片压缩使用说明")]),s("div",{staticClass:"item"},[s("p",{staticClass:"number"},[t._v(" 1. ")]),s("p",{staticClass:"text"},[t._v(" 到www.qiniu.com登录您的七牛云存储账号 ")])]),s("div",{staticClass:"item"},[s("p",{staticClass:"number"},[t._v(" 2. ")]),s("p",{staticClass:"text"},[t._v(" 进入【管理控制台】 ")])]),s("div",{staticClass:"item"},[s("p",{staticClass:"number"},[t._v(" 3. ")]),s("p",{staticClass:"text"},[t._v(" 点击左侧导航中【对象存储】 ")])]),s("div",{staticClass:"item"},[s("p",{staticClass:"number"},[t._v(" 4. ")]),s("p",{staticClass:"text"},[t._v(" 选择【图片样式】选项卡 ")])]),s("div",{staticClass:"item"},[s("p",{staticClass:"number"},[t._v(" 5. ")]),s("p",{staticClass:"text"},[t._v(" 点击【新建图片样式】 ")])]),s("div",{staticClass:"item"},[s("p",{staticClass:"number"},[t._v(" 6. ")]),s("p",{staticClass:"text"},[t._v(" 按照您的要求，创建您的图片压缩规则 ")])]),s("div",{staticClass:"item"},[s("p",{staticClass:"number"},[t._v(" 7. ")]),s("p",{staticClass:"text"},[t._v(" 保存完成后，到【图片样式】选项卡中，复制该样式的 “处理接口”代码，在管理端的操作弹窗中粘贴保存即可 ")])])])])],1):t._e()],1):t._e()],1):t._e()],1)],1)},o=[]},f74a:function(t,e,s){},f8ad:function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return o}));var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("kdx-content-bar",{attrs:{loading:t.loading},scopedSlots:t._u([{key:"btn",fn:function(){return[s("Button",{staticClass:"primary-long",on:{click:t.handleSave}},[t._v("保存")])]},proxy:!0}])},[s("div",{staticClass:"remote-storage"},[s("div",{staticClass:"header"},[s("kdx-form-title",{attrs:{"has-margin":!1},scopedSlots:t._u([{key:"text",fn:function(){return[t._v("默认所有店铺使用此远程存储")]},proxy:!0}])},[t._v(" 全局配置 ")]),s("kdx-hint-alert",{attrs:{"show-icon":!1}},[s("div",{staticClass:"alert-box"},[s("div",{staticClass:"left title"},[t._v(" 温馨提示： ")]),s("div",{staticClass:"right"},[s("p",{staticClass:"title success-title"},[t._v("推荐使用远程存储")]),s("p",[t._v(" 对接FTP和七牛存等任意远程存储器，将降低对服务器加载图片的压力，提升商城的运行加载速度 ")])])])])],1),s("storage-info",{ref:"storage_info",attrs:{type:t.type},on:{"update:type":function(e){t.type=e}}})],1)])},o=[]}}]);