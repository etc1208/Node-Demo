var mongodb = require('mongodb');
var server = new mongodb.Server('127.0.0.1', 27017, {});

var client = new mongodb.Db('myDB', server, {w: 1});

client.open(function(err) {
	if(err) throw err;
	client.collection('test', function(err, collection) {
		if(err) throw err;
		collection.insert(
			{
				'title': 'xxxx',
				'body': 'aaaaa'
			},
			{safe: true}, //安全模式
			function(err, documents) {
				if(err) throw err;
				console.log(documents[0]._id);
			}
		);

		var _id = new client.bson_serializer.ObjectID('235t34tr13r124');
		collection.update(
			{_id: _id},
			{$set: {'title': 'cvcvcvcv'}},
			{safe: true},
			function(err) {
				if(err) throw err;
			}
		);

		collection.find({'title': 'cvcvcvcv'}).toArray(
			function(err, results) {
				if(err) throw err;
				console.log(result);
			}
		);

		var _id = new client.bson_serializer.ObjectID('235t34tr13r124');
		collection.remove({_id: _id}, {safe: true}, function(err) {
			if(err) throw err;
		});
	});
});
