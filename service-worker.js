if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,r,d)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const s={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return a;case"module":return s;default:return e(i)}}))).then((e=>{const i=d(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/061916107.html",revision:"813f0e4f4c722c8cf04b16094f8de826"},{url:"2021/071060549.html",revision:"d8f4420ead176ef6c3374fb49c1856e0"},{url:"2021/071133926.html",revision:"565d04f2589413a8de790065b6747ec9"},{url:"2021/071326519.html",revision:"99b7cd79521271d697e4ef27d0d6534e"},{url:"2021/072241576.html",revision:"f99278d78197895fcc54473215444878"},{url:"2021/082760550.html",revision:"41218c127218a99a08de94ffef45481b"},{url:"2021/083041604.html",revision:"f4ecc1005b9881b515c8f1643a79048b"},{url:"2021/083053025.html",revision:"124d269e405f3a67ce7a99b639e7461f"},{url:"2021/112156639.html",revision:"6723dd1ef9994819c3096ebf76fc40cd"},{url:"2021/120460550.html",revision:"60441e00024eb6a53e0b98644db04ac5"},{url:"2021/120860549.html",revision:"884d39b434daf5c22faa98b56f022c0d"},{url:"2021/120927345.html",revision:"b243f5c1017246e88599b9d4b273ae6c"},{url:"2021/121130800.html",revision:"ecc07fa06258bbab0ecd9a4d31f5ce71"},{url:"2021/12157757.html",revision:"6d6949ec804eabcbb3e61df65913e983"},{url:"2021/121818354.html",revision:"334d0d8972818741dd424e550df3fa94"},{url:"2021/122151725.html",revision:"0eed05ccaeee08379f1cbba73f157c67"},{url:"2021/122227789.html",revision:"b2270f745e493519558bb1f6a69de66a"},{url:"2021/122648049.html",revision:"d8ed4b82b9dbd833cdd7f13d6034c5a4"},{url:"404.html",revision:"2101ed8a98f203356a5eb8fcff961ac0"},{url:"about/index.html",revision:"37ec0aa1c9d9535ea9ee7e7eda34ab8c"},{url:"archives/2021/06/index.html",revision:"5ce4330d637765ee1f5318476abd1db3"},{url:"archives/2021/07/index.html",revision:"fc6ab9cc9210c1e1c824a98f1589e8d0"},{url:"archives/2021/08/index.html",revision:"e826eeb479ce72e1e7c22d4ee214f14f"},{url:"archives/2021/11/index.html",revision:"b5b3e76dc035bd502f71933ad69cb7a9"},{url:"archives/2021/12/index.html",revision:"b2514eaf439ea022e3e0397abcb4c9c4"},{url:"archives/2021/index.html",revision:"ebd1d6f8b7aec38c754f57256e8ebd85"},{url:"archives/2021/page/2/index.html",revision:"bfd40a36afebee8a340085c1034944ec"},{url:"archives/index.html",revision:"dac3f4c55e0c996a6a14a453da06b9b2"},{url:"archives/page/2/index.html",revision:"5d88744b5905a902b090d11a2ebf9a7f"},{url:"artitalk/index.html",revision:"0e52183f2a611fff5762e9eabc187de2"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/Android/index.html",revision:"7bbb4bfc5165a909212dbf4a528573cd"},{url:"categories/Git/index.html",revision:"c4e72190aa99b96e41d46b65619d1860"},{url:"categories/GitHub/index.html",revision:"b7c5528d73555924b17bedba80a7e836"},{url:"categories/hexo/index.html",revision:"d9010f2dad05f04a9066d74b76755706"},{url:"categories/hexo/matery主题/index.html",revision:"a093bcfe6e187bfbb1afbc71ac47cb21"},{url:"categories/index.html",revision:"2b6d66fea6f78979078a99233a191538"},{url:"categories/Markdown/index.html",revision:"49d5b0f31fcedf497e3b4a1ba415e796"},{url:"categories/MATLAB/index.html",revision:"a6356542403b5d281c4eea0730845d28"},{url:"categories/MySQL/index.html",revision:"bcc3a72ba1230c1228456b44e2ab7b17"},{url:"categories/MySQL/触发器/index.html",revision:"896d26e4672e2be9e8e40e2b35524a13"},{url:"categories/Vue/index.html",revision:"2fcbf2bd8d14d303c155f6af6a003e98"},{url:"categories/Vue/组件/index.html",revision:"280b84e48a6e6801184b116fe23bccff"},{url:"categories/小游戏/index.html",revision:"ece2a60067fd4c66cd0b754d3146f88e"},{url:"categories/常用网站汇总/index.html",revision:"c675470ed139cb033d6db0d7a38bdef0"},{url:"categories/算法/index.html",revision:"b09f3ccbd02cd7dcd9d9dc641575d85b"},{url:"census/index.html",revision:"03bc070754781a59ab510b704cb81b1e"},{url:"contact/index.html",revision:"a7902681ec78bac09fa4076e385995e3"},{url:"css/DIY.css",revision:"c6be4b57d4118eae796433aa4637e423"},{url:"css/index.css",revision:"eb280eed9640c22a85d9ffa14c56cebd"},{url:"css/prism-line-numbers.css",revision:"0810c0e4aa6528786cf1253de32ea115"},{url:"css/prism-tomorrow.css",revision:"f46d7519e3b65a6912814727b47a57ff"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"demos/VueDemo/index.html",revision:"f4a53568d88aca54b2dd7b9245fd7d2d"},{url:"friends/index.html",revision:"e1cbf554b99641232d0fe2a63293f4df"},{url:"gallery/index.html",revision:"a9a1bb0d0fdf89f62cb95bc4e5217c8b"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"index.html",revision:"2dfcd6b7d77d298a3a3fadf9de942540"},{url:"js/botui.js",revision:"5f6f727dfe7fc4b13f006f95dbe2d0f5"},{url:"js/fishes.js",revision:"de5855d298ddc661b1c65c61469544f5"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"a0e00f1947a44b379343278d7b3535c8"},{url:"medias/avatar.jpg",revision:"a26bba228e7fd5db25ead84e83241439"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/logo.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"medias/reward/alipay.jpg",revision:"48cf8b0f4e23abc880ebcca775236fd9"},{url:"medias/reward/wechat.png",revision:"40a19e38db3c7a25cffd64a564d42dee"},{url:"medias/备案图标.png",revision:"d0289dc0a46fc5b15b3363ffa78cf6c7"},{url:"my2048game/css/main.css",revision:"7c55ec4d7b40c38ac1628c78ad03a1e6"},{url:"my2048game/img/favicon.png",revision:"57acfaf6144704219c60964f2ed64970"},{url:"my2048game/index.html",revision:"877042d73d24aea08884aaeb6c706cf1"},{url:"my2048game/js/main2048.js",revision:"a69312bf12622fae732ef46a7e477274"},{url:"Mysearch/css/mainsearchstyle.css",revision:"6f1e5947317534b02de7563045a31d35"},{url:"Mysearch/img/YZY.png",revision:"a6493e1868a7ad30230ff2753ae7b9f2"},{url:"Mysearch/img/备案图标.png",revision:"d0289dc0a46fc5b15b3363ffa78cf6c7"},{url:"Mysearch/img/问天阁.png",revision:"4a51724ed22e665a45f2974608afc132"},{url:"Mysearch/index.html",revision:"5b6a6fcc18bce8e8dc4be1039564fe5d"},{url:"Mysearch/js/ShowTheTime.js",revision:"73c0b6d8e74260bcb77eeaa9c261875d"},{url:"page/2/index.html",revision:"d2e4b5e85785343b830029730cc2a167"},{url:"public/service-worker.js",revision:"e95c316b8464574f193395c4b67682ec"},{url:"public/workbox-07585517.js",revision:"dd7a32c50a74e3b8b434f0e6dc8c57d0"},{url:"tags/2048/index.html",revision:"386d11550c29bc249d97b51de9145fde"},{url:"tags/ACM/index.html",revision:"71c5859566acb7874ec96073fe69e290"},{url:"tags/Android/index.html",revision:"bba8fd1b4042574f03f15af4fc14c394"},{url:"tags/Coding/index.html",revision:"171868f99e3f15189ecd3bb7e1320934"},{url:"tags/Git/index.html",revision:"8c6986271d555692c297686eb4197851"},{url:"tags/GitHub/index.html",revision:"1b7b6cdccbede7c079d5280f9a91f962"},{url:"tags/Hello-World/index.html",revision:"ed9a4df59bfb2e957b0c4a5c3b797ff0"},{url:"tags/hexo/index.html",revision:"97887ff221f3d84934ba106d087f7efe"},{url:"tags/index.html",revision:"e5abe2fee94f03b1af4a93dbb2f28f1e"},{url:"tags/Markdown/index.html",revision:"ef5ed270ee53e4b26df1b5b76dcaecd5"},{url:"tags/matery主题/index.html",revision:"f54bf9e572efe21befa4348759fdd4a8"},{url:"tags/MATLAB/index.html",revision:"b84e3be42705bfd6bd20d703c56124f9"},{url:"tags/MySQL/index.html",revision:"4352fdf1ee21012fc3dc59a659bbda1c"},{url:"tags/Vue/index.html",revision:"93c3775df65141e31f5b3de29e2ad7e1"},{url:"tags/最短路径/index.html",revision:"745544162003d45534ddc669945981c3"},{url:"tags/图床/index.html",revision:"db9e9e8c1327b1dd1d76272d69153c4a"},{url:"tags/基础/index.html",revision:"3ae805e9ab8fd8b6cb12158c9bc28119"},{url:"tags/字体精简/index.html",revision:"6d163c7b880e6cb72795e1df77f8f723"},{url:"tags/学习笔记/index.html",revision:"3861fe178318411c3e28a37b06298dfe"},{url:"tags/小游戏/index.html",revision:"97cd6384c7ff478d57067f02e29a5e3a"},{url:"tags/常用网站/index.html",revision:"1fb85a8aed790bb5e4eb7031928697a1"},{url:"tags/拟合圆/index.html",revision:"02bff0c822b9afae0808022ebaac39d4"},{url:"tags/搜索引擎收录入口/index.html",revision:"a14493b27ce6f87912c99f2cd97ec2a1"},{url:"tags/数学建模/index.html",revision:"4b3ff76c4e5ba5a993d1fb98d8df04eb"},{url:"tags/服务器/index.html",revision:"46cf5323bb250f8b3b64c1e7a56cc02d"},{url:"tags/汇总/index.html",revision:"b5708d135a952a3bfae89cb10062f940"},{url:"tags/组件/index.html",revision:"509ef5feb15be96c7e7cda419f52d1fc"},{url:"tags/解决/index.html",revision:"b9853db639b3a9bd32e6658eb063bf62"},{url:"tags/触发器/index.html",revision:"56876317f236f3f7d1b498f8f3ba2399"},{url:"tags/记录整理/index.html",revision:"b05c5069644f33c8cb897b3020a61a99"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
