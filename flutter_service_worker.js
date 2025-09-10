'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e546fca862691f994e57fd0ff8fdbeb7",
"assets/AssetManifest.bin.json": "aa9de6b330848387af06cb5fdb13c981",
"assets/AssetManifest.json": "3014abcbbdffbc9ae9ab20c9e2b94d52",
"assets/assets/fonts/SF-Pro-Display-Bold.otf": "dd3d50583e5255342370f2b6d7e7c03b",
"assets/assets/fonts/SF-Pro-Display-Regular.otf": "40a930b468f7b22b3f7beff01e9d643b",
"assets/assets/fonts/SF-Pro-Display-Semibold.otf": "e5cf1c00f1276551994c10ca0e733c4f",
"assets/assets/icons/dots.svg": "7dd8ad4fd8c13d516557b09c32913b89",
"assets/assets/icons/explore.svg": "5d45807e6dd30fd0d1e5e97c465e69e4",
"assets/assets/icons/gocar.svg": "1cd0061d49e05312230ebc48612a3736",
"assets/assets/icons/goclub.svg": "9997895319b6e5c9e4219d7ae96cfb20",
"assets/assets/icons/gofood.svg": "a3da07f1237b868d975dec0dec52b7eb",
"assets/assets/icons/gomart.svg": "a7a6a0075ad994c0920d95cc6dcd2a84",
"assets/assets/icons/gopulsa.svg": "97335993b6c12a73a9f110bc7f90ac43",
"assets/assets/icons/goride.svg": "40ff0e5e7ee77defa78faa2a6c8e2bfb",
"assets/assets/icons/gosend.svg": "9d7ad401eec87c7fdf1ee9734f630ff9",
"assets/assets/icons/icon.zip": "62efc8d9cb16ba1c5bb77e465738b933",
"assets/assets/icons/icon2.zip": "8691d54079a71e3533fb5749afe2628e",
"assets/assets/icons/left.svg": "f3469f07990ec9053e4bfc735e2faac2",
"assets/assets/icons/other.svg": "1cead21a5b289d55a4c58b5f80f54610",
"assets/assets/icons/pay.svg": "0a14dec12e8dff24ead57ff7762101cc",
"assets/assets/icons/search.svg": "3b3ce6678550363f4c465c3dfab92a27",
"assets/assets/icons/star.svg": "937c8ea29261e2e66f23a2732e43f528",
"assets/assets/icons/topup.svg": "ae04aeafa3c92a577ec76efb26b8d0db",
"assets/assets/images/1.png": "d85eea0c7d63aa2a418f77ac71c17d57",
"assets/assets/images/2.png": "1cfc5fba92cce55fab7d8e6ae078453f",
"assets/assets/images/3.png": "3d59db34a3244e31fa7eb4988a5726c3",
"assets/assets/images/Avatar.png": "c5a26314da13a8129b36725d388d2d31",
"assets/assets/images/gopay.png": "50b4ac87a201704e903bdabb29e28439",
"assets/assets/images/gopaylater.png": "c78ce5f2ee360dbc5aff84f4015b5de5",
"assets/assets/images/LPIT.webp": "c48c80bd478769844a98d4412916a2e1",
"assets/assets/images/m.jpg": "fbf983b176b15f12bf57ba41b01cb344",
"assets/assets/images/monyet.png": "b92f44abe4971b67c3b1e0206479774b",
"assets/assets/images/monyet_trans.png": "d4fb3df6ff4e9a374310e9d428b0aa4b",
"assets/FontManifest.json": "f87acc7708065a312a2ea54c39ff69ef",
"assets/fonts/MaterialIcons-Regular.otf": "993631126765d6528401e760b33419ba",
"assets/NOTICES": "7f70dd235bb064350774fd90805c8895",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "07449a85deaea80d1ddcefd68602b964",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "e6dc5c56151ece30c553f5aadf28a749",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "4344746a93141e2bdc147180606e089d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "29f35312dd52985d118b2f762ed6acd2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "83bc12c77331f91a75b6df5695c0ad61",
"/": "83bc12c77331f91a75b6df5695c0ad61",
"main.dart.js": "dc8d344d97e5e9e5045a04e42593fc55",
"manifest.json": "1e1fbfc92583743ecd5a8af2df1205d7",
"version.json": "803876f22bf512d805d476738551505e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
