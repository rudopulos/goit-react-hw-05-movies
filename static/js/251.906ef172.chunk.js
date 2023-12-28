/*! For license information please see 251.906ef172.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[251],{251:function(t,r,e){e.r(r),e.d(r,{default:function(){return C}});var n,o,i,a,c,u,s,l,h,f,p=e(861),d=e(439),v=e(791),g=e(168),y=e(978),m=y.ZP.div(n||(n=(0,g.Z)(["\n  padding-left: 15px;\n  padding-right: 15px;\n  display: flex;\n  gap: 15px;\n"]))),x=y.ZP.img(o||(o=(0,g.Z)(["\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]))),w=y.ZP.div(i||(i=(0,g.Z)([""]))),b=y.ZP.h2(a||(a=(0,g.Z)([""]))),j=y.ZP.p(c||(c=(0,g.Z)([""]))),L=y.ZP.h3(u||(u=(0,g.Z)([""]))),_=e(184),E=function(t){var r=t.movieDetails,e=r.poster_path,n=r.title,o=r.vote_average,i=r.overview,a=r.genres,c=e&&"https://image.tmdb.org/t/p/w300".concat(e);return(0,_.jsxs)(m,{children:[(0,_.jsx)(x,{src:c,alt:n,width:"200"}),(0,_.jsxs)(w,{children:[(0,_.jsx)(b,{children:n}),(0,_.jsxs)(j,{children:["User Score: ",Math.round(100*o/10),"%"]}),(0,_.jsx)(L,{children:"Overview"}),(0,_.jsx)(j,{children:i}),(0,_.jsx)(L,{children:"Genres"}),(0,_.jsx)(j,{children:null===a||void 0===a?void 0:a.map((function(t){return t.name})).join(", ")})]})]})},Z=e(689),P=e(727),O=e(87),k=y.ZP.div(s||(s=(0,g.Z)(["\n  padding-top: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n"]))),G=(0,y.ZP)(O.rU)(l||(l=(0,g.Z)(["\n  margin-left: 15px;\n  padding: 4px 8px;\n  border: 1px solid #808080;\n  border-radius: 5px;\n  color: #000;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n"]))),S=y.ZP.div(h||(h=(0,g.Z)(["\n  padding-left: 15px;\n  padding-right: 15px;\n  border-top: 1px solid #a3a3a3;\n  border-bottom: 1px solid #a3a3a3;\n  width: 100vw;\n"]))),N=y.ZP.p(f||(f=(0,g.Z)(["\n  font-size: 18px;\n"]))),F=e(225);function T(){T=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(O){u=function(t,r,e){return t[r]=e}}function s(t,r,e,o){var i=r&&r.prototype instanceof f?r:f,a=Object.create(i.prototype),c=new E(o||[]);return n(a,"_invoke",{value:b(t,e,c)}),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(O){return{type:"throw",arg:O}}}t.wrap=s;var h={};function f(){}function p(){}function d(){}var v={};u(v,i,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(Z([])));y&&y!==r&&e.call(y,i)&&(v=y);var m=d.prototype=f.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function w(t,r){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&e.call(h,"__await")?r.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function b(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=l(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function j(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,j(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function L(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function Z(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=d,n(m,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},x(w.prototype),u(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new w(s(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(m),u(m,c,"Generator"),u(m,i,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=Z,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:Z(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}var C=function(){var t,r=(0,v.useState)({}),e=(0,d.Z)(r,2),n=e[0],o=e[1],i=(0,Z.TH)(),a=(0,v.useRef)(null===(t=i.state)||void 0===t?void 0:t.from),c=(0,Z.UO)().movieId;return(0,v.useEffect)((function(){var t=function(){var t=(0,p.Z)(T().mark((function t(r){var e;return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P.TP(r);case 3:e=t.sent,o(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}();t(c)}),[c]),(0,_.jsxs)(k,{children:[(0,_.jsx)(G,{to:a.current,children:"\u2190 Go back"}),(0,_.jsx)(E,{movieDetails:n}),(0,_.jsxs)(S,{children:[(0,_.jsx)(N,{children:"Additional information"}),(0,_.jsxs)(F.aV,{children:[(0,_.jsx)(F.HC,{children:(0,_.jsx)(F.Fg,{to:"cast",state:a.current,children:"Cast"})}),(0,_.jsx)(F.HC,{children:(0,_.jsx)(F.Fg,{to:"reviews",children:"Reviews"})})]})]}),(0,_.jsx)(Z.j3,{})]})}}}]);
//# sourceMappingURL=251.906ef172.chunk.js.map