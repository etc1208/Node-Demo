var ejs = require('ejs');
var fs = require('fs');
var http = require('http');
var filename = './template/students.ejs';

var students = [
	{name: 'Rick', age: 24},
	{name: 'Yh', age: 12},
	{name: 'Rico', age: 20}
];

var server = http.createServer(function(req, res) {
	if(req.url == '/') {
		fs.readFile(filename, function(err, data) {
			var template = data.toString();
			var context = {students: students};
			var output = ejs.render(template, context);
			res.setHeader('Content-Type', 'text/html');
			res.end(output);
		});
	} else {
		res.statusCode = 404;
		res.end('Not Found!');
	}
});

server.listen(3000);
