(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),a=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=n(0),m=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={date:new Date},t.timerId=0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({date:new Date}),console.info(t.state.date.toLocaleTimeString())}),1e3)}},{key:"componentDidUpdate",value:function(t){this.props.clockName!==t.clockName&&console.debug("Renamed from ".concat(t.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:this.props.clockName})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:this.state.date.toLocaleTimeString()})]})}}]),n}(l.Component);n(13);function d(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var h=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={hasClock:!0,clockName:d()},t.timerId=0,t.clickEvent=function(e){0===e.button&&t.setState({hasClock:!0}),2===e.button&&t.setState({hasClock:!1})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;document.addEventListener("mouseup",this.clickEvent),this.timerId=window.setInterval((function(){t.setState({clockName:d()})}),3300)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mouseup",this.clickEvent),window.clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state,e=t.hasClock,n=t.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),e&&Object(u.jsx)(m,{clockName:n})]})}}]),n}(l.Component);o.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6aaa0ba5.chunk.js.map