(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f476173e"],{"528f":function(e,t,o){"use strict";var a=o("7a5d"),r=o.n(a);r.a},"5b1c":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("PageLayout",{scopedSlots:e._u([{key:"header",fn:function(){return[o("layout-button",{attrs:{backcolor:"#41B883",icon:["far","save"],name:"发布一言"},nativeOn:{click:function(t){return e.handlePostHitokoto(t)}}}),o("layout-button",{attrs:{icon:["fab","telegram-plane"],name:e.$route.query.id?"更新":"发布"},nativeOn:{click:function(t){return e.handleSubmit(t)}}})]},proxy:!0}])},[o("el-form",{ref:"form",attrs:{model:e.model,"label-width":"80px",rules:e.rules}},[o("el-form-item",{attrs:{label:"内容",prop:"text",required:""}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:6,maxRows:8},placeholder:e.placeholder.text},model:{value:e.model.text,callback:function(t){e.$set(e.model,"text",t)},expression:"model.text"}})],1),o("el-form-item",{attrs:{label:"作者",prop:"author"}},[o("el-input",{attrs:{placeholder:e.placeholder.author,"auto-complete":"off"},model:{value:e.model.author,callback:function(t){e.$set(e.model,"author",t)},expression:"model.author"}})],1),o("el-form-item",{attrs:{label:"来源",prop:"source"}},[o("el-input",{attrs:{placement:e.placeholder.source,"auto-complete":"off"},model:{value:e.model.source,callback:function(t){e.$set(e.model,"source",t)},expression:"model.source"}})],1)],1)],1)},r=[],s=(o("e260"),o("e6cf"),o("ddb0"),o("9ab4")),c=o("2b0e"),l=o("2fe1"),i=o("45eb"),n=o("71ac"),u=o("d257");let d=class extends c["default"]{constructor(){super(...arguments),this.model={source:"",text:"",author:""},this.placeholder={text:"",author:"",source:""},this.rules={text:[{required:!0,message:"请输入正文",trigger:"blur"}]}}async created(){if(await this.getHitokoto(),!this.id)return;const{data:e}=await this.$api("Say").get(this.$route.query.id);this.model=e}async getHitokoto(){const e=await fetch("https://v1.hitokoto.cn/"),t=await e.json();this.placeholder={source:t.from,text:t.hitokoto,author:t.from_who||t.creator}}async handlePostHitokoto(){await this.$api("Say").post(Object(u["b"])(this.placeholder)),this.$message.success("发送成功~"),this.$router.push({name:"say-list"})}async handleSubmit(){var e=this;this.$refs["form"].validate((async function(t){t&&(e.id?(await e.$api("Say").update(e.id,Object(u["b"])(e.model)),e.$message.success("修改成功~")):(await e.$api("Say").post(Object(u["b"])(e.model)),e.$message.success("发送成功~")),e.$router.push({name:"say-list"}))}))}get id(){return this.$route.query.id}};d=Object(s["__decorate"])([Object(l["b"])({components:{PageLayout:i["a"],LayoutButton:n["a"]}})],d);var m=d,p=m,h=o("2877"),f=Object(h["a"])(p,a,r,!1,null,null,null);t["default"]=f.exports},"71ac":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{},["mobile"!==e.device?o("div",{staticClass:"btn",style:{background:e.backcolor,color:e.forecolor}},[o("div",{staticClass:"name"},[o("div",{},[e._v(e._s(e.name))])]),o("div",{staticClass:"icon",style:{background:e.backcolor}},[o("icon",{attrs:{icon:e.icon}})],1)]):o("div",[o("button",{style:{background:e.backcolor,color:e.forecolor}},[o("icon",{attrs:{icon:e.icon}})],1)])])},r=[],s=o("5530"),c=o("2f62"),l={props:{icon:{type:Array,required:!0},name:{type:String,required:!0},backcolor:{type:String,default:"#1188e8"},forecolor:String},computed:Object(s["a"])({},Object(c["c"])(["device"]))},i=l,n=(o("528f"),o("2877")),u=Object(n["a"])(i,a,r,!1,null,"8b036e9c",null);t["a"]=u.exports},"7a5d":function(e,t,o){}}]);