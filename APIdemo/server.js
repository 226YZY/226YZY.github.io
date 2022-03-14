<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>// 导入http模块:
var http = require('http');
// 创建http server，并传入回调函数:
var server = http.createServer(function (request, response) {
    // 回调函数接收request和response对象,
    // 获得HTTP请求的method和url:
    console.log(request.method + ': ' + request.url);
    // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
    response.writeHead(200, {'Content-Type': 'text/html'});
    // 将HTTP响应的HTML内容写入response:
    response.end('Hello world!');
});

// 让服务器监听8080端口:
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');<script type="text&#x2F;javascript" src="https://unpkg.com/kity@2.0.4/dist/kity.min.js"></script><script type="text&#x2F;javascript" src="https://unpkg.com/kityminder-core@1.4.50/dist/kityminder.core.min.js"></script><script defer="true" type="text&#x2F;javascript" src="https://unpkg.com/hexo-simple-mindmap@0.8.0/dist/mindmap.min.js"></script><link rel="stylesheet" type="text&#x2F;css" href="https://unpkg.com/hexo-simple-mindmap@0.8.0/dist/mindmap.min.css">