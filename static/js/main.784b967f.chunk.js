(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),l=a.n(r),o=a(1),u=a(4),i=a(5),s=a(6),d=a(8),b=a(7),m=function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,l=e.positivePercentage;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Good: ",t),c.a.createElement("p",null,"Neutral: ",a),c.a.createElement("p",null,"Bad: ",n),c.a.createElement("p",null,"Total: ",r),c.a.createElement("p",null,"Positive Feedback: ",isNaN(l)?0:l,"%"))},h=function(e){var t=e.options,a=e.onLeaveFeedback;return t.map((function(e){return c.a.createElement("button",{key:e,name:e,onClick:a},e)}))},k=function(e){var t=e.title,a=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,t),a)},f=function(e){return c.a.createElement("h2",null,e.message)},g={good:0,neutral:0,bad:0},p=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state=Object(u.a)({},g),e.addFeedback=function(t){t.persist(),e.setState((function(e){return Object(o.a)({},t.target.name,e[t.target.name]+1)}))},e}return Object(s.a)(a,[{key:"countTotalFeedback",value:function(){return Object.values(this.state).reduce((function(e,t){return e+=t}),0)}},{key:"countPositiveFeedbackPercentage",value:function(){return Math.round(this.state.good/this.countTotalFeedback()*100)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(k,{title:"Please leave feedback"},c.a.createElement(h,{options:Object.keys(this.state),onLeaveFeedback:this.addFeedback})),c.a.createElement(k,{title:"Statistics"},this.countTotalFeedback()>0?c.a.createElement(m,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):c.a.createElement(f,{message:"No feedback given"})))}}]),a}(n.Component);a(14),a(15);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.784b967f.chunk.js.map