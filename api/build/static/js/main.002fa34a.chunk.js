(this.webpackJsonptemptool=this.webpackJsonptemptool||[]).push([[0],{114:function(e,t,r){},115:function(e,t,r){},174:function(e,t,r){"use strict";r.r(t);var a=r(8),n=r(0),s=r.n(n),c=r(14),i=r.n(c),l=(r(114),r(56)),o=r(44),h=r(179),j=r(57),d=r(37),b=r(181),u=r(177),f=(r(73),r(115),r(78),r(178)),p=f.a.Title,O=function(e){var t=e.title,r=e.value;return Object(a.jsx)(u.a,{title:t,bordered:!0,children:Object(a.jsx)(p,{level:2,children:r})})};function x(){var e=f.a.Title,t=Object(n.useState)(Object(a.jsx)(h.a,{title:!0,active:!0,paragraph:!1})),r=Object(l.a)(t,2),s=r[0],c=r[1],i=Object(n.useState)(Object(a.jsx)(h.a,{title:!0,active:!0,paragraph:!1})),p=Object(l.a)(i,2),x=p[0],m=p[1],g=Object(n.useState)(Object(a.jsx)(h.a,{title:!0,active:!0,paragraph:!1})),v=Object(l.a)(g,2),y=v[0],z=v[1];return Object(n.useEffect)((function(){fetch("http://raspberrypi.fritz.box:5000/api/v1/temperature").then((function(e){return e.json()})).then((function(t){console.log(t),c(Object(a.jsx)(e,{level:2,children:t.value+" \xb0C"}))})),fetch("http://raspberrypi.fritz.box:5000/api/v1/humidity").then((function(e){return e.json()})).then((function(t){console.log(t),m(Object(a.jsx)(e,{level:2,children:t.value+" %"}))})),fetch("http://raspberrypi.fritz.box:5000/api/v1/pressure").then((function(e){return e.json()})).then((function(t){console.log(t),z(Object(a.jsx)(e,{level:2,children:t.value+" hPa"}))}))}),[]),Object(a.jsxs)(o.a,{className:"appContent",children:[Object(a.jsxs)(j.a,{className:"homeRow",children:[Object(a.jsx)(d.a,{span:8,style:{padding:3},children:Object(a.jsx)(O,{title:"Aktuelle Temperatur",value:s})}),Object(a.jsx)(d.a,{span:8,style:{padding:3},children:Object(a.jsx)(O,{title:"Aktuelle Luftfeuchtigkeit",value:x})}),Object(a.jsx)(d.a,{span:8,style:{padding:3},children:Object(a.jsx)(O,{title:"Aktueller Luftdruck",value:y})})]}),Object(a.jsxs)(b.b,{className:"graphContainer",direction:"vertical",size:"small",children:[Object(a.jsx)(u.a,{bordered:!0,children:Object(a.jsx)("div",{className:"grafana",dangerouslySetInnerHTML:{__html:'<iframe src="http://raspberrypi.fritz.box:3000/d-solo/uMYK1czRz/sensors?orgId=1&refresh=30s&theme=light&panelId=2" height=100% width=100% frameborder="0"></iframe>'}})}),Object(a.jsx)(u.a,{bordered:!0,children:Object(a.jsx)("div",{className:"grafana",dangerouslySetInnerHTML:{__html:'<iframe src="http://raspberrypi.fritz.box:3000/d-solo/uMYK1czRz/sensors?orgId=1&refresh=30s&theme=light&panelId=4" height=100% width=100% frameborder="0"></iframe>'}})}),Object(a.jsx)(u.a,{bordered:!0,children:Object(a.jsx)("div",{className:"grafana",dangerouslySetInnerHTML:{__html:'<iframe src="http://raspberrypi.fritz.box:3000/d-solo/uMYK1czRz/sensors?orgId=1&refresh=30s&theme=light&panelId=6" height=100% width=100% frameborder="0"></iframe>'}})})]})]})}var m=r(180);function g(){return Object(a.jsx)(o.a,{className:"grafanaDashboard",children:Object(a.jsx)("div",{className:"grafanaDashboard",dangerouslySetInnerHTML:{__html:'<iframe src="http://raspberrypi.fritz.box:3000/d/uMYK1czRz/sensors?orgId=1&refresh=30s" height=100% width=100% frameborder="0"></iframe>'}})})}var v=function(){var e=Object(n.useState)(1),t=Object(l.a)(e,2),r=t[0],s=t[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)(o.b,{children:Object(a.jsxs)(m.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],onSelect:function(e){s(e.key)},children:[Object(a.jsx)(m.a.Item,{children:"\xdcberblick"},"1"),Object(a.jsx)(m.a.Item,{children:"Dashboard"},"2")]})}),1==r&&Object(a.jsx)(x,{}),2==r&&Object(a.jsx)(g,{})]})},y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,182)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),a(e),n(e),s(e),c(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),y()},78:function(e,t,r){}},[[174,1,2]]]);
//# sourceMappingURL=main.002fa34a.chunk.js.map