// my code
var args = process.argv;

var fs = require('fs');
fs.readFile(args[2], function cb(err, data){
  var lines = data.toString().split('\n').length - 1;
  console.log(lines);
});

// nodeio code
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
   if (err) {
     return console.log(err)
   }
   // fs.readFile(file, 'utf8', callback) can also be used
   var lines = contents.toString().split('\n').length - 1
   console.log(lines)
 })
