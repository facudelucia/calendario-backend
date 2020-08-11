(this["webpackJsonpcalendario-mern"]=this["webpackJsonpcalendario-mern"]||[]).push([[0],{114:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(35),s=a(9),u=a(13),i=(a(72),a(24)),m=a(4),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(u.a)(t,2),r=a[0],c=a[1],o=function(){c(e)},l=function(e){var t=e.target;c(Object(m.a)(Object(m.a)({},r),{},Object(i.a)({},t.name,t.value)))};return[r,l,o]},f=a(8),d=a(11),v=a.n(d),b=a(20),E="https://calendar-mern-facu.herokuapp.com/api",h=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(E,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},g=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(E,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===a?fetch(n,{method:a,headers:{"x-token":r}}):fetch(n,{method:a,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},O="[ui] Open modal",j="[ui] Close modal",y="[event] Logout",N="[event] Add new",w="[event] Set active",k="[event] Clear Active Event",x="[event] Event update",S="[event] Event deleted",C="[event] Event loaded",D="[auth] Finish checking login state",R="[auth] Login",T="[auth] Logout",I=a(17),A=a.n(I),L=function(){return{type:D}},_=function(e){return{type:R,payload:e}},G=function(){return{type:T}},P=function(){var e=Object(f.b)(),t=p({Lemail:"",Lpassword:""}),a=Object(u.a)(t,2),n=a[0],c=a[1],o=n.Lemail,l=n.Lpassword,s=p({Rname:"",Remail:"",Rpassword:"",Rconfirm:""}),i=Object(u.a)(s,2),m=i[0],d=i[1],E=m.Rname,g=m.Remail,O=m.Rpassword,j=m.Rconfirm;return r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 login-form-1"},r.a.createElement("h3",null,"Ingreso"),r.a.createElement("form",{onSubmit:function(t){var a,n;t.preventDefault(),e((a=o,n=l,function(){var e=Object(b.a)(v.a.mark((function e(t){var r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("auth",{email:a,password:n},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(_({uid:c.uid,name:c.name}))):A.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Correo",value:o,name:"Lemail",onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",value:l,name:"Lpassword",onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Login"})))),r.a.createElement("div",{className:"col-md-6 login-form-2"},r.a.createElement("h3",null,"Registro"),r.a.createElement("form",{onSubmit:function(t){var a,n,r;(t.preventDefault(),O===j)?e((a=g,n=O,r=E,function(){var e=Object(b.a)(v.a.mark((function e(t){var c,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("auth/new",{email:a,password:n,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(_({uid:o.uid,name:o.name}))):A.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):A.a.fire("Error","passwords must match","error")}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre",value:E,name:"Rname",onChange:d})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Correo",value:g,name:"Remail",onChange:d})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",value:O,name:"Rpassword",onChange:d})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",value:j,name:"Rconfirm",onChange:d})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"}))))))},F=a(15),V=a.n(F),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{end:V()(e.end).toDate(),start:V()(e.start).toDate()})}))},J=function(e){return{type:N,payload:e}},M=function(){return{type:k}},U=function(e){return{type:x,payload:e}},z=function(){return{type:S}},X=function(e){return{type:C,payload:e}},q=function(){var e=Object(f.c)((function(e){return e.auth})).name,t=Object(f.b)();return r.a.createElement("div",{className:"navbar navbar-dark bg-dark mb-4"},r.a.createElement("span",{className:"navbar-brand"},e),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){t((function(e){localStorage.clear(),e(G())})),t({type:y})}},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),r.a.createElement("span",null," Salir")))},B=a(53),W=(a(78),{allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}}),K=(a(79),function(e){var t=e.event,a=t.title,n=t.user;return r.a.createElement("div",null,r.a.createElement("strong",null,a),r.a.createElement("span",null," -",n.name))}),Q=a(48),Y=a.n(Q),Z=a(49),$=a.n(Z),ee=function(){return{type:O}},te={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};Y.a.setAppElement("#root");var ae=V()().minutes(0).seconds(0).add(1,"hours"),ne=ae.clone().add(1,"hours"),re={title:"",notes:"",start:ae.toDate(),end:ne.toDate()},ce=function(){var e=Object(n.useState)(ae.toDate()),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(ne.toDate()),l=Object(u.a)(o,2),s=l[0],p=l[1],d=Object(n.useState)(!0),E=Object(u.a)(d,2),h=E[0],O=E[1],y=Object(n.useState)(re),N=Object(u.a)(y,2),w=N[0],k=N[1],x=w.title,S=w.notes,C=w.start,D=w.end,R=Object(f.c)((function(e){return e.ui})),T=Object(f.c)((function(e){return e.calendar})).activeEvent,I=R.modalOpen,L=Object(f.b)();Object(n.useEffect)((function(){k(T||re)}),[T,k]);var _=function(){L(M()),L({type:j}),k(re)},G=function(e){k(Object(m.a)(Object(m.a)({},w),{},Object(i.a)({},e.target.name,e.target.value)))};return r.a.createElement(Y.a,{isOpen:I,onRequestClose:_,style:te,className:"modal",overlayClassName:"modal-fondo",closeTimeoutMS:200},r.a.createElement("h1",null,T?"Editar evento":"Nuevo evento"),r.a.createElement("hr",null),r.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault();var t,a=V()(C),n=V()(D);return a.isSameOrAfter(n)?A.a.fire("Error","La fecha de finalizacion debe ser mayor a la fecha de inicio","error"):""===x.trim()||""===S.trim()?O(!1):(L(T?(t=w,function(){var e=Object(b.a)(v.a.mark((function e(a){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g("events/".concat(t.id),t,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?a(U(t)):A.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(b.a)(v.a.mark((function t(a,n){var r,c,o,l,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,g("events",e,"POST");case 4:return l=t.sent,t.next=7,l.json();case 7:(s=t.sent).ok&&(e.id=s.event.id,e.user={_id:c,name:o},a(J(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}()}(w)),O(!0),void _())}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora inicio"),r.a.createElement($.a,{onChange:function(e){c(e),k(Object(m.a)(Object(m.a)({},w),{},{start:e}))},value:a,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora fin"),r.a.createElement($.a,{onChange:function(e){p(e),k(Object(m.a)(Object(m.a)({},w),{},{end:e}))},value:s,minDate:a,className:"form-control"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Titulo y notas"),r.a.createElement("input",{type:"text",className:"form-control ".concat(!h&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:x,onChange:G}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Una descripci\xf3n corta")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:S,onChange:G}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Informaci\xf3n adicional")),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block"},r.a.createElement("i",{className:"far fa-save"}),r.a.createElement("span",null," Guardar"))))},oe=function(){var e=Object(f.b)();return r.a.createElement("button",{onClick:function(){e(ee())},className:"btn btn-primary fab"},r.a.createElement("i",{className:"fas fa-plus"}))},le=function(){var e=Object(f.b)();return r.a.createElement("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(b.a)(v.a.mark((function e(t,a){var n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().calendar.activeEvent.id,e.prev=1,e.next=4,g("events/".concat(n),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(z()):A.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"fas fa-trash"}),r.a.createElement("span",null," borrar evento "))};V.a.locale("es");var se=Object(B.b)(V.a),ue=function(){var e=Object(n.useState)(localStorage.getItem("lastView")||"month"),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(f.c)((function(e){return e.calendar})),l=o.events,s=o.activeEvent,i=Object(f.c)((function(e){return e.auth})).uid,m=Object(f.b)();return Object(n.useEffect)((function(){m(function(){var e=Object(b.a)(v.a.mark((function e(t,a){var n,r,c,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=a().auth).uid,n.name,e.prev=1,e.next=4,g("events");case 4:return r=e.sent,e.next=7,r.json();case 7:c=e.sent,o=H(c.events),t(X(o)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,a){return e.apply(this,arguments)}}())}),[m]),r.a.createElement("div",{className:"calendar-screen"},r.a.createElement(q,null),r.a.createElement(B.a,{localizer:se,events:l,startAccessor:"start",endAccessor:"end",style:{height:500},messages:W,eventPropGetter:function(e,t,a,n){return{style:{backgroundColor:i===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},components:{event:K},onDoubleClickEvent:function(){m(ee())},onSelectEvent:function(e){m({type:w,payload:e})},onView:function(e){c(e),localStorage.setItem("lastView",e)},view:a,onSelectSlot:function(){m(M())},selectable:!0}),r.a.createElement(oe,null),s&&r.a.createElement(le,null),r.a.createElement(ce,null))},ie=a(39),me=function(e){var t=e.isAuth,a=e.component,n=Object(ie.a)(e,["isAuth","component"]);return r.a.createElement(s.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(s.a,{to:"/"}):r.a.createElement(a,e)}}))},pe=function(e){var t=e.isAuth,a=e.component,n=Object(ie.a)(e,["isAuth","component"]);return r.a.createElement(s.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(s.a,{to:"/login"})}}))},fe=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.auth})),a=t.checking,c=t.uid;return Object(n.useEffect)((function(){e(function(){var e=Object(b.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("auth/renew");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("token",n.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(_({uid:n.uid,name:n.name}))):t(L());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),a?r.a.createElement("h5",null,"Wait..."):r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(pe,{exact:!0,path:"/",isAuth:!!c,component:ue}),r.a.createElement(me,{exact:!0,path:"/login",isAuth:!!c,component:P}),r.a.createElement(s.a,{to:"/"}))))},de=a(21),ve={modalOpen:!1},be=a(54),Ee={events:[],activeEvent:null},he={checking:!0},ge=Object(de.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(m.a)(Object(m.a)({},e),{},{modalOpen:!0});case j:return Object(m.a)(Object(m.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(m.a)(Object(m.a)({},e),{},{activeEvent:t.payload});case N:return Object(m.a)(Object(m.a)({},e),{},{events:[].concat(Object(be.a)(e.events),[t.payload])});case k:return Object(m.a)(Object(m.a)({},e),{},{activeEvent:null});case x:return Object(m.a)(Object(m.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case S:return Object(m.a)(Object(m.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case C:return Object(m.a)(Object(m.a)({},e),{},{events:Object(be.a)(t.payload)});case y:return Object(m.a)({},Ee);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(m.a)(Object(m.a)({},e),{},{checking:!1},t.payload);case D:return Object(m.a)(Object(m.a)({},e),{},{checking:!1});case T:return{checking:!1};default:return e}}}),Oe=a(66),je="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de.d,ye=Object(de.e)(ge,je(Object(de.a)(Oe.a))),Ne=function(){return r.a.createElement(f.a,{store:ye},r.a.createElement(fe,null))};a(114);o.a.render(r.a.createElement(Ne,null),document.getElementById("root"))},67:function(e,t,a){e.exports=a(116)},72:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.bc58a030.chunk.js.map