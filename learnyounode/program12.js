const http = require('http');
const fs = require('fs');
const args = process.argv;
// console.log(args)

var serv = http.createServer(function (req, res){
  let str = '';

  if(req.method == 'POST'){
    req.on('data', function (data){
      str += data.toString().toUpperCase();
    })
    req.on('end', function (){
      res.writeHead(200);
      res.end(str);
    })
  }
  else{
    res.writeHead(404);
    res.end();
  }
})

serv.listen(args[2])



// nodeschool solution
var http = require('http')
// this is an npm package
var map = require('through2-map')

var server = http.createServer(function (req, res) {
 if (req.method !== 'POST') {
   return res.end('send me a POST\n')
 }

 req.pipe(map(function (chunk) {
   return chunk.toString().toUpperCase()
 })).pipe(res)
})

server.listen(Number(process.argv[2]))
