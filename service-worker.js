if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,d,r)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return a;case"module":return c;default:return e(i)}}))).then((e=>{const i=r(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/061916107.html",revision:"97dfaed67fac08d9071def45af0e9e8a"},{url:"2021/071060549.html",revision:"b11684130d0d8d88102d4ec870bc840a"},{url:"2021/071133926.html",revision:"c52fcd324d75117a9dd177dadc219999"},{url:"2021/071326519.html",revision:"195442ac010b2cba42dd5709668485fb"},{url:"2021/072241576.html",revision:"94e70b2fe4f16fcc1b282ff3a2fd1c34"},{url:"2021/082760550.html",revision:"4b2c80cde58de5642902852c2964c1fb"},{url:"2021/083041604.html",revision:"cb7cbbebfc4041e2a67a32cb01830913"},{url:"2021/083053025.html",revision:"4647b25777bc5356f29e0a81196330f8"},{url:"2021/112156639.html",revision:"bc6f6240d30d2165d4d2718bb81f6f8f"},{url:"2021/120460550.html",revision:"310dce564d3f293753feac6ffce2a52c"},{url:"404.html",revision:"b2c857783f56e8f92451e28448a7800d"},{url:"404/index.html",revision:"5cd5bb229d3c97bcbade11331ac87893"},{url:"about/index.html",revision:"95f323b67998af9f2946add72348b8e5"},{url:"archives/2021/06/index.html",revision:"04dffccb8c526be24a4d64a594241de4"},{url:"archives/2021/07/index.html",revision:"2558b58aa26583f72e9bb9478b007d6c"},{url:"archives/2021/08/index.html",revision:"0911152af038340100121fcb8772d64a"},{url:"archives/2021/11/index.html",revision:"74a5e1f20149278eb3d56f5cb9201796"},{url:"archives/2021/12/index.html",revision:"755e1ede6e014d4fe4fa3fc381644afc"},{url:"archives/2021/index.html",revision:"0271b37150f2874bdbd3213140ec167a"},{url:"archives/index.html",revision:"60ce052e2b535b88207099bdf25a0655"},{url:"artitalk/index.html",revision:"fcb9048d4e97e4a4ae84be2b747defba"},{url:"categories/Blog/index.html",revision:"e2e9edc1fb02d52d3a2cfdc266da72e8"},{url:"categories/Git/index.html",revision:"f365ecdcfc5f1f1a62e8c7d667ad7687"},{url:"categories/hexo/index.html",revision:"8e216139b974efbdd01c1c9b1ec57cce"},{url:"categories/index.html",revision:"ded40a5fb42d50ea439eda19dab53843"},{url:"categories/Markdown/index.html",revision:"85eade1435b21fdd9842bffc7a3c5b77"},{url:"categories/MATLAB/index.html",revision:"8ab4fa75dfe92a6cd8b085b23c353eab"},{url:"categories/小游戏/index.html",revision:"4468e644af770067e75438b8e5213460"},{url:"categories/常用网站汇总/index.html",revision:"a74cf15a0b32c3e5bff921f1af58732b"},{url:"categories/算法/index.html",revision:"f0ef6610c9eb8b3314e9c2ee80958975"},{url:"census/index.html",revision:"e18fd3ccf84a4c5ced8b71b58a49f049"},{url:"contact/index.html",revision:"07376af7410b43d741ec3d5192ef8fa8"},{url:"css/DIY.css",revision:"781e83be9abddfa216a33293600662ca"},{url:"css/index.css",revision:"9f31d106daca5752a3861a3da9582a05"},{url:"css/prism-line-numbers.css",revision:"0810c0e4aa6528786cf1253de32ea115"},{url:"css/prism-tomorrow.css",revision:"f46d7519e3b65a6912814727b47a57ff"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"friends/index.html",revision:"626323add4451511e918e8285e9c2436"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"575b4169bcd57a282589b916b49a48a6"},{url:"js/botui.js",revision:"04665a19b81c8aa8cd39f76508f2cc31"},{url:"js/botui3.js",revision:"38c1eedf5641b1ad254ed5f20534b2ac"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"e13f549926081e2d990bdbea8e14a4f6"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"ca632a554499bd2b5b26e0601c97d3d5"},{url:"live2d-widget/demo/demo.html",revision:"ea08410e23bab02bb9b93fa1bf0bb394"},{url:"live2d-widget/demo/login.html",revision:"654bfdda95fd457d67264ef76de92a22"},{url:"live2d-widget/live2d.min.js",revision:"bc979e8fda00282dec96c777d14cf140"},{url:"live2d-widget/README.html",revision:"96b47b00a119cfa371d7e545fccd35b1"},{url:"live2d-widget/waifu-tips.js",revision:"ee085bf5d3c794004db020f0cbd010bf"},{url:"live2d-widget/waifu.css",revision:"e11570c2a4b40040e6b5e780409055f8"},{url:"medias/artitalk/artitalk.min.js",revision:"cd127964163871e995bb7fd225caacf0"},{url:"medias/artitalk/main.min.css",revision:"85c61a60fdb922dd9c43800ca7fb911f"},{url:"medias/avatar.jpg",revision:"a26bba228e7fd5db25ead84e83241439"},{url:"medias/barrager/0.png",revision:"f5d8318197ffd7ce9aacf308bf186c5e"},{url:"medias/barrager/1.png",revision:"ea244312d1bf53680470f3da4d308bb4"},{url:"medias/barrager/2.png",revision:"50e265a8acfea4b3bafd407dff4ceaba"},{url:"medias/barrager/close.png",revision:"ab45ca050318e57b6559bb3503bc19a1"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/copy/0.jpg",revision:"306003d8042084347393c395cf75c56d"},{url:"medias/copy/1.jpg",revision:"9269002d0873d0e0fe9c9384507a0f81"},{url:"medias/copy/2.jpg",revision:"9d5259c1c229c7b2a7ea813b5246ce26"},{url:"medias/copy/3.jpg",revision:"8c7505b632239a7c4e39f1667c3928b0"},{url:"medias/copy/4.jpg",revision:"86b8effb2e19b0251f53a7dd8869dc8e"},{url:"medias/copy/5.jpg",revision:"ac669fc927093822996b6bfbafc9c3a0"},{url:"medias/cover.jpg",revision:"1253d8cf7abf8e92af47bda2bf61bd84"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/logo.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"medias/Picture/Git修改成功.png",revision:"59917e8ff1359b7b9f214bf9084e793a"},{url:"medias/Picture/Git报错.png",revision:"d1add9b59649c78439d4be755a6fe068"},{url:"medias/Picture/Git添加内容.png",revision:"d5349c57a36136105c32d3ddb3932400"},{url:"medias/Picture/Git路径.png",revision:"132ad8145ccf73f7dd002ec97ff78bd8"},{url:"medias/Picture/HDU2544最短路.png",revision:"c1facebae3d0b8d2588f25b20cf54d30"},{url:"medias/Picture/matlab多图绘制示例.png",revision:"214c8566edfab6b23a4ba937a25d3d73"},{url:"medias/Picture/matlab拟合圆1.png",revision:"8e56b573b111a6cad9ca2ac84a54f5bd"},{url:"medias/Picture/matlab拟合圆图片2.png",revision:"4e10326fc8cf22b2b88c48ce542179a6"},{url:"medias/Picture/matlab拟合圆图片3.png",revision:"933ea12a046ed042ceb5ee68ccb71761"},{url:"medias/Picture/matlab散点图矩阵示图.png",revision:"defdefc2d115867dd1a91d0b02a4feb2"},{url:"medias/reward/alipay.jpg",revision:"48cf8b0f4e23abc880ebcca775236fd9"},{url:"medias/reward/wechat.png",revision:"40a19e38db3c7a25cffd64a564d42dee"},{url:"medias/备案图标.png",revision:"d0289dc0a46fc5b15b3363ffa78cf6c7"},{url:"my2048game/css/main.css",revision:"7c55ec4d7b40c38ac1628c78ad03a1e6"},{url:"my2048game/img/favicon.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"my2048game/index.html",revision:"877042d73d24aea08884aaeb6c706cf1"},{url:"my2048game/js/main2048.js",revision:"b3533ccfcc04711a4f3f5e1d9de55d0a"},{url:"Mysearch/css/mainsearchstyle.css",revision:"e0ace83310299037bc8d10e78d126a62"},{url:"Mysearch/css/背景/搜索界面背景.jpg",revision:"b959598b0403e1bc7bd94c7462f42403"},{url:"Mysearch/img/YZY.png",revision:"a6493e1868a7ad30230ff2753ae7b9f2"},{url:"Mysearch/img/备案图标.png",revision:"d0289dc0a46fc5b15b3363ffa78cf6c7"},{url:"Mysearch/img/问天阁.png",revision:"4a51724ed22e665a45f2974608afc132"},{url:"Mysearch/index.html",revision:"5b6a6fcc18bce8e8dc4be1039564fe5d"},{url:"Mysearch/js/ShowTheTime.js",revision:"73c0b6d8e74260bcb77eeaa9c261875d"},{url:"tags/2048/index.html",revision:"7b68145e1486cea8008a033ee4698fa7"},{url:"tags/ACM/index.html",revision:"7774f064ff7f115a044bae275361ea98"},{url:"tags/blog/index.html",revision:"8e0e5b5ee8ad93446a3e0321e59b9b87"},{url:"tags/Coding/index.html",revision:"4c42c57c61cba15bade75b3182be2970"},{url:"tags/Git/index.html",revision:"c63b5bc1d7e51af914a1e8509e3f07e0"},{url:"tags/Hello-World/index.html",revision:"a3260440da1cde0e3a9d58adc2059091"},{url:"tags/hexo/index.html",revision:"1d537a34142c022489ce0416345eb902"},{url:"tags/index.html",revision:"d8a7ccbff8beb7f775ee168d20b38e16"},{url:"tags/Markdown/index.html",revision:"d93b1a6591bc0f85002f2dd6334afa06"},{url:"tags/matery/index.html",revision:"3a39dbe911250e9afcd8f2ede9926539"},{url:"tags/MATLAB/index.html",revision:"a9bf822f04d07ffef615a634694a6e15"},{url:"tags/最短路径/index.html",revision:"9602395093ae314d7b8713c5dca1b39e"},{url:"tags/图床/index.html",revision:"9526afa412432c35b276db376b2341e7"},{url:"tags/小游戏/index.html",revision:"b63a14d14e3de25e7f6fa7cc34fbbef9"},{url:"tags/常用网站/index.html",revision:"711e462ac7b004b49a1b1cf77ff63cc8"},{url:"tags/拟合圆/index.html",revision:"d2d51476cfa70f586ca553778cfb468c"},{url:"tags/搜索引擎收录入口/index.html",revision:"aeca9ad2a61b8407d00f5a4adec5aae8"},{url:"tags/数学建模/index.html",revision:"db2d2b959d8d8f956a18355e02eacac4"},{url:"tags/汇总/index.html",revision:"ddefe9b6e853f30117e8c4de741b6816"},{url:"tags/解决/index.html",revision:"210db60fad81e7ef392788490c361741"},{url:"tags/记录整理/index.html",revision:"7d1d75f277253c6ce83961e00a0d155b"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
