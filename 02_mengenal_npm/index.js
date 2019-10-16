var http = require('http');

http.createServer(function(req, res){
  res.end("Hallo npm !");
}).listen(8000);

console.log("Server berjalan di port 8000");
