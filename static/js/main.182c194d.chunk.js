(this.webpackJsonpmlquiz=this.webpackJsonpmlquiz||[]).push([[0],{43:function(n,e,t){},55:function(n,e,t){},56:function(n,e,t){"use strict";t.r(e);var i=t(1),r=(t(43),t(0)),s=t.n(r),a=t(33),c=t.n(a),o=t(17),u=t(39),d=t(14),l=t(22),g=t(38),h=t(27),f=t.n(h),m=t(34),j=t(30),p=function(n){return n.map((function(n){return Object(j.a)(Object(j.a)({},n),{},{answers:n.answers.sort((function(){return Math.random()-.5}))})})).sort((function(){return Math.random()-.5}))},b=function(n){return new Promise((function(e){return setTimeout(e,n)}))},w=[{id:1,question:"Which of the following correctly represents the different learning rate ?",answers:[{id:1,answer:"",img:"/static/img/quiz_images/1/lr1.png",isCorrect:!1},{id:2,answer:"",img:"/static/img/quiz_images/1/lr2.png",isCorrect:!1},{id:3,answer:"",img:"/static/img/quiz_images/1/lr3.png",isCorrect:!1},{id:4,answer:"",img:"/static/img/quiz_images/1/true.png",isCorrect:!0}]},{id:2,question:"Which of the following model is overfitted to data ?",answers:[{id:1,answer:"",img:"/static/img/quiz_images/2/true.png",isCorrect:!0},{id:2,answer:"",img:"/static/img/quiz_images/2/false.png",isCorrect:!1}]},{id:3,question:"Which of the following model is underfitted to data ?",answers:[{id:1,answer:"",img:"/static/img/quiz_images/3/true.png",isCorrect:!0},{id:2,answer:"",img:"/static/img/quiz_images/3/false.png",isCorrect:!1}]},{id:4,question:"What is the accuracy of the model for prediction shown in the figure.?",img:"/static/img/quiz_images/4/q.png",answers:[{id:1,answer:"66.66 %",img:"",isCorrect:!0},{id:2,answer:"50 %",img:"",isCorrect:!1},{id:3,answer:"90 %",img:"",isCorrect:!1}]},{id:5,question:"Given two models as in the figure, the prediction is denoted by black line and red arrow denotes the loss. Which model has lower loss ?",answers:[{id:1,answer:"",img:"/static/img/quiz_images/5/true.png",isCorrect:!0},{id:2,answer:"",img:"/static/img/quiz_images/5/false.png",isCorrect:!1}]},{id:6,question:"Which of the function is convex ?",answers:[{id:1,answer:"",img:"/static/img/quiz_images/6/true.png",isCorrect:!0},{id:2,answer:"",img:"/static/img/quiz_images/6/false.png",isCorrect:!1}]},{id:7,question:"Given the dataset as shown in the image, which of the following classifiers will achieve zero training error ?",img:"/static/img/quiz_images/7/q.png",answers:[{id:1,answer:"Logistic Regression",img:"",isCorrect:!1},{id:2,answer:"SVM(Linear kernel)",img:"",isCorrect:!1},{id:3,answer:"SVM(Quadratic Kernel)",img:"",isCorrect:!0}]},{id:8,question:" Given the dataset as shown in the image, which of the following represents correct decision boundary for an soft margin SVM with Quadratic kernel and for large value of C (i.e C -> infinity.  )",img:"/static/img/quiz_images/8/q.png",answers:[{id:1,answer:"",img:"/static/img/quiz_images/8/1.png",isCorrect:!1},{id:2,answer:"",img:"/static/img/quiz_images/8/2.png",isCorrect:!1},{id:3,answer:"",img:"/static/img/quiz_images/8/true.png",isCorrect:!0}]},{id:9,question:"Given the dataset as shown in the image, which of the following represents the output of k-means clustering. ",img:"/static/img/quiz_images/9/q.png",answers:[{id:1,answer:"",img:"/static/img/quiz_images/9/false.png",isCorrect:!1},{id:2,answer:"",img:"/static/img/quiz_images/9/true.png",isCorrect:!0}]},{id:10,question:"Given two functions (function1 and function2) as shown in the figures. Gradient descent (GD) starts from the red mark in the figures and goes 'downhill' until it terminates. For which of functions, the minima found by GD will be global minima ?",answers:[{id:1,answer:"",img:"/static/img/quiz_images/10/false.png",isCorrect:!1},{id:2,answer:"",img:"/static/img/quiz_images/10/true.png",isCorrect:!0}]}],x=function(){var n=Object(m.a)(f.a.mark((function n(e){var t;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b(2e3);case 2:return t=e?w:[{id:1,question:"Which of the following is more likely to be the result of DBScan (density-based) clustering algorithm?",answers:[{id:1,answer:"",img:"/static/img/quiz_images/dbscan.png",isCorrect:!0},{id:2,answer:"",img:"/static/img/quiz_images/k_means.png",isCorrect:!1}]},{id:2,question:"Which of the following dataset is linear?",answers:[{id:1,answer:"",img:"/static/img/quiz_images/linear_data.png",isCorrect:!0},{id:2,answer:"",img:"/static/img/quiz_images/non_linear_data.png",isCorrect:!1}]},{id:3,question:"Which of the figure demonstrate the model with 'High Bias'.?",answers:[{id:1,answer:"",img:"/static/img/quiz_images/high_bias.png",isCorrect:!0},{id:2,answer:"",img:"/static/img/quiz_images/low_bias.png",isCorrect:!1}]}],n.abrupt("return",p(t));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),O=t(6),v=t(7);function k(){var n=Object(O.a)(["\n    position: absolute;\n    ","\n    .path {\n        stroke-dasharray: 1000;\n        stroke-dashoffset: 0;\n    }\n\n    .path.circle {\n        -webkit-animation: dash 0.9s ease-in-out;\n        animation: dash 0.9s ease-in-out;\n    }\n\n    .path.line {\n        stroke-dashoffset: 1000;\n        -webkit-animation: dash 0.9s 0.35s ease-in-out forwards;\n        animation: dash 0.9s 0.35s ease-in-out forwards;\n    }\n\n    .path.check {\n        stroke-dashoffset: -100;\n        -webkit-animation: dash-check 0.9s 0.35s ease-in-out forwards;\n        animation: dash-check 0.9s 0.35s ease-in-out forwards;\n    }\n\n    @-webkit-keyframes dash {\n        0% {\n            stroke-dashoffset: 1000;\n        }\n        100% {\n            stroke-dashoffset: 0;\n        }\n    }\n\n    @keyframes dash {\n        0% {\n            stroke-dashoffset: 1000;\n        }\n        100% {\n            stroke-dashoffset: 0;\n        }\n    }\n\n    @-webkit-keyframes dash-check {\n        0% {\n            stroke-dashoffset: -100;\n        }\n        100% {\n            stroke-dashoffset: 900;\n        }\n    }\n\n    @keyframes dash-check {\n        0% {\n            stroke-dashoffset: -100;\n        }\n        100% {\n            stroke-dashoffset: 900;\n        }\n    }\n"]);return k=function(){return n},n}var q=v.a.svg(k(),(function(n){var e=n.isReview;return void 0===e||e?"\n            max-width: 40px;\n            top: 70%;\n            left: 70%;\n        ":"\n            max-width: 150px;\n            top: 20%;\n            left: 34%;\n        "})),C=function(n){var e=n.isReview;return Object(i.jsxs)(q,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2",isReview:e,children:[Object(i.jsx)("circle",{className:"path circle",fill:"none",stroke:"#D06079","stroke-width":"6","stroke-miterlimit":"10",cx:"65.1",cy:"65.1",r:"62.1"}),Object(i.jsx)("line",{className:"path line",fill:"none",stroke:"#D06079","stroke-width":"6","stroke-linecap":"round","stroke-miterlimit":"10",x1:"34.4",y1:"37.9",x2:"95.8",y2:"92.3"}),Object(i.jsx)("line",{className:"path line",fill:"none",stroke:"#D06079","stroke-width":"6","stroke-linecap":"round","stroke-miterlimit":"10",x1:"95.8",y1:"38",x2:"34.4",y2:"92.2"})]})},z=function(n){var e=n.isReview;return Object(i.jsxs)(q,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2",isReview:e,children:[Object(i.jsx)("circle",{className:"path circle",fill:"none",stroke:"#73AF55","stroke-width":"6","stroke-miterlimit":"10",cx:"65.1",cy:"65.1",r:"62.1"}),Object(i.jsx)("polyline",{className:"path check",fill:"none",stroke:"#73AF55","stroke-width":"6","stroke-linecap":"round","stroke-miterlimit":"10",points:"100.2,40.2 51.5,88.8 29.8,67.5 "})]})},y=t(23),_=t(11),S=t(16),R=t(15);function P(){var n=Object(O.a)(["\n    transition: all 1.5s ease;\n    ","\n"]);return P=function(){return n},n}function F(){var n=Object(O.a)(["\n    text-align: left;\n"]);return F=function(){return n},n}function I(){var n=Object(O.a)(["\n    min-width: 300px\n    text-align: center;\n"]);return I=function(){return n},n}var M=Object(v.a)(R.a)(I()),G=v.a.div(F()),W=Object(v.a)(_.a)(P(),(function(n){var e=n.isHidden;return"\n    max-width: ".concat(e?"0":"100%",";\n    padding: ").concat(e?"0":"0 15px 0 15px",";\n    input {\n        display: ").concat(e?"none":"inline",";\n    }\n")})),T=function(){var n=Object(r.useState)(!0),e=Object(d.a)(n,2),t=e[0],s=e[1],a=function(){return t&&s(!1)};return Object(i.jsx)(G,{children:Object(i.jsx)("form",{method:"get",children:Object(i.jsx)(y.a.Group,{children:Object(i.jsxs)(S.a,{children:[Object(i.jsx)(_.a,{md:t?3:2}),Object(i.jsx)(_.a,{md:3,children:Object(i.jsx)(y.a.Control,{type:"email",required:"required",placeholder:"Email",name:"email",size:"md",onKeyPress:a,onChange:a})}),Object(i.jsx)(W,{md:3,isHidden:t,children:Object(i.jsx)(y.a.Control,{type:"password",required:"required",placeholder:"Password",size:"md",name:"password"})}),Object(i.jsx)(_.a,{md:3,children:Object(i.jsx)(o.b,{to:"/quiz/".concat(Math.round(1e3*Math.random())),children:Object(i.jsx)(M,{variant:"primary",size:"md",children:"Signup with Email!"})})})]})})})})};function B(){var n=Object(O.a)(["\n    font-size: 25px;\n"]);return B=function(){return n},n}function D(){var n=Object(O.a)(["\n    padding: 20px;\n"]);return D=function(){return n},n}function L(){var n=Object(O.a)(["\n    text-align: center;\n    padding-top: 30px;\n    ",";\n"]);return L=function(){return n},n}var N=v.a.div(L(),(function(n){var e=n.isPage;return"\n    font-size: ".concat(e?"25px":"12px",";\n")})),A=v.a.div(D()),H=Object(v.a)(R.a)(B()),E=function(n){var e=n.isPage,t=n.resetQuiz,r=n.totalCorrect,s=n.onReview;return Object(i.jsxs)(N,{isPage:e,children:[Object(i.jsxs)(A,{children:["Total correct: ",r]}),!e&&Object(i.jsx)(A,{children:Object(i.jsx)(T,{})}),e&&Object(i.jsx)(A,{children:Object(i.jsx)(H,{variant:"link",onClick:s,children:"Review all questions"})}),Object(i.jsx)(A,{children:Object(i.jsx)(R.a,{onClick:t,variant:"link",children:"Try again"})})]})},Q=t(40);function V(){var n=Object(O.a)(["\n    margin: 0 auto;\n    min-width: 150px;\n    border-radius: 0;\n"]);return V=function(){return n},n}function J(){var n=Object(O.a)(["\n    text-align: center;\n"]);return J=function(){return n},n}function K(){var n=Object(O.a)(["\n    width: 100%;\n    height: 30px;\n"]);return K=function(){return n},n}function U(){var n=Object(O.a)(["\n    padding: 10px 10px 40px 10px;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(10px + 2vmin);\n    font-weight: 500;\n    color: #666;\n    width: 100%;\n"]);return U=function(){return n},n}function X(){var n=Object(O.a)(["\n    max-height: 250px;\n    padding: 10px;\n    margin: 0 auto;\n"]);return X=function(){return n},n}function Y(){var n=Object(O.a)(["\n    height: 250px;\n    max-width: 290px;\n    padding: 10px;\n    margin-bottom: 10px;\n    opacity: ",";\n"]);return Y=function(){return n},n}function Z(){var n=Object(O.a)(["\n    ","\n    min-height: 200px;\n    display: flex;\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]);return Z=function(){return n},n}function $(){var n=Object(O.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]);return $=function(){return n},n}var nn=Object(v.a)(_.a)($()),en=v.a.div(Z(),(function(n){var e=n.forceHighlight;return n.isReview?"\n            ".concat(e&&"background-color: #ffffef;","\n        "):"\n            :hover {\n                background-color: #ffff66;\n                opacity: 0.5;\n            }\n            cursor: pointer;\n        "})),tn=v.a.img(Y(),(function(n){return n.isTransparent?"0.2":"1"})),rn=v.a.img(X()),sn=v.a.div(U()),an=Object(v.a)(Q.a)(K()),cn=Object(v.a)(S.a)(J()),on=Object(v.a)(R.a)(V()),un=function(n){n.showSignupForm;var e=n.isPage,t=Object(r.useState)([]),a=Object(d.a)(t,2),c=a[0],o=a[1],h=Object(r.useState)(0),f=Object(d.a)(h,2),m=f[0],j=f[1],b=Object(r.useState)([]),w=Object(d.a)(b,2),O=w[0],v=w[1],k=Object(r.useState)(null),q=Object(d.a)(k,2),y=q[0],_=q[1],S=Object(r.useState)(null),R=Object(d.a)(S,2),P=R[0],F=R[1],I=Object(r.useState)(!1),M=Object(d.a)(I,2),G=M[0],W=M[1],T=c[m],B=O[m];Object(r.useEffect)((function(){x(e).then((function(n){return o(n.filter((function(n){return n.id<=3})))}))}),[e]);var D,L=function(n){if(T&&null===y&&null===P){if(G||!n)return j(m+1);var e=T.answers.find((function(n){return n.isCorrect})),t=!!e&&e.id===n,i={questionId:T.id,answerId:n,isCorrect:t,correctAnswerId:e?e.id:null};v([i].concat(Object(u.a)(O.filter((function(n){return n.questionId!==T.id}))))),setTimeout((function(){j(m+1),_(null),F(null)}),2e3),t?_(n):F(n)}};if(c.length>0&&m===c.length)D=Object(i.jsx)(E,{isPage:e,resetQuiz:function(){o(p(c)),j(0),v([]),W(!1)},onReview:function(){W(!0),j(0)},totalCorrect:O.filter((function(n){return n.isCorrect})).length});else if(T){var N=c.length>0?(m+1)/c.length*100:0;D=Object(i.jsxs)(s.a.Fragment,{children:[Object(i.jsx)(cn,{children:Object(i.jsx)(an,{now:N,label:"".concat(m+1," / ").concat(c.length)})}),Object(i.jsxs)(cn,{children:[Object(i.jsx)(sn,{children:T.question}),T.img&&Object(i.jsx)(rn,{src:T.img})]}),G&&Object(i.jsx)(cn,{children:Object(i.jsx)(on,{onClick:function(){return L()},variant:"secondary",size:"sm",children:"Next"})}),Object(i.jsx)(cn,{children:T.answers.map((function(n){var e=G?B&&n.id===B.correctAnswerId:n.id===y,t=G?B&&n.id===B.answerId&&n.id!==B.correctAnswerId:n.id===P;return Object(i.jsx)(nn,{lg:"6",children:Object(i.jsxs)(en,{onClick:function(){return L(n.id)},forceHighlight:B&&B.answerId===n.id,isReview:G,children:[n.img&&Object(i.jsx)(tn,{isTransparent:!G&&(e||t),src:n.img}),n.answer&&Object(i.jsxs)("div",{children:[" ",n.answer," "]}),e&&Object(i.jsx)(z,{isReview:G}),t&&Object(i.jsx)(C,{isReview:G})]})},"".concat(T.id,"-").concat(n.id))}))})]})}else D=Object(i.jsx)(cn,{children:Object(i.jsx)(g.a,{animation:"border"})});return Object(i.jsx)(l.a,{onClick:function(){return G?L():void 0},children:D})};function dn(){var n=Object(O.a)(["\n    background: rgb(255, 255, 255);\n    border: 1px solid rgb(213, 220, 230);\n    border-radius: 6px;\n    box-shadow: rgb(34 50 65 / 10%) 0px 6px 20px 0px;\n    text-align: center;\n    align-items: center;\n    min-height: 300px;\n    padding: 40px;\n    padding-bottom: 80px;\n"]);return dn=function(){return n},n}function ln(){var n=Object(O.a)(["\n    padding: 50px 10px 10px 10px;\n"]);return ln=function(){return n},n}function gn(){var n=Object(O.a)(["\n    font-size: calc(10px + 2vmin);\n    font-weight: 500;\n    color: #999;\n"]);return gn=function(){return n},n}function hn(){var n=Object(O.a)(["\n    font-size: calc(16px + 4vmin);\n    font-weight: 600;\n    color: #444;\n    padding-bottom: 10px;\n"]);return hn=function(){return n},n}function fn(){var n=Object(O.a)(["\n    width: 100%;\n    padding: 80px 10px 60px 10px;\n    text-align: center;\n"]);return fn=function(){return n},n}var mn=v.a.div(fn()),jn=v.a.h1(hn()),pn=v.a.div(gn()),bn=v.a.div(ln()),wn=v.a.div(dn()),xn=function(){return Object(i.jsxs)(l.a,{children:[Object(i.jsx)(S.a,{children:Object(i.jsxs)(mn,{children:[Object(i.jsx)(jn,{children:"Be confident in Machine Learning."}),Object(i.jsx)(pn,{children:"Understand the key concepts of Machine Learning with 100's of quizzes."}),Object(i.jsx)(bn,{children:Object(i.jsx)(T,{})})]})}),Object(i.jsx)(S.a,{children:Object(i.jsx)(_.a,{sm:12,children:Object(i.jsx)(wn,{children:Object(i.jsx)(un,{showSignupForm:!0,isPage:!1})})})})]})},On=function(n){n.match.params.id;return Object(i.jsx)(un,{isPage:!0})},vn=t(8),kn=function(){return Object(i.jsx)(o.a,{children:Object(i.jsxs)(vn.c,{children:[Object(i.jsx)(vn.a,{exact:!0,path:"/",component:xn}),Object(i.jsx)(vn.a,{exact:!0,path:"/quiz/:id",component:On})]})})},qn=function(){return Object(i.jsx)(kn,{})},Cn=(t(55),function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,57)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,s=e.getLCP,a=e.getTTFB;t(n),i(n),r(n),s(n),a(n)}))});c.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(o.a,{children:Object(i.jsx)(qn,{})})}),document.getElementById("root")),Cn()}},[[56,1,2]]]);
//# sourceMappingURL=main.182c194d.chunk.js.map