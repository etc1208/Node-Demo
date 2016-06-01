var EventEmitter = require('events').EventEmitter;
var channel = new EventEmitter();
channel.on('haha', function(){
	console.log("asasasasas");
});

channel.emit("haha");
