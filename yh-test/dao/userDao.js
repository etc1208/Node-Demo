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
					success: false
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
					message: 'no such user'
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
		connection.query($sql.update);
	}
};

