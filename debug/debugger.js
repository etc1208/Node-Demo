/*--> node debug debugger.js*/

var http = require('http');
debugger;

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	debugger;
	res.end('hello');
}).listen(3000);