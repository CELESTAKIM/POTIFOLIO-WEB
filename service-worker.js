// service-worker.js
const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
    '/',
    '/styles.css',
    '/app.js',
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/4.jpg',
    '/5.jpg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
