const staticCacheName = 'site-static-v1';
const assets = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://fonts.googleapis.com/css?family=Poppins:400,600,700',
  '/css/app.css',
  '/css/style.css',
  '/img/menu.svg',
  '/img/close.svg',
  '/img/goa-for-you-logo.svg',
  '/img/list.svg',
  '/img/fb.svg',
  '/img/twitter.svg',
  '/img/whatsapp.svg',
  '/img/all.svg',
  '/img/grocery.svg',
  '/img/medical.svg',
  '/img/milk.svg',
  '/img/vegitable.svg',
  '/img/fish.svg',
  '/img/kind.svg',
  '/img/help.svg',
  '/img/call.svg',
  '/img/location.svg',
  'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',
  'https://cdn.jsdelivr.net/npm/fuse.js@5.0.10-beta/dist/fuse.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/d3/5.15.0/d3.min.js',
  'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js',
  '/js/app.js',
  '/js/main.js',
  '/js/global.js',
  '/icons/android-chrome-192x192.png',
  '/icons/favicon.ico',
  '/icons/favicon-32x32.png',
  '/icons/favicon-16x16.png',
];
// install event
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});
// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});
// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});
