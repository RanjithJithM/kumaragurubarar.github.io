'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3ca1b518e33dc840fa141ee0696af663",
"assets/AssetManifest.json": "6c90f2b277cbb079a8ad046de23099ba",
"assets/assets/icons/add_blog.png": "62a8d08f3009d41c25e0b92eb1e42496",
"assets/assets/icons/back.png": "013f87216211e240bda90b57c70feade",
"assets/assets/icons/blog.png": "b5ddfa9e4033c597c5b908c537eedbf3",
"assets/assets/icons/country.png": "2010507bc2b1ccd6096ee07f56c44bc8",
"assets/assets/icons/destination.png": "3c3deb4543e281ebadae4b440a12dd3c",
"assets/assets/icons/favorite.png": "b1ecc7c1f69e5966d9082edc0ded8943",
"assets/assets/icons/logout.svg": "08a34f40741cdb476f086163d35cb8b3",
"assets/assets/icons/menu.png": "38d1a4f6d48711afbc3df3891c9b9d2f",
"assets/assets/icons/offer.png": "c688836af52f0c00be49e48dd2c25377",
"assets/assets/icons/package.png": "d1efe6b34877e992518248bdf572ac57",
"assets/assets/icons/password.png": "defc336b1e5c4147180af07df65aa1ff",
"assets/assets/icons/profile.png": "966b229be67f0088053cd321fb489f82",
"assets/assets/icons/search.png": "efc58442d9894343c27ebc8a2913e253",
"assets/assets/icons/trip.png": "4680f0cbf3ea0e38555ff8fba76d5d3e",
"assets/assets/images/banner1.jpg": "571df95d341bd64adb12f8721160ca56",
"assets/assets/images/banner2.jpg": "0c271f6e9ce346d455f99d29e22f8905",
"assets/assets/images/banner3.jpg": "c93afffdf887db25b478dcb863a4dfae",
"assets/assets/images/image1.jpg": "d0789d14fa7707b4b779d2ac0fc8129d",
"assets/assets/images/image10.jpg": "64337337c8c6fc136d355148ca1e1e05",
"assets/assets/images/image2.jpg": "f61b55b05933bbf23bd368146c0677f7",
"assets/assets/images/image3.jpg": "135107256a768851865da79e927f73de",
"assets/assets/images/image4.jpg": "c2f32ad437ee8bc279584b65a03f4573",
"assets/assets/images/image5.jpg": "e494a6a8733dd56d21a0016be4f8576a",
"assets/assets/images/image6.jpg": "9c0508ab7d4969d0aa682122ca1fbe75",
"assets/assets/images/image7.jpg": "2bdf4c3589f995cccb5869b9fa11535a",
"assets/assets/images/image8.jpg": "3824cec40cfb171b12b4aab022169578",
"assets/assets/images/image9.jpg": "d360b9237fd4d643392280d728d25a5d",
"assets/assets/images/map.jpg": "38fa0a39e2ea2c57b8dacb26da7e2377",
"assets/assets/images/muruga.png": "d7ef7cd0afb9da558bac34c66f4d7794",
"assets/assets/images/murugan.jpg": "f0ed26fa2a8ec679cae6d29c514e62f3",
"assets/assets/images/om.png": "4247a506a18c160dda88a24c495889ba",
"assets/assets/images/puja.jpg": "5d321074fe07c7085f06de4a11172e0e",
"assets/assets/images/puja2.jpg": "7cba416332dffb9d1d170d0519a649ea",
"assets/assets/images/sivan.jpg": "a19c337371b1430d566d54e95e36f0f4",
"assets/assets/images/temple.jpg": "f75b39b9fe46f32bdde0bb9184fc0219",
"assets/assets/images/varahini.jpg": "1f5755cf40d07ede32bed20d88ae3da2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0d450aabd091bd89e053ad2db207b23",
"assets/NOTICES": "a0f6a1ed6cc95e255df78bdb51015dff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "97b1a3031c43e1c5f0fed0a11f3fc5cf",
"/": "97b1a3031c43e1c5f0fed0a11f3fc5cf",
"main.dart.js": "8bb79b92c220a6a050dd05995d53b5dc",
"manifest.json": "84fb9db1be504d621ab858f303c312d8",
"version.json": "7234ae4358f257b6e1cb8c6e0138cedc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
