const http = require('http');
const fs = require('fs');
const args = process.argv;

var server = http.createServer(function (req, res){
  var str = fs.createReadStream(process.argv[3]);
  str.on('data', function (d){
    res.end(d.toString());
  })
})

server.listen(Number(process.argv[2]))

//nodeschool solution
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
