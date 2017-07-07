"use strict";

var PRECACHE = 'precache-v1';
var RUNTIME = 'runtime';

// register files to store in service worker
var PRECACHE_URLS = [
  'index.html', 
  './', 
  'manifest.js', 
  'bundle.js'
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', function (event) {
  event.waitUntil(caches.open(PRECACHE).then(function (cache) {
    return cache.addAll(PRECACHE_URLS);
  }).then(self.skipWaiting()));
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', function (event) {
  var currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(caches.keys().then(function (cacheNames) {
    return cacheNames.filter(function (cacheName) {
      return !currentCaches.includes(cacheName);
    });
  }).then(function (cachesToDelete) {
    return Promise.all(cachesToDelete.map(function (cacheToDelete) {
      return caches.delete(cacheToDelete);
    }));
  }).then(function () {
    return self.clients.claim();
  }));
});

self.addEventListener('fetch', function (event) {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(caches.match(event.request).then(function (cachedResponse) {
      if (cachedResponse) {
        return cachedResponse;
      }

      return caches.open(RUNTIME).then(function (cache) {
        return fetch(event.request).then(function (response) {
          // Put a copy of the response in the runtime cache.
          return cache.put(event.request, response.clone()).then(function () {
            return response;
          });
        });
      });
    }));
  }
});