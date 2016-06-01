var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	if(req.url = '/') {
		fs.readFile('./titles.json', function(err, data) {
			if(err) {
				console.error(err);
				res.end('Error!');
			} else {
				var titles = JSON.parse(data.toString());
				fs.readFile('./template.html', function(err, data) {
					if(err) {
						console.error(err);
						res.end('Error!');
					} else {
						var tmp = data.toString();
						var html = tmp.replace('%', titles.join('</li><li>'));
						res.writeHead(200, {'Content-Type': 'text/html'});
						res.end(html);
					}
				});
			}
		});
	}
}).listen(2000); 



/*var fs = require('fs');

fs.readFile('./Node基础/titles.json',function(err, data) {
	console.log(JSON.parse(data.toString()));
})*/

