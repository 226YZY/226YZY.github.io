if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,c,r)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+i.slice(1)};return Promise.all(c.map((i=>{switch(i){case"exports":return a;case"module":return d;default:return e(i)}}))).then((e=>{const i=r(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/061916107.html",revision:"4367eb192f3a766b0cdcb03aac6e8559"},{url:"2021/071060549.html",revision:"d949c6603b0218af77cbcde16ae0bae7"},{url:"2021/071133926.html",revision:"b37d1f9ae7d0f29fed61d2cfcebedfa8"},{url:"2021/071326519.html",revision:"d207673bcee5b236003a75554f74b8f7"},{url:"2021/072241576.html",revision:"e1c80821cbdad538dbb6d0dd4cf4b661"},{url:"2021/082760550.html",revision:"967749eaf3bfad1ff12740ea959d8b9a"},{url:"2021/083041604.html",revision:"569fef1de8d7c50ed19076dbfdbec733"},{url:"2021/083053025.html",revision:"e997e294569e6dc5184a7b49fce9c988"},{url:"2021/112156639.html",revision:"e6764fb3b38707cd44be1d84e8c8fc82"},{url:"2021/120460550.html",revision:"6a03f3585400abb493f12c19ec79c15b"},{url:"2021/120860549.html",revision:"c22f6a0489d905a93c114bb04c05b4cc"},{url:"2021/120927345.html",revision:"75964aa0598841ef67a92f9fe3eefd9f"},{url:"2021/121130800.html",revision:"c133f3c6c309024d76c312e935abaaa0"},{url:"2021/12157757.html",revision:"e4dce801a0cde1b32b91852f47f3314f"},{url:"2021/121818354.html",revision:"625ccac77c4af09347fca6bc5dfb8757"},{url:"2021/122151725.html",revision:"4463c87a8d55680f0325ca70a049fc7b"},{url:"2021/122227789.html",revision:"68384d61a02dc486eff6f808783cbcee"},{url:"2021/122648049.html",revision:"9fffb1f40ef01122385c116d05147e13"},{url:"2022/010757003.html",revision:"786764f310a550318c24cca511772d10"},{url:"2022/010948485.html",revision:"0584dd73375e370bba9e6a0e9eeba80a"},{url:"2022/011424656.html",revision:"20bd87607ad0a6c44cf58c9d8e40c8b4"},{url:"2022/012242042.html",revision:"92ea3c9b85e0143f73de16ca22cd1769"},{url:"2022/012347381.html",revision:"9d71afc83b88a0f0ab540670bff378e1"},{url:"2022/013056898.html",revision:"782b34ccfd2e6dc4abde43723b11320c"},{url:"2022/020332243.html",revision:"17e31eb7c8ce5d3be4cdda7143a86b8f"},{url:"2022/020733811.html",revision:"b38c83c82399b9cbbfb37cd97d690eeb"},{url:"404.html",revision:"ee18f8232311f15981e008a08106dc3e"},{url:"about/index.html",revision:"fb1906ad95d89ade42c6a6d5bb0b1c2e"},{url:"archives/2021/06/index.html",revision:"d12ba4c2aa3dc9f23722c5d0d8e77235"},{url:"archives/2021/07/index.html",revision:"e88eb329d0cd59f9f16c9e2ddb8f44ae"},{url:"archives/2021/08/index.html",revision:"b967232ecf7cb94d47c2446e4f3c3f2c"},{url:"archives/2021/11/index.html",revision:"3fe5d6f6c39d8a40a8f843528a3bef43"},{url:"archives/2021/12/index.html",revision:"0f96ab4ff9dadc9181a9bbb51d4ed256"},{url:"archives/2021/index.html",revision:"a820e7c6e90476e01171906b9dfedb55"},{url:"archives/2021/page/2/index.html",revision:"ca09f1e7ea4ce447a6c9acdadf61d09e"},{url:"archives/2022/01/index.html",revision:"0bff43359b4e5a12ea1f873e3b79b788"},{url:"archives/2022/02/index.html",revision:"34d7ecf12abec9ef7f8cd370ce272098"},{url:"archives/2022/index.html",revision:"ac6eeb013dae727ca0ee51e47494d869"},{url:"archives/index.html",revision:"9ec430b98e710415c596c3d692e93c8e"},{url:"archives/page/2/index.html",revision:"b91bc4be067bc33385bea6158a7f61b4"},{url:"archives/page/3/index.html",revision:"d94e313627e76ce6f32b50809c2cecb9"},{url:"artitalk/index.html",revision:"eb56b94c924ae2a1080e2f260c928a23"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"92fc5ee0739261db3d283313be3f7f04"},{url:"categories/博客相关/index.html",revision:"ce6cbb068c189694c0fbf292927c75e3"},{url:"categories/学习记录/Android/index.html",revision:"0629fdfc86080921163fbf49d3a9d058"},{url:"categories/学习记录/index.html",revision:"c5eaa664885522ad1106fcf4647cb708"},{url:"categories/学习记录/MATLAB/index.html",revision:"114a2b6833ca20ea61384aecf0a54b00"},{url:"categories/学习记录/MySQL/index.html",revision:"35f6dce658f0365607911a2c4d01359e"},{url:"categories/学习记录/Vue/index.html",revision:"d649ac5c96f930ee1656786695d582ec"},{url:"categories/学习记录/算法/index.html",revision:"cbd17c9731c399042269e843bdce0a73"},{url:"categories/探索实践/index.html",revision:"ee289db9eb7d61e5420246edf90cfc74"},{url:"categories/生活随笔/index.html",revision:"ca5224ad64934a014131bd94db7b7f68"},{url:"census/index.html",revision:"b52178318eaea39d82bbd8cd6f7235c8"},{url:"charts/index.html",revision:"0f99842b0c94c2796b3d9d7bb292c134"},{url:"contact/index.html",revision:"941f6cdd14d6ab38751e4261a0b35cc8"},{url:"css/butterfly.css",revision:"dcf2a5b39710f926c8de9e92bb9c3519"},{url:"css/DIY.css",revision:"659f76f110413c61274772a589109e6e"},{url:"css/gitcalendar.css",revision:"8e5ba7e5a34f94ecf36dd19b731b607c"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"190588939d5dafccee90b54d17ede2ac"},{url:"css/prism-line-numbers.css",revision:"0810c0e4aa6528786cf1253de32ea115"},{url:"css/prism-tomorrow.css",revision:"f46d7519e3b65a6912814727b47a57ff"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"demos/VueDemo/index.html",revision:"f4a53568d88aca54b2dd7b9245fd7d2d"},{url:"fcircle/index.html",revision:"02e4392f42dc959b70f7031f1fef3f7e"},{url:"gallery/index.html",revision:"0f723828a745d7bcca2805a3450940fa"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"img/friend_404.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/upyun_logo.png",revision:"e9e2fb940b6cb3c295d235d183688c0a"},{url:"index.html",revision:"9acc50ecef17e6792dd7e984ee2e4810"},{url:"js/botui.js",revision:"5f6f727dfe7fc4b13f006f95dbe2d0f5"},{url:"js/census.js",revision:"76ead9f7688ad3a9d32bbf507cbaf5f9"},{url:"js/fcircle.js",revision:"0fd698ec4fa303ec1e89da72d5553db3"},{url:"js/fetch.js",revision:"83e2f0efdb4327b90da5d35fb48c2bd0"},{url:"js/fishes.js",revision:"de5855d298ddc661b1c65c61469544f5"},{url:"js/fixed_card_widget.js",revision:"02eeacd95bff79855f204fe9d4aa35e7"},{url:"js/gitcalendar.js",revision:"acbc8614b53695f473e7ba1a4d4b8c76"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/moments.js",revision:"41ce7af9fc59294319b92a4d16780a83"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/index.html",revision:"7f227a0e8360d6cf3fc74a9643b4943d"},{url:"medias/avatar.jpg",revision:"a26bba228e7fd5db25ead84e83241439"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/logo.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"medias/reward/alipay.jpg",revision:"48cf8b0f4e23abc880ebcca775236fd9"},{url:"medias/reward/wechat.png",revision:"40a19e38db3c7a25cffd64a564d42dee"},{url:"medias/备案图标.png",revision:"d0289dc0a46fc5b15b3363ffa78cf6c7"},{url:"message/index.html",revision:"eccb89baf4c7f466bb87b24db0eca3aa"},{url:"my2048game/css/main.css",revision:"40077c23e263eb90b03fbc386104ca64"},{url:"my2048game/img/favicon.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"my2048game/index.html",revision:"d381fa738027c833b1efa60b6b50cd2b"},{url:"my2048game/js/main2048.js",revision:"a69312bf12622fae732ef46a7e477274"},{url:"Mysearch/css/mainsearchstyle.css",revision:"b77406bb239634f2a0382bd271629e81"},{url:"Mysearch/img/YZY.png",revision:"a6493e1868a7ad30230ff2753ae7b9f2"},{url:"Mysearch/img/备案图标.png",revision:"d0289dc0a46fc5b15b3363ffa78cf6c7"},{url:"Mysearch/img/问天阁.png",revision:"4a51724ed22e665a45f2974608afc132"},{url:"Mysearch/index.html",revision:"244613ef14ca02977f797414d96d344a"},{url:"Mysearch/js/ShowTheTime.js",revision:"73c0b6d8e74260bcb77eeaa9c261875d"},{url:"page/2/index.html",revision:"28bca401105fbbf4b5a8cfdff8a70a3b"},{url:"page/3/index.html",revision:"5e0ff786f7134a6439af0ea026ccfd8f"},{url:"public/service-worker.js",revision:"891f3b28d0ba691c7a6b3b3678684fa5"},{url:"public/workbox-07585517.js",revision:"51fc070bd35923633c1c83400710e115"},{url:"random/index.html",revision:"05e207a652bc1bc1dd988617f639e544"},{url:"reward/index.html",revision:"bfe75143fb3d95ac60aba78a5bdb89cc"},{url:"tags/2048/index.html",revision:"fd224f7ef5220d6a88ed23a31191ac20"},{url:"tags/ACM/index.html",revision:"377ba865fe400b7222971464f4c4b59b"},{url:"tags/Android/index.html",revision:"c314d8247e33775d4880850932484549"},{url:"tags/butterfly主题/index.html",revision:"e092f713af9fc475943f7ce5e3b50015"},{url:"tags/Coding/index.html",revision:"2135390a5ac33c56d85121149437c266"},{url:"tags/ECharts/index.html",revision:"32e0fc83e14de73bb684e38c2d78a6b0"},{url:"tags/Git/index.html",revision:"33f016c82b96be899f1f65d493529fdd"},{url:"tags/GitHub/index.html",revision:"91efda87baba37949e02939c16b71ac1"},{url:"tags/Hello-World/index.html",revision:"a99db047199718bc3c56edd46a4d6c36"},{url:"tags/hexo/index.html",revision:"3494e133a4e4558cb7dabc5584cac312"},{url:"tags/index.html",revision:"0957eee11eb06b6dbe489ec89a5b0fe5"},{url:"tags/Java/index.html",revision:"ceae98ef97c07c308f5cec9d95e13f0a"},{url:"tags/JDBC/index.html",revision:"c7c8ff712ff565a7cd5759167699ba41"},{url:"tags/Markdown/index.html",revision:"dea45991b23d4d7a4fc9c1b377a59eb4"},{url:"tags/matery主题/index.html",revision:"51e61e82f19d0752522e091d08b06752"},{url:"tags/MATLAB/index.html",revision:"0d6796f2ecb9cef89132c170c863be11"},{url:"tags/MySQL/index.html",revision:"03d60909db5a3045d6a3f926c48200b7"},{url:"tags/Vue/index.html",revision:"b67a34c7afbccd4850b2233e197ce050"},{url:"tags/最短路径/index.html",revision:"bf72d7747fc5bacbb6b88fe804e00f38"},{url:"tags/博客/index.html",revision:"cd390cc8a74bd995dd3b3b085f5cec79"},{url:"tags/友链朋友圈/index.html",revision:"5334e77cb36928b4d46b61d1c2f7dcb4"},{url:"tags/图床/index.html",revision:"579111d685b7daaa9041f0ae76eea185"},{url:"tags/基础/index.html",revision:"a0c5b91a98f502b96f46e53b21e20404"},{url:"tags/字体精简/index.html",revision:"0d3869728afe0ef288f39f1d0f2877d9"},{url:"tags/学习笔记/index.html",revision:"8f404dea60d4f48d079aef125623b3cf"},{url:"tags/小游戏/index.html",revision:"5bd9b41e6cb4da45845ac34ef9b16e6c"},{url:"tags/常用网站/index.html",revision:"1ea4337aacab5261a276c9460a976a1d"},{url:"tags/拟合圆/index.html",revision:"7641bb8fb29c8af849ced6b11a9427b1"},{url:"tags/搜索引擎收录入口/index.html",revision:"e142d198e60087b16273a1c8a47431d8"},{url:"tags/数学建模/index.html",revision:"6c2d6c6381dcd71f4eaccc05557610b1"},{url:"tags/文档操作/index.html",revision:"225bc0ff2d61275272361c075f850a12"},{url:"tags/服务器/index.html",revision:"d66789174c464047ae6b84acaffcb930"},{url:"tags/汇总/index.html",revision:"cdb97a5326ec90410004a3040a4adc8b"},{url:"tags/组件/index.html",revision:"9e782c0adcb98e604b0c93ca52199694"},{url:"tags/解决/index.html",revision:"15a64614abb0c43ce9ff73fb6cf0e40e"},{url:"tags/触发器/index.html",revision:"9c510677e17e32ad81fa02064e7b0ccf"},{url:"tags/警示/index.html",revision:"aa807206406b69a1a9845a8d7923d912"},{url:"tags/记录整理/index.html",revision:"c346f845486775dada10986c070bd2ec"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
