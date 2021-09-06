(this["webpackJsonpcar-adverts"]=this["webpackJsonpcar-adverts"]||[]).push([[0],{67:function(e,n,t){"use strict";t.r(n);var r,a,c,s,i,o=t(1),l=t.n(o),d=t(34),u=t.n(d),j=t(3),m=t(14),b=t(2),p=t(5),x=t.n(p),h=t(12),f=t(10),O=t(11),g=O.b.main(r||(r=Object(f.a)(["\n  /* Main */\n  /* index.html */\n  .container section:first-child {\n    padding: 40px 20px;\n  }\n\n  .container section h1 {\n    font-size: 1.8em;\n  }\n\n  .container section #latest--cars-container {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .container section #latest--cars-container .car {\n    width: calc(100% / 2 - 15px);\n\n    margin: 0 7.5px;\n    padding: 10px;\n  }\n\n  .container section #latest--cars-container .car a {\n    margin-top: 5px;\n  }\n\n  .container section #latest--cars-container .car h4 {\n    margin-bottom: 10px;\n\n    font-size: 1.4em;\n\n    border-bottom: 1px solid #ededed;\n  }\n\n  .container section #latest--cars-container .car p {\n    padding-bottom: 5px;\n  }\n\n  .container section #latest--cars-container .car i {\n    position: relative;\n    top: 1px;\n  }\n\n  /* Tablter */\n  @media screen and (min-width: 769px) {\n    .container section #latest--cars-container .car {\n      width: calc(100% / 4 - 15px);\n    }\n  }\n"]))),v=t(13),y=t.n(v),N=t(0),w=function(){var e=Object(o.useState)([]),n=Object(j.a)(e,2),t=n[0],r=n[1],a=function(){var e=Object(h.a)(x.a.mark((function e(){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("http://localhost:5000/cars/");case 2:n=e.sent,r(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){t.length<1&&a()}),[t]);return Object(N.jsx)(g,{children:Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("section",{children:Object(N.jsx)("h1",{className:"text-center headline",children:"Latest cars for sale"})}),Object(N.jsx)("section",{children:t?Object(N.jsx)("div",{id:"latest--cars-container",children:t.map((function(e){return e.cars.map((function(n){return Object(N.jsxs)("div",{className:"car card-shadow mt-1",children:[Object(N.jsxs)("h4",{children:[n.make," ",n.model]}),Object(N.jsxs)("p",{children:[Object(N.jsx)("strong",{children:"Year:"})," ",n.year]}),Object(N.jsxs)("p",{children:[Object(N.jsx)("strong",{children:"Price:"})," ",n.price.toFixed(2),"\u20ac"]}),Object(N.jsxs)("p",{children:[Object(N.jsx)("strong",{children:"Seller:"})," ",e.name," ",e.surname]}),Object(N.jsxs)("p",{children:[Object(N.jsx)("strong",{children:"Contact email:"})," ",e.email]})]},n._id)}))}))}):Object(N.jsx)("p",{children:"Loading..."})})]})})},S=O.b.header(a||(a=Object(f.a)(["\n  /* Mobile */\n  /* Header */\n  background-color: var(--primary-color);\n\n  .container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .container div {\n    color: var(--text-light-color);\n    font-size: 1.3rem;\n    font-weight: bold;\n    text-transform: uppercase;\n  }\n\n  .container nav ul {\n    display: flex;\n    list-style: none;\n    margin: 0;\n  }\n\n  .container nav ul li {\n    padding: 15px;\n  }\n\n  .container nav ul li a {\n    color: var(--text-light-color);\n    text-decoration: none;\n  }\n\n  .container nav ul li:hover {\n    background: white;\n    color: var(--primary-color);\n  }\n\n  .container nav ul li:hover a {\n    color: var(--primary-color);\n  }\n"]))),k=t(20),C=function(){var e=Object(o.useContext)(L),n=e.state,t=e.dispatch;return Object(o.useEffect)((function(){if(localStorage.getItem("user"))return t({type:"login",payload:localStorage.getItem("user")})}),[t]),Object(N.jsx)(S,{children:Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("div",{children:"Car Adverts"}),Object(N.jsx)("nav",{children:Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{children:Object(N.jsx)(m.b,{to:"/",children:"Home"})}),n.user?Object(N.jsx)("li",{children:Object(N.jsxs)(m.b,{to:"/myaccount",children:["My Account ",Object(N.jsx)(k.a,{size:"15"})]})}):Object(N.jsx)("li",{children:Object(N.jsx)(m.b,{to:"/login",children:"Sign In / Sign Up"})})]})})]})})},P=Object(O.a)(c||(c=Object(f.a)(["\n// Resets\n*,*::after,*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\ninput,\nbutton,\nspan,\ndiv,\na {\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n\n/* Variables */\n\n:root {\n  /* Colors */\n  --primary-color: rgb(95, 185, 43);\n  --secondary-color: rgb(128, 226, 80);\n\n  --text-dark-color: rgb(0, 0, 0);\n  --text-light-color: rgb(255, 255, 255);\n}\n\nimg {\n  width: 100%;\n}\n\n/* Utilities */\n.mt-1 {\n  margin-top: 10px!important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n/* layout */\n.container {\n  max-width: 1024px;\n\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n/* components */\n/* --- button --- */\n.btn-primary {\n  padding: 5px 10px;\n\n  border: 0;\n  border-radius: 3px;\n  box-shadow: 0 3px 5px -2px rgba(10, 10, 10, 0.5);\n\n  display: inline-block;\n\n  outline: none;\n\n  font-size: 1em;\n  text-decoration: none;\n  background-color: var(--primary-color);\n  color: var(--text-light-color);\n\n  cursor: pointer;\n}\n\n.btn-primary:hover {\n  opacity: 0.8;\n}\n\n.btn-primary-submit {\n  width: max-content;\n  color: var(--text-light-color);\n}\n\n/* --- card --- */\n\n.card-shadow {\n  box-shadow: 0 8px 16px -2px rgba(10, 10, 10, 0.1),\n    0 0 0 1px rgba(0, 0, 0, 0.02);\n}\n/* form */\n.form {\n  margin-top: 15px;\n}\n\n.form-control {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.form-label {\n  font-size: 1.2em;\n}\n\n.form-input {\n  padding: 5px 7px;\n  font-size: 1em;\n  margin-bottom: 15px;\n\n  color: #666;\n}\n\n.form-message {\n  margin-top: 20px;\n  background-color: #f8f8f8;\n\n  border-radius: 3px 0px 0px 3px;\n  padding: 5px 7px;\n}\n\n.form-message-danger {\n  border-left: 5px solid red;\n}\n\n.form-message-success {\n  border-left: 5px solid var(--primary-color);\n}\n\n.hidden {\n  display: none;\n}\n\n.headline {\n  margin: 40px 20px;\n  font-size: 1.8em;\n}\n\n\n"]))),F=t(15),E=O.b.main(s||(s=Object(f.a)(["\n  /* myaccount.html */\n  .container #user-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .container #user-info--container {\n    width: fit-content;\n\n    padding: 20px 60px;\n  }\n\n  .container #user-info--container h3 {\n    padding: 7px 0;\n  }\n\n  .container #user-cars--container {\n    margin-top: 35px;\n  }\n\n  .container #user-cars--container #user-cars--list {\n    width: 100%;\n  }\n\n  .container #user-cars--container #user-cars--list table {\n    width: 100%;\n    border-collapse: collapse;\n  }\n\n  .container #user-cars--container #user-cars--list table thead th {\n    background-color: var(--primary-color);\n    border-bottom: 1px solid var(--primary-color);\n    padding: 7px 0;\n    color: var(--text-light-color);\n  }\n\n  .container #user-cars--container #user-cars--list table tbody td {\n    padding: 8px 0;\n  }\n\n  .container\n    #user-cars--container\n    #user-cars--list\n    table\n    tbody\n    tr:nth-child(even) {\n    background-color: #f8f8f8;\n  }\n\n  .container #user-cars--container #user-cars--add-new {\n    padding: 30px;\n\n    margin-top: 55px;\n  }\n\n  .container #user-cars--container #user-cars--add-new form {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n  }\n\n  /* Tablter */\n  @media screen and (min-width: 769px) {\n    /* main */\n    /* myaccount.html */\n    .container #user-info {\n      flex-direction: row-reverse;\n      align-items: flex-start;\n      flex-wrap: wrap;\n      justify-content: space-between;\n    }\n\n    .container #user-info--container {\n      width: 25%;\n    }\n\n    .container #user-cars--container {\n      margin-top: 0;\n\n      width: 70%;\n    }\n  }\n"]))),q=function(e){return Object(N.jsx)("form",Object(F.a)({},e))},I=function(){var e=Object(o.useState)([]),n=Object(j.a)(e,2),t=n[0],r=n[1],a=Object(o.useState)(""),c=Object(j.a)(a,2),s=c[0],i=c[1],l=Object(o.useState)(""),d=Object(j.a)(l,2),u=d[0],m=d[1],p=Object(o.useState)(""),f=Object(j.a)(p,2),O=f[0],g=f[1],v=Object(o.useState)(""),w=Object(j.a)(v,2),S=w[0],C=w[1],P=Object(o.useState)(""),I=Object(j.a)(P,2),z=I[0],M=I[1],R=Object(b.f)(),T=Object(o.useContext)(L).dispatch,_=Object(o.useRef)();Object(o.useEffect)((function(){var e=!0;return Object(h.a)(x.a.mark((function n(){var t,a;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=localStorage.getItem("user")||"",n.next=4,y.a.get("http://localhost:5000/user/"+t);case 4:a=n.sent,e&&r([a.data]),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))(),function(){e=!1}}),[t]);var D=function(){localStorage.removeItem("user"),T({type:"logout"}),R.push("/")},H=function(){var e=Object(h.a)(x.a.mark((function e(n){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),s&&u&&O&&S){e.next=3;break}return e.abrupt("return",M("Please fill out the form"));case 3:return r={make:s,model:u,year:+O,price:+S},e.prev=4,e.next=7,y.a.put("http://localhost:5000/cars/add/".concat(t[0]._id),Object(F.a)({},r));case 7:i(""),m(""),g(""),C(""),M("Car added"),_.current.classList.add("form-message","form-message-success"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0.data.response);case 18:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(n){return e.apply(this,arguments)}}(),Y=function(){var e=Object(h.a)(x.a.mark((function e(n,t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.delete("http://localhost:5000/cars/delete/".concat(t));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n,t){return e.apply(this,arguments)}}();return Object(N.jsx)(E,{children:Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("section",{id:"greeting",children:Object(N.jsxs)("h1",{className:"text-center headline",children:["Hello, ",t.map((function(e){return e.name}))]})}),Object(N.jsxs)("section",{id:"user-info",children:[Object(N.jsx)("div",{id:"user-info--container",className:"card-shadow text-center",children:(null===t||void 0===t?void 0:t.length)>1?Object(N.jsx)("p",{children:"Loading"}):Object(N.jsx)(N.Fragment,{children:null===t||void 0===t?void 0:t.map((function(e){return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{children:Object(N.jsx)(k.a,{size:"30"})}),Object(N.jsxs)("h3",{children:[e.name," ",e.surname]}),Object(N.jsx)("p",{children:e.email}),Object(N.jsxs)("p",{children:["Cars for sale: ",e.cars.length]}),Object(N.jsx)("button",{className:"btn-primary mt-1",id:"logout",onClick:D,children:"Log out"})]},e._id)}))})}),Object(N.jsxs)("div",{id:"user-cars--container",children:[Object(N.jsx)("div",{id:"user-cars--list",children:function(){var e;return(null===(e=t[0])||void 0===e?void 0:e.cars.length)<1?Object(N.jsx)("p",{className:"form-message form-message-danger",children:"You don't have any cars for sale"}):Object(N.jsxs)("table",{className:"text-center",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"Make"}),Object(N.jsx)("th",{children:"Model"}),Object(N.jsx)("th",{children:"Year"}),Object(N.jsx)("th",{children:"Price"}),Object(N.jsx)("th",{})]})}),Object(N.jsx)("tbody",{children:t.map((function(e){return e.cars.map((function(e){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:e.make}),Object(N.jsx)("td",{children:e.model}),Object(N.jsx)("td",{children:e.year}),Object(N.jsxs)("td",{children:[e.price,"\u20ac"]}),Object(N.jsx)("td",{children:Object(N.jsx)("button",{className:"btn-primary delete-btn",onClick:function(n){return Y(n,e._id)},children:"Delete"})})]},e._id)}))}))})]})}()}),Object(N.jsxs)("div",{id:"user-cars--add-new",className:"card-shadow",children:[Object(N.jsx)("h6",{className:"text-center",children:"Got cars for sale?"}),Object(N.jsx)("h2",{className:"text-center",children:"Enter car information"}),Object(N.jsxs)(q,{className:"form",id:"car-form",onSubmit:H,children:[Object(N.jsxs)("div",{className:"form-control",children:[Object(N.jsx)("label",{className:"form-label",htmlFor:"car-make",children:"Make"}),Object(N.jsx)("input",{className:"form-input",type:"text",name:"car-make",required:!0,value:s,onChange:function(e){return i(e.target.value)}})]}),Object(N.jsxs)("div",{className:"form-control",children:[Object(N.jsx)("label",{className:"form-label",htmlFor:"car-model",children:"Model"}),Object(N.jsx)("input",{className:"form-input",type:"text",name:"car-model",required:!0,value:u,onChange:function(e){return m(e.target.value)}})]}),Object(N.jsxs)("div",{className:"form-control",children:[Object(N.jsx)("label",{className:"form-label",htmlFor:"car-year",children:"Year"}),Object(N.jsx)("input",{className:"form-input",type:"text",name:"car-year",id:"car-year",pattern:"([0-9]+)",title:"Please enter numbers",required:!0,value:O,onChange:function(e){return g(e.target.value)}})]}),Object(N.jsxs)("div",{className:"form-control",children:[Object(N.jsx)("label",{className:"form-label",htmlFor:"car-price",children:"Price"}),Object(N.jsx)("input",{className:"form-input",type:"text",name:"car-price",id:"car-price",pattern:"([0-9]+)",title:"Please enter numbers",required:!0,value:S,onChange:function(e){return C(e.target.value)}})]}),Object(N.jsx)("div",{className:"form-control",children:Object(N.jsx)("input",{type:"submit",value:"Add car",className:"btn-primary btn-primary-submit"})})]}),Object(N.jsx)("p",{id:"car-input--message",ref:_,children:z})]})]})]})]})})},z=function(){var e=Object(b.f)();return Object(o.useEffect)((function(){if(!localStorage.getItem("user"))return e.push("/login")}),[]),Object(N.jsx)(I,{})},M=O.b.main(i||(i=Object(f.a)(["\n  /* Mobile */\n  /* login.html */\n  .container #signin,\n  .container #signup {\n    padding: 30px;\n  }\n\n  .container section h2 span {\n    font-weight: 400;\n  }\n\n  .container #signup {\n    margin-top: 35px;\n  }\n\n  /* Tablter */\n  @media screen and (min-width: 1024px) {\n    /*  */\n    /* login.html */\n    .container .forms-container {\n      display: flex;\n    }\n    .container #signin,\n    .container #signup {\n      width: calc(100% / 2 - 30px);\n      margin: 0 10px;\n    }\n  }\n"]))),R=function(){var e=Object(o.useState)(""),n=Object(j.a)(e,2),t=n[0],r=n[1],a=Object(o.useState)(""),c=Object(j.a)(a,2),s=c[0],i=c[1],l=Object(o.useState)(""),d=Object(j.a)(l,2),u=d[0],m=d[1],p=Object(o.useState)(""),f=Object(j.a)(p,2),O=f[0],g=f[1],v=Object(o.useState)(""),w=Object(j.a)(v,2),S=w[0],k=w[1],C=Object(o.useState)(""),P=Object(j.a)(C,2),E=P[0],I=P[1],z=Object(o.useState)(""),R=Object(j.a)(z,2),T=R[0],_=R[1],D=Object(o.useState)(""),H=Object(j.a)(D,2),Y=H[0],A=H[1],B=Object(o.useState)(""),G=Object(j.a)(B,2),J=G[0],U=G[1],V=Object(o.useContext)(L).dispatch,K=Object(b.f)(),Q=Object(o.useRef)(),W=Object(o.useRef)(),X=Object(o.useRef)(),Z=function(){var e=Object(h.a)(x.a.mark((function e(n){var a,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a={email:t,password:s},e.prev=2,e.next=5,y.a.post("http://localhost:5000/signin/",Object(F.a)({},a));case 5:c=e.sent,localStorage.setItem("user",c.data.user),V({type:"login",payload:localStorage.getItem("user")}),K.push("/myaccount"),e.next=18;break;case 11:e.prev=11,e.t0=e.catch(2),r(""),i(""),m(e.t0.response.data.message),Q.current.focus(),document.getElementById("signin-message").classList.add("form-message","form-message-danger");case 18:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(n){return e.apply(this,arguments)}}(),$=function(){var e=Object(h.a)(x.a.mark((function e(n){var t,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),T===Y){e.next=7;break}return U("Passwords do not match"),_(""),A(""),W.current.focus(),e.abrupt("return");case 7:return t={name:O,surname:S,email:E,password:T},e.prev=8,e.next=11,y.a.post("http://localhost:5000/signup/",Object(F.a)({},t));case 11:"fail"===(r=e.sent).data.status&&(U(r.data.message),W.current.focus()),"success"===r.data.status&&(V({type:"register",payload:r.data.user.id}),localStorage.setItem("user",r.data.user.id),K.push("/myaccount")),e.next=23;break;case 16:e.prev=16,e.t0=e.catch(8),U(e.t0.data.message),I(""),_(""),A(""),X.current.focus();case 23:case"end":return e.stop()}}),e,null,[[8,16]])})));return function(n){return e.apply(this,arguments)}}();return Object(N.jsx)(M,{children:Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("section",{children:Object(N.jsx)("h1",{className:"text-center headline",children:"Sign up/ Sign in"})}),Object(N.jsxs)("div",{className:"forms-container",children:[Object(N.jsxs)("section",{id:"signin",className:"card-shadow",children:[Object(N.jsxs)("h2",{children:[Object(N.jsx)("span",{children:"Have an account?"})," Sign in!"]}),Object(N.jsxs)(q,{className:"form",id:"signin-form",onSubmit:Z,children:[Object(N.jsxs)("div",{className:"form-control",children:[Object(N.jsx)("label",{className:"form-label",htmlFor:"loginEmail",children:"Email"}),Object(N.jsx)("input",{className:"form-input",type:"email",name:"loginEmail",value:t,onChange:function(e){return r(e.target.value)},required:!0,ref:Q})]}),Object(N.jsxs)("div",{className:"form-control",children:[Object(N.jsx)("label",{className:"form-label",htmlFor:"loginPass",children:"Password"}),Object(N.jsx)("input",{className:"form-input",type:"password",name:"loginPass",value:s,onChange:function(e){return i(e.target.value)},required:!0})]}),Object(N.jsx)("div",{className:"form-control",children:Object(N.jsx)("input",{type:"submit",value:"Sign in",className:"btn-primary btn-primary-submit"})})]}),Object(N.jsx)("p",{id:"signin-message",children:u})]}),Object(N.jsxs)("section",{id:"signup",className:"card-shadow",children:[Object(N.jsxs)("h2",{children:[Object(N.jsx)("span",{children:"New user?"})," Sign up!"]}),Object(N.jsxs)(q,{className:"form",id:"signup-form",onSubmit:$,children:[Object(N.jsxs)("div",{className:"form-control",children:[Object(N.jsx)("label",{className:"form-label",htmlFor:"registerName",children:"Name"}),Object(N.jsx)("input",{className:"form-input",type:"text",name:"registerName",required:!0,value:O,onChange:function(e){return g(e.target.value)}})]}),Object(N.jsxs)("div",{className:"form-control",children:[Object(N.jsx)("label",{className:"form-label",htmlFor:"registerSurname",children:"Surname"}),Object(N.jsx)("input",{className:"form-input",type:"text",name:"registerSurname",required:!0,value:S,onChange:function(e){return k(e.target.value)}})]}),Object(N.jsxs)("div",{className:"form-control",children:[Object(N.jsx)("label",{className:"form-label",htmlFor:"registerEmail",children:"Email"}),Object(N.jsx)("input",{className:"form-input",type:"email",name:"registerEmail",required:!0,value:E,onChange:function(e){return I(e.target.value)},ref:X})]}),Object(N.jsxs)("div",{className:"form-control",children:[Object(N.jsx)("label",{className:"form-label",htmlFor:"registerPass",children:"Password"}),Object(N.jsx)("input",{className:"form-input",type:"password",name:"registerPass",required:!0,value:T,onChange:function(e){return _(e.target.value)},ref:W})]}),Object(N.jsxs)("div",{className:"form-control",children:[Object(N.jsx)("label",{className:"form-label",htmlFor:"registerConfirmPass",children:"Confirm password"}),Object(N.jsx)("input",{className:"form-input",type:"password",name:"registerConfirmPass",required:!0,value:Y,onChange:function(e){return A(e.target.value)}})]}),Object(N.jsx)("div",{className:"form-control",children:Object(N.jsx)("input",{type:"submit",value:"Sign up",className:"btn-primary-submit btn-primary"})})]}),Object(N.jsx)("p",{id:"signup-message",children:J})]})]})]})})},L=l.a.createContext(),T={user:""},_=function(e,n){switch(n.type){case"login":return{user:n.payload};case"logout":return{user:""};case"register":return{user:n.payload};default:return e}};var D=function(){var e=Object(o.useReducer)(_,T),n=Object(j.a)(e,2),t=n[0],r=n[1];return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(P,{}),Object(N.jsx)(L.Provider,{value:{state:t,dispatch:r},children:Object(N.jsxs)(m.a,{children:[Object(N.jsx)(C,{}),Object(N.jsxs)(b.c,{children:[Object(N.jsx)(b.a,{exact:!0,path:"/",component:w}),Object(N.jsx)(b.a,{path:"/login",component:R}),Object(N.jsx)(b.a,{path:"/myaccount",component:z})]})]})})]})};u.a.render(Object(N.jsx)(l.a.StrictMode,{children:Object(N.jsx)(D,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.f5fed48b.chunk.js.map