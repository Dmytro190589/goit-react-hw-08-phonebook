"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[165],{165:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var a=n(439),r=n(791),s=n(434),c=n(634),i={},o=function(e){return e.contacts.items},l=function(e){return e.filter},u=function(e){return e.contacts.isLoading},d=function(e){return e.contacts.error},m=n(329);function f(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],l=t[1],u=(0,r.useState)(""),d=(0,a.Z)(u,2),f=d[0],h=d[1],p=(0,s.v9)(o),x=(0,s.I0)(),b=function(e){var t=e.target.name,n=e.target.value;switch(t){case"name":l(n);break;case"number":h(n);break;default:return}};return(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p.find((function(e){return e.name===n}))?alert("".concat(n," is already in contacts")):x((0,c.el)({name:n,number:f})),l(""),h("")},className:i.form,children:[(0,m.jsxs)("label",{className:i.label,children:["Name:",(0,m.jsx)("input",{className:i.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:b})]}),(0,m.jsxs)("label",{className:i.label,children:["Number:",(0,m.jsx)("input",{className:i.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:f,onChange:b})]}),(0,m.jsx)("button",{className:i.btn,type:"submit",children:"Add contact"})]})}var h=n(833),p=function(){var e=(0,s.I0)();return(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{children:"Find contacts by name"}),(0,m.jsx)("input",{type:"text",onChange:function(t){return e((0,h.T)(t.currentTarget.value.toLowerCase()))}})]})},x="Contacts_form__j2kx+",b=n(16),j="ContactList_list__3daws",v="ContactList_btn__QQhmE";function C(e){var t=e.contacts,n=(0,s.I0)();return(0,m.jsx)("ul",{children:t.map((function(e){return(0,m.jsxs)("li",{className:j,id:e.id,children:[(0,m.jsxs)("p",{children:[e.name," : ",e.number]}),(0,m.jsx)("button",{className:v,onClick:function(){return n((0,c.GK)(e.id))},children:"Delete"})]},e.id)}))})}var _={position:"fixed",top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)"};function N(){var e=(0,s.I0)();(0,r.useEffect)((function(){e((0,c.jb)())}),[e]);var t=(0,s.v9)(o),n=(0,s.v9)(l),a=(0,s.v9)(u),i=(0,s.v9)(d),h=n?t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):t;return(0,m.jsxs)("div",{className:x,children:[(0,m.jsx)("h1",{children:"Phonebook"}),(0,m.jsx)(f,{}),(0,m.jsx)("h2",{children:"Contacts"}),(0,m.jsx)(p,{}),a&&(0,m.jsx)(b.Z,{color:"#9789c1",cssOverride:_}),i&&(0,m.jsx)("b",{style:{color:"red",textAlign:"center"},children:i}),(0,m.jsx)(C,{contacts:h})]})}}}]);
//# sourceMappingURL=165.81cc76d9.chunk.js.map