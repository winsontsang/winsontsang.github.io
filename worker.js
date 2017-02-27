'use strict';

this.addEventListener('install', function (event) {
  event.waitUntil(caches.open('v1').then(function (cache) {
    return cache.addAll([
      '/',
      '/index.html'
    ]);
  }));
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  event.respondWith( caches.match(event.request)
    .then(function(response) {
      return response || fetch(event.request).catch( function(error) {
        return console.log('hello');
      });
    });
  );
});
