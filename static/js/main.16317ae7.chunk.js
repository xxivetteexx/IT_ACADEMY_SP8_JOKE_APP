(this.webpackJsonpprova_react=this.webpackJsonpprova_react||[]).push([[0],{36:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(37),r=c.n(s),i=(c(45),c(46),c(20)),j=c(7),l=(c(47),c.p+"static/media/hi.1749983e.svg"),o=c(83),b=c(84),d=c(85),u=c(86),O=c(39),h=c(1);var x=function(){return Object(h.jsxs)(o.a,{fluid:!0,className:"Welcome-body d-flex flex-column justify-content-center align-items-center ",children:[Object(h.jsx)(b.a,{children:Object(h.jsx)(d.a,{xs:!0,md:!0,lg:12,children:Object(h.jsx)(u.a,{className:"Welcome-logo",src:l,alt:"hi"})})}),Object(h.jsx)(b.a,{children:Object(h.jsx)(d.a,{xs:!0,md:!0,lg:12,className:"mt-4",children:Object(h.jsx)(i.b,{to:"/jokes",children:Object(h.jsx)(O.a,{className:"btnWelcome ",children:"Welcome"})})})})]})},m=c(12),f=c.n(m),p=c(16),N=c(8),v=c(18),w=c(17),g=c.n(w);c(76);var y=function(){var e=Object(a.useState)(),t=Object(N.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),r=Object(N.a)(s,2),i=(r[0],r[1],Object(a.useState)(!1)),j=Object(N.a)(i,2);return j[0],j[1],Object(h.jsx)(v.a,{className:"joke-card text-center border-0 mt-5 w-100",children:Object(h.jsxs)(v.a.Body,{children:[Object(h.jsx)(v.a.Title,{className:"mb-4",children:"IF YOU\u2019RE READY TO LAUGHT CLICK THE JOKE BUTTON"}),Object(h.jsx)(v.a.Text,{className:"joke-content mb-4",children:c}),Object(h.jsx)(O.a,{onClick:function(){(function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});case 2:t=e.sent,console.log(t.data),n("".concat(t.data.joke));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},className:"btn mt-1 w-50",children:"The Joke"})]})})};c(36);var T=function(){var e=Object(a.useState)(!1),t=Object(N.a)(e,2),c=t[0],n=(t[1],Object(a.useState)([])),s=Object(N.a)(n,2),r=s[0],i=s[1],j=Object(a.useState)([]),l=Object(N.a)(j,2),u=l[0],O=l[1],x=Object(a.useState)([]),m=Object(N.a)(x,2),w=m[0],y=m[1];Object(a.useEffect)((function(){(function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("http://api.weatherapi.com/v1/current.json?key=e3c4a31ebc6447ef8c0115758211003&q=Barcelona&aqi=no",{headers:{Accept:"application/json"}});case 2:t=e.sent,console.log(t.data),i("".concat(t.data.location.name)),O("".concat(t.data.current.temp_c)),y("".concat(t.data.current.condition.text));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]);var T=Object(a.useState)([]),k=Object(N.a)(T,2),S=k[0],A=k[1],C=Object(a.useState)([]),E=Object(N.a)(C,2),B=E[0],_=E[1],q=Object(a.useState)([]),I=Object(N.a)(q,2),J=I[0],L=I[1];Object(a.useEffect)((function(){(function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("http://api.weatherapi.com/v1/current.json?key=e3c4a31ebc6447ef8c0115758211003&q=London&aqi=no",{headers:{Accept:"application/json"}});case 2:t=e.sent,console.log(t.data),A("".concat(t.data.location.name)),_("".concat(t.data.current.temp_c)),L("".concat(t.data.current.condition.text));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]);var F=Object(a.useState)([]),P=Object(N.a)(F,2),W=P[0],D=P[1],K=Object(a.useState)([]),M=Object(N.a)(K,2),U=M[0],Y=M[1],H=Object(a.useState)([]),R=Object(N.a)(H,2),z=R[0],G=R[1];Object(a.useEffect)((function(){(function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("http://api.weatherapi.com/v1/current.json?key=e3c4a31ebc6447ef8c0115758211003&q=new york&aqi=no",{headers:{Accept:"application/json"}});case 2:t=e.sent,console.log(t.data),D("".concat(t.data.location.name)),Y("".concat(t.data.current.temp_c)),G("".concat(t.data.current.condition.text));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]);var Q=Object(a.useState)([]),V=Object(N.a)(Q,2),X=V[0],Z=V[1],$=Object(a.useState)([]),ee=Object(N.a)($,2),te=ee[0],ce=ee[1],ae=Object(a.useState)([]),ne=Object(N.a)(ae,2),se=ne[0],re=ne[1];return Object(a.useEffect)((function(){(function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("http://api.weatherapi.com/v1/current.json?key=e3c4a31ebc6447ef8c0115758211003&q=moscow&aqi=no",{headers:{Accept:"application/json"}});case 2:t=e.sent,console.log(t.data),Z("".concat(t.data.location.name)),ce("".concat(t.data.current.temp_c)),re("".concat(t.data.current.condition.text));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(h.jsxs)(o.a,{fluid:!0,className:"weather",children:[Object(h.jsx)(v.a,{className:" mt-2 border-0",children:Object(h.jsx)(v.a.Body,{className:"card-Bcn",children:Object(h.jsxs)(b.a,{className:"align-items-center",children:[Object(h.jsx)(d.a,{children:Object(h.jsx)(v.a.Title,{className:"weather-text mb-0",children:r})}),Object(h.jsx)(d.a,{children:Object(h.jsxs)(v.a.Title,{className:"weather-text d-flex justify-content-center mb-0",children:[u,"\xb0C"]})}),Object(h.jsx)(d.a,{children:Object(h.jsx)(v.a.Title,{className:"weather-text mb-0",children:w})})]})})}),Object(h.jsx)(v.a,{className:"mt-2 border-0",children:Object(h.jsx)(v.a.Body,{className:"card-Ldn",children:Object(h.jsxs)(b.a,{className:"align-items-center",children:[Object(h.jsx)(d.a,{children:Object(h.jsx)(v.a.Title,{className:"weather-text mb-0",children:S})}),Object(h.jsx)(d.a,{children:Object(h.jsxs)(v.a.Title,{className:"weather-text d-flex justify-content-center mb-0",children:[B,"\xb0C"]})}),Object(h.jsx)(d.a,{children:Object(h.jsx)(v.a.Title,{className:"weather-text mb-0",children:J})})]})})}),Object(h.jsx)(v.a,{className:"mt-2 border-0",children:Object(h.jsx)(v.a.Body,{className:"card-Nyc",children:Object(h.jsxs)(b.a,{className:"align-items-center",children:[Object(h.jsx)(d.a,{children:Object(h.jsx)(v.a.Title,{className:"weather-text mb-0",children:W})}),Object(h.jsx)(d.a,{children:Object(h.jsxs)(v.a.Title,{className:"weather-text d-flex justify-content-center mb-0",children:[U,"\xb0C"]})}),Object(h.jsx)(d.a,{children:Object(h.jsx)(v.a.Title,{className:"weather-text mb-0",children:z})})]})})}),Object(h.jsx)(v.a,{className:"mt-2 border-0",children:Object(h.jsx)(v.a.Body,{className:"card-Mow",children:Object(h.jsxs)(b.a,{className:"align-items-center",children:[Object(h.jsx)(d.a,{children:Object(h.jsx)(v.a.Title,{className:"weather-text mb-0",children:X})}),Object(h.jsx)(d.a,{children:Object(h.jsxs)(v.a.Title,{className:"weather-text d-flex justify-content-center  mb-0",children:[te,"\xb0C"]})}),Object(h.jsx)(d.a,{children:Object(h.jsx)(v.a.Title,{className:"weather-text mb-0",children:se})})]})})})]})},k=c(87),S=(c(77),function(){return Object(h.jsx)(o.a,{fluid:!0,className:"p-0",children:Object(h.jsx)(k.a,{expand:"lg",className:"App-navbar p-2",children:Object(h.jsx)(k.a.Item,{children:" Weather&Jokes / "})})})}),A=c.p+"static/media/smile.6aa58fb1.png",C=function(){return Object(h.jsx)(u.a,{fluid:!0,className:"mainImage",src:A,alt:"Smile"})};var E=function(){return Object(h.jsxs)(o.a,{fluid:!0,className:"app-body justify-content-center align-items-center p-0",children:[Object(h.jsx)(S,{}),Object(h.jsxs)(b.a,{className:"justify-content-center align-items-center",children:[Object(h.jsx)(d.a,{md:7,className:"justify-content-center",children:Object(h.jsx)(b.a,{className:"justify-content-center",children:Object(h.jsxs)(d.a,{xs:12,md:!0,lg:9,children:[Object(h.jsx)(T,{}),Object(h.jsx)(y,{})]})})}),Object(h.jsx)(d.a,{md:5,className:"align-items-center",children:Object(h.jsx)(C,{})})]})]})};var B=function(){return Object(h.jsx)(i.a,{basename:"/IT_ACADEMY_SP8_JOKE_APP",children:Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{path:"/",exact:!0,children:Object(h.jsx)(x,{})}),Object(h.jsx)(j.a,{path:"/jokes",children:Object(h.jsx)(E,{})})]})})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,88)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};c(81);r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root")),_()}},[[82,1,2]]]);
//# sourceMappingURL=main.16317ae7.chunk.js.map