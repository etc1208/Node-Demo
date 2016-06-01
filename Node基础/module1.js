/*function add(x, y) {
	return x + y;
}

function double(x) {
	return x * 2;
}

exports.add = add;
exports.double = double;*/


var Calculate = function(n) {
	this.n = n;
}

Calculate.prototype.double = function() {
	return this.n*2;
}

Calculate.prototype.zero = function() {
	return 0;
}

module.exports = Calculate;


