(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(7),r=n.n(c),i=(n(12),n(2)),l=n(3),u=n(5),o=n(4),h=(n(13),n(0)),j=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={showDetails:!1},a}return Object(l.a)(n,[{key:"handleShowDetails",value:function(e){this.setState({showDetails:e})}},{key:"render",value:function(){var e,t=this,n=this.props.event,a=n.summary,s=n.location,c=n.description,r=n.link,i=this.props.event.start;return e=this.state.showDetails?Object(h.jsxs)("div",{className:"expanded",children:[Object(h.jsx)("h2",{children:"About event"}),Object(h.jsx)("p",{className:"description",children:c}),Object(h.jsx)("a",{className:"link",href:r,children:"See details on Google Calendar"}),Object(h.jsx)("button",{className:"detailsButton",onClick:function(){return t.handleShowDetails(!1)},children:"Hide details"})]}):Object(h.jsx)("button",{className:"detailsButton",onClick:function(){return t.handleShowDetails(!0)},children:"Show Details"}),Object(h.jsxs)("div",{className:"event",children:[Object(h.jsx)("h1",{className:"summary",children:a}),Object(h.jsx)("p",{className:"date",children:i}),Object(h.jsx)("p",{className:"location",children:s}),e]})}}]),n}(a.Component),d=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(h.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(j,{event:e})},e.id)}))})}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={query:"Munich",suggestions:[]},e.handleItemClicked=function(t){e.setState({query:t})},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"CitySearch",children:[Object(h.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),Object(h.jsxs)("ul",{className:"suggestions",children:[this.state.suggestions.map((function(t){return Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(h.jsx)("li",{children:Object(h.jsx)("b",{children:"See all cities"})},"all"),";"]})]})}}]),n}(a.Component),O=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={eventValue:32},e.handleEventInputChanged=function(t){var n=t.target.value;e.setState({eventValue:n})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"event-number",children:[Object(h.jsx)("label",{htmlFor:"numberOfEvent"}),Object(h.jsx)("input",{type:"number",name:"numberOfEvent",className:"event-number-input",placeholder:"Enter Number of Events",value:this.state.eventValue,onChange:this.handleEventInputChanged})]})}}]),n}(a.Component),p=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(b,{}),Object(h.jsx)(O,{}),Object(h.jsx)(d,{})]})}}]),n}(a.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),v()}},[[15,1,2]]]);
//# sourceMappingURL=main.a82b9cc0.chunk.js.map