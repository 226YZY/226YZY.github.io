if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,d,r)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return a;case"module":return c;default:return e(i)}}))).then((e=>{const i=r(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/061916107.html",revision:"ab084d11a69683a89ce7409259507a2a"},{url:"2021/071060549.html",revision:"6981af1abd381e455929a3fd1918028f"},{url:"2021/071133926.html",revision:"673648817427f6d19c041cbc0771faeb"},{url:"2021/071326519.html",revision:"106e8460e9bb9b65e6207e00b95fff9e"},{url:"2021/072241576.html",revision:"d3fc0f897bcb222e53e5577f29723538"},{url:"2021/082760550.html",revision:"785bdf7a33a59cf30627a15edf05fd1e"},{url:"2021/083041604.html",revision:"007e9b80745768c7e68fd349e5e41d8c"},{url:"2021/083053025.html",revision:"9b8b11755906e14de4b62fe07060e573"},{url:"2021/112156639.html",revision:"e34d1d8d627db532547bf722ddf595d9"},{url:"2021/120460550.html",revision:"6ccb2f9528f94e1be5533c2f889d8d6b"},{url:"2021/120860549.html",revision:"23170dbed0e7eee6667a728b0c1b6fa3"},{url:"2021/120927345.html",revision:"c9a535a044064238c9f875882bcb22dd"},{url:"2021/121130800.html",revision:"c9af1cd0e97c70435ff4cd8a14607244"},{url:"2021/12157757.html",revision:"f655fca00beeb80b0dea49784dfaf2be"},{url:"2021/121818354.html",revision:"67d4ea345c18bc7d4b585fdfcd75ad80"},{url:"2021/122151725.html",revision:"2b4a22276623dde878568305aefe651e"},{url:"2021/122227789.html",revision:"4bfe19267b214e7b570d0c92b5a4d07f"},{url:"2021/122648049.html",revision:"da2f70d358a12154570b31ec7b706cfd"},{url:"2022/010757003.html",revision:"cdfef8f57d14eca19b94371ccf9e7e5e"},{url:"2022/010948485.html",revision:"6251a017986099e0a9bf5e4ca7dca78e"},{url:"2022/011424656.html",revision:"bbcc6a79b91985bf8fec07d934b8e437"},{url:"2022/012242042.html",revision:"44bcf820f99ba6c5d20209ecc6d33aef"},{url:"2022/012347381.html",revision:"11542a5c99c0ac2823bf31fc1ae3080f"},{url:"2022/013056898.html",revision:"63c8c45a6f5b1fa08cd0921bce49c063"},{url:"2022/020332243.html",revision:"1ee811252b9167a46ee9992858420198"},{url:"2022/020733811.html",revision:"496956352ca0d0fc5fe187104f93a0bc"},{url:"404.html",revision:"d868be8be8116e0ca17d71395272ec02"},{url:"about/index.html",revision:"03d4aca9e140473c51206d00a6970303"},{url:"archives/2021/06/index.html",revision:"d8af9b3699d6caa750fd849bca974bc9"},{url:"archives/2021/07/index.html",revision:"513f56090acadc6c00b69bf43c5517df"},{url:"archives/2021/08/index.html",revision:"c4bb783f86f72591e0051d66a87cd881"},{url:"archives/2021/11/index.html",revision:"e38de7a83e3003f3dd14afed8832ddce"},{url:"archives/2021/12/index.html",revision:"bfa1313d68220a6cf3c723222127e3b9"},{url:"archives/2021/index.html",revision:"db84b03ea9ced44fc5560a68f636b72e"},{url:"archives/2021/page/2/index.html",revision:"4608bc9af0954300fb1e5de805117c3d"},{url:"archives/2022/01/index.html",revision:"374b2f6d0d4a1e6f57299190dd15cfea"},{url:"archives/2022/02/index.html",revision:"620e75d9d1ad9b1d2a17c104ef2735d9"},{url:"archives/2022/index.html",revision:"46b27d7fa1ece862382f7d91ee47b89f"},{url:"archives/index.html",revision:"c56297d4e0bf878867bc96a2ab1714b2"},{url:"archives/page/2/index.html",revision:"6f8f7114efb339575b2040b737c40677"},{url:"archives/page/3/index.html",revision:"8d8c2b152b44ae30dea255c9f82d6dfa"},{url:"artitalk/index.html",revision:"5c90fb5aa9a0c2f496a747ffc5776401"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"4bf9c37bb9ad10db87af771562dc9a2a"},{url:"categories/博客相关/index.html",revision:"ef7161aee4f06f65b10d92d630613c5d"},{url:"categories/学习记录/Android/index.html",revision:"5025900dede5bf6f8df38a911932be37"},{url:"categories/学习记录/index.html",revision:"4bd13b2a08b0c03b3a9c80c112b21d4d"},{url:"categories/学习记录/MATLAB/index.html",revision:"4059512709fdb53c35fe858007a21bbc"},{url:"categories/学习记录/MySQL/index.html",revision:"19dbb99760f19a89c9058d64ff2d50ae"},{url:"categories/学习记录/Vue/index.html",revision:"8d2f15570fac4aa50cae6353210982df"},{url:"categories/学习记录/算法/index.html",revision:"f6dca63bb17ff8b86f59e26d14005368"},{url:"categories/探索实践/index.html",revision:"f78ba1d821682465bf1d7154bb77ab7e"},{url:"categories/生活随笔/index.html",revision:"79a92a52c27385ca59c5ca11ca69c781"},{url:"census/index.html",revision:"a8f38e36663f90fcc0f63d2027253f8a"},{url:"charts/index.html",revision:"96a777b7a906228b9ea470ae9fd349fe"},{url:"contact/index.html",revision:"389bb971f3ae82d36879d4e61008c6ba"},{url:"css/butterfly.css",revision:"dcf2a5b39710f926c8de9e92bb9c3519"},{url:"css/DIY.css",revision:"d83086f7fdd07f2deded7f381e81ec9b"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"191990743fc56b6baf7ad017078cd96f"},{url:"css/prism-line-numbers.css",revision:"0810c0e4aa6528786cf1253de32ea115"},{url:"css/prism-tomorrow.css",revision:"f46d7519e3b65a6912814727b47a57ff"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"demos/VueDemo/index.html",revision:"f4a53568d88aca54b2dd7b9245fd7d2d"},{url:"fcircle/index.html",revision:"7f95bdf39c6666287b449f782cf87710"},{url:"gallery/index.html",revision:"a97d97f33da8f0a5bc960ac98ce3c73d"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"index.html",revision:"5b464e2fdaa442c1ca9dab18428b4629"},{url:"js/botui.js",revision:"5f6f727dfe7fc4b13f006f95dbe2d0f5"},{url:"js/census.js",revision:"b9ff7171c907101e6505b7affcec7d16"},{url:"js/fcircle.js",revision:"5634fc409565dd67181dabcbfd1de986"},{url:"js/fetch.js",revision:"83e2f0efdb4327b90da5d35fb48c2bd0"},{url:"js/fishes.js",revision:"de5855d298ddc661b1c65c61469544f5"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/moments.js",revision:"41ce7af9fc59294319b92a4d16780a83"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/index.html",revision:"63a1c741fe05ce8630050a0e80ddd4c2"},{url:"medias/avatar.jpg",revision:"a26bba228e7fd5db25ead84e83241439"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/logo.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"medias/reward/alipay.jpg",revision:"48cf8b0f4e23abc880ebcca775236fd9"},{url:"medias/reward/wechat.png",revision:"40a19e38db3c7a25cffd64a564d42dee"},{url:"medias/备案图标.png",revision:"d0289dc0a46fc5b15b3363ffa78cf6c7"},{url:"message/index.html",revision:"dd16b8232c94ae34e5e8a5cf33c56c5b"},{url:"my2048game/css/main.css",revision:"7c55ec4d7b40c38ac1628c78ad03a1e6"},{url:"my2048game/img/favicon.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"my2048game/index.html",revision:"e5fca9a65334b9c3e635f5fd91d83ec4"},{url:"my2048game/js/main2048.js",revision:"a69312bf12622fae732ef46a7e477274"},{url:"Mysearch/css/mainsearchstyle.css",revision:"6f1e5947317534b02de7563045a31d35"},{url:"Mysearch/img/YZY.png",revision:"a6493e1868a7ad30230ff2753ae7b9f2"},{url:"Mysearch/img/备案图标.png",revision:"d0289dc0a46fc5b15b3363ffa78cf6c7"},{url:"Mysearch/img/问天阁.png",revision:"4a51724ed22e665a45f2974608afc132"},{url:"Mysearch/index.html",revision:"5b6a6fcc18bce8e8dc4be1039564fe5d"},{url:"Mysearch/js/ShowTheTime.js",revision:"73c0b6d8e74260bcb77eeaa9c261875d"},{url:"page/2/index.html",revision:"a33f8ad8b50c2527151111e92e88d9d6"},{url:"page/3/index.html",revision:"590e8f6070bb73a73f66a9b07bd4b252"},{url:"public/service-worker.js",revision:"e95c316b8464574f193395c4b67682ec"},{url:"public/workbox-07585517.js",revision:"dd7a32c50a74e3b8b434f0e6dc8c57d0"},{url:"random/index.html",revision:"375b075f53c2d267edcc5cd1d924fade"},{url:"reward/index.html",revision:"be5f4cf3d68adaa9313e7cd729987306"},{url:"tags/2048/index.html",revision:"b1a6e675a3b6ec79225457a1c40d0d98"},{url:"tags/ACM/index.html",revision:"c0beb480ccd14dabbb9983bfa468275d"},{url:"tags/Android/index.html",revision:"5aef0f1707f9085101b956bf6b88a2b6"},{url:"tags/butterfly主题/index.html",revision:"612b43b125cfefb019ac75d6287390f3"},{url:"tags/Coding/index.html",revision:"cf8f5957eba65589d7defd0a16a8fe9f"},{url:"tags/ECharts/index.html",revision:"4866992aca274357196b68475607b8b6"},{url:"tags/Git/index.html",revision:"5af1427df57da6b91a80442df01aaca2"},{url:"tags/GitHub/index.html",revision:"c374ea2e15824fc2cfaec32edda4e6f5"},{url:"tags/Hello-World/index.html",revision:"0ca84a60558bc050aee59f369deb4ca1"},{url:"tags/hexo/index.html",revision:"5694aa6779bd9a0a31e280c312fc4210"},{url:"tags/index.html",revision:"455deb0e2f9deb37f5bdfc1a93d50b34"},{url:"tags/Java/index.html",revision:"fd89e7cf5724edfe041a26adf06e0fc1"},{url:"tags/JDBC/index.html",revision:"37ddc69c7b20cf0b42b0861720d0e036"},{url:"tags/Markdown/index.html",revision:"f18ba1b6af0f3bf189850d1beaa83366"},{url:"tags/matery主题/index.html",revision:"2909bb03455659d379d467eb318bf019"},{url:"tags/MATLAB/index.html",revision:"536eda658a7ccecc3ce8d3c3daceb5c9"},{url:"tags/MySQL/index.html",revision:"8aab917aea0885e83820bb9f6a29826f"},{url:"tags/Vue/index.html",revision:"5f88441c167809d297b932d320371d7f"},{url:"tags/最短路径/index.html",revision:"a7277ffa46484c4a778db261c64f5a71"},{url:"tags/博客/index.html",revision:"fdf40eaee597ebf9777edf6356a38bf2"},{url:"tags/友链朋友圈/index.html",revision:"c5303b0f2a143497b946b45fb9eb62ee"},{url:"tags/图床/index.html",revision:"80b0da515ef51c6dbf779e40fe4489f6"},{url:"tags/基础/index.html",revision:"24744916104ed798b4df677e79f9a00b"},{url:"tags/字体精简/index.html",revision:"03f882f4e63d8439ddd7584bdb7ae644"},{url:"tags/学习笔记/index.html",revision:"0f29bb21b28d50c8a577c38b08b9e03d"},{url:"tags/小游戏/index.html",revision:"5f63df2b6af509ee150e96807f238550"},{url:"tags/常用网站/index.html",revision:"d96e4b6471e5a8d4f0e30458b1908c43"},{url:"tags/拟合圆/index.html",revision:"127fca8f8d788ef183f1ef3e7ea6410d"},{url:"tags/搜索引擎收录入口/index.html",revision:"9dc7d56a8854727cd63edc729e5a5203"},{url:"tags/数学建模/index.html",revision:"b0d6941daa05d093923e0ce775be4cad"},{url:"tags/文档操作/index.html",revision:"536f1162377c5484fb6aaded6877a8ec"},{url:"tags/服务器/index.html",revision:"f1f59fbc3790058f888cc846774c63a4"},{url:"tags/汇总/index.html",revision:"82a6be4e73eefa0d1569195664ae2541"},{url:"tags/组件/index.html",revision:"08ad2f2c4b98e1bc404fceb16722b538"},{url:"tags/解决/index.html",revision:"6c458df938fffe4c2193ceb5fed1f893"},{url:"tags/触发器/index.html",revision:"6c526f0f973dbece1ce4d4f7577e4c55"},{url:"tags/警示/index.html",revision:"5a56ec384202f3dffa996833d573568c"},{url:"tags/记录整理/index.html",revision:"41faa9a0213d30e90b087dba93a4cc7c"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
