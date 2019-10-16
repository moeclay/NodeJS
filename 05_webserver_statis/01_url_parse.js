var url = require('url');
var adr = 'https://www.petanikode.com/search.php?year=2018&month=february';
var q   = url.parse(adr, true);

// hasil parse url
console.log("protocol: "+q.protocol);
console.log("hostname: "+q.host);
console.log("pathname: "+q.pathname);
console.log("params  : "+q.search);

var qdata = q.query;
console.log(qdata);
