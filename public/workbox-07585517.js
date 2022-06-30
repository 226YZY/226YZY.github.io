<link rel="stylesheet" class="aplayer-secondary-style-marker" href="https://npm.elemecdn.com/aplayer/dist/APlayer.min.css"><script src="https://npm.elemecdn.com/aplayer/dist/APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="/js/Meting.min.js"></script>define("./workbox-07585517.js",["exports"],(function(t){"use strict";try{self["workbox:core:6.2.4"]&amp;&amp;_()}catch(t){}const e=(t,...e)=&gt;{let s=t;return e.length&gt;0&amp;&amp;(s+=` :: ${JSON.stringify(e)}`),s};class s extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:6.2.4"]&amp;&amp;_()}catch(t){}const r=t=&gt;t&amp;&amp;"object"==typeof t?t:{handle:t};class n{constructor(t,e,s="GET"){this.handler=r(e),this.match=t,this.method=s}setCatchHandler(t){this.catchHandler=r(t)}}class i extends n{constructor(t,e,s){super((({url:e})=&gt;{const s=t.exec(e.href);if(s&amp;&amp;(e.origin===location.origin||0===s.index))return s.slice(1)}),e,s)}}class o{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(t=&gt;{const{request:e}=t,s=this.handleRequest({request:e,event:t});s&amp;&amp;t.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(t=&gt;{if(t.data&amp;&amp;"CACHE_URLS"===t.data.type){const{payload:e}=t.data,s=Promise.all(e.urlsToCache.map((e=&gt;{"string"==typeof e&amp;&amp;(e=[e]);const s=new Request(...e);return this.handleRequest({request:s,event:t})})));t.waitUntil(s),t.ports&amp;&amp;t.ports[0]&amp;&amp;s.then((()=&gt;t.ports[0].postMessage(!0)))}}))}handleRequest({request:t,event:e}){const s=new URL(t.url,location.href);if(!s.protocol.startsWith("http"))return;const r=s.origin===location.origin,{params:n,route:i}=this.findMatchingRoute({event:e,request:t,sameOrigin:r,url:s});let o=i&amp;&amp;i.handler;const a=t.method;if(!o&amp;&amp;this.i.has(a)&amp;&amp;(o=this.i.get(a)),!o)return;let c;try{c=o.handle({url:s,request:t,event:e,params:n})}catch(t){c=Promise.reject(t)}const h=i&amp;&amp;i.catchHandler;return c instanceof Promise&amp;&amp;(this.o||h)&amp;&amp;(c=c.catch((async r=&gt;{if(h)try{return await h.handle({url:s,request:t,event:e,params:n})}catch(t){t instanceof Error&amp;&amp;(r=t)}if(this.o)return this.o.handle({url:s,request:t,event:e});throw r}))),c}findMatchingRoute({url:t,sameOrigin:e,request:s,event:r}){const n=this.t.get(s.method)||[];for(const i of n){let n;const o=i.match({url:t,sameOrigin:e,request:s,event:r});if(o)return n=o,(Array.isArray(n)&amp;&amp;0===n.length||o.constructor===Object&amp;&amp;0===Object.keys(o).length||"boolean"==typeof o)&amp;&amp;(n=void 0),{route:i,params:n}}return{}}setDefaultHandler(t,e="GET"){this.i.set(e,r(t))}setCatchHandler(t){this.o=r(t)}registerRoute(t){this.t.has(t.method)||this.t.set(t.method,[]),this.t.get(t.method).push(t)}unregisterRoute(t){if(!this.t.has(t.method))throw new s("unregister-route-but-not-found-with-method",{method:t.method});const e=this.t.get(t.method).indexOf(t);if(!(e&gt;-1))throw new s("unregister-route-route-not-registered");this.t.get(t.method).splice(e,1)}}let a;const c=()=&gt;(a||(a=new o,a.addFetchListener(),a.addCacheListener()),a);const h={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},u=t=&gt;[h.prefix,t,h.suffix].filter((t=&gt;t&amp;&amp;t.length&gt;0)).join("-"),f=t=&gt;t||u(h.runtime);function l(t,e){const s=new URL(t);for(const t of e)s.searchParams.delete(t);return s.href}class w{constructor(){this.promise=new Promise(((t,e)=&gt;{this.resolve=t,this.reject=e}))}}const d=new Set;try{self["workbox:strategies:6.2.4"]&amp;&amp;_()}catch(t){}function p(t){return"string"==typeof t?new Request(t):t}class y{constructor(t,e){this.h={},Object.assign(this,e),this.event=e.event,this.u=t,this.l=new w,this.p=[],this.v=[...t.plugins],this.m=new Map;for(const t of this.v)this.m.set(t,{});this.event.waitUntil(this.l.promise)}async fetch(t){const{event:e}=this;let r=p(t);if("navigate"===r.mode&amp;&amp;e instanceof FetchEvent&amp;&amp;e.preloadResponse){const t=await e.preloadResponse;if(t)return t}const n=this.hasCallback("fetchDidFail")?r.clone():null;try{for(const t of this.iterateCallbacks("requestWillFetch"))r=await t({request:r.clone(),event:e})}catch(t){if(t instanceof Error)throw new s("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const i=r.clone();try{let t;t=await fetch(r,"navigate"===r.mode?void 0:this.u.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))t=await s({event:e,request:i,response:t});return t}catch(t){throw n&amp;&amp;await this.runCallbacks("fetchDidFail",{error:t,event:e,originalRequest:n.clone(),request:i.clone()}),t}}async fetchAndCachePut(t){const e=await this.fetch(t),s=e.clone();return this.waitUntil(this.cachePut(t,s)),e}async cacheMatch(t){const e=p(t);let s;const{cacheName:r,matchOptions:n}=this.u,i=await this.getCacheKey(e,"read"),o=Object.assign(Object.assign({},n),{cacheName:r});s=await caches.match(i,o);for(const t of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await t({cacheName:r,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(t,e){const r=p(t);var n;await(n=0,new Promise((t=&gt;setTimeout(t,n))));const i=await this.getCacheKey(r,"write");if(!e)throw new s("cache-put-with-no-response",{url:(o=i.url,new URL(String(o),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var o;const a=await this.g(e);if(!a)return!1;const{cacheName:c,matchOptions:h}=this.u,u=await self.caches.open(c),f=this.hasCallback("cacheDidUpdate"),w=f?await async function(t,e,s,r){const n=l(e.url,s);if(e.url===n)return t.match(e,r);const i=Object.assign(Object.assign({},r),{ignoreSearch:!0}),o=await t.keys(e,i);for(const e of o)if(n===l(e.url,s))return t.match(e,r)}(u,i.clone(),["__WB_REVISION__"],h):null;try{await u.put(i,f?a.clone():a)}catch(t){if(t instanceof Error)throw"QuotaExceededError"===t.name&amp;&amp;await async function(){for(const t of d)await t()}(),t}for(const t of this.iterateCallbacks("cacheDidUpdate"))await t({cacheName:c,oldResponse:w,newResponse:a.clone(),request:i,event:this.event});return!0}async getCacheKey(t,e){if(!this.h[e]){let s=t;for(const t of this.iterateCallbacks("cacheKeyWillBeUsed"))s=p(await t({mode:e,request:s,event:this.event,params:this.params}));this.h[e]=s}return this.h[e]}hasCallback(t){for(const e of this.u.plugins)if(t in e)return!0;return!1}async runCallbacks(t,e){for(const s of this.iterateCallbacks(t))await s(e)}*iterateCallbacks(t){for(const e of this.u.plugins)if("function"==typeof e[t]){const s=this.m.get(e),r=r=&gt;{const n=Object.assign(Object.assign({},r),{state:s});return e[t](n)};yield r}}waitUntil(t){return this.p.push(t),t}async doneWaiting(){let t;for(;t=this.p.shift();)await t}destroy(){this.l.resolve(null)}async g(t){let e=t,s=!1;for(const t of this.iterateCallbacks("cacheWillUpdate"))if(e=await t({request:this.request,response:e,event:this.event})||void 0,s=!0,!e)break;return s||e&amp;&amp;200!==e.status&amp;&amp;(e=void 0),e}}t.CacheFirst=class extends class{constructor(t={}){this.cacheName=f(t.cacheName),this.plugins=t.plugins||[],this.fetchOptions=t.fetchOptions,this.matchOptions=t.matchOptions}handle(t){const[e]=this.handleAll(t);return e}handleAll(t){t instanceof FetchEvent&amp;&amp;(t={event:t,request:t.request});const e=t.event,s="string"==typeof t.request?new Request(t.request):t.request,r="params"in t?t.params:void 0,n=new y(this,{event:e,request:s,params:r}),i=this.q(n,s,e);return[i,this.R(i,n,s,e)]}async q(t,e,r){let n;await t.runCallbacks("handlerWillStart",{event:r,request:e});try{if(n=await this.O(e,t),!n||"error"===n.type)throw new s("no-response",{url:e.url})}catch(s){if(s instanceof Error)for(const i of t.iterateCallbacks("handlerDidError"))if(n=await i({error:s,event:r,request:e}),n)break;if(!n)throw s}for(const s of t.iterateCallbacks("handlerWillRespond"))n=await s({event:r,request:e,response:n});return n}async R(t,e,s,r){let n,i;try{n=await t}catch(i){}try{await e.runCallbacks("handlerDidRespond",{event:r,request:s,response:n}),await e.doneWaiting()}catch(t){t instanceof Error&amp;&amp;(i=t)}if(await e.runCallbacks("handlerDidComplete",{event:r,request:s,response:n,error:i}),e.destroy(),i)throw i}}{async O(t,e){let r,n=await e.cacheMatch(t);if(!n)try{n=await e.fetchAndCachePut(t)}catch(t){t instanceof Error&amp;&amp;(r=t)}if(!n)throw new s("no-response",{url:t.url,error:r});return n}},t.clientsClaim=function(){self.addEventListener("activate",(()=&gt;self.clients.claim()))},t.registerRoute=function(t,e,r){let o;if("string"==typeof t){const s=new URL(t,location.href);o=new n((({url:t})=&gt;t.href===s.href),e,r)}else if(t instanceof RegExp)o=new i(t,e,r);else if("function"==typeof t)o=new n(t,e,r);else{if(!(t instanceof n))throw new s("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});o=t}return c().registerRoute(o),o}}));
//# sourceMappingURL=workbox-07585517.js.map
<script type="text&#x2F;javascript" src="https://unpkg.com/kity@2.0.4/dist/kity.min.js"></script><script type="text&#x2F;javascript" src="https://unpkg.com/kityminder-core@1.4.50/dist/kityminder.core.min.js"></script><script defer="true" type="text&#x2F;javascript" src="https://unpkg.com/hexo-simple-mindmap@0.8.0/dist/mindmap.min.js"></script><link rel="stylesheet" type="text&#x2F;css" href="https://unpkg.com/hexo-simple-mindmap@0.8.0/dist/mindmap.min.css">