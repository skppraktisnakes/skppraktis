// Service Worker untuk SKP Praktis Nakes - Daerah Page
const CACHE_NAME = 'skp-praktis-daerah-v2';
const urlsToCache = [
    '/',
    '/index.html',
    '/daerah.html',
    '/css/style.css',
    '/js/script.js',
    '/js/daerah-enhanced.js',
    '/assets/icons/favicon.ico'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
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

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
