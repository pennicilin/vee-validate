/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b302ef41832b960ae152c0fbcfee68bf"
  },
  {
    "url": "advanced/cross-field-validation.html",
    "revision": "71313f683ea9ae645222ed3966467e5f"
  },
  {
    "url": "advanced/dynamic-rules.html",
    "revision": "4ffc81bebe819575156a2e5e21a7d3eb"
  },
  {
    "url": "advanced/programmatic-validation.html",
    "revision": "9ee3679dcc426c79dc2a38508e54f024"
  },
  {
    "url": "advanced/refactoring-forms.html",
    "revision": "ee4d9543d93b52d2ebbe44cfab69b7e7"
  },
  {
    "url": "advanced/rules-object-expression.html",
    "revision": "48f60b1fda1132c908422fb6475de6ac"
  },
  {
    "url": "advanced/server-side-validation.html",
    "revision": "a5b7a453e968ebb78b79f674ac954a0c"
  },
  {
    "url": "advanced/testing.html",
    "revision": "84dd73fbe940675a163f54abeb9bfec7"
  },
  {
    "url": "api/extend.html",
    "revision": "68129459581f53891c93b719992e4af9"
  },
  {
    "url": "api/validate.html",
    "revision": "e6225089e095957306fca2616b6f206e"
  },
  {
    "url": "api/validation-observer.html",
    "revision": "b76af16aeb635bd1d6527900ce7bbae2"
  },
  {
    "url": "api/validation-provider.html",
    "revision": "349dff69b214d844c13bb555a8f94647"
  },
  {
    "url": "api/with-validation.html",
    "revision": "8a7fa54454bac15c92bbcc60ea377d57"
  },
  {
    "url": "assets/css/0.styles.b135fead.css",
    "revision": "e3be2c9a298c452b6e90951a7abc3818"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.554097b8.js",
    "revision": "d61a4b1424b7d58e025d9ba72138593c"
  },
  {
    "url": "assets/js/11.346f0295.js",
    "revision": "3a2ff7e6b6875b75990455c42089d111"
  },
  {
    "url": "assets/js/12.49ded667.js",
    "revision": "9fe8df088dd5a6ba5650e2193fceaed7"
  },
  {
    "url": "assets/js/13.fed8c726.js",
    "revision": "d3639a21076eed44648fe28cddcb171c"
  },
  {
    "url": "assets/js/14.f75278eb.js",
    "revision": "be12e37ea190c6cc31ecf97d8b2e52d9"
  },
  {
    "url": "assets/js/15.a44171a2.js",
    "revision": "669afe20be866a6b738131413ee5a9cd"
  },
  {
    "url": "assets/js/16.60b94c80.js",
    "revision": "bc082bde5624f0f51c6bfd227e27c427"
  },
  {
    "url": "assets/js/17.26fab5fe.js",
    "revision": "c52a03a58ba004f7404ac75241d2d6a1"
  },
  {
    "url": "assets/js/18.ba629c7f.js",
    "revision": "417f0cf5f7a30f5ef6a1b0d5ffffb177"
  },
  {
    "url": "assets/js/19.a69f64ea.js",
    "revision": "047603caa01546f7cd2289eb36038573"
  },
  {
    "url": "assets/js/2.4754bc93.js",
    "revision": "918d74af38c281027e23f217384fd3fc"
  },
  {
    "url": "assets/js/20.34adc7a2.js",
    "revision": "9abd57fce583d7977c8deec282b2eb52"
  },
  {
    "url": "assets/js/21.b906c454.js",
    "revision": "0ddcc72127d34d228d5702da510108e9"
  },
  {
    "url": "assets/js/22.8cd3b21f.js",
    "revision": "96e7bdb57de4ccaadee76d12fea90492"
  },
  {
    "url": "assets/js/23.c029c5dc.js",
    "revision": "93bb1bfa34f6a01464f46c3b6df818f2"
  },
  {
    "url": "assets/js/24.6fa5d0b6.js",
    "revision": "0abcc4e0355f513e2dd65a3051b7f759"
  },
  {
    "url": "assets/js/25.2519a98d.js",
    "revision": "ab4a467c2fadc61bc857167a4291b53d"
  },
  {
    "url": "assets/js/26.81b6337b.js",
    "revision": "ef5be38e2e199c54b5015a1a80965a22"
  },
  {
    "url": "assets/js/27.05b9df79.js",
    "revision": "44ef7fd65bca0b3ff592f01e0ac2639e"
  },
  {
    "url": "assets/js/28.69af6609.js",
    "revision": "538eab4226c36f6c32bfbbc5407a23e7"
  },
  {
    "url": "assets/js/29.bc22cf0b.js",
    "revision": "bbeb5215cd51a7f9715345ba4f4f65d8"
  },
  {
    "url": "assets/js/3.46ca09f5.js",
    "revision": "a7af0a6722b8f5d139e0814a2d95fcfa"
  },
  {
    "url": "assets/js/30.83dc7a3f.js",
    "revision": "0c498a2f59692b00556b64f02a52d4c9"
  },
  {
    "url": "assets/js/31.6f425c48.js",
    "revision": "daaa2d36e4b2dd49260deeb4dcbb5cb9"
  },
  {
    "url": "assets/js/32.2dce5075.js",
    "revision": "495dc6a719e3a6ccc928acefb76a1279"
  },
  {
    "url": "assets/js/33.9cd42182.js",
    "revision": "ff94a8b30fde2c47c60304c768398b44"
  },
  {
    "url": "assets/js/34.fd8ef583.js",
    "revision": "9aa745f0ad7b0869af744fce4fd78bd7"
  },
  {
    "url": "assets/js/35.47f9677a.js",
    "revision": "09284aee0088d0da9eb806ebcdce4ab8"
  },
  {
    "url": "assets/js/36.22fc4ce1.js",
    "revision": "804f5903504adadc70c62bd198cab370"
  },
  {
    "url": "assets/js/37.74fc7a23.js",
    "revision": "4a8c96ab0264912395d39f1705c6050e"
  },
  {
    "url": "assets/js/38.02d1f7bd.js",
    "revision": "cea04478ec9c1ba4435f5c57b6cffcd5"
  },
  {
    "url": "assets/js/39.e1542b16.js",
    "revision": "ae7cec3a724d13db99bcb33ced8065a5"
  },
  {
    "url": "assets/js/4.d64f224f.js",
    "revision": "e2e0195f43248744b67029c80cd899a0"
  },
  {
    "url": "assets/js/40.7935f6c0.js",
    "revision": "ff1864b3499569b94fc1972e06a083fe"
  },
  {
    "url": "assets/js/41.8abe976a.js",
    "revision": "a9e4c834ec22516fe09ff444709d2948"
  },
  {
    "url": "assets/js/42.a0edf8da.js",
    "revision": "5509c0b621309e6c6098a3deaef81a4a"
  },
  {
    "url": "assets/js/43.3c0cc536.js",
    "revision": "98b4ca36e67c5b5e58ab55d9c4cc8929"
  },
  {
    "url": "assets/js/44.25c2d854.js",
    "revision": "d8c405c2cbb0f6e6671567e505877972"
  },
  {
    "url": "assets/js/45.9fcf9462.js",
    "revision": "088dfdc023b7e077e26a35ecb4e9e9b9"
  },
  {
    "url": "assets/js/46.f974cb05.js",
    "revision": "b1f6e54a20dbff96eb2079bd0fc0066e"
  },
  {
    "url": "assets/js/47.69307d4d.js",
    "revision": "e81954a3609ba1cb547ca4f3afa54042"
  },
  {
    "url": "assets/js/48.3d3ce2e8.js",
    "revision": "c3f54caabb83f9e822790a94be2a684d"
  },
  {
    "url": "assets/js/49.f84d369f.js",
    "revision": "5cabdf561298d8360963e367d914043f"
  },
  {
    "url": "assets/js/5.6bc6e656.js",
    "revision": "87e576cbb1f4cfe5fa524fd1221c444c"
  },
  {
    "url": "assets/js/50.47434342.js",
    "revision": "40655f569233e5697a9c68b41d25514f"
  },
  {
    "url": "assets/js/51.4e76f829.js",
    "revision": "fbbfac8b5a27c298f0a61c08bf024664"
  },
  {
    "url": "assets/js/52.147313f2.js",
    "revision": "8fd3395e6aff161494116834396b8e99"
  },
  {
    "url": "assets/js/53.d780ac7e.js",
    "revision": "8daecd941bb13bd9da77eed67934f20a"
  },
  {
    "url": "assets/js/54.c18c812d.js",
    "revision": "efaaf7a3e46c5c04e9ef014ceb61cb08"
  },
  {
    "url": "assets/js/55.c37df38b.js",
    "revision": "d0b47c580d7c722427954a1625742ef5"
  },
  {
    "url": "assets/js/56.bd8b6b0c.js",
    "revision": "ecbf8890c2e6a9fc9fb3cf6cb384bb69"
  },
  {
    "url": "assets/js/57.28155150.js",
    "revision": "82b1d97b0d383e33cc143561e47fd171"
  },
  {
    "url": "assets/js/58.1180a708.js",
    "revision": "a0df02258caf3d0f9559936b481e90f8"
  },
  {
    "url": "assets/js/59.82df06bf.js",
    "revision": "f1968f15ac2874730a170bb5661cf105"
  },
  {
    "url": "assets/js/6.e4baca63.js",
    "revision": "6d1b24ee662916a1ea9735d98add62f5"
  },
  {
    "url": "assets/js/60.fd960778.js",
    "revision": "8834be28e3a60ea65fb969ec267cf5f7"
  },
  {
    "url": "assets/js/7.511754b6.js",
    "revision": "2942a9c31621b8c51a229e6d5b33e549"
  },
  {
    "url": "assets/js/8.3fda4834.js",
    "revision": "cca197ddfc5b77c5332ee7fdee531ab0"
  },
  {
    "url": "assets/js/9.09e508d5.js",
    "revision": "12b7ed8587100cd8f62e47c58c0fbd7a"
  },
  {
    "url": "assets/js/app.50eb3ad5.js",
    "revision": "a6868067e5b926e58886b065469237fd"
  },
  {
    "url": "assets/js/vendors~docsearch.67757c28.js",
    "revision": "17849a80517fa87d079bda0762afdcbe"
  },
  {
    "url": "configuration.html",
    "revision": "51e24af222bee0b580129159ab141f23"
  },
  {
    "url": "guide/3rd-party-libraries.html",
    "revision": "40a8aaf837dd42fab35c9dd75653ff83"
  },
  {
    "url": "guide/basics.html",
    "revision": "f1185fd24e05f1f8a169d19b9ed4022c"
  },
  {
    "url": "guide/forms.html",
    "revision": "32978e334241d7a37a02fe6616cf87b3"
  },
  {
    "url": "guide/interaction-and-ux.html",
    "revision": "4cb43e60fa70b7205a64b35b005144e6"
  },
  {
    "url": "guide/localization.html",
    "revision": "5dcabc2617ee0c2e5956b2f555f4d728"
  },
  {
    "url": "guide/required-fields.html",
    "revision": "32ab33647f9629912635d73697b4877e"
  },
  {
    "url": "guide/rules.html",
    "revision": "a776f89b1747c66db14c40bf7466f94e"
  },
  {
    "url": "guide/state.html",
    "revision": "eb58f6e1dffc21a6370df8a073f9f13c"
  },
  {
    "url": "img/android-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/android-icon-192x192.png",
    "revision": "749eb7570911aa13fa7a305f7dfdb042"
  },
  {
    "url": "img/android-icon-36x36.png",
    "revision": "94d70fb19e77b88129a2a4b44d30273f"
  },
  {
    "url": "img/android-icon-48x48.png",
    "revision": "6e039016a0d1721277e863e6400107a9"
  },
  {
    "url": "img/android-icon-72x72.png",
    "revision": "cf3bbf6c5c50306cb1d2af34148fd4ad"
  },
  {
    "url": "img/android-icon-96x96.png",
    "revision": "171c58f6d99812028cdc433f706fab88"
  },
  {
    "url": "img/apple-icon-114x114.png",
    "revision": "a1612722a53e36417890844f4aaca4bd"
  },
  {
    "url": "img/apple-icon-120x120.png",
    "revision": "0fdcdb4e43499467315916e07d5a09e0"
  },
  {
    "url": "img/apple-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/apple-icon-152x152.png",
    "revision": "bdd5fb6d3e9976d4b66199750e7398a0"
  },
  {
    "url": "img/apple-icon-180x180.png",
    "revision": "6e4bfb481a5f5546673674ea2f53a80d"
  },
  {
    "url": "img/apple-icon-57x57.png",
    "revision": "2a3e81c26413d7cfb085132e4d0d78ed"
  },
  {
    "url": "img/apple-icon-60x60.png",
    "revision": "f3f63dae941a269726cecb63d5eb8ae4"
  },
  {
    "url": "img/apple-icon-72x72.png",
    "revision": "cf3bbf6c5c50306cb1d2af34148fd4ad"
  },
  {
    "url": "img/apple-icon-76x76.png",
    "revision": "8df9e1335515138c89abe7489d3331ee"
  },
  {
    "url": "img/apple-icon-precomposed.png",
    "revision": "0ae26495c87bea19c3238efac57100db"
  },
  {
    "url": "img/apple-icon.png",
    "revision": "0ae26495c87bea19c3238efac57100db"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "50325b55b6decbf164f49e8ab2ef3a82"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "7d8244cb1190e5818aaf3b5bc7dbe523"
  },
  {
    "url": "img/favicon-96x96.png",
    "revision": "171c58f6d99812028cdc433f706fab88"
  },
  {
    "url": "img/ms-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/ms-icon-150x150.png",
    "revision": "868ea201b8975a3f505a31992da8bf60"
  },
  {
    "url": "img/ms-icon-310x310.png",
    "revision": "635b0545d3369a88a7a3238089a38853"
  },
  {
    "url": "img/ms-icon-70x70.png",
    "revision": "476a4d57938b8a33701124593cb2301b"
  },
  {
    "url": "index.html",
    "revision": "9d73e3f8a9fecffd4a87a7d40dba9f14"
  },
  {
    "url": "logo.svg",
    "revision": "851182946aa8e35268efa9a9ccd410d2"
  },
  {
    "url": "migration.html",
    "revision": "0675c38eb740fe8f2e1f87f728a6b4da"
  },
  {
    "url": "overview.html",
    "revision": "a678dc3226f095eef575db8a011ea234"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
