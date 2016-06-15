var mysql = require('mysql');

var db = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: '',
	database: 'users'
});

exports.getUsers = function() {
	console.log('dbOperation：getUsers');
	var query = "SELECT * FROM userInfo";
	var res = [];
	db.query(
		query,
		function(err, rows) {
			if(err) {
				console.log(err);
			}
			
			for(var i in rows) {
				var name = rows[i].name;
				var password = rows[i].password;
				var profession = rows[i].profession;
				var user = {
					name: name,
					password: password,
					profession: profession
				};
				res.push(user);
			}
			res = JSON.stringify(res);
			return res;
		}
	);
	
};

console.log(exports.getUsers());