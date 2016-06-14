var jade = require('jade');
var fs = require('fs');

var data = {msg: 'aaaaaa'};

//fs.readFile('jade-example.jade', function(err, source) {
	
	/*方法一：
	var template = jade.compile(source);
	var html = template(data);
	console.log(html);*/

	/*
	方法二：
	var html = jade.render(source, data);
	console.log(html);*/
//});


/*方法三：*/

jade.renderFile('jade-example.jade', data, function(err, html) {
	console.log(html);
});