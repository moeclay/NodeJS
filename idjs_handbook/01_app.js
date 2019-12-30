var fs = require('fs');

fs.readFile('./01_resource.json','utf-8', (err,data) => {
    if(err) throw err;
    console.log(JSON.parse(data));
});

console.log('Selanjutnya...');

// perpaduan antara teknologi 
// (event driven & proses asinkron)