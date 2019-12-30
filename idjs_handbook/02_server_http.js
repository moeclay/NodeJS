// module http
var http = require('http'),
    PORT = 3400;
// object server
// request listener akan dijalankan, layaknya button onclick
var server = http.createServer((req, res) => {
    var body = "<p>Hello NodeJS HTTP</p>";
    res.writeHead(200, {
        'Content-Length': body.length,
        'Content-Type': 'text/html',
        'Pesan-Header':'Pengenalan Node.js'
    });
    res.write(body);
    res.end();
});
// menjalankan server
server.listen(PORT);
console.log('port :'+PORT+' : Nodejs server...');