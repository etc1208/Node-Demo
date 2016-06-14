var handlebars = require('handlebars');
var fs = require('fs');

var data = {name: 'yh',
			hobby: ['a', 'b', 'c']	
		};

fs.readFile('./handlebars-example.html', 'utf-8', function(err, source) {
	var template = handlebars.compile(source);
	var html = template(data);
	console.log(html);
});