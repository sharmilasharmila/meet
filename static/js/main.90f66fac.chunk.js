(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(7),s=n.n(r),c=(n(12),n(2)),o=n(3),l=n(5),u=n(4),h=(n(13),n(0)),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={showHideDetails:!1},e.handleShowHideButton=function(){!0===e.state.showHideDetails?e.setState({showHideDetails:!1}):e.setState({showHideDetails:!0})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"eventSummary",children:[Object(h.jsx)("h1",{children:this.props.summary}),Object(h.jsx)("p",{children:function(){return e.props.start.dateTime}}),Object(h.jsx)("p",{className:"locations",children:this.props.location}),this.state.showHideDetails&&Object(h.jsxs)("div",{className:"event-details",children:[Object(h.jsx)("h2",{children:"About event:"}),Object(h.jsx)("a",{href:this.props.htmlLink,children:"See Details on Google Calendar"}),Object(h.jsx)("p",{children:this.props.description})]}),Object(h.jsx)("button",{className:"detailsButton",onClick:function(){return e.handleShowHideButton()},children:this.state.showHideDetails?"hide-details":"show details"})]})}}]),n}(a.Component),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.events;return this.props.events?Object(h.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(d,{event:e})},e.id)}))}):Object(h.jsx)("div",{className:"EventList"})}}]),n}(a.Component),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={query:"",suggestions:[]},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"CitySearch",children:[Object(h.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),Object(h.jsxs)("ul",{className:"suggestions",children:[this.state.suggestions.map((function(t){return Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(h.jsx)("li",{children:Object(h.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={eventValue:32},e.handleEventInputChanged=function(t){var n=t.target.value;e.setState({eventValue:n})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"numberOfEvent",children:[Object(h.jsx)("label",{htmlFor:"numberOfEvent"}),Object(h.jsx)("input",{type:"number",name:"InputNumberOfEvent",className:"inputEvent",placeholder:"Enter Number of Events",value:this.state.eventValue,onChange:this.handleEventInputChanged})]})}}]),n}(a.Component),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(v,{}),Object(h.jsx)(p,{}),Object(h.jsx)(j,{})]})}}]),n}(a.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):g(t,e)}))}}(),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.90f66fac.chunk.js.map