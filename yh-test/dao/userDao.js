var mysql = require('mysql');
var $conf = require('../conf/db');
var $sql = require('./userSqlMapping');

var connection = mysql.createConnection($conf.mysql);

module.exports = {
	getUsers: function(req, res) {
		connection.query($sql.queryAll,function(err, rows, fields) {
			if(err) throw err;
			var users = [];
			for(var i in rows) {
				var name = rows[i].name;
				var password = rows[i].password;
				var profession = rows[i].profession;
				var user = {
					name: name,
					password: password,
					profession: profession
				};
				users.push(user);
			}
			res.json(users);
		});
	},

	getUserById: function(req, res) {
		connection.query($sql.queryById, [req.params.id], function(err, rows, fields) {
			if(err) throw err;
			if(rows.length === 0) {
				res.json({
					success: false,
					message: "no such user"
				});
			} else {
				var result = {
					success: true,
					user: {
						name: rows[0].name,
						password: rows[0].password,
						profession: rows[0].profession
					}
				};
				res.json(result);
			}
			
		});
	},

	deleteById: function(req, res) {
		connection.query($sql.delete, [req.params.id], function(err, rows, fields) {
			if(err) throw err;
			if(rows.affectedRows === 0) {
				res.json({
					success: false,
					message: 'no such user to delete'
				});
			} else {
				res.json({
					success: true,
					message: 'delete success'
				});
			}
			
		});
	},

	updateByName: function(req, res) {
		if(!req.query.pwd || !req.query.profession || !req.query.name) {
			res.json({
				success: false,
				message: 'lack parameter'
			});
			return;
		}
		connection.query(
			$sql.update, 
			[req.query.pwd, req.query.profession, req.query.name], 
			function(err, rows, fields) {
				if(err) throw err;
				if(rows.affectedRows === 0) {
					res.json({
						success: false,
						message: 'no such user to update'
					});
				} else {
					res.json({
						success: true,
						message: 'update success'
					});
				}
			});
	},

	addUser: function(req, res) {
		if(!req.query.pwd || !req.query.profession || !req.query.name) {
			res.json({
				success: false,
				message: 'lack parameter'
			});
			return;
		}
		connection.query(
			$sql.insert,
			[req.query.name, req.query.pwd, req.query.profession],
			function(err, rows, fields) {
				if(err) throw err;
				if(rows.affectedRows === 0) {
					res.json({
						success: false,
						message: 'fail to add user'
					});
				} else {
					res.json({
						success: true,
						message: 'add user success'
					});
				}
			});
	},

//TODO post获取req.body为空
	addUserPost: function(req, res) {
		//console.log(req.body);
		if(!req.body.name || !req.body.pwd || !req.body.profession) {
			res.json({
				success: false,
				message: 'lack parameter, add user by post fail'
			});
			return;
		}
		connection.query(
			$sql.insert,
			[req.body.name, req.body.pwd, req.body.profession],
			function(err, rows, fields) {
				if(err) throw err;
				if(rows.affectedRows === 0) {
					res.json({
						success: false,
						message: 'fail to add user by post'
					});
				} else {
					res.json({
						success: true,
						message: 'add user by post success'
					});
				}
			});
	}
};

