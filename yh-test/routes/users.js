var express = require('express');
var router = express.Router();

var dbOperation = require('../db/dbOperation');

//var users = require('../user.json');



/*router.get('/', function(req, res, next) {
  res.render('users/index', {users:users});
});

router.get('/new', function(req, res) {
	res.render('users/new');
});

router.get('/:name', function(req, res, next) {
	var user = users[req.params.name];
	if(user) {
		res.render('users/profile', {user:user});
	} else {
		next();
	}
});

router.post('/addUser', function(req, res) {
	if(users[req.body.name]) {
		res.send('Conflict', 409);
	} else {
		users[req.body.name] = req.body;
		res.redirect('/users');
	}
});*/

/*Restful API*/

router.get('/', function(req, res) {
	var users = dbOperation.getUsers();
	console.log('----->users:'+users);
	res.send({users: users});
});

router.post('/addUser', function(req, res, next) {
	var body = '';
	req.on('data', function(data) {
		body += data;
	});
	req.on('end', function() {
		var json = JSON.parse(body);
		users['user'+json.id] = body;
		res.send({message:'user added', success: 'true'});
	});
});

router.get('/:id', function(req, res, next) {
	var user = users['user'+req.params.id];
	if(user) {
		res.send({user: user});
	} else {
		res.send({message: 'not found', success: 'false'});
	}
});
module.exports = router;
