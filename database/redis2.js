//信道传递数据
var net = require('net');
var redis = require('redis');

var server = net.createServer(function(socket) {
	var subscriber;
	var publisher;

	socket.on('connect', function() {
		subscriber = redis.createClient();
		subscriber.subscribe('chat_room');

		subscriber.on('message', function(channel, message) {
			socket.write('channel '+channel+':'+message);
		});
		publisher = redis.createClient();
	});

	socket.on('data', function(data) {
		publisher.publish('chat_room', data);
	});

	socket.on('end', function() {
		subscriber.unsubscribe('chat_room');
		subscriber.end();
		publisher.end();
	});
});

server.listen(3000);
