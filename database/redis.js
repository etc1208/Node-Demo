var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

client.on('error', function(err) {
	if(err) {
		console.log(err);
		return;
	}
	console.log('Redis on 6379.');
});

//存取键值对
client.set('color', 'red', redis.print);
client.get('color', function(err, value) {
	if(err) throw err;
	console.log(value);
});

//存取哈希表
client.hmset('camping', {
	'shelter': '2-person',
	'cooking': 'campstove'
}, redis.print);

client.hget('camping', 'cooking', function(err, value) {
	if(err) throw err;
	console.log(value);
});

client.hkeys('camping', function(err, keys) {
	if(err) throw err;
	keys.forEach(function(key, i) {
		console.log(key + ' ');
	});
});

// 存取链表
client.lpush('tasks', 'painting xxxx', redis.print);
client.lpush('tasks', 'painting yyyy', redis.print);
client.lrange('tasks', 0, -1, function(err, items) {
	if(err) throw err;
	items.forEach(function(item, i) {
		console.log(item);
	});
});

//存取集合
client.sadd('ip', '123.4.5.3', redis.print);
client.sadd('ip', '44.55.66.77',redis.print);
client.sadd('ip', '123.4.5.3', redis.print);
client.smembers('ip', function(err, members) {
	if(err) throw err;
	console.log(members);
});

