(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bdea2b5"],{"666b":function(t,e,a){"use strict";var i=a("e8c8"),s=a.n(i);s.a},d7b7:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("PageLayout",{attrs:{options:t.options},scopedSlots:t._u([{key:"header",fn:function(){return[a("Button",{attrs:{icon:["far","save"],backcolor:"#2ecc71",name:"保存"},nativeOn:{click:function(e){return t.handleSave(e)}}}),a("Button",{attrs:{icon:["fab","telegram-plane"],name:t.$route.query.id?"更新":"发布"},nativeOn:{click:function(e){return t.handleSubmit(e)}}})]},proxy:!0},{key:"footer",fn:function(){return[a("button",{on:{click:function(){return t.drawerOpen=!t.drawerOpen}}},[a("icon",{attrs:{icon:["fas","sliders-h"]}})],1),a("button",{on:{click:t.toggleFullscreen}},[a("icon",{attrs:{icon:["fas","arrows-alt"]}})],1)]},proxy:!0}])},[a("Writer",{attrs:{name:t.inputLabel,title:t.model.title,text:t.model.text,fullscreen:t.fullscreen},on:{change:t.onChange}},[a("div",{staticClass:"url"},[a("label",{staticClass:"prefix"},[t._v(t._s(t.baseUrl+"/"+t.category.slug+"/"))]),a("UInput",{attrs:{value:t.slug},on:{change:function(e){return t.slug=e}}})],1)]),a("el-drawer",{staticClass:"drawer",attrs:{title:"文章设定",direction:"rtl",visible:t.drawerOpen},on:{"update:visible":function(e){t.drawerOpen=e}}},[a("el-form",{attrs:{model:t.model,"label-width":"80px","label-position":"top"}},[a("el-form-item",{attrs:{label:"分类"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.categoryId,callback:function(e){t.categoryId=e},expression:"categoryId"}},t._l(t.categoryRecord,(function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t._id}})})),1)],1),a("el-form-item",{attrs:{label:"概要"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入概要(Option)"},model:{value:t.summary,callback:function(e){t.summary=e},expression:"summary"}})],1)],1),a("el-form",[a("el-form-item",{attrs:{label:"隐藏?"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.hide,callback:function(e){t.hide=e},expression:"hide"}})],1)],1)],1)],1)},s=[],r=(a("e260"),a("e6cf"),a("ddb0"),a("5530")),o=a("9ab4"),n=a("2fe1"),l=a("71ac"),c=a("45eb"),u=a("13cf"),d=a("8eab"),h=a("4bb5"),m=a("e464"),p=a("60a3"),g=a("5a00");let b=class extends(Object(p["b"])(m["a"],g["a"])){constructor(){super(...arguments),this.options={title:""},this.inputLabel="想想取个什么题目比较好呢~",this.model={title:"",text:""},this.drawerOpen=!1,this.categoryId="",this.categoryRecord={},this.timer=null,this.slug="",this.summary="",this.hide=!1,this.prefix="mx-space-post"}async handleSubmit(){const t=Object(r["a"])({},this.model,{slug:this.slug,categoryId:this.category._id,summary:""===this.summary?void 0:this.summary,hide:this.hide});this.id?await this.$api("Post").update(this.id,t):await this.$api("Post").post(t),this.$notice.success("发布成功"),this.$router.push("/posts")}onChange(t){this.model=Object(r["a"])({},t)}get baseUrl(){return"https://innei.ren"}get category(){const t=this.categories.get(this.categoryId)||{slug:"",name:""};return{_id:this.categoryId,slug:t.slug,name:t.name}}setDefaultCategory(){if(this.categoryId)return!0;const t=this.categories.first();return!!t&&(this.categoryId=t._id,this.categoryRecord=this.categories.toObject(),!0)}mounted(){this.categoryId||(this.timer=setInterval(()=>{const t=this.setDefaultCategory();t&&(clearInterval(this.timer),this.timer=null)},100))}beforeDestroy(){clearInterval(this.timer),this.timer=null}get id(){return this.$route.query.id}async created(){if(this.options.title=this.id?"修改文章":"撰写新文章",this.id){var t;const{data:e}=await this.$api("Post").get(this.$route.query.id);this.slug=e.slug,this.summary=null!==(t=e.summary)&&void 0!==t?t:"",this.model={title:e.title,text:e.text},this.hide=e.hide,this.categoryId=e.categoryId}}};Object(o["__decorate"])([h["b"]],b.prototype,"categories",void 0),b=Object(o["__decorate"])([Object(n["b"])({components:{Button:l["a"],PageLayout:c["a"],Writer:u["a"],UInput:d["a"]}})],b);var f=b,y=f,v=(a("666b"),a("2877")),w=Object(v["a"])(y,i,s,!1,null,"2e1bea0e",null);e["default"]=w.exports},e8c8:function(t,e,a){}}]);