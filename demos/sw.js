var cacheName = 'hello-pwa';
var filesToCache = [
  './',
  './lesson16.html',
  './img/ball.png',
  './img/brick.png',
  './img/button.png',
  './img/paddle.png',
  './img/wobble.png',
  './js/main.js',
  './js/phaser.2.4.2.min.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
