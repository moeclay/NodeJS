var fs = require('fs');

// create a file named myfile.txt
fs.appendFile('myfile.txt', 'Hello dari petanikode', function(err){
  if(err) throw err;
  console.log('saved !');
});
