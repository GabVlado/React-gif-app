(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),u=n(1),i=n(8),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(u.a)(n,2),l=c[0],o=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l.trim().length>2&&(t((function(e){return[l].concat(Object(i.a)(e))})),o(""))}},r.a.createElement("input",{type:"text",value:l,onChange:function(e){console.log(e.target.value),o(e.target.value)}})))},m=n(4),s=n.n(m),p=n(7),f=function(){var e=Object(p.a)(s.a.mark((function e(t){var n,a,r,c,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=or6ejG0C5F4wU1DVaEgGNv8OmlHX41KR"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,l=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.id,n=e.title,a=e.url;return console.log({id:t,title:n,url:a}),r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("img",{src:a,alt:n}),r.a.createElement("p",null,n))},g=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){console.log(e),c({data:e,loading:!1})}))}),[e]),r}(t),c=n.data,l=n.loading;return r.a.createElement(a.Fragment,null,r.a.createElement("h3",null,t),l&&r.a.createElement("p",null,"Loading"),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(d,Object.assign({key:e.id},e))}))))},E=function(){var e=Object(a.useState)(["Chunkie"]),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement(a.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(o,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,n.map((function(e){return r.a.createElement(g,{key:e,category:e})}))))};n(15);l.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.15ecb3ef.chunk.js.map