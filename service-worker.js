if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return i[e]||(a=new Promise((async a=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},a=(a,i)=>{Promise.all(a.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(a)};self.define=(a,d,r)=>{i[a]||(i[a]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+a.slice(1)};return Promise.all(d.map((a=>{switch(a){case"exports":return i;case"module":return c;default:return e(a)}}))).then((e=>{const a=r(...e);return i.default||(i.default=a),i}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/061916107.html",revision:"b328a3376f9accfe244e623602c3d748"},{url:"2021/071060549.html",revision:"ac70e86c9c17e810baf9d54d09cf321c"},{url:"2021/071133926.html",revision:"3fc83b9cd304c5501b444731bc75cd95"},{url:"2021/071326519.html",revision:"772ff7ea6b91754a996952cc2ee66fb3"},{url:"2021/072241576.html",revision:"22f72d6cedaafa769f6a01d172846e39"},{url:"2021/082760550.html",revision:"a772171a292910c128aab02028836e39"},{url:"2021/083041604.html",revision:"1c283282121bc589b33262838f75a9e1"},{url:"2021/083053025.html",revision:"2ff4c91402fa311768c92a488b015ea8"},{url:"2021/112156639.html",revision:"07411b619b38a39d882ad44c88ec9a71"},{url:"2021/120460550.html",revision:"c19c26b6b18684d78e7637d3ae161f9e"},{url:"404.html",revision:"822dfa2a969f10896358aff3f79bfd58"},{url:"404/index.html",revision:"104f420260035db7957b6b9e6d9aa03c"},{url:"about/index.html",revision:"4853be98357ed954984e18aab9b7c4ab"},{url:"archives/2021/06/index.html",revision:"c733a2066183c4e48489f98492a832bc"},{url:"archives/2021/07/index.html",revision:"f0fa08a6e8b3dec50493fdd4159a8e6b"},{url:"archives/2021/08/index.html",revision:"a39cf3a6ad59a2da74e3753fa867d301"},{url:"archives/2021/11/index.html",revision:"d94f79eda7dbfa9769e5f78a71ba9c01"},{url:"archives/2021/12/index.html",revision:"c7e84fcb3e7ff54bb64e6c514bc31a64"},{url:"archives/2021/index.html",revision:"ed18c5b423587febbf83d094d371faa8"},{url:"archives/index.html",revision:"ea9581ac0158e99c312c737154bcc0ef"},{url:"artitalk/index.html",revision:"790f601dd9e879cfa2fbc520ef581f64"},{url:"categories/Blog/index.html",revision:"145ff00b5c0cac3edbc1cff037737bfc"},{url:"categories/Git/index.html",revision:"a2f3a4af515f8d646602286192dde821"},{url:"categories/hexo/index.html",revision:"01ab77d06e801da668ab15710643f39d"},{url:"categories/index.html",revision:"ff47c3c30cf0aa9d1b7b901e8fe9bf6b"},{url:"categories/Markdown/index.html",revision:"1c8df121190474f29063ae58592867c1"},{url:"categories/MATLAB/index.html",revision:"e03a3fd419e08aeb1e398583635a455c"},{url:"categories/小游戏/index.html",revision:"7c6998bbee7d1f28f5f4a9dbd399a92f"},{url:"categories/常用网站汇总/index.html",revision:"c8f805428fc6772778718536bf8d6dc3"},{url:"categories/算法/index.html",revision:"a6d6fc19ea0a9e5755af074c83632652"},{url:"census/index.html",revision:"c356aff7e9b828cbf2f17f2b695635c7"},{url:"contact/index.html",revision:"2fdf7aa3ea6a678e32f662b62a2d7cfd"},{url:"css/DIY.css",revision:"06f8aa30f15be6fd7b07f926dc19abf4"},{url:"css/index.css",revision:"9f31d106daca5752a3861a3da9582a05"},{url:"css/prism-line-numbers.css",revision:"0810c0e4aa6528786cf1253de32ea115"},{url:"css/prism-tomorrow.css",revision:"f46d7519e3b65a6912814727b47a57ff"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"friends/index.html",revision:"a68df5f41a9eb9973ff39e1b92b01940"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"163bfb64d6dcc9ce3a12d8b84224e848"},{url:"js/botui.js",revision:"04665a19b81c8aa8cd39f76508f2cc31"},{url:"js/botui3.js",revision:"38c1eedf5641b1ad254ed5f20534b2ac"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"60c9a5d8dda40211e250784906d50d10"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"ca632a554499bd2b5b26e0601c97d3d5"},{url:"live2d-widget/demo/demo.html",revision:"2fc997b6aa3ae95fac98bc1af756393f"},{url:"live2d-widget/demo/login.html",revision:"465ce9cdf61a2b8d5cbebda1d3820ee1"},{url:"live2d-widget/live2d.min.js",revision:"bc979e8fda00282dec96c777d14cf140"},{url:"live2d-widget/README.html",revision:"4daa0ecb50f571605180aa75f8bcc637"},{url:"live2d-widget/waifu-tips.js",revision:"ee085bf5d3c794004db020f0cbd010bf"},{url:"live2d-widget/waifu.css",revision:"e11570c2a4b40040e6b5e780409055f8"},{url:"medias/artitalk/artitalk.min.js",revision:"cd127964163871e995bb7fd225caacf0"},{url:"medias/artitalk/main.min.css",revision:"85c61a60fdb922dd9c43800ca7fb911f"},{url:"medias/avatar.jpg",revision:"a26bba228e7fd5db25ead84e83241439"},{url:"medias/banner/0.jpg",revision:"b959598b0403e1bc7bd94c7462f42403"},{url:"medias/banner/1.jpg",revision:"df399abafd6166188d0e6ab1dc600518"},{url:"medias/banner/2.jpg",revision:"06b6efdd0d65e295abf8b5cd4ed6fd28"},{url:"medias/banner/3.jpg",revision:"9eb8f44c961ecf5d6278855ade3074dc"},{url:"medias/banner/4.jpg",revision:"a64410eaedc141a444926d27c910264a"},{url:"medias/banner/5.jpg",revision:"e9462553a4a77cc7840fe26f17657c9f"},{url:"medias/banner/6.jpg",revision:"58c631cc4f6f94581bb5539dd2ad40bc"},{url:"medias/barrager/0.png",revision:"f5d8318197ffd7ce9aacf308bf186c5e"},{url:"medias/barrager/1.png",revision:"ea244312d1bf53680470f3da4d308bb4"},{url:"medias/barrager/2.png",revision:"50e265a8acfea4b3bafd407dff4ceaba"},{url:"medias/barrager/close.png",revision:"ab45ca050318e57b6559bb3503bc19a1"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/copy/0.jpg",revision:"306003d8042084347393c395cf75c56d"},{url:"medias/copy/1.jpg",revision:"9269002d0873d0e0fe9c9384507a0f81"},{url:"medias/copy/2.jpg",revision:"9d5259c1c229c7b2a7ea813b5246ce26"},{url:"medias/copy/3.jpg",revision:"8c7505b632239a7c4e39f1667c3928b0"},{url:"medias/copy/4.jpg",revision:"86b8effb2e19b0251f53a7dd8869dc8e"},{url:"medias/copy/5.jpg",revision:"ac669fc927093822996b6bfbafc9c3a0"},{url:"medias/cover.jpg",revision:"1253d8cf7abf8e92af47bda2bf61bd84"},{url:"medias/featureimages/0.jpg",revision:"f751cba3a4cd6381611bb4ec97d35e77"},{url:"medias/featureimages/1.jpg",revision:"d440f1a8faa3af050511b79ae30a10b0"},{url:"medias/featureimages/10.jpg",revision:"daaa0bfde5bade9fd47a9828a89c1044"},{url:"medias/featureimages/11.jpg",revision:"c613fbd6f7fadb8e65fdae620d89d277"},{url:"medias/featureimages/12.jpg",revision:"df9abf1fa933cee751d211828c35e4f5"},{url:"medias/featureimages/13.jpg",revision:"677c90f32232dd162b9c504ff176b100"},{url:"medias/featureimages/14.jpg",revision:"891ea5f9186f889adef7b215d9be9948"},{url:"medias/featureimages/15.jpg",revision:"3cf1acc3d317690beae0520a1e606b30"},{url:"medias/featureimages/16.jpg",revision:"403a5973092edf7b1fc9cfb809ed4b05"},{url:"medias/featureimages/17.jpg",revision:"a88c2a1cc175f75b8b60f3224026b4de"},{url:"medias/featureimages/18.jpg",revision:"d8104647c594f21438cbc17331c57025"},{url:"medias/featureimages/19.jpg",revision:"86258814e4374b85adac9bd8235ad110"},{url:"medias/featureimages/2.jpg",revision:"d2f7104d393ee322de0cba7313eddf74"},{url:"medias/featureimages/20.jpg",revision:"0ec7a7cc344f3d47dbc556ea312a365f"},{url:"medias/featureimages/21.jpg",revision:"7202402f259237ea1f3f6bb82d208888"},{url:"medias/featureimages/22.jpg",revision:"6b1b1da789eecd376a5e6843314f26ad"},{url:"medias/featureimages/23.jpg",revision:"95ea042be75c28794ddca649388ad3c7"},{url:"medias/featureimages/3.jpg",revision:"afcee76cc47ff729c484202e201cafd4"},{url:"medias/featureimages/4.jpg",revision:"ddd80ccca8d84079255bbfbf4244debd"},{url:"medias/featureimages/5.jpg",revision:"eeb46fbd8f9c6999a2f3fbdcf34e8b3e"},{url:"medias/featureimages/6.jpg",revision:"ae4562052cf07bc1912d5fd90e00b2ce"},{url:"medias/featureimages/7.jpg",revision:"af5b8a1b0fbab59e68a69005b2a0eeb7"},{url:"medias/featureimages/8.jpg",revision:"6d9136c0bf542e136dd70a6a7c97521b"},{url:"medias/featureimages/9.jpg",revision:"52e8f9aca543d2d4838c14bce33ecee1"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/logo.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"medias/Picture/Git修改成功.png",revision:"59917e8ff1359b7b9f214bf9084e793a"},{url:"medias/Picture/Git报错.png",revision:"d1add9b59649c78439d4be755a6fe068"},{url:"medias/Picture/Git添加内容.png",revision:"d5349c57a36136105c32d3ddb3932400"},{url:"medias/Picture/Git路径.png",revision:"132ad8145ccf73f7dd002ec97ff78bd8"},{url:"medias/Picture/HDU2544最短路.png",revision:"c1facebae3d0b8d2588f25b20cf54d30"},{url:"medias/Picture/matlab多图绘制示例.png",revision:"214c8566edfab6b23a4ba937a25d3d73"},{url:"medias/Picture/matlab拟合圆1.png",revision:"8e56b573b111a6cad9ca2ac84a54f5bd"},{url:"medias/Picture/matlab拟合圆图片2.png",revision:"4e10326fc8cf22b2b88c48ce542179a6"},{url:"medias/Picture/matlab拟合圆图片3.png",revision:"933ea12a046ed042ceb5ee68ccb71761"},{url:"medias/Picture/matlab散点图矩阵示图.png",revision:"defdefc2d115867dd1a91d0b02a4feb2"},{url:"medias/reward/alipay.jpg",revision:"48cf8b0f4e23abc880ebcca775236fd9"},{url:"medias/reward/wechat.png",revision:"40a19e38db3c7a25cffd64a564d42dee"},{url:"medias/备案图标.png",revision:"d0289dc0a46fc5b15b3363ffa78cf6c7"},{url:"my2048game/css/main.css",revision:"7c55ec4d7b40c38ac1628c78ad03a1e6"},{url:"my2048game/img/favicon.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"my2048game/index.html",revision:"877042d73d24aea08884aaeb6c706cf1"},{url:"my2048game/js/main2048.js",revision:"b3533ccfcc04711a4f3f5e1d9de55d0a"},{url:"Mysearch/css/mainsearchstyle.css",revision:"e0ace83310299037bc8d10e78d126a62"},{url:"Mysearch/css/背景/搜索界面背景.jpg",revision:"b959598b0403e1bc7bd94c7462f42403"},{url:"Mysearch/img/YZY.png",revision:"a6493e1868a7ad30230ff2753ae7b9f2"},{url:"Mysearch/img/备案图标.png",revision:"d0289dc0a46fc5b15b3363ffa78cf6c7"},{url:"Mysearch/img/问天阁.png",revision:"4a51724ed22e665a45f2974608afc132"},{url:"Mysearch/index.html",revision:"5b6a6fcc18bce8e8dc4be1039564fe5d"},{url:"Mysearch/js/ShowTheTime.js",revision:"73c0b6d8e74260bcb77eeaa9c261875d"},{url:"tags/2048/index.html",revision:"849c57856ec0762e372d1efdf52172ee"},{url:"tags/ACM/index.html",revision:"8a0c48dbe85b46026ceaa75ba1344f8a"},{url:"tags/blog/index.html",revision:"d1004342a17170b8c8ddad6a1c9f0fec"},{url:"tags/Coding/index.html",revision:"6972b7a8a182596d4dd78b3600674eac"},{url:"tags/Git/index.html",revision:"7732f91da8f55ac4e0a5078bb92fc9a3"},{url:"tags/Hello-World/index.html",revision:"ce9298ff8cab15bd5270110cad9b0383"},{url:"tags/hexo/index.html",revision:"436ea6eb11d03ffcb1c5f0555fe5046c"},{url:"tags/index.html",revision:"fa55fc1860bb83e8fe48bdd6dd4203e2"},{url:"tags/Markdown/index.html",revision:"684c2ad6ced525f095034075e031c3ca"},{url:"tags/matery/index.html",revision:"891ea6a86bb3ab99b104478d10b707ae"},{url:"tags/MATLAB/index.html",revision:"3c30253f1ef6b2db20a4ffc2d66a41c0"},{url:"tags/最短路径/index.html",revision:"8f716e6d37afe4882b1035063a09d764"},{url:"tags/小游戏/index.html",revision:"3395ee351e811da5fcd4c4e6b0d366d5"},{url:"tags/常用网站/index.html",revision:"cffe41994c390a3d229b0e0ec2aa181e"},{url:"tags/拟合圆/index.html",revision:"4c47ec36aaf49140cbef45c65f95281c"},{url:"tags/数学建模/index.html",revision:"c8a1d870af533fef609cca1c59c74a06"},{url:"tags/汇总/index.html",revision:"1b9eb57efdf6a0f885f687f2162e5ccb"},{url:"tags/解决/index.html",revision:"aaadad134382f9871b9726473ef29be1"},{url:"tags/记录整理/index.html",revision:"b2f8cc0f404bc6c7556c5b66d3d25825"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
