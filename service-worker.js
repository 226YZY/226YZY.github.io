if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,r,d)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return a;case"module":return c;default:return e(i)}}))).then((e=>{const i=d(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/061916107.html",revision:"852bfd567f85f647e5827857c1949da1"},{url:"2021/071060549.html",revision:"551aa9ae2044863962e6834166782267"},{url:"2021/071133926.html",revision:"fe90fe0bcffc9cd58e96fda156e598a4"},{url:"2021/071326519.html",revision:"45764acebebdab6c8b30fb9c59adf425"},{url:"2021/072241576.html",revision:"2cfb5151a2278054a62bdd30d772ed7d"},{url:"2021/082760550.html",revision:"f950cfbfdaab11441bd75df89cae311c"},{url:"2021/083041604.html",revision:"7f25d98917b32e7e19b69e8640c28edb"},{url:"2021/083053025.html",revision:"72e548935e273338c9de2215ca955fef"},{url:"2021/112156639.html",revision:"f08d1cc2dee38fdfae357faffea079a3"},{url:"2021/120460550.html",revision:"fd6192ac38b3ae44ee39104cb452dfdb"},{url:"2021/120860549.html",revision:"a112e43c380d8df6b24e306ed531ea66"},{url:"2021/120927345.html",revision:"fe86fc90234967722d4dcfc7504453de"},{url:"2021/121130800.html",revision:"8dcc2e2e4ff1fb6d5300a4dffbc719ae"},{url:"2021/12157757.html",revision:"f8faa529039849d355b5647bc17c49a2"},{url:"2021/121818354.html",revision:"f74d6df7869b0e0f691decbc708b3355"},{url:"2021/122151725.html",revision:"56800d09abb9e2569fa77d1c24b6ce6d"},{url:"2021/122227789.html",revision:"dd41d3f69306aa84f076af4312dc6648"},{url:"2021/122648049.html",revision:"cd23f18ca8548cdfbe3ff70da6dfd873"},{url:"2022/010757003.html",revision:"3109b9c4d19812cdc8110cf654fec4ab"},{url:"2022/010948485.html",revision:"64074de7affe305920f909379dea9328"},{url:"404.html",revision:"4ce95f84467d72f42ab922bcb278192a"},{url:"about/index.html",revision:"0a6721756bfd3813249955c71e5c0e44"},{url:"archives/2021/06/index.html",revision:"d686f3ef51f8bd05cac742b3a9477c4a"},{url:"archives/2021/07/index.html",revision:"133542fc7dc18c291479545aa486af47"},{url:"archives/2021/08/index.html",revision:"ee300bb9caa98095e0b95e668fd71d24"},{url:"archives/2021/11/index.html",revision:"1786c09c6121157e1bf484b2e5d8a487"},{url:"archives/2021/12/index.html",revision:"efc8658ffc1d1518fff4ca6d5fc7c7a2"},{url:"archives/2021/index.html",revision:"7a533f7a4a7679a7a671f86c90dde247"},{url:"archives/2021/page/2/index.html",revision:"d5c1e228e3510d6155cb4cdfd911684d"},{url:"archives/2022/01/index.html",revision:"acd486e7b58f35c9e2f22123fada607e"},{url:"archives/2022/index.html",revision:"af8112f3dd14703fe0ff78626c3f8d30"},{url:"archives/index.html",revision:"82b62584161e3b13f062ae3f7b22e8c3"},{url:"archives/page/2/index.html",revision:"e39b6bfb930294859942c7c1fb612b0a"},{url:"artitalk/index.html",revision:"74c8ff050505cf850eff58acae526693"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/Android/index.html",revision:"347e80ee42d42643174f3b03589b8223"},{url:"categories/Git/index.html",revision:"0747e2569b357547e8461362d07b771c"},{url:"categories/GitHub/index.html",revision:"f529d77959734065d17449febfc9a719"},{url:"categories/hexo/butterfly主题/index.html",revision:"173ab372f46079a78b530ace7dc76ab9"},{url:"categories/hexo/index.html",revision:"da9c9dc6e152f4df1fadbadb76654db2"},{url:"categories/hexo/matery主题/index.html",revision:"36fbb1ee831ac7eea0c33546df24408c"},{url:"categories/index.html",revision:"0071864827b041516aa3f49d5b41591c"},{url:"categories/Markdown/index.html",revision:"5ee43e69d5192280e865018a9df48999"},{url:"categories/MATLAB/index.html",revision:"b5920ded4f23563fbcc1b6074ab3772a"},{url:"categories/MySQL/index.html",revision:"949bf13439eafe0fba3183dc953e3a7e"},{url:"categories/MySQL/触发器/index.html",revision:"99f6d09a63f5628834c229597fa32d9f"},{url:"categories/Vue/index.html",revision:"99fc41fef049687f7a85588bbd4f3820"},{url:"categories/Vue/组件/index.html",revision:"b4b2dab9c7653559e49c45f0b1013951"},{url:"categories/小游戏/index.html",revision:"16f3d8ad7e939d478e99c52670cac3b4"},{url:"categories/常用网站汇总/index.html",revision:"446bff6b7dd5da1ed21880df8934e5d9"},{url:"categories/算法/index.html",revision:"e1c2e26a6782baa546fffba28a68345e"},{url:"census/index.html",revision:"64b4b9ddd00ed9ff45c45d809f19fc35"},{url:"contact/index.html",revision:"acaba79854e6c5feada06ac23affb65c"},{url:"css/DIY.css",revision:"da56ebb39e63acbebab6fdc2e89a95f4"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"3bad2b48710ec19c842c2cecb50bb96a"},{url:"css/prism-line-numbers.css",revision:"0810c0e4aa6528786cf1253de32ea115"},{url:"css/prism-tomorrow.css",revision:"f46d7519e3b65a6912814727b47a57ff"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"demos/VueDemo/index.html",revision:"f4a53568d88aca54b2dd7b9245fd7d2d"},{url:"fcircle/index.html",revision:"f52e3c63e95994218c62baf12d2023c9"},{url:"friends/index.html",revision:"a556603df8d5f957927aba0c220adb22"},{url:"gallery/index.html",revision:"1504ff65e832f6a5c7a9bb2d581eb2de"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"index.html",revision:"9cb135ef720e7d04e3fff4b3ce0e3f22"},{url:"js/botui.js",revision:"5f6f727dfe7fc4b13f006f95dbe2d0f5"},{url:"js/fishes.js",revision:"de5855d298ddc661b1c65c61469544f5"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/index.html",revision:"11ad2716423418e9b7740db915f5e3f8"},{url:"medias/avatar.jpg",revision:"a26bba228e7fd5db25ead84e83241439"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/logo.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"medias/reward/alipay.jpg",revision:"48cf8b0f4e23abc880ebcca775236fd9"},{url:"medias/reward/wechat.png",revision:"40a19e38db3c7a25cffd64a564d42dee"},{url:"medias/备案图标.png",revision:"d0289dc0a46fc5b15b3363ffa78cf6c7"},{url:"my2048game/css/main.css",revision:"7c55ec4d7b40c38ac1628c78ad03a1e6"},{url:"my2048game/img/favicon.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"my2048game/index.html",revision:"e5fca9a65334b9c3e635f5fd91d83ec4"},{url:"my2048game/js/main2048.js",revision:"a69312bf12622fae732ef46a7e477274"},{url:"Mysearch/css/mainsearchstyle.css",revision:"6f1e5947317534b02de7563045a31d35"},{url:"Mysearch/img/YZY.png",revision:"a6493e1868a7ad30230ff2753ae7b9f2"},{url:"Mysearch/img/备案图标.png",revision:"d0289dc0a46fc5b15b3363ffa78cf6c7"},{url:"Mysearch/img/问天阁.png",revision:"4a51724ed22e665a45f2974608afc132"},{url:"Mysearch/index.html",revision:"5b6a6fcc18bce8e8dc4be1039564fe5d"},{url:"Mysearch/js/ShowTheTime.js",revision:"73c0b6d8e74260bcb77eeaa9c261875d"},{url:"page/2/index.html",revision:"4095cfb396ea230390356a0933a6db84"},{url:"public/service-worker.js",revision:"e95c316b8464574f193395c4b67682ec"},{url:"public/workbox-07585517.js",revision:"dd7a32c50a74e3b8b434f0e6dc8c57d0"},{url:"tags/2048/index.html",revision:"b057b927d1651ea52e30ef597a625211"},{url:"tags/ACM/index.html",revision:"129e188bf79d305100bbcaf3508c12e3"},{url:"tags/Android/index.html",revision:"e1d760e342ea1f8964394098cc42da76"},{url:"tags/butterfly主题/index.html",revision:"288637977cd9cef6c3488f7869e5688b"},{url:"tags/Coding/index.html",revision:"3b947e7bb0f54ab659cef1ed91a76474"},{url:"tags/Git/index.html",revision:"2ae8380190d6e19cf60db9c476f4ef7e"},{url:"tags/GitHub/index.html",revision:"52e8b9774bbe4815bf73bfc5e48a4391"},{url:"tags/Hello-World/index.html",revision:"4873f9ed303d6b82de47feb9b48c7afa"},{url:"tags/hexo/index.html",revision:"8ca971d1ad89c2566ac2e1f90e2f05c5"},{url:"tags/index.html",revision:"db4503e64037942269c8b5370e7d0093"},{url:"tags/Markdown/index.html",revision:"61146c06b638717f51d300451401d26e"},{url:"tags/matery主题/index.html",revision:"313f2941b5c0ae749e3c76f9d7919958"},{url:"tags/MATLAB/index.html",revision:"24fdcaaf6ee24ab478d30979fbde0a8f"},{url:"tags/MySQL/index.html",revision:"e9ab7ed77a4bc667ae80c12507fcda04"},{url:"tags/Vue/index.html",revision:"b2d81904e47a6bab49f18fbf77370fa6"},{url:"tags/最短路径/index.html",revision:"7dde122dce33adebe57a338378e00158"},{url:"tags/图床/index.html",revision:"a72a1683d76077e7e3519a31a0ab3177"},{url:"tags/基础/index.html",revision:"a9fafc0c0f16a705f45de4b3feb0971f"},{url:"tags/字体精简/index.html",revision:"67ecf44e121885f29c4e2f7b71f22d3e"},{url:"tags/学习笔记/index.html",revision:"efa22ab01eeffcb0539d00f0a6ca954e"},{url:"tags/小游戏/index.html",revision:"a0cfe8bd99f05f0a2105b5d6da5279fd"},{url:"tags/常用网站/index.html",revision:"d48521b84591c0eafea9f935c11b020b"},{url:"tags/拟合圆/index.html",revision:"5769d5dda816770262a6590030607fe4"},{url:"tags/搜索引擎收录入口/index.html",revision:"042a28b14484c82df83b58bdb22eac63"},{url:"tags/数学建模/index.html",revision:"4a3facd49d52644ea92349489bec83a8"},{url:"tags/服务器/index.html",revision:"bf3fff84350b89c381384282c5f51eeb"},{url:"tags/汇总/index.html",revision:"9280bfba262279f6a60912f8b9b09a86"},{url:"tags/组件/index.html",revision:"366f718ad5cf4fd958ca188d0208f454"},{url:"tags/解决/index.html",revision:"b63206c6b3251871718d0eb6bd9bf50b"},{url:"tags/触发器/index.html",revision:"440d64670cc222c715c048abafdd63ce"},{url:"tags/记录整理/index.html",revision:"53074206ba1b4835e16fc76fb478670f"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
