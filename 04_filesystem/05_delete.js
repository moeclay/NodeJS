var fs = require('fs');

fs.unlink('file_direname.txt', (err) => {
  if(err) throw err;
  console.log('File deleted!');
});
