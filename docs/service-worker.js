!function(){"use strict";const e=["client/about.c6339f90.js","client/index.71d07c67.js","client/[slug].349aaec2.js","client/index.80be5bc4.js","client/client.cca3bd2c.js","client/index.ccbe8419.js"].concat(["service-worker-index.html","arrow-white.png","arrow.png","commonfare.png","contact.png","crypto.png","dyne.png","eu.png","favicon.png","festival.png","global.css","great-success.png","logo-192.png","logo-512.png","logo.png","macao.png","manifest.json","media.png","modules.png","moebius-band.png","municipality.png","oef.png","reward.png","santarcangelo.png","simple-grid.min.css","swlogo.png","usecases.png"]),n=new Set(e);self.addEventListener("install",n=>{n.waitUntil(caches.open("cache1571988142648").then(n=>n.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const n of e)"cache1571988142648"!==n&&await caches.delete(n);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&n.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1571988142648").then(async n=>{try{const t=await fetch(e.request);return n.put(e.request,t.clone()),t}catch(t){const s=await n.match(e.request);if(s)return s;throw t}}))))})}();
