(this.webpackJsonpmlquiz=this.webpackJsonpmlquiz||[]).push([[0],{32:function(n,t,e){},36:function(n,t,e){},37:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(0),a=e.n(i),s=e(21),c=e.n(s),o=(e(32),e(13)),u=e(8),d=e(14),l=e(2),f=e(3),h=e(15);function j(){var n=Object(l.a)(["\n    min-width: 300px;\n"]);return j=function(){return n},n}function b(){var n=Object(l.a)(["\n    padding: 50px 10px 10px 10px;\n"]);return b=function(){return n},n}function p(){var n=Object(l.a)(["\n    font-size: calc(10px + 2vmin);\n    font-weight: 500;\n    color: #999;\n"]);return p=function(){return n},n}function x(){var n=Object(l.a)(["\n    font-size: calc(16px + 4vmin);\n    font-weight: 600;\n    color: #444;\n    padding-bottom: 10px;\n"]);return x=function(){return n},n}function g(){var n=Object(l.a)(["\n    width: 100%;\n    padding: 80px 10px 60px 10px;\n    text-align: center;\n"]);return g=function(){return n},n}var m=f.a.div(g()),O=f.a.h1(x()),k=f.a.div(p()),w=f.a.div(b()),v=Object(f.a)(h.a)(j()),y=e(26),q=e(9);function z(){var n=Object(l.a)(["\n    padding: 20px;\n"]);return z=function(){return n},n}function C(){var n=Object(l.a)(["\n    padding-top: 30px;\n"]);return C=function(){return n},n}function _(){var n=Object(l.a)(["\n    padding: 10px 10px 40px 10px;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(10px + 2vmin);\n    font-weight: 500;\n    color: #666;\n    width: 100%;\n    text-align: center;\n"]);return _=function(){return n},n}function S(){var n=Object(l.a)(["\n    width: 250px;\n    padding: 10px;\n    margin-bottom: 10px;\n    cursor: pointer;\n    :hover {\n        background-color: #ffee00;\n        opacity: 0.2;\n    }\n    opacity: ",";\n"]);return S=function(){return n},n}function T(){var n=Object(l.a)(["\n    background: rgb(255, 255, 255);\n    border: 1px solid rgb(213, 220, 230);\n    border-radius: 6px;\n    box-shadow: rgb(34 50 65 / 10%) 0px 6px 20px 0px;\n    text-align: center;\n    align-items: center;\n    min-height: 300px;\n    padding: 40px;\n    padding-bottom: 80px;\n"]);return T=function(){return n},n}var B=Object(f.a)(o.a)(T()),F=f.a.img(S(),(function(n){return n.isTransparent?"0.2":"1"})),D=f.a.div(_()),I=f.a.div(C()),M=f.a.div(z()),N=e(18),L=e.n(N),P=e(25),W=e(20),A=function(n){return n.map((function(n){return Object(W.a)(Object(W.a)({},n),{},{answers:n.answers.sort((function(){return Math.random()-.5}))})})).sort((function(){return Math.random()-.5}))},E=function(n){return new Promise((function(t){return setTimeout(t,n)}))},J=function(){var n=Object(P.a)(L.a.mark((function n(){var t;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E(2e3);case 2:return t=[{id:1,question:"Which of the following is more likely to be the result of DBScan (density-based) clustering algorithm?",answers:[{id:1,answer:"",img:"/static/img/quiz_images/dbscan.png",isCorrect:!0},{id:2,answer:"",img:"/static/img/quiz_images/k_means.png",isCorrect:!1}]},{id:2,question:"Which of the following dataset is linear?",answers:[{id:1,answer:"",img:"/static/img/quiz_images/linear_data.png",isCorrect:!0},{id:2,answer:"",img:"/static/img/quiz_images/non_linear_data.png",isCorrect:!1}]},{id:3,question:"Which of the figure demonstrate the model with 'High Bias'.?",answers:[{id:1,answer:"",img:"/static/img/quiz_images/high_bias.png",isCorrect:!0},{id:2,answer:"",img:"/static/img/quiz_images/low_bias.png",isCorrect:!1}]}],n.abrupt("return",A(t));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function G(){var n=Object(l.a)(["\n    animation: "," 1s linear infinite;\n    transform: translateZ(0);\n    border-top: 2px solid grey;\n    border-right: 2px solid grey;\n    border-bottom: 2px solid grey;\n    border-left: 4px solid black;\n    background: transparent;\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n"]);return G=function(){return n},n}function H(){var n=Object(l.a)(["\nfrom {\n  transform: rotate(0deg);\n}\nto {\n  transform: rotate(360deg);\n}\n"]);return H=function(){return n},n}var U=Object(f.b)(H()),Z=f.a.div(G(),U);function K(){var n=Object(l.a)(["\n    max-width: 150px;\n    position: absolute;\n    top: 20%;\n    left: 34%;\n\n    .path {\n        stroke-dasharray: 1000;\n        stroke-dashoffset: 0;\n    }\n\n    .path.circle {\n        -webkit-animation: dash 0.9s ease-in-out;\n        animation: dash 0.9s ease-in-out;\n    }\n\n    .path.line {\n        stroke-dashoffset: 1000;\n        -webkit-animation: dash 0.9s 0.35s ease-in-out forwards;\n        animation: dash 0.9s 0.35s ease-in-out forwards;\n    }\n\n    .path.check {\n        stroke-dashoffset: -100;\n        -webkit-animation: dash-check 0.9s 0.35s ease-in-out forwards;\n        animation: dash-check 0.9s 0.35s ease-in-out forwards;\n    }\n\n    @-webkit-keyframes dash {\n        0% {\n            stroke-dashoffset: 1000;\n        }\n        100% {\n            stroke-dashoffset: 0;\n        }\n    }\n\n    @keyframes dash {\n        0% {\n            stroke-dashoffset: 1000;\n        }\n        100% {\n            stroke-dashoffset: 0;\n        }\n    }\n\n    @-webkit-keyframes dash-check {\n        0% {\n            stroke-dashoffset: -100;\n        }\n        100% {\n            stroke-dashoffset: 900;\n        }\n    }\n\n    @keyframes dash-check {\n        0% {\n            stroke-dashoffset: -100;\n        }\n        100% {\n            stroke-dashoffset: 900;\n        }\n    }\n"]);return K=function(){return n},n}var Q=f.a.svg(K()),R=function(){return Object(r.jsxs)(Q,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2",children:[Object(r.jsx)("circle",{className:"path circle",fill:"none",stroke:"#73AF55","stroke-width":"6","stroke-miterlimit":"10",cx:"65.1",cy:"65.1",r:"62.1"}),Object(r.jsx)("polyline",{className:"path check",fill:"none",stroke:"#73AF55","stroke-width":"6","stroke-linecap":"round","stroke-miterlimit":"10",points:"100.2,40.2 51.5,88.8 29.8,67.5 "})]})},V=function(){return Object(r.jsxs)(Q,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2",children:[Object(r.jsx)("circle",{className:"path circle",fill:"none",stroke:"#D06079","stroke-width":"6","stroke-miterlimit":"10",cx:"65.1",cy:"65.1",r:"62.1"}),Object(r.jsx)("line",{className:"path line",fill:"none",stroke:"#D06079","stroke-width":"6","stroke-linecap":"round","stroke-miterlimit":"10",x1:"34.4",y1:"37.9",x2:"95.8",y2:"92.3"}),Object(r.jsx)("line",{className:"path line",fill:"none",stroke:"#D06079","stroke-width":"6","stroke-linecap":"round","stroke-miterlimit":"10",x1:"95.8",y1:"38",x2:"34.4",y2:"92.2"})]})},X=function(){var n=Object(i.useState)([]),t=Object(q.a)(n,2),e=t[0],s=t[1],c=Object(i.useState)(0),o=Object(q.a)(c,2),l=o[0],f=o[1],j=Object(i.useState)([]),b=Object(q.a)(j,2),p=b[0],x=b[1],g=Object(i.useState)(null),m=Object(q.a)(g,2),O=m[0],k=m[1],w=Object(i.useState)(null),z=Object(q.a)(w,2),C=z[0],_=z[1],S=e[l];Object(i.useEffect)((function(){J().then((function(n){return s(n)}))}),[]);var T;return T=e.length>0&&l===e.length?Object(r.jsxs)(I,{children:[Object(r.jsxs)(M,{children:["Total correct:"," ",p.filter((function(n){return n.isCorrect})).length]}),Object(r.jsx)(M,{children:Object(r.jsx)(v,{size:"lg",variant:"outline-primary",children:"Sign up to practice more."})}),Object(r.jsx)(M,{children:Object(r.jsx)(h.a,{onClick:function(){s(A(e)),f(0),x([])},variant:"link",children:"Try again"})})]}):S?Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsx)(u.a,{children:Object(r.jsx)(D,{children:S.question})}),Object(r.jsx)(u.a,{children:S.answers.map((function(n){var t=n.id===O,e=n.id===C;return Object(r.jsxs)(d.a,{lg:"6",children:[Object(r.jsx)(F,{isTransparent:t||e,src:n.img,onClick:function(){return function(n){if(S&&null===O&&null===C){var t=S.answers.find((function(n){return n.isCorrect})),e=!!t&&t.id===n,r={questionId:S.id,answerId:n,isCorrect:e};x([r].concat(Object(y.a)(p.filter((function(n){return n.questionId!==S.id}))))),setTimeout((function(){f(l+1),k(null),_(null)}),2e3),e?k(n):_(n)}}(n.id)}}),t&&Object(r.jsx)(R,{}),e&&Object(r.jsx)(V,{})]},"".concat(n.id))}))})]}):Object(r.jsx)(u.a,{children:Object(r.jsx)(Z,{})}),Object(r.jsx)(B,{children:T})},Y=function(){return Object(r.jsxs)(o.a,{children:[Object(r.jsx)(u.a,{children:Object(r.jsxs)(m,{children:[Object(r.jsx)(O,{children:"Be confident in Machine Learning."}),Object(r.jsx)(k,{children:"Understand the key concepts of Machine Learning with 100's of quizzes."}),Object(r.jsx)(w,{children:Object(r.jsx)(v,{variant:"primary",size:"lg",children:"Get started for free!"})})]})}),Object(r.jsx)(u.a,{children:Object(r.jsx)(d.a,{sm:12,children:Object(r.jsx)(X,{})})})]})},$=function(){return Object(r.jsx)(Y,{})},nn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,38)).then((function(t){var e=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;e(n),r(n),i(n),a(n),s(n)}))};e(36);c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)($,{})}),document.getElementById("root")),nn()}},[[37,1,2]]]);
//# sourceMappingURL=main.5d6038cb.chunk.js.map