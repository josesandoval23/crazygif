(this["webpackJsonpgif-expert"]=this["webpackJsonpgif-expert"]||[]).push([[0],{22:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(12),i=n.n(c),r=n(3),s=n(14),o=n(0),u=function(e){e.misCategorias;var t=e.setCategories,n=Object(a.useState)(""),c=Object(r.a)(n,2),i=c[0],u=c[1];return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(s.a)(e))})),u(""))},children:[Object(o.jsx)("h1",{children:i}),Object(o.jsx)("input",{className:"animate__animated animate__bounce nav",type:"text",value:i,onChange:function(e){u(e.target.value)}})]})},j=n(15),l=n(9),d=n.n(l),b=n(13),m=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,a,c,i,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=100&api_key=1Yhq8RpKpJE82VxECghHe40ei1m9DvXJ"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,i=c.data,r=i.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.title,n=e.url;return Object(o.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(o.jsx)("img",{src:n,alt:t}),Object(o.jsx)("p",{children:t})]})},f=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(r.a)(t,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){m(e).then((function(e){setTimeout((function(){i({data:e,loading:!1})}),1200)}))}),[e]),c}(t),c=n.data,i=n.loading;return console.log(i),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:t}),i?Object(o.jsx)("p",{children:"Loading..."}):null,Object(o.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(o.jsx)(h,Object(j.a)({},e),e.id)}))})]})},O=(n(22),n(10)),p=n(11),x=function(){var e=Object(a.useState)(["Random"]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"titulo animate__animated animate__bounce",children:"Crazy-Gif"}),Object(o.jsx)("a",{href:"https://www.instagram.com/julian_mstar/",Target:"_blank",className:"icono",children:Object(o.jsx)(O.a,{icon:p.b})}),Object(o.jsx)("a",{href:"https://www.facebook.com/juliansc23/",Target:"_blank",className:"icono2",children:Object(o.jsx)(O.a,{icon:p.a})}),Object(o.jsx)(u,{setCategories:c,misCategorias:n}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(e,t){return Object(o.jsx)(f,{category:e},e)}))}),Object(o.jsx)("h1",{className:"p1",children:Object(o.jsx)("div",{className:"p2",children:"Desarrollado por Julian Sandoval"})})]})};n(28);i.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.b9adcf9e.chunk.js.map