var moment = require('moment');
var salam  = require('./salam') ;

console.log("Selarang : "+moment().format('D-MM-YYYY, h:mm:ss a'));
console.log(salam.salamPagi());
