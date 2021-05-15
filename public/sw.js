/* eslint-disable no-restricted-globals */

const urlsToCache = [
  '/',
  '/index.html',
  '/79ded7610469a4b727d97b870bc527ee.png',
  '/main.js',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('attendance-app-cache-v1').then((cache) => cache.addAll(urlsToCache)),
  )
})

self.addEventListener('fetch', (event) => (
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response
      }
      return fetch(event.request)
    }),
  )
))
