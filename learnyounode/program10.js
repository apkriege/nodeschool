const net = require('net');
const args = process.argv;
// console.log(args[2]);
var date = new Date();
// var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
var y = date.getFullYear();
var m = date.getMonth() < 10 ? '0'+(date.getMonth()+1) : date.getMonth();
var d = date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
var h = date.getHours();
var min = date.getMinutes();
var full = y+'-'+m+'-'+d+' '+h+':'+min;

var server = net.createServer(function (socket){
  socket.write(full+'\n');
  socket.end();
});

server.listen(args[2]);


//nodeshcool solution
var net = require('net')

function zeroFill (i) {
 return (i < 10 ? '0' : '') + i
}

function now () {
 var d = new Date()
 return d.getFullYear() + '-' +
   zeroFill(d.getMonth() + 1) + '-' +
   zeroFill(d.getDate()) + ' ' +
   zeroFill(d.getHours()) + ':' +
   zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
 socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
