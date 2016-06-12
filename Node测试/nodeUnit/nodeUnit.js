exports.testA = function(test) {
	test.expect(1);
	var a = true;
	test.ok(a, 'not a');
	test.done();
}

exports.testB = function(test) {
	test.expect(1);
	var b = 1;
	test.equal(b, 1, 'not b');
	test.done();
}

