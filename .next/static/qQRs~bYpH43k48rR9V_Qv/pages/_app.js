(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{101:function(e,t,n){"use strict";var r=n(7);Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=v,t.default=void 0;var o=r(n(46)),a=r(n(14)),u=r(n(15)),i=r(n(23)),c=r(n(24)),f=r(n(25)),l=r(n(20)),s=r(n(0)),p=r(n(2)),d=r(n(102)),h=function(e){function t(){return(0,a.default)(this,t),(0,i.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return null}}]),t}(s.default.Component);(0,l.default)(h,"contextTypes",{headManager:p.default.object});var y="next-head";function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;return[s.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})]}var m=["name","httpEquiv","charSet","itemProp","property"],b=["article:tag","og:image","og:image:alt","og:image:width","og:image:height","og:image:type","og:image:secure_url","og:image:url"];var g=(0,d.default)(function(e){return e.map(function(e){return s.default.Children.toArray(e.props.children)}).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){return s.default.Fragment&&t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children)):e.concat(t)},[]).reverse().concat(v("")).filter(Boolean).filter((t=new o.default,n=new o.default,r=new o.default,a={},function(e){if(e.key&&0===e.key.indexOf(".$")){if(t.has(e.key))return!1;t.add(e.key)}switch(e.type){case"title":case"base":if(n.has(e.type))return!1;n.add(e.type);break;case"meta":for(var u=0,i=m.length;u<i;u++){var c=m[u];if(e.props.hasOwnProperty(c))if("charSet"===c){if(r.has(c))return!1;r.add(c)}else{var f=e.props[c],l=a[c]||new o.default;if(l.has(f)&&-1===b.indexOf(f))return!1;l.add(f),a[c]=l}}}return!0})).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+y,r=e.key||t;return s.default.cloneElement(e,{key:r,className:n})});var t,n,r,a},function(e){this.context&&this.context.headManager&&this.context.headManager.updateHead(e)},function(e){return e})(h);t.default=g},102:function(e,t,n){"use strict";var r=n(27),o=n(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reduceComponentsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var o,v=new d.default;function m(r){o=e((0,p.default)(v)),b.canUseDOM?t.call(r,o):n&&(o=n(o))}var b=function(e){function t(e){var n;return(0,a.default)(this,t),n=(0,u.default)(this,(0,i.default)(t).call(this,e)),t.canUseDOM||(v.add((0,l.default)((0,l.default)(n))),m((0,l.default)((0,l.default)(n)))),n}return(0,f.default)(t,e),(0,c.default)(t,null,[{key:"peek",value:function(){return o}},{key:"rewind",value:function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=o;return o=void 0,v.clear(),e}}]),(0,c.default)(t,[{key:"componentDidMount",value:function(){v.add(this),m(this)}},{key:"componentDidUpdate",value:function(){m(this)}},{key:"componentWillUnmount",value:function(){v.delete(this),m(this)}},{key:"render",value:function(){return h.default.createElement(r,null,this.props.children)}}]),t}(h.Component);return(0,s.default)(b,"canUseDOM","undefined"!=typeof window),(0,s.default)(b,"contextTypes",r.contextTypes),(0,s.default)(b,"displayName","SideEffect(".concat((0,y.getDisplayName)(r),")")),b}};var a=o(n(14)),u=o(n(23)),i=o(n(24)),c=o(n(15)),f=o(n(25)),l=o(n(55)),s=o(n(20)),p=o(n(103)),d=o(n(46)),h=r(n(0)),y=n(30)},103:function(e,t,n){var r=n(104),o=n(105),a=n(113);e.exports=function(e){return r(e)||o(e)||a()}},104:function(e,t,n){var r=n(68);e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},105:function(e,t,n){var r=n(106),o=n(110);e.exports=function(e){if(o(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},106:function(e,t,n){e.exports=n(107)},107:function(e,t,n){n(26),n(108),e.exports=n(3).Array.from},108:function(e,t,n){"use strict";var r=n(22),o=n(6),a=n(41),u=n(92),i=n(93),c=n(51),f=n(109),l=n(67);o(o.S+o.F*!n(96)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,o,s,p=a(e),d="function"==typeof this?this:Array,h=arguments.length,y=h>1?arguments[1]:void 0,v=void 0!==y,m=0,b=l(p);if(v&&(y=r(y,h>2?arguments[2]:void 0,2)),null==b||d==Array&&i(b))for(n=new d(t=c(p.length));t>m;m++)f(n,m,v?y(p[m],m):p[m]);else for(s=b.call(p),n=new d;!(o=s.next()).done;m++)f(n,m,v?u(s,y,[o.value,m],!0):o.value);return n.length=m,n}})},109:function(e,t,n){"use strict";var r=n(18),o=n(44);e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}},110:function(e,t,n){e.exports=n(111)},111:function(e,t,n){n(43),n(26),e.exports=n(112)},112:function(e,t,n){var r=n(53),o=n(12)("iterator"),a=n(42);e.exports=n(3).isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||a.hasOwnProperty(r(t))}},113:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},115:function(e,t,n){e.exports=n(127)},116:function(e,t,n){e.exports=n(272)},155:function(e,t,n){e.exports=n(101)},271:function(e,t,n){__NEXT_REGISTER_PAGE("/_app",function(){return e.exports=n(314),{page:e.exports.default}})},272:function(e,t,n){"use strict";var r=n(27),o=n(7);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=E,t.Container=t.default=void 0;var a=o(n(64)),u=o(n(65)),i=o(n(273)),c=o(n(14)),f=o(n(15)),l=o(n(23)),s=o(n(24)),p=o(n(25)),d=o(n(20)),h=r(n(0)),y=o(n(2)),v=n(30),m=n(69),b=function(e){function t(){return(0,c.default)(this,t),(0,l.default)(this,(0,s.default)(t).apply(this,arguments))}var n;return(0,p.default)(t,e),(0,f.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,m.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=E(t);return h.default.createElement(g,null,h.default.createElement(n,(0,i.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:(n=(0,u.default)(a.default.mark(function e(t){var n,r,o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,(0,v.loadGetInitialProps)(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(h.Component);t.default=b,(0,d.default)(b,"childContextTypes",{headManager:y.default.object,router:y.default.object});var g=function(e){function t(){return(0,c.default)(this,t),(0,l.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,p.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(h.Component);t.Container=g;var w=(0,v.execOnce)(function(){0});function E(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return w(),r},get pathname(){return w(),t},get asPath(){return w(),n},back:function(){w(),e.back()},push:function(t,n){return w(),e.push(t,n)},pushTo:function(t,n){w();var r=n?t:null,o=n||t;return e.push(r,o)},replace:function(t,n){return w(),e.replace(t,n)},replaceTo:function(t,n){w();var r=n?t:null,o=n||t;return e.replace(r,o)}}}},273:function(e,t,n){var r=n(100);function o(){return e.exports=o=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}e.exports=o},314:function(e,t,n){"use strict";n.r(t);var r=n(115),o=n.n(r),a=n(0),u=n.n(a),i=n(116),c=n.n(i),f=n(1),l=n(155),s=n.n(l),p=function(){return u.a.createElement(s.a,null,u.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),u.a.createElement("meta",{charSet:"utf-8"}),u.a.createElement("link",{rel:"shortcut icon",href:"/static/favicon.png"}),u.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/static/nprogress.css"}),u.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Poppins:300,400,500,700|Source+Sans+Pro",rel:"stylesheet"}),u.a.createElement("script",{src:"https://cdn.linearicons.com/free/1.0.0/svgembedder.min.js"}),u.a.createElement("title",null,"Tom Blaymire | Front End Deveoper | Leeds UK"))};function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  @font-face {\n    font-family: 'radnika_next';\n    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');\n    font-weight: normal;\n    font-style: normal;\n    font-family: 'Source Sans Pro', sans-serif;\n  }\n  html {\n    box-sizing: border-box;\n    font-size: 10px;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  body {\n    padding: 0;\n    margin: 0;\n    font-size: 1.5rem;\n    line-height: 2;\n    font-family: 'Poppins', sans-serif;\n  }\n  a {\n    text-decoration: none;\n    color: ",";\n    font-weight: bold;\n  }\n"]);return b=function(){return e},e}var g={red:"#FF0000",black:"#000000",grey:"#494949",greyDark:"#2a363b",greyLight:"#DADADA",white:"#FFFFFF",lightgrey:"#E1E1E1",green:"#3eaca8",seaGreen:"#e5eec1",offWhite:"#EDEDED",maxWidth:"1000px",bs:"0 12px 24px 0 rgba(0, 0, 0, 0.09)",fontPrimary:"Poppins",fontSecondary:"Source Sans Pro"},w=f.b.div.withConfig({displayName:"Page__StyledPage",componentId:"sc-18r0dlm-0"})(["background:white;"]);Object(f.c)(b(),g.green);var E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,v(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,a["Component"]),n=t,(r=[{key:"render",value:function(){return u.a.createElement(f.a,{theme:g},u.a.createElement(w,null,u.a.createElement(p,null),this.props.children))}}])&&h(n.prototype,r),o&&h(n,o),t}();function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t,n,r,o,a,u){try{var i=e[a](u),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),O(this,S(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,c.a),n=t,r=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return u.a.createElement(i.Container,null,u.a.createElement(E,null,u.a.createElement(t,n)))}}],a=[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(t){var n,r,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.Component,t.router,r=t.ctx,a={},!n.getInitialProps){e.next=6;break}return e.next=5,n.getInitialProps(r);case 5:a=e.sent;case 6:return e.abrupt("return",{pageProps:a});case 7:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function u(e){x(a,r,o,u,i,"next",e)}function i(e){x(a,r,o,u,i,"throw",e)}u(void 0)})});return function(e){return t.apply(this,arguments)}}()}],r&&P(n.prototype,r),a&&P(n,a),t}();t.default=j}},[[271,0,1]]]);