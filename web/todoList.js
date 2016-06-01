var http = require('http');
var url = require('url');
var items = [];

var server = http.createServer(function(req, res) {
	switch(req.method) {
		case 'POST':
			var item = '';
			req.setEncoding('utf8');
			req.on('data', function(chunk) {
				item += chunk;
			});
			req.on('end', function() {
				items.push(item);
				res.end('OK\n');
			});
			break;
		case 'GET':
			var str = '';
			items.forEach(function(item, i) {
				str += i + ':' + item + '\n';
			});

			res.setHeader('Content-Length', Buffer.byteLength(str));
			res.setHeader('Content-Type', 'text/plain; charset="utf-8"');
			res.end(str);
			break;
		case 'DELETE':
			var path = url.parse(req.url).pathname;
			var i = parseInt(path.slice(1), 10);
			if(isNaN(i)) {
				res.statusCode = 400;
				res.end('Invalid id');
			} else if(!items[i]) {
				res.statusCode = 404;
				res.end('Not found!');
			} else {
				items.splice(i,1);
				res.end('OK!');
			}
			break;
		case 'PUT':
			var path = url.parse(req.url).pathname;
			var i = parseInt(path.slice(1), 10);
			if(isNaN(i)) {
				res.statusCode = 400;
				res.end('Invalid id');
			} else if(!items[i]) {
				res.statusCode = 404;
				res.end('Not found!');
			} else {
				var item = '';
				req.setEncoding('utf8');
				req.on('data', function(chunk) {
					item += chunk;
				});
				req.on('end', function() {
					items[i] = item;
				});
				res.end('OK!');
			}
			break;

	}
});

server.listen(3000, function() {
	console.log('Server is listening on 3000.');
});
