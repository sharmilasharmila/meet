(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(7),r=n.n(c),i=(n(12),n(2)),l=n(3),u=n(5),o=n(4),j=(n(13),n(0)),h=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={showDetails:!1},a}return Object(l.a)(n,[{key:"handleShowDetails",value:function(e){this.setState({showDetails:e})}},{key:"render",value:function(){var e,t=this,n=this.props.event,a=n.summary,s=n.location,c=n.description,r=n.link,i=this.props.event.start;return e=this.state.showDetails?Object(j.jsxs)("div",{className:"expanded",children:[Object(j.jsx)("h2",{children:"About event"}),Object(j.jsx)("p",{className:"description",children:c}),Object(j.jsx)("a",{className:"link",href:r,children:"See details on Google Calendar"}),Object(j.jsx)("button",{className:"detailsButton",onClick:function(){return t.handleShowDetails(!1)},children:"Hide details"})]}):Object(j.jsx)("button",{className:"detailsButton",onClick:function(){return t.handleShowDetails(!0)},children:"Show Details"}),Object(j.jsxs)("div",{className:"event",children:[Object(j.jsx)("h1",{className:"summary",children:a}),Object(j.jsx)("p",{className:"date",children:i}),Object(j.jsx)("p",{className:"location",children:s}),e]})}}]),n}(a.Component),d=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(j.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(h,{event:e})},e.id)}))})}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={query:"",suggestions:[]},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"CitySearch",children:[Object(j.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),Object(j.jsxs)("ul",{className:"suggestions",children:[this.state.suggestions.map((function(t){return Object(j.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(j.jsx)("li",{children:Object(j.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),O=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={eventValue:32},e.handleEventInputChanged=function(t){var n=t.target.value;e.setState({eventValue:n})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"event-number",children:[Object(j.jsx)("label",{htmlFor:"numberOfEvent"}),Object(j.jsx)("input",{type:"number",name:"numberOfEvent",className:"event-number-input",placeholder:"Enter Number of Events",value:this.state.eventValue,onChange:this.handleEventInputChanged})]})}}]),n}(a.Component),p=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{}),Object(j.jsx)(O,{}),Object(j.jsx)(d,{})]})}}]),n}(a.Component);r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5f17696b.chunk.js.map