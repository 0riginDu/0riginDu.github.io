/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/My_Blog/public/404.html","f97a4cffb99057e0db992b2ca2866762"],["D:/My_Blog/public/Gallery/Sherlock/index.html","cfe05148e1d8da0e776c86246ef85774"],["D:/My_Blog/public/Gallery/doomsday/index.html","765f3bf132a550f3ed5e43c6d4791c29"],["D:/My_Blog/public/Gallery/index.html","36f3d748a7e0b9ec38bda0fab327f9f5"],["D:/My_Blog/public/Gallery/十元/index.html","35740da303f7757aea7a775f2376da05"],["D:/My_Blog/public/Gallery/壁纸/index.html","c23876275b5088e40ab288580fceae5a"],["D:/My_Blog/public/about/index.html","033b1666df61d6120ffde9c9d914da9a"],["D:/My_Blog/public/archives/2020/11/index.html","dd4ad9ffb1cf45f3199713afeb727438"],["D:/My_Blog/public/archives/2020/index.html","fc4560f51bf81216c5e146410c69cb4c"],["D:/My_Blog/public/archives/index.html","09a04551b7fcc8dbf3682ab3051f7b7f"],["D:/My_Blog/public/artitalk/index.html","2f41274d7fab26fdf301e089ad8b245b"],["D:/My_Blog/public/categories/index.html","4029665c31594eace6e3d5b14d197a87"],["D:/My_Blog/public/css/gitcalendar.css","2d8c62408ed431b7242db6f7ca642b90"],["D:/My_Blog/public/css/index.css","30d21a1ca529c3c7a5a029f147e2862c"],["D:/My_Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/My_Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/My_Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/My_Blog/public/img/alipay.jpg","1909b731e6df6d9593d99cd73c9ebe42"],["D:/My_Blog/public/img/avatar.jpg","52ee6af1538c8dca96a79912de1e3f41"],["D:/My_Blog/public/img/banner/0.jpg","306003d8042084347393c395cf75c56d"],["D:/My_Blog/public/img/banner/1.jpg","9269002d0873d0e0fe9c9384507a0f81"],["D:/My_Blog/public/img/banner/2.jpg","9d5259c1c229c7b2a7ea813b5246ce26"],["D:/My_Blog/public/img/banner/3.jpg","8c7505b632239a7c4e39f1667c3928b0"],["D:/My_Blog/public/img/banner/4.jpg","86b8effb2e19b0251f53a7dd8869dc8e"],["D:/My_Blog/public/img/banner/5.jpg","ac669fc927093822996b6bfbafc9c3a0"],["D:/My_Blog/public/img/banner/6.jpg","a939c8c257fad2cf32ff4db949f6d578"],["D:/My_Blog/public/img/favicon.png","73f37f8b3b1f1784ceb9ea36419c07cc"],["D:/My_Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/My_Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/My_Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/My_Blog/public/img/wechat.png","e6195d2d6f48951bbac3587a3be6577b"],["D:/My_Blog/public/index.html","d4845890460900ef25daaa38ebb7ee02"],["D:/My_Blog/public/js/daovoice.js","bceaa0f4030e91636a3d78f700ec51cd"],["D:/My_Blog/public/js/gitcalendar.js","ba2e771ae49a01c55d189a288365d0a7"],["D:/My_Blog/public/js/history.js","eae0c41d957c7871f2e6f7e7fea5d4b6"],["D:/My_Blog/public/js/historyroll.js","847dd73cc8da21aec9dc4753ae3fb035"],["D:/My_Blog/public/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["D:/My_Blog/public/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["D:/My_Blog/public/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["D:/My_Blog/public/js/tips.js","051829fc4aa8e3cc9d397efd3b395467"],["D:/My_Blog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/My_Blog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/My_Blog/public/link/index.html","6cc5eab2db5188f06880d1eb2ca17e23"],["D:/My_Blog/public/music/index.html","b9187198f528ab191bb694c568ba1e1e"],["D:/My_Blog/public/posts/13b6b7c2.html","cdd66592fa2e0127c80b82782a9edcdb"],["D:/My_Blog/public/posts/5d59bf6f.html","8526c73ab337ae1328b4e27e5b69b58e"],["D:/My_Blog/public/posts/d9686c8.html","6e147f6a08c2d3dbf971c8c5092e80da"],["D:/My_Blog/public/tags/index.html","741978f2f0a9584addb08fde1abc6bc0"],["D:/My_Blog/public/tags/笔记/index.html","07b50f0ad1015779ae5c6df0aa213ef3"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







