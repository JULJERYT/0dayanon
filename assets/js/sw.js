self.addEventListener('install', event => {
   event.waitUntil(
       caches.open('my-cache').then(cache => {
           return cache.addAll([
               '/',
               '/index.html',
               '/assets/img/click.png',
               '/assets/img/banners/banner1.png',
               '/assets/img/banners/banner2.png',
               '/assets/img/banners/banner3.png',
            //    '/assets/img/welcome.mp4',
               '/assets/img/background.gif',
               '/assets/img/cursor/pointer.png',
               '/assets/img/cursor/cursor.png',
               '/assets/css/style.css',
               '/assets/fonts/unispace.woff',
               '/assets/img/favicon.png',
               '/assets/img/square.png',
               '/assets/fonts/coolfont.otf',
               '/assets/fonts/coolfont2.ttf',
               '/assets/css/404.css',
               '/assets/css/tips.css',
               '/assets/js/404.js',
               '/404.html',
               '/tips.html'
           ]);
       })
   );
});

self.addEventListener('fetch', event => {
   event.respondWith(
       caches.match(event.request).then(response => {
           return response || fetch(event.request);
       })
   );
});