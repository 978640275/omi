"use strict";var precacheConfig=[["./cn.html","389923c9b50bf4f1d15f2123e547b449"],["./index.html","38cac600280f3cace22cc4028e821ec1"],["./static/css/cn.4dd07f49.css","476d16186dc05ff3faa0a5d4dc9ac72c"],["./static/css/index.4dd07f49.css","9ad340cc60e8fed0f9856b562708144e"],["./static/js/0.d5b74022.chunk.js","75d3069b9483b92ec3543468da2a9294"],["./static/js/1.0804289c.chunk.js","4ec41f82f559053693fba76328a0cdd0"],["./static/js/10.24b49a1e.chunk.js","4fa0cf710e0db4dcfe887a02f8e2ddd3"],["./static/js/11.0952627f.chunk.js","e7fb036c1ef63f9154789788768effe2"],["./static/js/12.4d6c8564.chunk.js","dcb4cd054500d849433f9da33ab1baad"],["./static/js/13.01f992e2.chunk.js","c3967be1d00f82a213c8acb5b67916d1"],["./static/js/14.9228c2b9.chunk.js","0104863a49a325418c1225df580e6619"],["./static/js/15.ea5faa4c.chunk.js","b4fd293b1c460e199a34f3af461489fb"],["./static/js/16.1de6eeb8.chunk.js","9dcec084a60a8e405cba451403f5f73a"],["./static/js/17.9dd2c4c9.chunk.js","84cfde9053a83ce7ee1faae4630c3545"],["./static/js/18.fdaed2b1.chunk.js","a737362d21b9da91fad53a8409f4115c"],["./static/js/19.1642acf9.chunk.js","1c061d0960fd0b0cbbfd97e4c3b229b2"],["./static/js/2.3e2dcb04.chunk.js","afd95102a4f9bc5bf1ab0b258df320b3"],["./static/js/20.928f5040.chunk.js","49c718f107d1faae9c6b7b3a9333f9b1"],["./static/js/21.92841bfa.chunk.js","e5f476bf80c1dfc17dfb0af85d032255"],["./static/js/22.0c61cf89.chunk.js","ec767ebb58c50f29a762051bbbc21aca"],["./static/js/23.7411faba.chunk.js","9025a857b11a5a889313b9751812ee06"],["./static/js/24.65c84326.chunk.js","c0bbe96d9956d44455160c1ce195c394"],["./static/js/25.aa9268fc.chunk.js","6ef9c164cd0b8b58c6694794bfcd841f"],["./static/js/26.76e4b54d.chunk.js","c43fec9120e75f378e86d5b38e730691"],["./static/js/27.28e692a9.chunk.js","c7ef12b6cc7bcfdd1f3b52a2bd9316d3"],["./static/js/28.252b1f2a.chunk.js","21c4826ff8385915508f378c63f23ec8"],["./static/js/29.91a5c5cc.chunk.js","3a4754c66a03a25862b1e2d371198b44"],["./static/js/3.43c90a31.chunk.js","7314ff061a8be035dc4b476ea1530a08"],["./static/js/30.4facc9fa.chunk.js","6d2445fe491f7beafd4e7d0306772b91"],["./static/js/31.c9dd949c.chunk.js","b9cd4e09de2b358889b36965cfe68ff9"],["./static/js/32.6232106f.chunk.js","7680e2be477dfcd32d93c1a6ab32185f"],["./static/js/33.4111d2df.chunk.js","6f3a870b7e6fe27b825d46c18aa46776"],["./static/js/34.e19db945.chunk.js","314a3698cc4bc2f2d5e8642bade24782"],["./static/js/4.8b52adab.chunk.js","c22c7967da51b2f9278e9e7cc9013142"],["./static/js/5.f63e6ac6.chunk.js","3d0131641787ac81a4f9cbec58a212f2"],["./static/js/6.c4de5d89.chunk.js","252bb5ed790f452ae72baf3985815177"],["./static/js/7.ca30d11d.chunk.js","1a029a87b70287208abac3a2bc2a365a"],["./static/js/8.d8f052f0.chunk.js","eb7057b69ed9b08752634e3fbec46605"],["./static/js/9.7aa4de2f.chunk.js","eee37a7713374c90cc68b0e59b1e307d"],["./static/js/cn.69bf80ec.js","f844e04f03ee9d3b0c53167727379a22"],["./static/js/index.86e1a2e8.js","1726de9a5ef33a0cb713bc01a194a6a7"],["./static/media/omi-logo2019.923166c3.svg","923166c362dce831a15c447b19a622f9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=c),a.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,a,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var a=new URL(c).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return a.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],a=e[1],t=new URL(c,self.location),s=createCacheKey(t,hashParamName,a,/\.\w{8}\./);return[t.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){if("GET"===c.request.method){var e,a=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,t),e=urlsToCacheKeys.has(a));var s="./index.html";!e&&"navigate"===c.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],c.request.url)&&(a=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)}))}});