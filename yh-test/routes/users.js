var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');

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
	userDao.getUsers(req, res);
});

/*router.post('/addUser', function(req, res, next) {
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
*/

router.get('/:id', function(req, res, next) {
	userDao.getUserById(req, res);
});

router.get('/delete/:id', function(req, res, next) {
	userDao.deleteById(req, res);
});

router.get('/update', function(req, res, next) {
	userDao.updateByName(req, res);
});

module.exports = router;
