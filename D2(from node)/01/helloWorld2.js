var http = require('http');

http.createServer(function(req, res){
  // 规范化url, 去掉查询字符窜、可选的反斜杠，并把它变成小写
  var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch(path){
    case '':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('HomePage');
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('About');
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
      break;
  }
}).listen(3002);

console.log(`server started on localhost:3002; press Ctrl-C to terminate...`);