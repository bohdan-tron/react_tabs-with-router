(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(9),s=c.n(n),a=c(4),i=c(2),j=(c(14),c(15),c(16),c(0)),b=c(6),r=c.n(b),l=c(1),d=function(e){var t=e.to,c=e.title;return Object(l.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return r()("navbar-item",{"is-active":t})},children:c})},o=function(){return Object(l.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(d,{to:"/",title:"Home"}),Object(l.jsx)(d,{to:"/tabs",title:"Tabs"})]})})})},x=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],h="has-navbar-fixed-top",O=function(){return Object(j.useEffect)((function(){return document.body.classList.add(h),function(){document.body.classList.remove(h)}}),[h]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o,{}),Object(l.jsx)("div",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(i.b,{})})})]})},u=function(){return Object(l.jsx)("h1",{className:"title",children:"Home page"})},m=function(){return Object(l.jsx)("h1",{className:"title",children:"Page not found"})},v=function(e){var t=e.tab;return Object(l.jsx)(a.b,{to:"../".concat(t.id),children:t.title})},f=function(){var e=Object(i.i)().tabId,t=void 0===e?"":e,c=x.find((function(e){return e.id===t}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:x.map((function(e){return Object(l.jsx)("li",{"data-cy":"Tab",className:r()({"is-active":t===e.id}),children:Object(l.jsx)(v,{tab:e})},e.id)}))})}),Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:t.length?null===c||void 0===c?void 0:c.content:"Please select a tab"})]})},p=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"Tabs page"}),Object(l.jsx)(f,{})]})};s.a.render(Object(l.jsx)(a.a,{children:Object(l.jsx)(i.e,{children:Object(l.jsxs)(i.c,{path:"/",element:Object(l.jsx)(O,{}),children:[Object(l.jsx)(i.c,{path:"*",element:Object(l.jsx)(m,{})}),Object(l.jsx)(i.c,{index:!0,element:Object(l.jsx)(u,{})}),Object(l.jsx)(i.c,{path:"home",element:Object(l.jsx)(i.a,{to:"/",replace:!0})}),Object(l.jsxs)(i.c,{path:"tabs",children:[Object(l.jsx)(i.c,{index:!0,element:Object(l.jsx)(p,{})}),Object(l.jsx)(i.c,{path:":tabId",element:Object(l.jsx)(p,{})})]})]})})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b8c6efed.chunk.js.map