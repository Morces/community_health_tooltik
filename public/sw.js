if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),f={module:{uri:t},exports:c,require:r};s[t]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0e762574-1445a5649246349e.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/1215-26d204841f621096.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/1576-5914c211972baff8.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/1739-e95174bf816a20ff.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/231-e22f5742398ab85e.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/2682-c8ef780847d5e6bf.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/3065-a207903398ff94b6.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/352-426128f8fda0840d.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/3d47b92a-624c071e832b840f.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/4750-c9078319408530cd.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/479ba886-f798d43b1121a13e.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/4974-95901842f8126dd0.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/5190-7d1d69ec0291a8db.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/5658-4e7350077ff0d873.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/5887-b84c05a6af0acff3.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/5e22fd23-c907f8a155ca499d.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/6070-80dc10d98f0f8573.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/619edb50-9967b96d8bb5565e.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/6269-f6a0fb5a7a42a6ea.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/6382-5599b793b4bfb9ae.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/66ec4792-8282d0dc7e20a348.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/7005-2f16671b59b3f004.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/795d4814-25c249c2a6c47964.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/8214-3de43d99729eb950.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/8296-fdf1d71e609e16a0.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/8472-7e31ef90952b0c08.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/8e1d74a4-cb760114150a319b.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/9223-c2a75b01bfdb081c.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/94730671-c5aab05073721a61.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/9818-5c4ff13f5e154479.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/998-0ebd3cf6d0ed9a81.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/9c4e2130-aac6b440af09305f.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/_not-found/page-37ef99f52c557994.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/error-6845af6359701108.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/households/%5Bid%5D/add-member/page-9e8b1abff2219a23.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/households/%5Bid%5D/edit-member/%5Bview%5D/page-92c30441a4f1ebc6.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/households/%5Bid%5D/page-c4366dac6baf9356.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/households/%5Bid%5D/view-member/%5Bview%5D/page-56be2349bb2439a5.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/households/add/page-74a09e4c75d18cd9.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/households/page-1e593b8f959bfc20.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/layout-c0c2131d3c10f1ee.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/not-found-aa72f94e06c8647a.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/organisations/add/page-f094bca25eb1c7e3.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/organisations/page-14d9a49d447429e5.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/page-90ad6f9f2c8a4a9c.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/profile/page-e62c7593feff7cbd.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/resources/add/page-2071df75a5749d2b.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/resources/page-848edcc495e35bfa.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/roles/add/page-27e375097e5530ea.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/roles/page-c2e6d8ef7141589b.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/tasks/add/page-a9d4fd4d63d5494e.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/tasks/allocate/%5Ballocate%5D/page-f52eede33124abbd.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/tasks/edit/%5Bedit%5D/page-7cf90654abf1ecee.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/tasks/page-b5113532cd4ddf5a.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/tasks/view/%5Bview%5D/page-b955a113a21ca73e.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/users/%5Bid%5D/page-7c9b78459cfe6f4f.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/users/add/page-564d9f052034102b.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/users/page-7e2fd82b09be7b55.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/visits/add/page-f5444172da50b26e.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/visits/edit/%5Bedit%5D/page-458fc0e39b763fed.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/visits/page-8beb96d6c8b800a5.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/dashboard/visits/view/%5Bview%5D/page-620c08c669f5475a.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/error-f0f407bbe8c06452.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/layout-2b68ea805e7fdcf6.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/login/page-37c90b0281481435.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/not-found-6421355a26d97ff0.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/app/page-b72b25d7e90a28d3.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/b563f954-54e324e5ef30a99a.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/c916193b-8fdfa2f13472b161.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/dc112a36-dd72e56818520f67.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/eec3d76d-a1d0111dce48d6f2.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/f25cdb8d-8083c74f564739ee.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/f7333993-b8a3c232ada46ca3.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/f97e080b-6dadaab1145332c8.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/fca4dd8b-fa573545d44cd972.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/fd9d1056-da1fd4620baeb776.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/framework-8e0e0f4a6b83a956.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/main-7d1f35b44cb2a97d.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/main-app-0f7b570cdd5172f6.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/pages/_app-f870474a17b7f2fd.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/pages/_error-c66a4e8afc46f17b.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-252f4a6e25b906fe.js",revision:"feB_P7K670gpjPsyDlb5-"},{url:"/_next/static/css/2f71e0d51b6954c9.css",revision:"2f71e0d51b6954c9"},{url:"/_next/static/css/6a7d18921c27f6b4.css",revision:"6a7d18921c27f6b4"},{url:"/_next/static/css/bdfa21785504193d.css",revision:"bdfa21785504193d"},{url:"/_next/static/feB_P7K670gpjPsyDlb5-/_buildManifest.js",revision:"3e2d62a10f4d6bf0b92e14aecf7836f4"},{url:"/_next/static/feB_P7K670gpjPsyDlb5-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/0484562807a97172-s.p.woff2",revision:"b550bca8934bd86812d1f5e28c9cc1de"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/0a03a6d30c07af2e-s.woff2",revision:"79da53ebaf3308c806394df4882b343d"},{url:"/_next/static/media/30cd8f99d32fa6e8-s.woff2",revision:"e5c1b944d9e3380a062bf911e26728a3"},{url:"/_next/static/media/46c21389e888bf13-s.woff2",revision:"272930c09ba14c81bb294be1fe18b049"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/7108afb8b1381ad1-s.p.woff2",revision:"d5a9cbc34d22ffd5c4eb636dcca02f5d"},{url:"/_next/static/media/94575ae3783e7c88-s.woff2",revision:"a56bc9adab4ad49a6e6d19f72ac23bc0"},{url:"/_next/static/media/b957ea75a84b6ea7-s.p.woff2",revision:"0bd523f6049956faaf43c254a719d06a"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/cht_logo.6c9e4b3d.png",revision:"6718d9e2dd5ca972448989f0c188e384"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/eafabf029ad39a43-s.p.woff2",revision:"43751174b6b810eb169101a20d8c26f8"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/iconx/android-chrome-192x192.png",revision:"950d01fef84943bdfb38f4e6779f9bcd"},{url:"/iconx/android-chrome-512x512.png",revision:"fe3ff900246138676d63aa1954cd3682"},{url:"/iconx/android-chrome-maskable-192x192.png",revision:"4431d6247364dd664ec8a525a6781c8a"},{url:"/iconx/android-chrome-maskable-512x512.png",revision:"e7120fbcb2d406867ef1efac5258b3e0"},{url:"/iconx/apple-touch-icon.png",revision:"880d804103a2291a4c6f17d3b8d07616"},{url:"/iconx/favicon.ico",revision:"1aefecd86f3040242351bc6012662cb6"},{url:"/logo.svg",revision:"860e923cdcb7e00485c7f285f95c66c9"},{url:"/manifest.json",revision:"3d9543309eda99e1919c44c4a3eaee01"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
