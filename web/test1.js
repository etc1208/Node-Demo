var http = require('http');

var server = http.createServer(function(req, res) {
	/*//res.end('asasasas');
	var content = "yh";
	res.setHeader('Content-Length', content.length);
	res.setHeader('Content-Type', 'text/plain');
	res.end(content);*/

	var url = 'http://www.baidu.com';
	var body = '<p>ReTo:<a href="'+url+'">'+url+'</a></p>';
	res.setHeader('Content-Length', body.length);
	res.setHeader('Location', url);
	res.setHeader('Content-Type', 'text/html');
	res.statusCode = 302;
	res.end(body);
});

server.listen(3000, function() {
	console.log('Listening on 3000 .');
});
