(this["webpackJsonptest-react-app"]=this["webpackJsonptest-react-app"]||[]).push([[0],{21:function(e,t,i){},23:function(e,t,i){"use strict";i.r(t);var r=i(0),s=i.n(r),a=i(9),n=i.n(a),l=i(13),d=(i(21),i(2));var c=function(){var e=Object(l.a)({initialValues:{email:"",password:""},onSubmit:function(e){alert("Login Successful")},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Username Should be an Email"):t.email="Field Required",e.password||(t.password="Field Required"),t}});return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)("b",{children:"Email:"})}),Object(d.jsx)("input",{id:"emailField",type:"text",name:"email",onChange:e.handleChange,value:e.values.email}),e.errors.email?Object(d.jsx)("div",{id:"emailError",style:{color:"red"},children:Object(d.jsx)("b",{children:e.errors.email})}):null,Object(d.jsx)("div",{children:Object(d.jsx)("b",{children:"Password:"})}),Object(d.jsx)("input",{id:"pswField",type:"text",name:"password",onChange:e.handleChange,value:e.values.password}),Object(d.jsx)("br",{}),e.errors.password?Object(d.jsx)("div",{id:"pswError",style:{color:"red"},children:Object(d.jsx)("b",{children:e.errors.password})}):null,Object(d.jsx)("button",{id:"submitBtn",type:"submit",children:"Submit"})]})})};n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(c,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.80ca1bfa.chunk.js.map