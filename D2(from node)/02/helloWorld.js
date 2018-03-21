var http = require('http'), fs = require('fs');

function serveStaticFile(res, path, contentType, responseCode){
  if(!responseCode) 
    responseCode = 200;
  // console.log('res===>', res)
  console.log(`path=${path} type=${contentType} code=${responseCode}`);
  fs.readFile(__dirname+path, function(err, data){
    if(err){
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('500 - Internal Error');
    } else {
      res.writeHead(responseCode, {'Content-Type': contentType});
      res.end(data);
    }
  });
}

http.createServer(function(req, res){
  // 规范化url, 去掉查询字符窜、可选的反斜杠，并把它变成小写
  var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch(path){
    case '':
      serveStaticFile(res, '/public/home.html', 'text/html');
      break;
    case '/about':
      serveStaticFile(res, '/public/about.html', 'text/html');
      break;
    case '/img/logo':
      serveStaticFile(res, '/public/img/logo.png', 'image/png');
      break;
    default:
      serveStaticFile(res, '/public/notfound.html', 'text/html', 404);
      break;
  }
}).listen(3003);

console.log(`server started on localhost:3003; press Ctrl-C to terminate...`);