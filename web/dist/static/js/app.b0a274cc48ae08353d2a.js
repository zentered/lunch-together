webpackJsonp([1],{"7Otq":function(e,n,t){e.exports=t.p+"static/img/logo.0fa7fee.png"},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("7+uW"),r={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{id:"logo",src:t("7Otq")}}),this._v(" "),n("router-view")],1)},staticRenderFns:[]};var a=t("VU/8")({name:"App"},r,!1,function(e){t("tyue")},null,null).exports,s=t("/ocq"),i={name:"HelloWorld",data:()=>({person:""}),methods:{add:function(e){const n=this.person;var t=new XMLHttpRequest;t.open("POST","https://us-central1-heneise-dev.cloudfunctions.net/addPerson",!0),t.setRequestHeader("Content-Type","application/json"),t.onreadystatechange=function(){},t.send(JSON.stringify({participant:n}))}}},p={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("Lunch Together!")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.person,expression:"person"}],attrs:{placeholder:"Name"},domProps:{value:e.person},on:{input:function(n){n.target.composing||(e.person=n.target.value)}}}),e._v(" "),t("button",{on:{click:e.add}},[e._v("Add me")])])},staticRenderFns:[]};var c=t("VU/8")(i,p,!1,function(e){t("Zk7n")},"data-v-1d626c39",null).exports;o.a.use(s.a);var u=new s.a({routes:[{path:"/",name:"HelloWorld",component:c}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:u,components:{App:a},template:"<App/>"})},Zk7n:function(e,n){},tyue:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.b0a274cc48ae08353d2a.js.map