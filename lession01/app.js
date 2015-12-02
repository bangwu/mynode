var http = require('http');

http.createServer(function(rqs, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello\n');
}).listen(1234, '127.0.0.1');
console.log("Server is running at 127.0.0.1:1234");