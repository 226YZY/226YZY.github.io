if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,d,c)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return a;case"module":return r;default:return e(i)}}))).then((e=>{const i=c(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/061916107.html",revision:"0571c63eed9bd786e419f8bf944890c9"},{url:"2021/071060549.html",revision:"7ff061f2c6a1fe06d68a212ce515fa6f"},{url:"2021/071133926.html",revision:"dab524d5d9caf00a59e2d27d161e1706"},{url:"2021/071326519.html",revision:"d73a14505e2db1159caa512addaa48ce"},{url:"2021/072241576.html",revision:"9f4b476c25b66d053532ed5ba45f527c"},{url:"2021/082760550.html",revision:"3419cd73efc320e66c77a499a4004336"},{url:"2021/083041604.html",revision:"5a2dc8ad587ec2809946d960a6331e1f"},{url:"2021/083053025.html",revision:"a70b6cd70df98a8113aa0389e43afd21"},{url:"2021/112156639.html",revision:"3aef5b0ab50a463ca405c19bd4ec7064"},{url:"2021/120460550.html",revision:"f6693696cdf4be12c3a11d2469bff837"},{url:"2021/120860549.html",revision:"be364f40ba2ba464c922bfec1060189f"},{url:"2021/120927345.html",revision:"cdfe7254972b6c820c5bd2a9c3e7de18"},{url:"2021/121130800.html",revision:"f06a2fcf7371aee45f6a073b82f52af9"},{url:"2021/12157757.html",revision:"debae693c57b872f19d5e300c7a3237e"},{url:"2021/121818354.html",revision:"fbd8d1baadfdf7fb2f21701abd478750"},{url:"2021/122151725.html",revision:"b87ab063ba06d8c78d987b27d575c54a"},{url:"2021/122227789.html",revision:"56c00b4a850095e8019e3b07c6325858"},{url:"2021/122648049.html",revision:"4b8eee865fd3bd65e88e74bef341a9d5"},{url:"2022/010757003.html",revision:"53d92e405833e73a7137c1dc9dc4ec1b"},{url:"2022/010948485.html",revision:"e5c58ef15b0e1520360a1f4f877436da"},{url:"2022/011424656.html",revision:"1b4da299e64d1aa71dc751e18586d7ee"},{url:"2022/012242042.html",revision:"567d8c6731954aebc07d28e5eaa05aeb"},{url:"2022/012347381.html",revision:"1bb87100a012962937a3b216606ad2b8"},{url:"2022/013056898.html",revision:"73b72060e3aa2daa12ac3f06587c21d4"},{url:"2022/020332243.html",revision:"90403db25a3c651f51f633b9c761fc5d"},{url:"2022/020733811.html",revision:"bdc5876b804b2596d38515bf7ce2e446"},{url:"2022/022547844.html",revision:"07eb7c2d1cb0ac7540b3c35906c27745"},{url:"2022/022615794.html",revision:"e1a63e8ba9197bfb31989e1406084463"},{url:"2022/032130325.html",revision:"79e74f0c24793bb737829d2c5de9355f"},{url:"2022/032926774.html",revision:"34f6dc7ae44119893d9ee82726e0d5c5"},{url:"2022/041362119.html",revision:"b9bc796521250e9ca0f4e525614af934"},{url:"2022/041946563.html",revision:"c37e05a20770e64f150e532988a0c4b9"},{url:"2022/042448136.html",revision:"82def35a741a5f453bba8888806d0d06"},{url:"2022/051429756.html",revision:"7c935acf95c6850e65b09a371db981c3"},{url:"2022/051740395.html",revision:"6f925d747a75ea87470bc72e4076e2b0"},{url:"2022/061829379.html",revision:"b3b3634cd78302caadaf824b90dcca87"},{url:"2022/102619421.html",revision:"35cd5f6c99e68e6e17dd3ad2065a490e"},{url:"404.html",revision:"b9cc4ea1bc0938876f0c5815590886a3"},{url:"about/index.html",revision:"974f10c3b19cd9bd3c2633cfedc9e283"},{url:"archives/2021/06/index.html",revision:"e6da9ea2b99b3a3e89ed85fcc7d45189"},{url:"archives/2021/07/index.html",revision:"1a51d2af94300c9553830b2c00cb71f8"},{url:"archives/2021/08/index.html",revision:"22d32acc30d2f6f6c1ec0a8b64c25df8"},{url:"archives/2021/11/index.html",revision:"48d9ae081ff1d5687ca4201a31c06125"},{url:"archives/2021/12/index.html",revision:"7e8a3dac06036c4385805714f68801ea"},{url:"archives/2021/index.html",revision:"b851b75322bb28a08d4557f0294eb22c"},{url:"archives/2021/page/2/index.html",revision:"8390c97a184081c3b0067fb81a5e754c"},{url:"archives/2022/01/index.html",revision:"59bf386b2826f01dd8c476ee2931f979"},{url:"archives/2022/02/index.html",revision:"c1eca361bb1218ae99273b440a223a07"},{url:"archives/2022/03/index.html",revision:"8220f7c6c3281fcaaa9f29c6de9fae12"},{url:"archives/2022/04/index.html",revision:"f0c6654ea4e1e1a7567d3af7c3e50efc"},{url:"archives/2022/05/index.html",revision:"8b2493d03e35875ebd5d6a59fda1b1c5"},{url:"archives/2022/06/index.html",revision:"94f7e59a13c8d07e4624e1670cd34755"},{url:"archives/2022/10/index.html",revision:"7b6f0f8d9d184c0ee6ab8afb573625eb"},{url:"archives/2022/index.html",revision:"f3a446755d253d07c627ad6fa4e0e88d"},{url:"archives/2022/page/2/index.html",revision:"f25caca3b2bf8c2666056b5f1f662fb0"},{url:"archives/index.html",revision:"388d5a8d360c503fd0ba7c5b264174c7"},{url:"archives/page/2/index.html",revision:"360dbc215537a1ccd1b7c1211070d1db"},{url:"archives/page/3/index.html",revision:"6a463aaf27eee46f9cf412dbe9461845"},{url:"archives/page/4/index.html",revision:"cde2d2084e9e575fb7fde9397c7718f2"},{url:"artitalk/index.html",revision:"bc254ae47f3973b6fc5e268970325c8a"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"b470aee9b7f23cf06f17ad53ede189c0"},{url:"categories/博客相关/index.html",revision:"81a80aeb0a647e0fb99094fcb60532d0"},{url:"categories/学习记录/Android/index.html",revision:"f0355f053ffc0d42b2f1fb3f08f4625b"},{url:"categories/学习记录/index.html",revision:"0d2db2a6142dc691cc3ddc65374754d7"},{url:"categories/学习记录/MATLAB/index.html",revision:"bf96161d1db97393bb29b70dc0446d9a"},{url:"categories/学习记录/MySQL/index.html",revision:"a6d727eeedb63966d19d43b20b69fc02"},{url:"categories/学习记录/page/2/index.html",revision:"df268ede2bd2b041952eb7ff7c343242"},{url:"categories/学习记录/Vue/index.html",revision:"74b64cde6702d7c39882e885e0128bcf"},{url:"categories/学习记录/算法/index.html",revision:"9c35156b7ddfd2943a10b69cfa69ca4c"},{url:"categories/探索实践/index.html",revision:"4ff3a62fbd217003bb308d77f49ad563"},{url:"categories/生活随笔/index.html",revision:"440f093880ecc517025bdd2d50ce18bb"},{url:"census/index.html",revision:"36113f92928db0cee1d9552c6a7b469a"},{url:"charts/index.html",revision:"61b2843f3d6c318f5553d068a5e0f1e5"},{url:"contact/index.html",revision:"922db996293044808b66de50bdf4cc79"},{url:"css/baiduhistory.css",revision:"051b1e84569b634d0871da780c54eaac"},{url:"css/butterfly.css",revision:"dcf2a5b39710f926c8de9e92bb9c3519"},{url:"css/DIY.css",revision:"e1b812b47156c222c99957eede41dbf2"},{url:"css/gitcalendar.css",revision:"8e5ba7e5a34f94ecf36dd19b731b607c"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"b902a2c6730821f2cf7d92a33cea1060"},{url:"css/prism-line-numbers.css",revision:"0810c0e4aa6528786cf1253de32ea115"},{url:"css/prism-tomorrow.css",revision:"f46d7519e3b65a6912814727b47a57ff"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"demos/VueDemo/index.html",revision:"e59584b7934a46f8c54e3af141d1f905"},{url:"fcircle/index.html",revision:"de22bb9be371bc5f774c571978feaa46"},{url:"gallery/index.html",revision:"9075cc7d93cddfe193caabb7c06332fa"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"img/friend_404.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/upyun_logo.png",revision:"e9e2fb940b6cb3c295d235d183688c0a"},{url:"index.html",revision:"214e31c36314159fa20fe80948cbdd4c"},{url:"js/baiduhistory.js",revision:"b3b60d5a2add5623e29464c1411fde86"},{url:"js/botui.js",revision:"5f6f727dfe7fc4b13f006f95dbe2d0f5"},{url:"js/census.js",revision:"f3ecfb58b09ba27ee46122e7bd81ef6e"},{url:"js/fcircle.js",revision:"0fd698ec4fa303ec1e89da72d5553db3"},{url:"js/fetch.js",revision:"83e2f0efdb4327b90da5d35fb48c2bd0"},{url:"js/fishes.js",revision:"de5855d298ddc661b1c65c61469544f5"},{url:"js/fixed_card_widget.js",revision:"02eeacd95bff79855f204fe9d4aa35e7"},{url:"js/gitcalendar.js",revision:"acbc8614b53695f473e7ba1a4d4b8c76"},{url:"js/grayscale.js",revision:"02e8f8d48eb93c820836c4da99e7e36d"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/Meting.min.js",revision:"7b5e05378aa5c4dbdccbe9a34cf30adb"},{url:"js/moments.js",revision:"41ce7af9fc59294319b92a4d16780a83"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/index.html",revision:"acefff66124c2613287df4e4c30c9769"},{url:"medias/avatar.jpg",revision:"a26bba228e7fd5db25ead84e83241439"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/logo.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"medias/reward/alipay.jpg",revision:"48cf8b0f4e23abc880ebcca775236fd9"},{url:"medias/reward/wechat.png",revision:"40a19e38db3c7a25cffd64a564d42dee"},{url:"medias/备案图标.png",revision:"d0289dc0a46fc5b15b3363ffa78cf6c7"},{url:"message/index.html",revision:"ed54a5e62bc78703397b53d985431077"},{url:"my2048game/css/main.css",revision:"7e6d3f1ba4dbe339472fafd433297190"},{url:"my2048game/img/favicon.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"my2048game/index.html",revision:"f10b28318ead03f12118924e5cee5328"},{url:"my2048game/js/main2048.js",revision:"e95441b9d33e8cdcf21c3bccb91b29e8"},{url:"Mysearch/css/mainsearchstyle.css",revision:"565fb9f70eab943967ecc289e1463575"},{url:"Mysearch/img/YZY.png",revision:"a6493e1868a7ad30230ff2753ae7b9f2"},{url:"Mysearch/img/备案图标.png",revision:"d0289dc0a46fc5b15b3363ffa78cf6c7"},{url:"Mysearch/img/问天阁.png",revision:"4a51724ed22e665a45f2974608afc132"},{url:"Mysearch/index.html",revision:"d6afdd156c01796c13c096790f7fa6ca"},{url:"Mysearch/js/activate-power-mode.js",revision:"9824c61a46e23b00e54e0f4332130e2b"},{url:"Mysearch/js/chooseSearchEngine.js",revision:"cfb8c42b5273e04cb47002bc0dfa503d"},{url:"Mysearch/js/ShowTheTime.js",revision:"629b978b666b2611629af948f885ea3c"},{url:"page/2/index.html",revision:"43f44100997cf9f48ce8f1aab726e4f8"},{url:"page/3/index.html",revision:"c6e4de333a9a2ccc3cfdd290398c1690"},{url:"page/4/index.html",revision:"dc5d5973373d5cf4e8ff6a4aed3fbda6"},{url:"random/index.html",revision:"61235a9cb4a0d4f16a717e37993f360a"},{url:"reward/index.html",revision:"6811b0d0c00b19bc544fd47a9c9629e4"},{url:"tags/2048/index.html",revision:"04dee9f6e39966bd4f238327051dc061"},{url:"tags/ACM/index.html",revision:"ec80d2c5ff60d52289ffc142768e3614"},{url:"tags/Android/index.html",revision:"f7b2e5a7280db6a92f9a1e9d143a6c0a"},{url:"tags/butterfly主题/index.html",revision:"6dfdcf6d788369ab2d4e32baf10aebf5"},{url:"tags/Coding/index.html",revision:"19816c6eee4b90ff24d2633321973c1d"},{url:"tags/CSS动画/index.html",revision:"220fc7b6f52747ddf66ce751310d84e7"},{url:"tags/ECharts/index.html",revision:"66d34b63f9e230a7a885775ee9447008"},{url:"tags/Git/index.html",revision:"27d37e74263737506a5b474d99c9c7f6"},{url:"tags/GitHub/index.html",revision:"2578d2aec7b9e498448f7c510f1a6e1c"},{url:"tags/Hello-World/index.html",revision:"01097f92283aa9884e118329681ee117"},{url:"tags/hexo/index.html",revision:"041de130a52dadce1d659c2e7125be49"},{url:"tags/index.html",revision:"5adc8dada58054652d62d9e3032b9b3c"},{url:"tags/Java/index.html",revision:"b98c55e740534dc18ba80ce13e7a232a"},{url:"tags/JDBC/index.html",revision:"9926143e2236d359ee6748c9c24ecf63"},{url:"tags/Markdown/index.html",revision:"42e79ecd0b9c3837c8772e74470b9ea5"},{url:"tags/matery主题/index.html",revision:"a6140a9ef4d2191576aa09b3f1df3508"},{url:"tags/MATLAB/index.html",revision:"7f4ba9071e4f0bbfecf9ea204c2671e8"},{url:"tags/MySQL/index.html",revision:"bd266a82754526122d8c94df63a241d0"},{url:"tags/Vue/index.html",revision:"db3e8aa96b41a580a600253c3b519448"},{url:"tags/公告/index.html",revision:"8c5866371843c389687bad827cf11de2"},{url:"tags/最短路径/index.html",revision:"760c17159a3c1da2007fdfcb32228473"},{url:"tags/博客/index.html",revision:"c77da52bec967f629705de97689df97e"},{url:"tags/博弈论/index.html",revision:"d47a61e8acefd6014f49264bd33a2f71"},{url:"tags/友链朋友圈/index.html",revision:"b1fb4549953194bbc417a3dfa6ae33e6"},{url:"tags/周年纪念/index.html",revision:"6a9c2aa2d0537cb66e379e7b427a4333"},{url:"tags/图床/index.html",revision:"c9113b0c36f6e0d0eb56c70ca7101bd2"},{url:"tags/基础/index.html",revision:"5b29591d38b8be08dfc4d75611fd72f9"},{url:"tags/字体精简/index.html",revision:"afa9e2ce57e2b85bbb22aadff37e07ca"},{url:"tags/学习笔记/index.html",revision:"344fecf817f73b047a9fb239e5cddb94"},{url:"tags/小游戏/index.html",revision:"96071bc64038e171470443b366f7ddda"},{url:"tags/常用网站/index.html",revision:"501ed24fde12d7ba2002b8818a58d179"},{url:"tags/微信小程序/index.html",revision:"3e56997b28829740995a350a43a44bfa"},{url:"tags/拟合圆/index.html",revision:"9a371fb67c422188ba1e4d591bf7a171"},{url:"tags/数学建模/index.html",revision:"7f865ad12d1dc14d328e1ff10f263a5d"},{url:"tags/文档操作/index.html",revision:"f5aa08bfaed8bfc693d10a61cec41956"},{url:"tags/服务器/index.html",revision:"e30bd23ba6d188be14eaa234f508ab27"},{url:"tags/杂记/index.html",revision:"637ccb54ce10dc0c1e67868c03d2749b"},{url:"tags/模拟退火/index.html",revision:"2be6f076cec8999c519786fbf7a6a030"},{url:"tags/正则表达式/index.html",revision:"d74c2c010d4bfaceb23f6f5e8a5e028f"},{url:"tags/汇总/index.html",revision:"0612925a4d858a35967dd1c2e1be7329"},{url:"tags/生活随笔/index.html",revision:"6ef4420dbcf61f82a1d8231d7ec0c6e0"},{url:"tags/看板娘/index.html",revision:"eb57f5020fcd963293078672a52685f3"},{url:"tags/组件/index.html",revision:"06ade0157f5836d2fcdc6a4f51a0d291"},{url:"tags/解决/index.html",revision:"d0613c64ddd57ca0d7ff14301151128c"},{url:"tags/触发器/index.html",revision:"8bdf77b5e28fb62172fdbdfb813270e0"},{url:"tags/警示/index.html",revision:"326ab95a977d9f928c3f24bf72ba4ff9"},{url:"tags/记录整理/index.html",revision:"b9d2201f4d552487fd3c9ac80ab2c76d"},{url:"tags/跨域问题/index.html",revision:"60396df042235298c5023c456e0e97b6"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
