const http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World!'); 
  res.end(); 
}).listen(process.env.PORT || 8080, '0.0.0.0'); 
