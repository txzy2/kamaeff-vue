if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let d={};const o=e=>s(e,t),l={module:{uri:t},exports:d,require:o};i[t]=Promise.all(n.map((e=>l[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BENAb4tj.js",revision:null},{url:"assets/index-CIYlF9aP.css",revision:null},{url:"index.html",revision:"2cbad6cb0448a78a14bd8500a741080e"},{url:"registerSW.js",revision:"d4e14747e50d8d550426c2db572d84d0"},{url:"android-chrome-192x192.png",revision:"b0bdad1afbf3cdfb266fb78b4358d5c8"},{url:"manifest.webmanifest",revision:"b8f4ab8b4c6234043642f772d12dba74"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));