(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{10:function(e,r,t){},12:function(e,r,t){"use strict";t.r(r);var c=t(1),a=t(5),s=t.n(a),i=(t(10),t(2)),n=t(3),d=t.n(n),o=t(0);var m=function(e){var r=Object(c.useState)(!1),t=Object(i.a)(r,2),a=(t[0],t[1]);Object(c.useEffect)((function(){return document.addEventListener("keydown",s),function(){document.removeEventListener("keydown",s)}}));var s=function(r){r.keyCode===e.clip.keyCode&&n(e.volume)};function n(){var r=document.getElementById(e.clip.keyTrigger),t=document.getElementById(e.id);t.focus(),setTimeout((function(){return t.blur()}),50),a(!0),setTimeout((function(){return a(!1)}),200),r.volume=e.volume,r.currentTime=0,e.setname(e.clip.id),r.play()}return Object(o.jsxs)("button",{className:"drum-pad",onClick:n,id:e.id,children:[Object(o.jsx)("audio",{className:"clip",id:e.clip.keyTrigger,src:e.clip.url}),e.clip.keyTrigger]})},u=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}];var l=function(){var e=Object(c.useState)(.5),r=Object(i.a)(e,2),t=r[0],a=r[1],s=Object(c.useState)(""),n=Object(i.a)(s,2),l=n[0],p=n[1];return Object(o.jsxs)("div",{className:d.a.box,id:"display",children:[Object(o.jsx)("div",{className:d.a.leftside,children:u.map((function(e){return Object(o.jsx)(m,{clip:e,volume:t,id:e.id,setname:p},e.id)}))}),Object(o.jsxs)("div",{className:d.a.rightside,children:[Object(o.jsxs)("div",{className:d.a.flex,children:["Volume",Object(o.jsx)("input",{type:"range",step:"0.01",max:"1",min:"0",value:t,onChange:function(e){return a(e.target.value)}})]}),Object(o.jsx)("span",{children:l})]})]})};var p=function(){return Object(o.jsxs)("div",{className:"App",id:"drum-machine",children:[Object(o.jsx)("h1",{children:"Drum Machine"}),Object(o.jsx)(l,{})]})};s.a.render(Object(o.jsx)(p,{}),document.getElementById("root"))},3:function(e,r,t){e.exports={box:"Controller_box__WsYdT",leftside:"Controller_leftside__lJQSw",rightside:"Controller_rightside__2MzfC",flex:"Controller_flex__hi6w_"}}},[[12,1,2]]]);
//# sourceMappingURL=main.e7e0f375.chunk.js.map