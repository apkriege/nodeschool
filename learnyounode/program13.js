const http = require('http');
const url = require('url');
const args = process.argv;

function processTime(t){
  let x = new Date(t);
  let ret = {'hour':x.getHours(), 'minute':x.getMinutes(), 'second':x.getSeconds()};
  return ret;
}

var server = http.createServer(function (req, res){
  var x = url.parse(req.url, true);
  if(req.method == 'GET'){
      let ret;
      res.writeHead(200, {'Content-Type':'application/json'})
      if(x.pathname == '/api/parsetime'){
        ret = processTime(x.query.iso)
      }
      if(x.pathname == '/api/unixtime'){
        ret = {'unixtime': new Date(x.query.iso).getTime()};
      }
      res.end(JSON.stringify(ret));
  }
  else{
    res.writeHead(404);
    res.end();
  }
})

server.listen(args[2]);


//nodeschool solution
var http = require('http')
var url = require('url')

function parsetime (time) {
 return {
   hour: time.getHours(),
   minute: time.getMinutes(),
   second: time.getSeconds()
 }
}

function unixtime (time) {
 return { unixtime: time.getTime() }
}

var server = http.createServer(function (req, res) {
 var parsedUrl = url.parse(req.url, true)
 var time = new Date(parsedUrl.query.iso)
 var result

 if (/^\/api\/parsetime/.test(req.url)) {
   result = parsetime(time)
 } else if (/^\/api\/unixtime/.test(req.url)) {
   result = unixtime(time)
 }

 if (result) {
   res.writeHead(200, { 'Content-Type': 'application/json' })
   res.end(JSON.stringify(result))
 } else {
   res.writeHead(404)
   res.end()
 }
})
server.listen(Number(process.argv[2]))
