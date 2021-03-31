(this["webpackJsonpglibetario-crudapp"]=this["webpackJsonpglibetario-crudapp"]||[]).push([[0],{22:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),i=c(16),r=c.n(i),s=(c(22),c(17)),d=c(8),j=c(29),o=c(30),l=c(1),x=function(e){return Object(l.jsxs)(j.a,{responsive:!0,hover:!0,id:"tableReservation",size:"sm",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Guest"}),Object(l.jsx)("th",{children:"Contact"}),Object(l.jsx)("th",{children:"Date"}),Object(l.jsx)("th",{children:"Time"}),Object(l.jsx)("th",{children:"Pax"}),Object(l.jsx)("th",{children:"Actions"})]})}),Object(l.jsx)("tbody",{children:e.reservations.length>0?e.reservations.map((function(t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t.guest}),Object(l.jsx)("td",{children:t.contact}),Object(l.jsx)("td",{children:t.date}),Object(l.jsx)("td",{children:t.time}),Object(l.jsx)("td",{children:t.pax}),Object(l.jsxs)("td",{children:[Object(l.jsx)(o.a,{id:"editButton",size:"sm",onClick:function(){e.editReservation(t)},children:"Edit"}),Object(l.jsx)(o.a,{id:"deleteButton",size:"sm",onClick:function(){e.deleteReservation(t.id)},children:"Delete"})]})]},t.id)})):Object(l.jsx)("tr",{children:Object(l.jsx)("td",{colSpan:6,children:Object(l.jsx)("h3",{children:"No Reservations..."})})})})]})},b=c(9),u=c(11),h=c(31),O=c(32),m=c(33),p=c(34),g=function(e){var t={id:null,guest:"",contact:"",date:"",time:"",pax:""},c=Object(a.useState)(t),n=Object(d.a)(c,2),i=n[0],r=n[1],s=function(e){var t=e.target,c=t.name,a=t.value;r(Object(u.a)(Object(u.a)({},i),{},Object(b.a)({},c,a)))},j=(new Date).toISOString().slice(0,10);return Object(l.jsxs)(h.a,{id:"crudAddForm",onSubmit:function(c){c.preventDefault(),i.guest&&i.contact&&i.date&&i.time&&i.pax&&(e.addReservation(i),r(t))},children:[Object(l.jsxs)(O.a,{children:[Object(l.jsx)(m.a,{for:"guest",children:"Guest"}),Object(l.jsx)(p.a,{type:"text",id:"guest",name:"guest",value:i.guest,onChange:s,placeholder:"Guest Name",maxLength:"40",required:!0})]}),Object(l.jsxs)(O.a,{children:[Object(l.jsx)(m.a,{for:"contact",children:"Contact"}),Object(l.jsx)(p.a,{type:"tel",id:"contact",name:"contact",value:i.contact,onChange:s,placeholder:"Contact Format: 1234567890",maxLength:"10",pattern:"[0-9]{10}",required:!0})]}),Object(l.jsxs)(O.a,{children:[Object(l.jsx)(m.a,{for:"date",children:"Date"}),Object(l.jsx)(p.a,{type:"date",id:"date",name:"date",value:i.date,onChange:s,placeholder:"Date Format: YYYY-MM-DD",min:j,required:!0})]}),Object(l.jsxs)(O.a,{children:[Object(l.jsx)(m.a,{for:"time",children:"Time"}),Object(l.jsx)(p.a,{type:"time",id:"time",name:"time",onChange:s,value:i.time,placeholder:"Time Format: 24-hour clock",min:"08:00",max:"20:00",required:!0})]}),Object(l.jsxs)(O.a,{children:[Object(l.jsx)(m.a,{for:"pax",children:"Pax"}),Object(l.jsx)(p.a,{type:"number",id:"pax",name:"pax",onChange:s,value:i.pax,placeholder:"Max of 5 Guests",min:"1",max:"5",maxLength:"1",required:!0})]}),Object(l.jsx)(O.a,{className:"crudAddFormDivAddButton",children:Object(l.jsx)(o.a,{id:"addButton",size:"sm",children:"Add"})})]})},v=function(e){var t=Object(a.useState)(e.currentReservation),c=Object(d.a)(t,2),n=c[0],i=c[1],r=function(e){var t=e.target,c=t.name,a=t.value;i(Object(u.a)(Object(u.a)({},n),{},Object(b.a)({},c,a)))};Object(a.useEffect)((function(){i(e.currentReservation)}),[e]);var s=(new Date).toISOString().slice(0,10);return Object(l.jsxs)(h.a,{id:"crudEditForm",onSubmit:function(t){t.preventDefault(),n.guest&&n.contact&&n.date&&n.time&&n.pax&&e.updatedReservation(n.id,n)},children:[Object(l.jsxs)(O.a,{children:[Object(l.jsx)(m.a,{for:"guest",children:"Guest"}),Object(l.jsx)(p.a,{type:"text",id:"guest",name:"guest",value:n.guest,onChange:r,placeholder:"Guest Name",maxLength:"40",required:!0})]}),Object(l.jsxs)(O.a,{children:[Object(l.jsx)(m.a,{for:"contact",children:"Contact"}),Object(l.jsx)(p.a,{type:"tel",id:"contact",name:"contact",value:n.contact,onChange:r,placeholder:"Contact Format: 1234567890",maxLength:"10",pattern:"[0-9]{10}",required:!0})]}),Object(l.jsxs)(O.a,{children:[Object(l.jsx)(m.a,{for:"date",children:"Date"}),Object(l.jsx)(p.a,{type:"date",id:"date",name:"date",value:n.date,onChange:r,placeholder:"Date Format: YYYY-MM-DD",min:s,required:!0})]}),Object(l.jsxs)(O.a,{children:[Object(l.jsx)(m.a,{for:"time",children:"Time"}),Object(l.jsx)(p.a,{type:"time",id:"time",name:"time",onChange:r,value:n.time,placeholder:"Time Format: 24-hour clock",min:"08:00",max:"20:00",required:!0})]}),Object(l.jsxs)(O.a,{children:[Object(l.jsx)(m.a,{for:"pax",children:"Pax"}),Object(l.jsx)(p.a,{type:"number",id:"pax",name:"pax",onChange:r,value:n.pax,placeholder:"Max of 5 Guests",min:"1",max:"5",maxLength:"1",required:!0})]}),Object(l.jsxs)(O.a,{className:"crudEditFormDivButtons",children:[Object(l.jsx)(o.a,{id:"updateButton",size:"sm",children:"Update"}),Object(l.jsx)(o.a,{id:"cancelButton",size:"sm",onClick:function(){return e.setEditing(!1)},children:"Cancel"})]})]})},f=c(35),D=c(36),R=c(37),C=c(38),S=c(39),E=c(40),y=[{id:1,guest:"Doe",contact:"1234567890",date:"2021-05-01",time:"15:00",pax:"3"},{id:2,guest:"Jane",contact:"3210987654",date:"2021-05-02",time:"09:00",pax:"4"},{id:3,guest:"John",contact:"4560123789",date:"2021-05-04",time:"10:00",pax:"1"},{id:4,guest:"Dean",contact:"9870654321",date:"2021-05-05",time:"16:30",pax:"2"}],F=function(){var e=new Date,t=Object(a.useState)(y),c=Object(d.a)(t,2),n=c[0],i=c[1],r=Object(a.useState)(!1),j=Object(d.a)(r,2),o=j[0],b=j[1],u=Object(a.useState)({id:null,guest:"",contact:"",date:"",time:"",pax:""}),h=Object(d.a)(u,2),O=h[0],m=h[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(f.a,{color:"faded",children:[Object(l.jsx)(D.a,{children:Object(l.jsx)("h1",{children:"Salt n' Paper Bakery"})}),Object(l.jsx)(R.a,{children:Object(l.jsx)("h2",{children:e.toDateString()})})]}),Object(l.jsx)(C.a,{children:Object(l.jsxs)(S.a,{id:"reservations",children:[Object(l.jsx)(E.a,{xs:"12",sm:"4",children:Object(l.jsx)("div",{className:"pageReservation",children:o?Object(l.jsxs)("div",{className:"pagReservationEdit",children:[Object(l.jsx)("br",{}),Object(l.jsx)("h3",{children:"EDIT RESERVATION"}),Object(l.jsx)(v,{setEditing:b,currentReservation:O,updatedReservation:function(e,t){b(!1),i(n.map((function(c){return c.id===e?t:c})))}})]}):Object(l.jsxs)("div",{className:"pageReservationAdd",children:[Object(l.jsx)("br",{}),Object(l.jsx)("h3",{children:"ADD RESERVATION"}),Object(l.jsx)(g,{addReservation:function(e){e.id=n.length+1,i([].concat(Object(s.a)(n),[e]))}})]})})}),Object(l.jsx)(E.a,{xs:"12",sm:"8",children:Object(l.jsxs)("div",{className:"pageReservationView",children:[Object(l.jsx)("br",{}),Object(l.jsx)("h3",{children:"VIEW RESERVATION"}),Object(l.jsx)("br",{}),Object(l.jsx)(x,{reservations:n,editReservation:function(e){b(!0),m({id:e.id,guest:e.guest,contact:e.contact,date:e.date,time:e.time,pax:e.pax})},deleteReservation:function(e){b(!1),i(n.filter((function(t){return t.id!==e})))}})]})})]})})]})},N=(c(26),function(){return Object(l.jsx)(F,{})});c(27);r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(N,{})})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.ddfe5783.chunk.js.map