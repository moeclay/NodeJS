var fs = require('fs');

fs.open('myfile2.txt','w+', function(err, file){
  if(err) throw err;

  // kontent file
  let content = "Hello Programmer";

  // tulis ke file
  fs.writeFile(file, content, (err) => {
    if(err) throw err;
    console.log('Saved!');
  });

  // baca file
  fs.readFile(file, (err, data) => {
    if(err) throw err;
    console.log(data.toString('utf8'));
  });

});
