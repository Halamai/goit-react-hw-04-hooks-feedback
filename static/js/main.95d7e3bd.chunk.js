(this["webpackJsonp-goit-react-hw-02-feedback"]=this["webpackJsonp-goit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(3),s=n.n(c),i=n(4),r=n(5),o=n(6),b=n(8),l=n(7),u=(n(13),n(0)),d=function(e){var t=e.options,n=e.onLeaveFeedback;return Object.keys(t).map((function(e){return Object(u.jsx)("button",{className:"btn",type:"button",name:e,onClick:n,children:e},e)}))},j=(n(15),function(e){var t=e.message;return Object(u.jsx)("p",{className:"title",children:t})}),h=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,s=e.positivePercentage;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"titleStatistic",children:"Statistics"}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Good:",t]}),Object(u.jsxs)("li",{children:["Neutral:",n]}),Object(u.jsxs)("li",{children:["Bad:",a]}),Object(u.jsxs)("li",{children:["Total:",c]}),Object(u.jsxs)("li",{children:["Positive feedback:",s,"%"]})]})]})},O=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.changeState=function(t){var n=t.target.name;e.setState((function(e){return Object(i.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),n=t?e.state.good/t*100:0;return Number(n).toFixed(0)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.title,t=this.countTotalFeedback(),n=this.countPositiveFeedbackPercentage();return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"titleFitback",children:e}),Object(u.jsx)(d,{onLeaveFeedback:this.changeState,options:this.state}),Object(u.jsx)("hr",{}),t?Object(u.jsx)(h,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:t,positivePercentage:n}):Object(u.jsx)(j,{message:"No feedback given"})]})}}]),n}(a.Component),f=O,g=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(f,{title:"Please leave feedback"})})};n(16);s.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.95d7e3bd.chunk.js.map