if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>s(e,o),l={module:{uri:o},exports:c,require:t};i[o]=Promise.all(n.map((e=>l[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-6cd28afd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.c0bd76b8.js",revision:null},{url:"assets/vendor.8745d181.js",revision:null},{url:"global.css",revision:"b0ea8fd9f06be91fd639ee12e9595c79"},{url:"index.html",revision:"9bb09f0f34baae623c9985c39c1c62a2"},{url:"normalize.min.css",revision:"ac230a49d6d655cc2498c292b6acb158"},{url:"icons/compare-512.png",revision:"68930aefa03701c844232197bc74302e"},{url:"manifest.webmanifest",revision:"f845bb1ebb4a2a3f76b54708eb391baa"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
