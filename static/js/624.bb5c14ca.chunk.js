/*! For license information please see 624.bb5c14ca.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[624],{76:function(t,e,r){r.d(e,{Bt:function(){return f},DD:function(){return u},Tg:function(){return i},on:function(){return c},y:function(){return s}});var n=r(165),o=r(861),a="ad45530c40a43b1ba52c40045584bc7b",i=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var e,r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(a));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r.results);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e,r){var o,i;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&language=en-US&query=").concat(e,"&page=").concat(r,"&include_adult=false"));case 2:return o=t.sent,t.next=5,o.json();case 5:return i=t.sent,t.abrupt("return",i.results);case 7:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),u=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var r,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(a,"&language=en-US"));case 2:return r=t.sent,t.next=5,r.json();case 5:return o=t.sent,t.abrupt("return",o);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var r,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(a,"&language=en-US"));case 2:return r=t.sent,t.next=5,r.json();case 5:return o=t.sent,t.abrupt("return",o.cast);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var r,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(a,"&language=en-US"));case 2:return r=t.sent,t.next=5,r.json();case 5:return o=t.sent,t.abrupt("return",o.results);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},624:function(t,e,r){r.r(e),r.d(e,{default:function(){return g}});var n=r(165),o=r(861),a=r(439),i=r(791),c=r(689),u=r(87),s="Movies_movieLink__ERyJ6",f=r(76),h="Input_input__E5rzA",l="Input_buttonSearch__Vcc2N",p=r(184),v=function(t){var e=t.onSubmit;return(0,p.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r=t.currentTarget,n=r.elements.search.value;r.reset(),e(n)},children:[(0,p.jsx)("input",{type:"text",name:"search",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",className:h}),(0,p.jsx)("button",{type:"submit",className:l,children:"Search"})]})},d="ButtonLoad_buttonLoad__bcZww",y=function(t){var e=t.onClick;return(0,p.jsx)("button",{onClick:e,className:d,children:"Load more"})},m=r(609),g=function(){var t=(0,c.TH)(),e=(0,i.useState)([]),r=(0,a.Z)(e,2),h=r[0],l=r[1],d=(0,i.useState)(!1),g=(0,a.Z)(d,2),w=g[0],x=g[1],b=(0,i.useState)(1),_=(0,a.Z)(b,2),k=_[0],L=_[1],j=(0,u.lr)(),Z=(0,a.Z)(j,2),E=Z[0],S=Z[1],O=E.get("query");(0,i.useEffect)((function(){if(null!==O){var t=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(!0),L(1),t.prev=2,t.next=5,(0,f.on)(O,1);case 5:e=t.sent,l(e),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.error(t.t0);case 12:return t.prev=12,x(!1),L((function(t){return t+1})),t.finish(12);case 16:case"end":return t.stop()}}),t,null,[[2,9,12,16]])})));return function(){return t.apply(this,arguments)}}();t()}}),[O]);var N=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(!0),t.prev=1,t.next=4,(0,f.on)(O,k);case 4:e=t.sent,l(h.concat(e)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:return t.prev=11,x(!1),L(k+1),t.finish(11);case 15:case"end":return t.stop()}}),t,null,[[1,8,11,15]])})));return function(){return t.apply(this,arguments)}}();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(v,{onSubmit:function(t){S({query:t})}}),(0,p.jsx)("ul",{children:h.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)(u.rU,{id:e.id,to:"/movies/".concat(e.id),state:{from:t},className:s,children:e.original_title})},e.id)}))}),w&&(0,p.jsx)(m.a,{}),h.length>0&&(0,p.jsx)(y,{onClick:N})]})}},861:function(t,e,r){function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(2);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(N){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),c=new E(n||[]);return a(i,"_invoke",{value:k(t,r,c)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=h;var p={};function v(){}function d(){}function y(){}var m={};f(m,c,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(S([])));w&&w!==e&&r.call(w,c)&&(m=w);var x=y.prototype=v.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function o(a,i,c,u){var s=l(t[a],t,i);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==(0,n.Z)(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var i;a(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function k(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function Z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function S(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=y,a(x,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:d,configurable:!0}),d.displayName=f(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,f(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(_.prototype),f(_.prototype,u,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(h(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(x),f(x,s,"Generator"),f(x,c,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Z),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),Z(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;Z(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}}}]);
//# sourceMappingURL=624.bb5c14ca.chunk.js.map