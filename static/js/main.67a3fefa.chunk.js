(this.webpackJsonpgithubcards=this.webpackJsonpgithubcards||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),r=n.n(c),i=n(18),s=n.n(i),o=(n(27),n(21)),l=n(3),u=n(4),j=n(6),d=n(5),b=n(9),h=(n(28),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=this.props.onDelete;return Object(a.jsxs)("div",{className:"github-profile",children:[Object(a.jsx)("img",{alt:"user profile",className:"img-resize",src:e.avatar_url}),Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("div",{className:"login",children:e.login}),e.name?Object(a.jsx)("div",{className:"name",children:e.name}):Object(a.jsx)("div",{className:"name",children:"Name: \ud83e\udd37\u200d\u2640\ufe0f"}),e.location?Object(a.jsx)("div",{className:"location",children:e.location}):Object(a.jsx)("div",{className:"location",children:"Location: \ud83e\udd37\u200d\u2640\ufe0f"}),Object(a.jsxs)("div",{className:"public-repos",children:["Public Repos: ",e.public_repos]})]}),Object(a.jsx)("button",{onClick:function(){return t(e)},className:"delete",children:"X"})]})}}]),n}(r.a.Component)),p=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.profiles,n=e.onDelete;return console.log(t),Object(a.jsx)("div",{children:t.map((function(e){return Object(a.jsx)(h,Object(b.a)(Object(b.a)({},e),{},{onDelete:n}),e.id)}))})}}]),n}(r.a.Component),f=n(8),m=n.n(f),O=n(19),v=n(20),x=n.n(v),g=(n(47),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({username:e.target.value})},a.handleSubmit=function(){var e=Object(O.a)(m.a.mark((function e(t){var n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,x.a.get("https://api.github.com/users/".concat(a.state.username));case 3:n=e.sent,c=n.data,a.props.onSubmit(c),a.setState({username:""});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={username:""},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("input",{type:"text",placeholder:"Github username",value:this.state.username,onChange:this.handleChange,required:!0}),Object(a.jsx)("button",{className:"add",children:"Add card"})]})}}]),n}(r.a.Component)),N=(n(48),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).addNewProfile=function(e){a.setState((function(t){return{profiles:[].concat(Object(o.a)(t.profiles),[e])}}))},a.deleteProfile=function(e){var t=a.state.profiles.filter((function(t){return t.id!==e.id}));a.setState({profiles:t})},a.state={profiles:[]},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"header",children:this.props.title}),Object(a.jsx)(g,{onSubmit:this.addNewProfile}),Object(a.jsx)(p,{profiles:this.state.profiles,onDelete:this.deleteProfile})]})})}}]),n}(r.a.Component)),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(N,{title:"Github Cards App"})}),document.getElementById("root")),C()}},[[49,1,2]]]);
//# sourceMappingURL=main.67a3fefa.chunk.js.map