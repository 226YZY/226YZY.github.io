if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,d,r)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return a;case"module":return c;default:return e(i)}}))).then((e=>{const i=r(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/061916107.html",revision:"333869c2deedee6b853944ec772601ea"},{url:"2021/071060549.html",revision:"af26ac6eaa4690e01082a72758c37b26"},{url:"2021/071133926.html",revision:"df1ee994a1cd019b798ee81d93dacb93"},{url:"2021/071326519.html",revision:"ea57f380d0a808fc3d429008025988e2"},{url:"2021/072241576.html",revision:"93ea1a87ff64aad003718cf7937afefa"},{url:"2021/082760550.html",revision:"05edd2f4482041d030dec698eb5fa7c7"},{url:"2021/083041604.html",revision:"71f678b5097de01e4bbc598f7056693b"},{url:"2021/083053025.html",revision:"5cc8094ec3a57f48bef73ccc71e54638"},{url:"2021/112156639.html",revision:"6d52cb2b7235cd2316ed6802f5ee0429"},{url:"2021/120460550.html",revision:"8d45da2da7f664f45ce97ecc8270d02a"},{url:"404.html",revision:"62e42a34e75b1966ccd21f644674be09"},{url:"404/index.html",revision:"aa6a5d011fee2590051818a532e457fd"},{url:"about/index.html",revision:"05baf9a967e268cbeaca1d6652c5c3ed"},{url:"archives/2021/06/index.html",revision:"5dba7f2057f35ef2e70558d15459552f"},{url:"archives/2021/07/index.html",revision:"2134bcec5375b22c87851fe499280ca0"},{url:"archives/2021/08/index.html",revision:"fce3525c0625af9e3405baf62d471b47"},{url:"archives/2021/11/index.html",revision:"dea6c7dee67911881edf8492dc854f81"},{url:"archives/2021/12/index.html",revision:"952a6b82dc23e87602590a007f1842c4"},{url:"archives/2021/index.html",revision:"db8c9515fa1f81af2e83fad00d225c54"},{url:"archives/index.html",revision:"aa787a97f15a22855e424e8d97237a3b"},{url:"artitalk/index.html",revision:"a93f82c40b9d976a85b1ff7f81e7285e"},{url:"categories/Blog/index.html",revision:"7622129486facfc85d61c05990b5ffb3"},{url:"categories/Git/index.html",revision:"bcb6099bf552ac962d6d83d5b13afb11"},{url:"categories/hexo/index.html",revision:"af95d32f7dddea0c3888dbec1887599d"},{url:"categories/index.html",revision:"3c8f8024092699b6459688d75417dc40"},{url:"categories/Markdown/index.html",revision:"bdde0f61974777d333153fa922a2cc5e"},{url:"categories/MATLAB/index.html",revision:"f220e66108f1ac03104dda1d847ad664"},{url:"categories/小游戏/index.html",revision:"f82dd90e5595cbf8356c58c7576c84a6"},{url:"categories/常用网站汇总/index.html",revision:"c37e03060d6b9042769f2763b4c08f86"},{url:"categories/算法/index.html",revision:"d31ce84f14db7d9f0d074f1eea5bc408"},{url:"census/index.html",revision:"9a5ed2d5018181119c10270702a6c579"},{url:"contact/index.html",revision:"96c674224668af5aaf301d58090bb6d7"},{url:"coursor/338c98f2883211ebb6edd017c2d2eca2.jpg",revision:"fc79bd39613f6b2ca71e4d857f8e52fa"},{url:"css/DIY.css",revision:"781e83be9abddfa216a33293600662ca"},{url:"css/index.css",revision:"9f31d106daca5752a3861a3da9582a05"},{url:"css/prism-line-numbers.css",revision:"0810c0e4aa6528786cf1253de32ea115"},{url:"css/prism-tomorrow.css",revision:"f46d7519e3b65a6912814727b47a57ff"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"friends/index.html",revision:"4c98d027054dff83e76259e1efdb29ff"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"b924a27db275048cf70268ca405bc9d2"},{url:"js/botui.js",revision:"04665a19b81c8aa8cd39f76508f2cc31"},{url:"js/botui3.js",revision:"38c1eedf5641b1ad254ed5f20534b2ac"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"822796a40a28fc01f66dfa8973950740"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"ca632a554499bd2b5b26e0601c97d3d5"},{url:"live2d-widget/demo/demo.html",revision:"86f7ee5057dd9ea5d6b3b99ecd93d42c"},{url:"live2d-widget/demo/login.html",revision:"5a002ccc96dc7480a05d7e1ea9f0d9b7"},{url:"live2d-widget/live2d.min.js",revision:"bc979e8fda00282dec96c777d14cf140"},{url:"live2d-widget/README.html",revision:"d0d3acc97b4f61bccfc40909b5978ab5"},{url:"live2d-widget/waifu-tips.js",revision:"ee085bf5d3c794004db020f0cbd010bf"},{url:"live2d-widget/waifu.css",revision:"e11570c2a4b40040e6b5e780409055f8"},{url:"medias/avatar.jpg",revision:"a26bba228e7fd5db25ead84e83241439"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/logo.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"medias/Picture/Git修改成功.png",revision:"59917e8ff1359b7b9f214bf9084e793a"},{url:"medias/Picture/Git报错.png",revision:"d1add9b59649c78439d4be755a6fe068"},{url:"medias/Picture/Git添加内容.png",revision:"d5349c57a36136105c32d3ddb3932400"},{url:"medias/Picture/Git路径.png",revision:"132ad8145ccf73f7dd002ec97ff78bd8"},{url:"medias/Picture/HDU2544最短路.png",revision:"c1facebae3d0b8d2588f25b20cf54d30"},{url:"medias/Picture/matlab多图绘制示例.png",revision:"214c8566edfab6b23a4ba937a25d3d73"},{url:"medias/Picture/matlab拟合圆1.png",revision:"8e56b573b111a6cad9ca2ac84a54f5bd"},{url:"medias/Picture/matlab拟合圆图片2.png",revision:"4e10326fc8cf22b2b88c48ce542179a6"},{url:"medias/Picture/matlab拟合圆图片3.png",revision:"933ea12a046ed042ceb5ee68ccb71761"},{url:"medias/Picture/matlab散点图矩阵示图.png",revision:"defdefc2d115867dd1a91d0b02a4feb2"},{url:"medias/reward/alipay.jpg",revision:"48cf8b0f4e23abc880ebcca775236fd9"},{url:"medias/reward/wechat.png",revision:"40a19e38db3c7a25cffd64a564d42dee"},{url:"medias/备案图标.png",revision:"d0289dc0a46fc5b15b3363ffa78cf6c7"},{url:"my2048game/css/main.css",revision:"7c55ec4d7b40c38ac1628c78ad03a1e6"},{url:"my2048game/img/favicon.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"my2048game/index.html",revision:"877042d73d24aea08884aaeb6c706cf1"},{url:"my2048game/js/main2048.js",revision:"b3533ccfcc04711a4f3f5e1d9de55d0a"},{url:"Mysearch/css/mainsearchstyle.css",revision:"e0ace83310299037bc8d10e78d126a62"},{url:"Mysearch/css/背景/搜索界面背景.jpg",revision:"b959598b0403e1bc7bd94c7462f42403"},{url:"Mysearch/img/YZY.png",revision:"a6493e1868a7ad30230ff2753ae7b9f2"},{url:"Mysearch/img/备案图标.png",revision:"d0289dc0a46fc5b15b3363ffa78cf6c7"},{url:"Mysearch/img/问天阁.png",revision:"4a51724ed22e665a45f2974608afc132"},{url:"Mysearch/index.html",revision:"5b6a6fcc18bce8e8dc4be1039564fe5d"},{url:"Mysearch/js/ShowTheTime.js",revision:"73c0b6d8e74260bcb77eeaa9c261875d"},{url:"tags/2048/index.html",revision:"d1e9a02393db13a82b08668965daa0e7"},{url:"tags/ACM/index.html",revision:"240a2dc51f3188503f580e7120a94adb"},{url:"tags/blog/index.html",revision:"141f26177f2aa947532e6af6374b1f55"},{url:"tags/Coding/index.html",revision:"645c46ae32349635ed482837f65da793"},{url:"tags/Git/index.html",revision:"823b097c6b90c9ac3df75ef63314df1b"},{url:"tags/Hello-World/index.html",revision:"092ce24e51e5e7e87f3b32eae629c9e9"},{url:"tags/hexo/index.html",revision:"b73570c0652e9029ccebdbcedfc10f6d"},{url:"tags/index.html",revision:"373edaed37cc56e525f5185acaca28e8"},{url:"tags/Markdown/index.html",revision:"c3c6142f240cc85a2719d0227178648a"},{url:"tags/matery/index.html",revision:"fadae41484e44f0871b754c65eaaf627"},{url:"tags/MATLAB/index.html",revision:"0d5b2e837448d01cfd7ab7430337d79d"},{url:"tags/最短路径/index.html",revision:"6e793be28e9bff7355a1783a32a1c4d2"},{url:"tags/图床/index.html",revision:"d8ed351552611575159127f01a88b5cf"},{url:"tags/小游戏/index.html",revision:"be9435330120add10846b346284c9370"},{url:"tags/常用网站/index.html",revision:"89920bd555a75ef5fdbf9e55514d5bb4"},{url:"tags/拟合圆/index.html",revision:"44bde20b0fa8098502c87277d306a36f"},{url:"tags/搜索引擎收录入口/index.html",revision:"e221156fb6dd7edf7626f054741f760d"},{url:"tags/数学建模/index.html",revision:"1f6313aa1de1b04ad0b911543222bc96"},{url:"tags/汇总/index.html",revision:"9bce562676bbe60ea2c3fc5f13667529"},{url:"tags/解决/index.html",revision:"f325f116c17ea8d1c6a918f0ac7b7a4a"},{url:"tags/记录整理/index.html",revision:"801a02aac4bcb9105024d22fd6d0b43c"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
