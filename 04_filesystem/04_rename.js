var fs = require('fs');

fs.rename('myfile.txt','file_direname.txt', (err) => {
  if(err) throw err;
  console.log('File Renamed!');
});
