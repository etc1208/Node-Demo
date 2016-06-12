var jade = require('jade');

/*var template = 'strong #{message}';
var context = {message: 'hello'};

var fn = jade.compile(template);
console.log(fn(context));*/

var fs = require('fs');
var template = fs.readFileSync('./template.jade');
var context = {messages:[
		'aaaaaa',
		'bbbbbb'
	]};
var fn = jade.compile(template);
console.log(fn(context));
