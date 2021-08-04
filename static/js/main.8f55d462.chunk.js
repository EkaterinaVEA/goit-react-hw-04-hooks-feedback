(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{18:function(e,n,t){},19:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var c,a,i,r,o,s,l,j,b,d,x,f=t(2),u=t.n(f),p=t(9),O=t.n(p),h=(t(18),t(6)),g=(t(19),t(3)),m=t(4),k=m.a.ul(c||(c=Object(g.a)(["\ndisplay: flex;\nflex-direction: column;\nfont-size: 20px;\ncolor: #727273;\nalign-items: center;\njustify-content: center;\n"]))),v=m.a.li(a||(a=Object(g.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n\nheight: 30px;\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n\n  & svg {\n      margin-left: 10px;\n  }\n"]))),y=t(5),z=t(11),w=t(12),F=t(1),S=function(e){var n=e.good,t=e.bad,c=e.neutral,a=e.total,i=e.positivePercentage;return Object(F.jsxs)(k,{children:[Object(F.jsxs)(v,{children:["Good:",n,Object(F.jsx)(y.a,{size:"25",color:"#00FF00"})]}),Object(F.jsxs)(v,{children:["Neutral:",c,Object(F.jsx)(y.b,{size:"25",color:"#FFD700"})]}),Object(F.jsxs)(v,{children:["Bad:",t,Object(F.jsx)(y.c,{size:"25",color:"#ff0000"})]}),Object(F.jsxs)(v,{children:["Total:",a,Object(F.jsx)(z.a,{size:"25",color:"#32CD32"})]}),Object(F.jsxs)(v,{children:["Positive feedback:",i,"%",Object(F.jsx)(w.a,{size:"25",color:"#B8860B"})]})]})},B=m.a.section(i||(i=Object(g.a)(["\npadding: 30px 0;\nwidth: 470px;\n"]))),C=m.a.h2(r||(r=Object(g.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmargin-top: 30px;\nmargin-bottom: 100px;\nmargin-left: auto;\nmargin-right: auto;\ntext-transform: uppercase;\nfont-size: 32px;\ntext-align: center;\ncolor: #727273;\n& svg {\nmargin-left: 15px;\n}\n"]))),P=m.a.main(o||(o=Object(g.a)(["\ndisplay: flex;\njustify-content: space-around;\nwidth: 1200px;\nborder-radius: 10px;\nborder: 1px solid #f0f0f3;\nmargin: 50px auto 0;\nbackground-color: #f0f0f3;\nbox-shadow: -10px -10px 30px 0 #ffffff, 10px 10px 30px 0 #aeaec040;\n"]))),D=function(e){var n=e.children;return Object(F.jsx)(P,{children:n})},J=t(8),M=function(e){var n=e.children,t=e.title;return Object(F.jsxs)(B,{children:[t&&Object(F.jsxs)(C,{children:[t,"Please leave feedback"===t&&Object(F.jsx)(J.a,{size:"35"}),"Statistics"===t&&Object(F.jsx)(J.b,{size:"35"})]}),n]})},N=m.a.div(s||(s=Object(g.a)(["\n  margin: 0 auto;\n  padding: 0 30px;\n"]))),T=function(e){var n=e.children;return Object(F.jsx)(N,{children:n})},E=m.a.button(l||(l=Object(g.a)(["\nwidth: 100px;\npadding: 5px 10px;\ndisplay: flex;\ncolor: #727273;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nborder: 1px solid #f0f0f3;\nborder-radius: 10px;\ncursor: pointer;\noutline: none;\n/* text-transform: capitalize; */\nfont-size: 18px;\nfont-weight: 500;\nbackground-color: transparent;\nbox-shadow: -10px -10px 30px 0 #ffffff, 10px 10px 30px 0 #aeaec040;\ntransition: all 250ms ease-in-out;\n&:hover,\n&:focus-visible {\ntransform: scale(1.2);\n}\n"]))),G=function(e){var n=e.feedback,t=e.onClick;return Object(F.jsxs)(E,{type:"button","data-feedback":n,onClick:t,children:["good"===n&&Object(F.jsx)(y.a,{size:"30",color:"#00FF00",style:{marginBottom:5}}),"neutral"===n&&Object(F.jsx)(y.b,{size:"30",color:"#FFD700",style:{marginBottom:5}}),"bad"===n&&Object(F.jsx)(y.c,{size:"30",color:"#ff0000",style:{marginBottom:5}}),n]})},I=m.a.ul(j||(j=Object(g.a)(["\ndisplay: flex;\njustify-content: center;\n"]))),q=m.a.li(b||(b=Object(g.a)(["\n  &:not(:last-child) {\n    margin-right: 50px;\n  }\n"]))),A=function(e){var n=e.options,t=e.onChangeStatistics;return n=Object.keys(n),Object(F.jsx)(I,{children:n.map((function(e){return Object(F.jsx)(q,{children:Object(F.jsx)(G,{feedback:e,onClick:t})},e)}))})},H=m.a.p(d||(d=Object(g.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\ntext-align: center;\nfont-size: 25px;\nfont-weight: 500;\ncolor: #727273;\n"]))),K=m.a.p(x||(x=Object(g.a)(["\nfont-size: 35px;\nmargin-bottom: 12px;\n"]))),L=function(e){var n=e.message,t=e.icon,c=void 0===t?"\ud83e\udd37":t;return Object(F.jsxs)(H,{children:[n,"   ...",Object(F.jsx)(K,{children:c})]})};var Q=function(){var e=Object(f.useState)(0),n=Object(h.a)(e,2),t=n[0],c=n[1],a=Object(f.useState)(0),i=Object(h.a)(a,2),r=i[0],o=i[1],s=Object(f.useState)(0),l=Object(h.a)(s,2),j=l[0],b=l[1],d=function(){return t+r+j},x=d(),u=function(){var e=d();return Math.round(100*t/e)}();return Object(F.jsxs)(D,{children:[Object(F.jsx)(M,{title:"Please leave feedback",children:Object(F.jsx)(T,{children:Object(F.jsx)(A,{options:{good:t,neutral:r,bad:j},onChangeStatistics:function(e){switch(e.currentTarget.dataset.feedback){case"good":c((function(e){return e+1}));break;case"neutral":o((function(e){return e+1}));break;case"bad":b((function(e){return e+1}));break;default:return}}})})}),Object(F.jsx)(M,{title:"Statistics",children:Object(F.jsx)(T,{children:x>0?Object(F.jsx)(S,{good:t,neutral:r,bad:j,total:x,positivePercentage:u}):Object(F.jsx)(L,{message:"No feedback given"})})})]})};O.a.render(Object(F.jsx)(u.a.StrictMode,{children:Object(F.jsx)(Q,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.8f55d462.chunk.js.map