var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello world!');
}).listen(3001);

console.log(`server started on localhost:3001; press Ctrl-C to terminate...`);