if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,d,r)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const s={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return a;case"module":return s;default:return e(i)}}))).then((e=>{const i=r(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/061916107.html",revision:"e6c9c2ef5c1f50c1390bc85430629ead"},{url:"2021/071060549.html",revision:"344513fdc64acd2387838acd1a655add"},{url:"2021/071133926.html",revision:"72e369cc0606d26b99ce1af9f84816d5"},{url:"2021/071326519.html",revision:"d7bd32b6928b3f1b72239911d908018b"},{url:"2021/072241576.html",revision:"0095375b78b63a97223a86046816cb04"},{url:"2021/082760550.html",revision:"9fd8b8f910ad1c7522bc1456f7219f60"},{url:"2021/083041604.html",revision:"64436fc9a29a2a73c4bf926f4518f251"},{url:"2021/083053025.html",revision:"e97d3a1dee3db84b3ea69dd1a78834e5"},{url:"2021/112156639.html",revision:"69325925db32a906d2174e9d960b3d46"},{url:"2021/120460550.html",revision:"3caa824e96b12059dcc32539f248fdf6"},{url:"2021/120860549.html",revision:"1a16468c312a198e71f7332d8dee76b8"},{url:"2021/120927345.html",revision:"663d4b7a331a503d89d4cd4f38ea3561"},{url:"2021/121130800.html",revision:"dee559f68ec2b65babb61a2e727fcc92"},{url:"2021/12157757.html",revision:"69f70ff79869d96eab99a1d574459ac5"},{url:"2021/121818354.html",revision:"3be3284b3b6ceabc3ef08c7888d885f8"},{url:"2021/122151725.html",revision:"ded5ce8fab169d684f543ce4f960f3b4"},{url:"2021/122227789.html",revision:"e58ceed7f799f0f59c2f864d4b94e03e"},{url:"2021/122648049.html",revision:"ef1c47143faab6649d4a895c821d5c8a"},{url:"2022/010757003.html",revision:"549db74e3b17fba2ddf4e3b9a3d82871"},{url:"404.html",revision:"01f40d72cca719b988b6fad003cda7c9"},{url:"about/index.html",revision:"6a22a15a9706ae5c38e70218a469c324"},{url:"archives/2021/06/index.html",revision:"166bd4d7de9f6636374d47e5d6274ca8"},{url:"archives/2021/07/index.html",revision:"f9517d7d32c8276080f43602a2fa3bba"},{url:"archives/2021/08/index.html",revision:"ca9dcb56b2ddeb5a992944fb642381d5"},{url:"archives/2021/11/index.html",revision:"e0edb10718e19124e3c92df8e88ec8df"},{url:"archives/2021/12/index.html",revision:"8a860ed05e29afc841a4d16123eb509d"},{url:"archives/2021/index.html",revision:"c00a5bc5ae99da46b7ba3c28b9565041"},{url:"archives/2021/page/2/index.html",revision:"72a75ec9f0f2888a4d1a9a8a5dd53620"},{url:"archives/2022/01/index.html",revision:"b9da42f8a81b5906be7da0b6c105084f"},{url:"archives/2022/index.html",revision:"eba6def8f6c0a518a0ffb2360275cb94"},{url:"archives/index.html",revision:"878a33c4cdef0e0af656e4fefa3e4273"},{url:"archives/page/2/index.html",revision:"af5269a6c19cc1dc4da2768dddd5fa44"},{url:"artitalk/index.html",revision:"97ca762f517eb44259ddcb4e7841170b"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/Android/index.html",revision:"96c7a77aa10eac3eaae5f4b6f8d63831"},{url:"categories/Git/index.html",revision:"fb6473d9ac710bcde2853b4b2311db8c"},{url:"categories/GitHub/index.html",revision:"e830391b4f31c783d70be03da4ce3448"},{url:"categories/hexo/index.html",revision:"572454cd9998f2c0b20465cc2a196b68"},{url:"categories/hexo/matery主题/index.html",revision:"e971db7f92f843ed8705477e5a2e5bd0"},{url:"categories/index.html",revision:"f6a8fc710db3bd9c5e3d62b8dc5c1346"},{url:"categories/Markdown/index.html",revision:"29611eeca381356904abaaa337763834"},{url:"categories/MATLAB/index.html",revision:"8b52845e07c031e941c4136ddfd25714"},{url:"categories/MySQL/index.html",revision:"adeaa2d693cd2a8797dc99b05bbc5d10"},{url:"categories/MySQL/触发器/index.html",revision:"24a1fc257b59aa84ed70b159e47e5ad1"},{url:"categories/Vue/index.html",revision:"873a84851fff95eb3331d3d6dec5f97c"},{url:"categories/Vue/组件/index.html",revision:"bd9350613c1bdce8dd212f2f32ec37c1"},{url:"categories/小游戏/index.html",revision:"f006bfd7118f7d9374f6d409a72206d3"},{url:"categories/常用网站汇总/index.html",revision:"ee7f735fcc7448f11dfaf02d081f801a"},{url:"categories/算法/index.html",revision:"b25fba0a12346b996124b15d67ead2a1"},{url:"census/index.html",revision:"a949e481938b36bdcea81b87c3453714"},{url:"contact/index.html",revision:"b7f9301b13a4962028e9861321125637"},{url:"css/DIY.css",revision:"c6be4b57d4118eae796433aa4637e423"},{url:"css/index.css",revision:"eb280eed9640c22a85d9ffa14c56cebd"},{url:"css/prism-line-numbers.css",revision:"0810c0e4aa6528786cf1253de32ea115"},{url:"css/prism-tomorrow.css",revision:"f46d7519e3b65a6912814727b47a57ff"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"demos/VueDemo/index.html",revision:"f4a53568d88aca54b2dd7b9245fd7d2d"},{url:"friends/index.html",revision:"c423c3de42e7e380135591eeaa61fda1"},{url:"gallery/index.html",revision:"2eb910240cf6daaeedf364e724f478e5"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"index.html",revision:"032a5f5dcf17798dcfe23fcd6084857e"},{url:"js/botui.js",revision:"5f6f727dfe7fc4b13f006f95dbe2d0f5"},{url:"js/fishes.js",revision:"de5855d298ddc661b1c65c61469544f5"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"17f27c072dd515f171b7f3e7eff79bb6"},{url:"medias/avatar.jpg",revision:"a26bba228e7fd5db25ead84e83241439"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/logo.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"medias/reward/alipay.jpg",revision:"48cf8b0f4e23abc880ebcca775236fd9"},{url:"medias/reward/wechat.png",revision:"40a19e38db3c7a25cffd64a564d42dee"},{url:"medias/备案图标.png",revision:"d0289dc0a46fc5b15b3363ffa78cf6c7"},{url:"my2048game/css/main.css",revision:"7c55ec4d7b40c38ac1628c78ad03a1e6"},{url:"my2048game/img/favicon.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"my2048game/index.html",revision:"877042d73d24aea08884aaeb6c706cf1"},{url:"my2048game/js/main2048.js",revision:"a69312bf12622fae732ef46a7e477274"},{url:"Mysearch/css/mainsearchstyle.css",revision:"6f1e5947317534b02de7563045a31d35"},{url:"Mysearch/img/YZY.png",revision:"a6493e1868a7ad30230ff2753ae7b9f2"},{url:"Mysearch/img/备案图标.png",revision:"d0289dc0a46fc5b15b3363ffa78cf6c7"},{url:"Mysearch/img/问天阁.png",revision:"4a51724ed22e665a45f2974608afc132"},{url:"Mysearch/index.html",revision:"5b6a6fcc18bce8e8dc4be1039564fe5d"},{url:"Mysearch/js/ShowTheTime.js",revision:"73c0b6d8e74260bcb77eeaa9c261875d"},{url:"page/2/index.html",revision:"5207b1f7e524a79afdfbba31d374a2d6"},{url:"public/service-worker.js",revision:"e95c316b8464574f193395c4b67682ec"},{url:"public/workbox-07585517.js",revision:"dd7a32c50a74e3b8b434f0e6dc8c57d0"},{url:"tags/2048/index.html",revision:"b2c01d3d9a864ecc0198e743924dece6"},{url:"tags/ACM/index.html",revision:"306cee581d38f965c7243300e4157e70"},{url:"tags/Android/index.html",revision:"b5ae2be331776bcd4588a666eed764e1"},{url:"tags/Coding/index.html",revision:"994f7a5ae22688b575372ef3415929a4"},{url:"tags/Git/index.html",revision:"3ac2fe07ec0a3c6eebab25e3f9680508"},{url:"tags/GitHub/index.html",revision:"91565447faadba936f4890b516ebf322"},{url:"tags/Hello-World/index.html",revision:"31049cf7734d3a599bfbed51aa2f506c"},{url:"tags/hexo/index.html",revision:"13df44e00b713908fa61de616b7ab45a"},{url:"tags/index.html",revision:"4b2dab3fc38925311b1d16c883f0a5db"},{url:"tags/Markdown/index.html",revision:"d5e449cc7de1dda420b1043637030103"},{url:"tags/matery主题/index.html",revision:"b42566fa27b195e286608bf638742670"},{url:"tags/MATLAB/index.html",revision:"bda2387c56151818f08bb731c50f9843"},{url:"tags/MySQL/index.html",revision:"00ef4e3a336d12424522221d0d053007"},{url:"tags/Vue/index.html",revision:"7db3019b1caf9fa085af049741cc7a8b"},{url:"tags/最短路径/index.html",revision:"32b054d68fa1607d28b0b2deb6bb946b"},{url:"tags/图床/index.html",revision:"a288509a0a57829db1c76c399ae600d5"},{url:"tags/基础/index.html",revision:"70767134d4ced4787660523219797993"},{url:"tags/字体精简/index.html",revision:"36af0ec1adf76ea226e0cae2974b9d9f"},{url:"tags/学习笔记/index.html",revision:"8cf800689c71ec26fe40bdf1cfe68d7a"},{url:"tags/小游戏/index.html",revision:"967b5dedad329d18a94f03fde4d6178e"},{url:"tags/常用网站/index.html",revision:"c344b55947967cd439b38a4f40610621"},{url:"tags/拟合圆/index.html",revision:"bc6cfb6eb514b4a56afbee7387f8ee09"},{url:"tags/搜索引擎收录入口/index.html",revision:"3229de9b6442806c50e3229b8f02efde"},{url:"tags/数学建模/index.html",revision:"cc57f7caf4aefc4695a95053b8b9b89f"},{url:"tags/服务器/index.html",revision:"ba6aa53b7871257d7ff46009a3bf0627"},{url:"tags/汇总/index.html",revision:"a0b504611ae80c6f4ddb499c5b59c88e"},{url:"tags/组件/index.html",revision:"2d904ab6a553fc801187adca75cc9752"},{url:"tags/解决/index.html",revision:"24117579558ca5503895ba826d8b96c9"},{url:"tags/触发器/index.html",revision:"a091b02a1b5053f4f1083948ab5d05f6"},{url:"tags/记录整理/index.html",revision:"b9cbc8baf218fa7da63c399882f3af09"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
