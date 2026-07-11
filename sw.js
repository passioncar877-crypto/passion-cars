// Minimal service worker: enables "Add to Home Screen" / installability.
// Intentionally does not cache Firebase requests, so the app always talks
// to the live Firestore/Storage backend rather than stale cached data.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Pass every request straight through to the network — no offline cache.
  event.respondWith(fetch(event.request));
});
