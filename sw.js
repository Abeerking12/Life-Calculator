self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open("ghosty-cache").then(c=>c.add("./"))
  );
});

self.addEventListener("fetch",e=>{
  e.respondWith(
    caches.match(e.request).then(r=>r||fetch(e.request))
  );
});
