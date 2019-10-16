var http = require('http');
var fs   = require('fs');

http.createServer(function(req, res){

  // baca file
  fs.readFile('index.html', (err, data) => {
    if(err) throw err;

    // kirim respon
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(data);
    res.end();

  });

}).listen(8000);

console.log('server berjalan diport 8000');
