/*! For license information please see 871.7f5d73a6.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[871],{76:function(t,r,e){e.d(r,{Bt:function(){return h},DD:function(){return u},Tg:function(){return a},on:function(){return c},y:function(){return s}});var n=e(165),o=e(861),i="ad45530c40a43b1ba52c40045584bc7b",a=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var r,e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 3:return r=t.sent,t.next=6,r.json();case 6:return e=t.sent,t.abrupt("return",e.results);case 10:throw t.prev=10,t.t0=t.catch(0),console.error(t.t0),t.t0;case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r,e){var o,a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(r,"&page=").concat(e,"&include_adult=false"));case 3:return o=t.sent,t.next=6,o.json();case 6:return a=t.sent,t.abrupt("return",a.results);case 10:throw t.prev=10,t.t0=t.catch(0),console.error(t.t0),t.t0;case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(r,e){return t.apply(this,arguments)}}(),u=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var e,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(i,"&language=en-US"));case 3:return e=t.sent,t.next=6,e.json();case 6:return o=t.sent,t.abrupt("return",o);case 10:throw t.prev=10,t.t0=t.catch(0),console.error(t.t0),t.t0;case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(r){return t.apply(this,arguments)}}(),s=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var e,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return e=t.sent,t.next=6,e.json();case 6:return o=t.sent,t.abrupt("return",o.cast);case 10:throw t.prev=10,t.t0=t.catch(0),console.error(t.t0),t.t0;case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var e,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=").concat(i,"&language=en-US"));case 3:return e=t.sent,t.next=6,e.json();case 6:return o=t.sent,t.abrupt("return",o.results);case 10:throw t.prev=10,t.t0=t.catch(0),console.error(t.t0),t.t0;case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(r){return t.apply(this,arguments)}}()},871:function(t,r,e){e.r(r);var n=e(165),o=e(861),i=e(439),a=e(791),c=e(689),u=e(76),s=e(609),h=e(184);r.default=function(){var t=(0,a.useState)([]),r=(0,i.Z)(t,2),e=r[0],f=r[1],l=(0,a.useState)(!1),p=(0,i.Z)(l,2),v=p[0],d=p[1],y=(0,c.UO)().movieId;return(0,a.useEffect)((function(){var t=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d(!0),f([]),t.next=4,(0,u.Bt)(y);case 4:r=t.sent,f(r),d(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[y]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{children:"Reviews"}),(0,h.jsx)("ul",{children:0===e.length?(0,h.jsx)("p",{children:"There is no reviews"}):e.map((function(t){return(0,h.jsxs)("li",{children:[(0,h.jsxs)("p",{children:["Author: ",t.author]}),(0,h.jsx)("p",{children:t.content})]},t.id)}))}),v&&(0,h.jsx)(s.a,{})]})}},861:function(t,r,e){function n(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}e.d(r,{Z:function(){return o}})},165:function(t,r,e){e.d(r,{Z:function(){return o}});var n=e(2);function o(){o=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(P){h=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,a=Object.create(o.prototype),c=new Z(n||[]);return i(a,"_invoke",{value:j(t,e,c)}),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=f;var p={};function v(){}function d(){}function y(){}var g={};h(g,c,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(O([])));w&&w!==r&&e.call(w,c)&&(g=w);var x=y.prototype=v.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(r){h(t,r,(function(t){return this._invoke(r,t)}))}))}function L(t,r){function o(i,a,c,u){var s=l(t[i],t,a);if("throw"!==s.type){var h=s.arg,f=h.value;return f&&"object"==(0,n.Z)(f)&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):r.resolve(f).then((function(t){h.value=t,c(h)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return a=a?a.then(n,n):n()}})}function j(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=k(a,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=l(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function k(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,k(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function Z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function O(t){if(t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=y,i(x,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:d,configurable:!0}),d.displayName=h(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,h(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(L.prototype),h(L.prototype,u,(function(){return this})),t.AsyncIterator=L,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new L(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(x),h(x,s,"Generator"),h(x,c,(function(){return this})),h(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,Z.prototype={constructor:Z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:O(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}}}]);
//# sourceMappingURL=871.7f5d73a6.chunk.js.map