if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,d,r)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return a;case"module":return c;default:return e(i)}}))).then((e=>{const i=r(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/061916107.html",revision:"5e176f2a1add489a4fc70a038612c95a"},{url:"2021/071060549.html",revision:"fa1241c9ddff8e515738a6c774a285bb"},{url:"2021/071133926.html",revision:"a153b9c3b676d68783a651b196bde00a"},{url:"2021/071326519.html",revision:"ee188ea5b3802df60afb5d3a56f3efe1"},{url:"2021/072241576.html",revision:"bf98dac83bb01d76b13f8dc13e7eb178"},{url:"2021/082760550.html",revision:"36146e2f85a5fdd70e54283c12eb4836"},{url:"2021/083041604.html",revision:"c0cf0c471ef51ab37c50fb1ecfc2f8d6"},{url:"2021/083053025.html",revision:"785f8258c8fe219d48bd7f18d69e92d3"},{url:"2021/112156639.html",revision:"5751110641449164a7e7451b241127fe"},{url:"404.html",revision:"0ff15fd2a4d1aefa8289dc3716673402"},{url:"404/index.html",revision:"55174ec2b7214596d7beb0a90ecd0e52"},{url:"about/index.html",revision:"fa36cbaf91b631356089099122a576c1"},{url:"archives/2021/06/index.html",revision:"b757795d520f8dd7a6a4d3b388068675"},{url:"archives/2021/07/index.html",revision:"76618edc4c97360bb52b98432b2ca7c9"},{url:"archives/2021/08/index.html",revision:"6d2fed319c1c19694e8565188dc9d18e"},{url:"archives/2021/11/index.html",revision:"1a43447e74a4be30634f36ac0e4d8cf5"},{url:"archives/2021/index.html",revision:"a3e55bbd78afbd36e9ce41cb866c8641"},{url:"archives/index.html",revision:"8b41a7f32cf0a0e16f75c2b653556d7e"},{url:"artitalk/index.html",revision:"0fa846a87b0a61b3ee3a8ebec0244671"},{url:"categories/Blog/index.html",revision:"d1b21b296e30dfbec6c1bd83cd1d4553"},{url:"categories/Git/index.html",revision:"1356323721ae10d68e20db6000bdbacb"},{url:"categories/hexo/index.html",revision:"73940a1736da3ed417c2606ae2f87d96"},{url:"categories/index.html",revision:"0bd72a375fa3f8f3b4f60c55301e435c"},{url:"categories/Markdown/index.html",revision:"519d88b9859bb1254e6a27445926e222"},{url:"categories/MATLAB/index.html",revision:"01f02af1108e522fb92bd7a850c4c4ac"},{url:"categories/常用网站汇总/index.html",revision:"ce55e0b06726de8ba51ab44c88c92a01"},{url:"categories/算法/index.html",revision:"f1000cc4c7b6bfb960d9f6972f9a6816"},{url:"census/index.html",revision:"e655f7210ff75e2032b41701aa213aa2"},{url:"contact/index.html",revision:"e79afbf9efd7a91b4843e34149a5e0b2"},{url:"css/DIY.css",revision:"d3305cb3506641d1164d1f7b909a8084"},{url:"css/index.css",revision:"e735ddae5549acdd76f2f2733755cbb6"},{url:"css/prism-line-numbers.css",revision:"0810c0e4aa6528786cf1253de32ea115"},{url:"css/prism-tomorrow.css",revision:"f46d7519e3b65a6912814727b47a57ff"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"friends/index.html",revision:"608dd548e68ef8aae09219be70dfd258"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"c04da905efa417332b2aac8c760c0812"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"01a1b695619fdf3cb4e25fce8c3ca989"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"ca632a554499bd2b5b26e0601c97d3d5"},{url:"live2d-widget/demo/demo.html",revision:"2f7cbddc3adb9c53afc03e198cc4f79b"},{url:"live2d-widget/demo/login.html",revision:"4b42c6efa2dbb8b18f39417bb100e2b0"},{url:"live2d-widget/live2d.min.js",revision:"bc979e8fda00282dec96c777d14cf140"},{url:"live2d-widget/README.html",revision:"5f877e3bb131984c33e1e2c8a20538a7"},{url:"live2d-widget/waifu-tips.js",revision:"ee085bf5d3c794004db020f0cbd010bf"},{url:"live2d-widget/waifu.css",revision:"e11570c2a4b40040e6b5e780409055f8"},{url:"medias/artitalk/artitalk.min.js",revision:"cd127964163871e995bb7fd225caacf0"},{url:"medias/artitalk/main.min.css",revision:"85c61a60fdb922dd9c43800ca7fb911f"},{url:"medias/avatar.jpg",revision:"a26bba228e7fd5db25ead84e83241439"},{url:"medias/banner/0.jpg",revision:"b959598b0403e1bc7bd94c7462f42403"},{url:"medias/banner/1.jpg",revision:"df399abafd6166188d0e6ab1dc600518"},{url:"medias/banner/2.jpg",revision:"06b6efdd0d65e295abf8b5cd4ed6fd28"},{url:"medias/banner/3.jpg",revision:"9eb8f44c961ecf5d6278855ade3074dc"},{url:"medias/banner/4.jpg",revision:"a64410eaedc141a444926d27c910264a"},{url:"medias/banner/5.jpg",revision:"e9462553a4a77cc7840fe26f17657c9f"},{url:"medias/banner/6.jpg",revision:"58c631cc4f6f94581bb5539dd2ad40bc"},{url:"medias/barrager/0.png",revision:"f5d8318197ffd7ce9aacf308bf186c5e"},{url:"medias/barrager/1.png",revision:"ea244312d1bf53680470f3da4d308bb4"},{url:"medias/barrager/2.png",revision:"50e265a8acfea4b3bafd407dff4ceaba"},{url:"medias/barrager/close.png",revision:"ab45ca050318e57b6559bb3503bc19a1"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/copy/0.jpg",revision:"306003d8042084347393c395cf75c56d"},{url:"medias/copy/1.jpg",revision:"9269002d0873d0e0fe9c9384507a0f81"},{url:"medias/copy/2.jpg",revision:"9d5259c1c229c7b2a7ea813b5246ce26"},{url:"medias/copy/3.jpg",revision:"8c7505b632239a7c4e39f1667c3928b0"},{url:"medias/copy/4.jpg",revision:"86b8effb2e19b0251f53a7dd8869dc8e"},{url:"medias/copy/5.jpg",revision:"ac669fc927093822996b6bfbafc9c3a0"},{url:"medias/cover.jpg",revision:"1253d8cf7abf8e92af47bda2bf61bd84"},{url:"medias/featureimages/0.jpg",revision:"f751cba3a4cd6381611bb4ec97d35e77"},{url:"medias/featureimages/1.jpg",revision:"d440f1a8faa3af050511b79ae30a10b0"},{url:"medias/featureimages/10.jpg",revision:"daaa0bfde5bade9fd47a9828a89c1044"},{url:"medias/featureimages/11.jpg",revision:"c613fbd6f7fadb8e65fdae620d89d277"},{url:"medias/featureimages/12.jpg",revision:"df9abf1fa933cee751d211828c35e4f5"},{url:"medias/featureimages/13.jpg",revision:"677c90f32232dd162b9c504ff176b100"},{url:"medias/featureimages/14.jpg",revision:"891ea5f9186f889adef7b215d9be9948"},{url:"medias/featureimages/15.jpg",revision:"3cf1acc3d317690beae0520a1e606b30"},{url:"medias/featureimages/16.jpg",revision:"403a5973092edf7b1fc9cfb809ed4b05"},{url:"medias/featureimages/17.jpg",revision:"a88c2a1cc175f75b8b60f3224026b4de"},{url:"medias/featureimages/18.jpg",revision:"d8104647c594f21438cbc17331c57025"},{url:"medias/featureimages/19.jpg",revision:"86258814e4374b85adac9bd8235ad110"},{url:"medias/featureimages/2.jpg",revision:"d2f7104d393ee322de0cba7313eddf74"},{url:"medias/featureimages/20.jpg",revision:"0ec7a7cc344f3d47dbc556ea312a365f"},{url:"medias/featureimages/21.jpg",revision:"7202402f259237ea1f3f6bb82d208888"},{url:"medias/featureimages/22.jpg",revision:"6b1b1da789eecd376a5e6843314f26ad"},{url:"medias/featureimages/23.jpg",revision:"95ea042be75c28794ddca649388ad3c7"},{url:"medias/featureimages/3.jpg",revision:"afcee76cc47ff729c484202e201cafd4"},{url:"medias/featureimages/4.jpg",revision:"ddd80ccca8d84079255bbfbf4244debd"},{url:"medias/featureimages/5.jpg",revision:"eeb46fbd8f9c6999a2f3fbdcf34e8b3e"},{url:"medias/featureimages/6.jpg",revision:"ae4562052cf07bc1912d5fd90e00b2ce"},{url:"medias/featureimages/7.jpg",revision:"af5b8a1b0fbab59e68a69005b2a0eeb7"},{url:"medias/featureimages/8.jpg",revision:"6d9136c0bf542e136dd70a6a7c97521b"},{url:"medias/featureimages/9.jpg",revision:"52e8f9aca543d2d4838c14bce33ecee1"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/logo.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"medias/Picture/Git修改成功.png",revision:"59917e8ff1359b7b9f214bf9084e793a"},{url:"medias/Picture/Git报错.png",revision:"d1add9b59649c78439d4be755a6fe068"},{url:"medias/Picture/Git添加内容.png",revision:"d5349c57a36136105c32d3ddb3932400"},{url:"medias/Picture/Git路径.png",revision:"132ad8145ccf73f7dd002ec97ff78bd8"},{url:"medias/Picture/HDU2544最短路.png",revision:"c1facebae3d0b8d2588f25b20cf54d30"},{url:"medias/Picture/matlab多图绘制示例.png",revision:"214c8566edfab6b23a4ba937a25d3d73"},{url:"medias/Picture/matlab拟合圆1.png",revision:"8e56b573b111a6cad9ca2ac84a54f5bd"},{url:"medias/Picture/matlab拟合圆图片2.png",revision:"4e10326fc8cf22b2b88c48ce542179a6"},{url:"medias/Picture/matlab拟合圆图片3.png",revision:"933ea12a046ed042ceb5ee68ccb71761"},{url:"medias/Picture/matlab散点图矩阵示图.png",revision:"defdefc2d115867dd1a91d0b02a4feb2"},{url:"medias/reward/alipay.jpg",revision:"48cf8b0f4e23abc880ebcca775236fd9"},{url:"medias/reward/wechat.png",revision:"40a19e38db3c7a25cffd64a564d42dee"},{url:"medias/备案图标.png",revision:"d0289dc0a46fc5b15b3363ffa78cf6c7"},{url:"my2048game/css/main.css",revision:"7c55ec4d7b40c38ac1628c78ad03a1e6"},{url:"my2048game/img/favicon.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"my2048game/index.html",revision:"877042d73d24aea08884aaeb6c706cf1"},{url:"my2048game/js/main2048.js",revision:"b3533ccfcc04711a4f3f5e1d9de55d0a"},{url:"Mysearch/css/mainsearchstyle.css",revision:"e0ace83310299037bc8d10e78d126a62"},{url:"Mysearch/css/背景/搜索界面背景.jpg",revision:"b959598b0403e1bc7bd94c7462f42403"},{url:"Mysearch/img/YZY.png",revision:"a6493e1868a7ad30230ff2753ae7b9f2"},{url:"Mysearch/img/备案图标.png",revision:"d0289dc0a46fc5b15b3363ffa78cf6c7"},{url:"Mysearch/img/问天阁.png",revision:"4a51724ed22e665a45f2974608afc132"},{url:"Mysearch/index.html",revision:"5b6a6fcc18bce8e8dc4be1039564fe5d"},{url:"Mysearch/js/ShowTheTime.js",revision:"73c0b6d8e74260bcb77eeaa9c261875d"},{url:"tags/ACM/index.html",revision:"9fa1dcef0abca7474767d2b859575c36"},{url:"tags/blog/index.html",revision:"970e481b70c154f47419f2cbdfbe8f99"},{url:"tags/Coding/index.html",revision:"f09af2fed292e1df3dc56698a32d5e9a"},{url:"tags/Git/index.html",revision:"2c3a8224a7e8a48e555b5526134cb239"},{url:"tags/Hello-World/index.html",revision:"15ab9772b3bc5313788e929855663fa8"},{url:"tags/hexo/index.html",revision:"e68c2ff969e919e739ca46485f6c5961"},{url:"tags/index.html",revision:"7915184f573361bf2ad71c2f1af146fe"},{url:"tags/Markdown/index.html",revision:"5fd73ccf9baf0ecd70260ca6b4449e03"},{url:"tags/matery/index.html",revision:"3ac9285036fe736cfdc8a07d128332f8"},{url:"tags/MATLAB/index.html",revision:"dfb7db542f699eca4f1a59cad5b3d251"},{url:"tags/最短路径/index.html",revision:"4a90004e3b064866cec7795b2581ebbc"},{url:"tags/常用网站/index.html",revision:"f4a338aec091767e2ffceed982439a08"},{url:"tags/拟合圆/index.html",revision:"b034e82f0a898e9ffff8f5ec16056254"},{url:"tags/数学建模/index.html",revision:"5367f4337cff38d2c6b7f9f60147963b"},{url:"tags/汇总/index.html",revision:"395e4ffca76fa177abe887ca72e8539e"},{url:"tags/解决/index.html",revision:"3935a5515b0a58aa69051f39a1942632"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
