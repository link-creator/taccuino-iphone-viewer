const V='tview-v1.0.0',CORE=['./','index.html','keys.js','config.js','manifest.webmanifest','icons/icon-192.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.origin!==location.origin)return;if(u.pathname.endsWith('config.js')){e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));return}e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
