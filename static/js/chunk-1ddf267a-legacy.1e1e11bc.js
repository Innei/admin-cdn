(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ddf267a"],{"45eb":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"root",staticClass:"layout"},[a("div",{staticClass:"toggle",class:{active:t.sidebar},on:{click:t.toggleSidebarStatus}},[a("icon",{attrs:{icon:["fas","sliders-h"]}})],1),a("header",{style:t.options.noPadding?"padding: 0.5rem 0;":""},[a("span",{staticClass:"title"},[t._v(t._s(t.options.title?t.options.title:t.$route.meta.title))]),t.$slots.header?a("div",{staticClass:"btn-container"},[t._t("header")],2):t._e()]),a("main",{on:{click:function(e){return t.setSidebarStatus(!1)}}},[t._t("default"),a("div",{staticClass:"end-center"},[t._t("end")],2)],2),a("footer",[a("div",{staticClass:"float-btns"},[t._t("footer")],2)])])},o=[],i=a("2f62"),r={computed:{...Object(i["c"])(["sidebar"])},methods:{...Object(i["b"])("app",["toggleSidebarStatus","setSidebarStatus"])},props:{options:{type:Object,default(){return{}}}},provide(){return{toTop:()=>{this.$refs.root.scrollTo({left:0,top:0,behavior:"smooth"})}}}},s=r,c=(a("5985"),a("2877")),l=Object(c["a"])(s,n,o,!1,null,"d1e13472",null);e["a"]=l.exports},"528f":function(t,e,a){"use strict";var n=a("7a5d"),o=a.n(n);o.a},5985:function(t,e,a){"use strict";var n=a("72ce"),o=a.n(n);o.a},"71ac":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},["mobile"!==t.device?a("div",{staticClass:"btn",style:{background:t.backcolor,color:t.forecolor}},[a("div",{staticClass:"name"},[a("div",{},[t._v(t._s(t.name))])]),a("div",{staticClass:"icon",style:{background:t.backcolor}},[a("icon",{attrs:{icon:t.icon}})],1)]):a("div",[a("button",{style:{background:t.backcolor,color:t.forecolor}},[a("icon",{attrs:{icon:t.icon}})],1)])])},o=[],i=a("2f62"),r={props:{icon:{type:Array,required:!0},name:{type:String,required:!0},backcolor:{type:String,default:"#1188e8"},forecolor:String},computed:{...Object(i["c"])(["device"])}},s=r,c=(a("528f"),a("2877")),l=Object(c["a"])(s,n,o,!1,null,"8b036e9c",null);e["a"]=l.exports},"72ce":function(t,e,a){},"7a5d":function(t,e,a){},"9e99":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("PageLayout",{scopedSlots:t._u([{key:"header",fn:function(){return[a("layout-button",{attrs:{icon:["fas","plus"],name:"新增"},nativeOn:{click:function(e){return t.$router.push({name:"project-edit"})}}})]},proxy:!0},{key:"end",fn:function(){return[a("el-pagination",{staticClass:"el-pager",attrs:{"hide-on-single-page":"",layout:"prev, pager, next",total:t.page.total},on:{"prev-click":function(e){return t.handleTo(t.page.currentPage-1)},"next-click":function(e){return t.handleTo(t.page.currentPage+1)},"current-change":t.handleTo}})]},proxy:!0}])},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.data,"max-height":"650",stripe:""}},[a("el-table-column",{attrs:{prop:"title",label:"项目名称",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),t.$router.push("/extra/project/edit?id="+t.data[e.$index]._id)}}},[t._v(" "+t._s(e.row.name)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"description",label:"项目描述"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popconfirm",{attrs:{title:"确定删除吗？"},on:{onConfirm:function(a){return t.handleDelete(e.$index)}}},[a("el-button",{attrs:{slot:"reference",type:"text",size:"small"},slot:"reference"},[t._v(" 移除 ")])],1)]}}])})],1)],1)},o=[],i=(a("ddb0"),a("9ab4")),r=a("2b0e"),s=a("2fe1"),c=a("45eb"),l=a("71ac");let u=class extends r["default"]{constructor(){super(...arguments),this.data=[],this.loading=!0,this.page={}}async created(){await this.fetchData()}async fetchData(t=1,e=10){this.loading=!0;const a=await this.$api("Project").gets({page:t,size:e});this.data=a.data,this.page=a.page,this.loading=!1}async handleDelete(t){const e=this.data[t]._id;await this.$api("Project").delete(e),this.$notice.success("删除成功"),this.fetchData()}handleTo(t){this.fetchData(t)}};u=Object(i["__decorate"])([Object(s["b"])({components:{PageLayout:c["a"],LayoutButton:l["a"]}})],u);var d=u,p=d,f=a("2877"),b=Object(f["a"])(p,n,o,!1,null,null,null);e["default"]=b.exports}}]);