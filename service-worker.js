if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,d,r)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return a;case"module":return c;default:return e(i)}}))).then((e=>{const i=r(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/061916107.html",revision:"801ae2ebc5e867569f2dfec05e0dc9b7"},{url:"2021/071060549.html",revision:"c2f47935e9c93d65fccfbc87dd967fc1"},{url:"2021/071133926.html",revision:"d5ac274b85a6c89c06c89257592c4a26"},{url:"2021/071326519.html",revision:"2eceb747d7ef2695d0b35ab93cd66b1d"},{url:"2021/072241576.html",revision:"a9e8d3361b823ff91adb8816a3f18bdc"},{url:"2021/082760550.html",revision:"9f7fda272721ab13a4dc41b4f74b44b6"},{url:"2021/083041604.html",revision:"66f1b7b83973afc5d0ea3f928a70c42c"},{url:"2021/083053025.html",revision:"1775527ba95d374f9b1f34a02f2c8384"},{url:"404/index.html",revision:"26eba5f6a5ea2e74fa177c89742da6f5"},{url:"about/index.html",revision:"8bb3b2c73b97993155d40d07561e7517"},{url:"archives/2021/06/index.html",revision:"28fde883f2b5476cd05a78a2e1f08bfc"},{url:"archives/2021/07/index.html",revision:"97ff4a3f82f1dbeaecfd9345fc0aef7c"},{url:"archives/2021/08/index.html",revision:"8b0458eb4f167b66d86003fbacb180c0"},{url:"archives/2021/index.html",revision:"a680c88000c336a8d877b68875ed427a"},{url:"archives/index.html",revision:"3274d21cdbbd910aff230577d0b7a4f2"},{url:"artitalk/index.html",revision:"4140b37b0786d755d3c2a396fea52010"},{url:"categories/Blog/index.html",revision:"3e58454dfd79b72b3b34aeed50b357e5"},{url:"categories/hexo/index.html",revision:"a2e09219d7692c2beec7a64a42c8f6a9"},{url:"categories/index.html",revision:"54b4dfc3eec75dcb963b6a51d6863ffb"},{url:"categories/Markdown/index.html",revision:"940147fa79a439e90a4ee079da3efb67"},{url:"categories/MATLAB/index.html",revision:"9414b0ae44812b0a893e5a186a051a02"},{url:"categories/常用网站汇总/index.html",revision:"83e853b025385040f716657e646cdf89"},{url:"categories/算法/index.html",revision:"bea8656fa92f12d2e13f76bc94f729a8"},{url:"census/index.html",revision:"9f86286b5acf1c968f98b7d6518e1d8f"},{url:"contact/index.html",revision:"bbeab908348fccccfb4b174a0d7dfe81"},{url:"css/DIY.css",revision:"d3305cb3506641d1164d1f7b909a8084"},{url:"css/index.css",revision:"de2391e42e79521b7038bb7cc159b190"},{url:"css/prism-line-numbers.css",revision:"0810c0e4aa6528786cf1253de32ea115"},{url:"css/prism-tomorrow.css",revision:"f46d7519e3b65a6912814727b47a57ff"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"friends/index.html",revision:"e20071285c66db5234371dc622a5ac2c"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"417e8a272239e0698215aae4b1da2470"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"1620cc20e26d87e0f12030184d647cc2"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"ca632a554499bd2b5b26e0601c97d3d5"},{url:"live2d-widget/demo/demo.html",revision:"d8cb6e6eeabf9c1542c18507c6e9582c"},{url:"live2d-widget/demo/login.html",revision:"8bba2d5412c56124499c485b8c3ae1d9"},{url:"live2d-widget/live2d.min.js",revision:"bc979e8fda00282dec96c777d14cf140"},{url:"live2d-widget/README.html",revision:"4168ded675bc7276dec396f45f8d9d5d"},{url:"live2d-widget/waifu-tips.js",revision:"ee085bf5d3c794004db020f0cbd010bf"},{url:"live2d-widget/waifu.css",revision:"e11570c2a4b40040e6b5e780409055f8"},{url:"medias/artitalk/artitalk.min.js",revision:"cd127964163871e995bb7fd225caacf0"},{url:"medias/artitalk/main.min.css",revision:"85c61a60fdb922dd9c43800ca7fb911f"},{url:"medias/avatar.jpg",revision:"a26bba228e7fd5db25ead84e83241439"},{url:"medias/banner/0.jpg",revision:"b959598b0403e1bc7bd94c7462f42403"},{url:"medias/banner/1.jpg",revision:"df399abafd6166188d0e6ab1dc600518"},{url:"medias/banner/2.jpg",revision:"06b6efdd0d65e295abf8b5cd4ed6fd28"},{url:"medias/banner/3.jpg",revision:"9eb8f44c961ecf5d6278855ade3074dc"},{url:"medias/banner/4.jpg",revision:"a64410eaedc141a444926d27c910264a"},{url:"medias/banner/5.jpg",revision:"e9462553a4a77cc7840fe26f17657c9f"},{url:"medias/banner/6.jpg",revision:"58c631cc4f6f94581bb5539dd2ad40bc"},{url:"medias/barrager/0.png",revision:"f5d8318197ffd7ce9aacf308bf186c5e"},{url:"medias/barrager/1.png",revision:"ea244312d1bf53680470f3da4d308bb4"},{url:"medias/barrager/2.png",revision:"50e265a8acfea4b3bafd407dff4ceaba"},{url:"medias/barrager/close.png",revision:"ab45ca050318e57b6559bb3503bc19a1"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/copy/0.jpg",revision:"306003d8042084347393c395cf75c56d"},{url:"medias/copy/1.jpg",revision:"9269002d0873d0e0fe9c9384507a0f81"},{url:"medias/copy/2.jpg",revision:"9d5259c1c229c7b2a7ea813b5246ce26"},{url:"medias/copy/3.jpg",revision:"8c7505b632239a7c4e39f1667c3928b0"},{url:"medias/copy/4.jpg",revision:"86b8effb2e19b0251f53a7dd8869dc8e"},{url:"medias/copy/5.jpg",revision:"ac669fc927093822996b6bfbafc9c3a0"},{url:"medias/cover.jpg",revision:"1253d8cf7abf8e92af47bda2bf61bd84"},{url:"medias/featureimages/0.jpg",revision:"f751cba3a4cd6381611bb4ec97d35e77"},{url:"medias/featureimages/1.jpg",revision:"d440f1a8faa3af050511b79ae30a10b0"},{url:"medias/featureimages/10.jpg",revision:"daaa0bfde5bade9fd47a9828a89c1044"},{url:"medias/featureimages/11.jpg",revision:"c613fbd6f7fadb8e65fdae620d89d277"},{url:"medias/featureimages/12.jpg",revision:"df9abf1fa933cee751d211828c35e4f5"},{url:"medias/featureimages/13.jpg",revision:"677c90f32232dd162b9c504ff176b100"},{url:"medias/featureimages/14.jpg",revision:"891ea5f9186f889adef7b215d9be9948"},{url:"medias/featureimages/15.jpg",revision:"3cf1acc3d317690beae0520a1e606b30"},{url:"medias/featureimages/16.jpg",revision:"403a5973092edf7b1fc9cfb809ed4b05"},{url:"medias/featureimages/17.jpg",revision:"a88c2a1cc175f75b8b60f3224026b4de"},{url:"medias/featureimages/18.jpg",revision:"d8104647c594f21438cbc17331c57025"},{url:"medias/featureimages/19.jpg",revision:"86258814e4374b85adac9bd8235ad110"},{url:"medias/featureimages/2.jpg",revision:"d2f7104d393ee322de0cba7313eddf74"},{url:"medias/featureimages/20.jpg",revision:"0ec7a7cc344f3d47dbc556ea312a365f"},{url:"medias/featureimages/21.jpg",revision:"7202402f259237ea1f3f6bb82d208888"},{url:"medias/featureimages/22.jpg",revision:"6b1b1da789eecd376a5e6843314f26ad"},{url:"medias/featureimages/23.jpg",revision:"95ea042be75c28794ddca649388ad3c7"},{url:"medias/featureimages/3.jpg",revision:"afcee76cc47ff729c484202e201cafd4"},{url:"medias/featureimages/4.jpg",revision:"ddd80ccca8d84079255bbfbf4244debd"},{url:"medias/featureimages/5.jpg",revision:"eeb46fbd8f9c6999a2f3fbdcf34e8b3e"},{url:"medias/featureimages/6.jpg",revision:"ae4562052cf07bc1912d5fd90e00b2ce"},{url:"medias/featureimages/7.jpg",revision:"af5b8a1b0fbab59e68a69005b2a0eeb7"},{url:"medias/featureimages/8.jpg",revision:"6d9136c0bf542e136dd70a6a7c97521b"},{url:"medias/featureimages/9.jpg",revision:"52e8f9aca543d2d4838c14bce33ecee1"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/logo.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"medias/Picture/HDU2544最短路.png",revision:"c1facebae3d0b8d2588f25b20cf54d30"},{url:"medias/Picture/matlab多图绘制示例.png",revision:"214c8566edfab6b23a4ba937a25d3d73"},{url:"medias/Picture/matlab拟合圆1.png",revision:"8e56b573b111a6cad9ca2ac84a54f5bd"},{url:"medias/Picture/matlab拟合圆图片2.png",revision:"4e10326fc8cf22b2b88c48ce542179a6"},{url:"medias/Picture/matlab拟合圆图片3.png",revision:"933ea12a046ed042ceb5ee68ccb71761"},{url:"medias/Picture/matlab散点图矩阵示图.png",revision:"defdefc2d115867dd1a91d0b02a4feb2"},{url:"medias/reward/alipay.jpg",revision:"48cf8b0f4e23abc880ebcca775236fd9"},{url:"medias/reward/wechat.png",revision:"40a19e38db3c7a25cffd64a564d42dee"},{url:"medias/备案图标.png",revision:"d0289dc0a46fc5b15b3363ffa78cf6c7"},{url:"my2048game/css/main.css",revision:"846e1326bc792de07034a813ad577a75"},{url:"my2048game/img/favicon.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"my2048game/index.html",revision:"9b00ba363e13f367846cd919330e96bf"},{url:"my2048game/js/main2048.js",revision:"6144919d84dfc1ca6e4b2c8868f1e26f"},{url:"Mysearch/css/mainsearchstyle.css",revision:"e0ace83310299037bc8d10e78d126a62"},{url:"Mysearch/css/背景/搜索界面背景.jpg",revision:"b959598b0403e1bc7bd94c7462f42403"},{url:"Mysearch/img/YZY.png",revision:"a6493e1868a7ad30230ff2753ae7b9f2"},{url:"Mysearch/img/备案图标.png",revision:"d0289dc0a46fc5b15b3363ffa78cf6c7"},{url:"Mysearch/img/问天阁.png",revision:"4a51724ed22e665a45f2974608afc132"},{url:"Mysearch/index.html",revision:"5b6a6fcc18bce8e8dc4be1039564fe5d"},{url:"Mysearch/js/ShowTheTime.js",revision:"73c0b6d8e74260bcb77eeaa9c261875d"},{url:"tags/ACM/index.html",revision:"19fe294019ef8e3e36a23978dd6ece67"},{url:"tags/blog/index.html",revision:"fc7b7417159763dc7cccb3257dd24a31"},{url:"tags/Hello-World/index.html",revision:"78be27e86745c255ee95317f500b63f0"},{url:"tags/hexo/index.html",revision:"e1344a0ec32c2a1ee4f1fe454707fdac"},{url:"tags/index.html",revision:"b192d657cf167adf0fbd35b1a07d75c3"},{url:"tags/Markdown/index.html",revision:"3d87fd4469c912c0a336d5c5f64e29e5"},{url:"tags/matery/index.html",revision:"227192915f1d2238b68e3c0b34446286"},{url:"tags/MATLAB/index.html",revision:"a3e3197e9e884b0e50795165b9b22436"},{url:"tags/最短路径/index.html",revision:"e1fa50bf8935e82fd502fb8aeaadcab6"},{url:"tags/常用网站/index.html",revision:"a05b85f167c08d3e5ec397a599995701"},{url:"tags/拟合圆/index.html",revision:"80284c539decd52c69171842e27209d9"},{url:"tags/数学建模/index.html",revision:"91dbd7d64738d5c7e5b52de5bacd1d5a"},{url:"tags/汇总/index.html",revision:"60ecdc15f3fad45ebcca569415d7fd86"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
