/*Mocha测试框架*/

var memdb = require('..');
var assert = require('assert');

/*
describe('memdb', function() {
	describe('.save(doc)', function() {
		it('should save document', function() {
			var pet = {name: 'aaaa'};
			memdb.save(pet);
			var ret = memdb.first({name: 'aaaa'});
			assert(ret == pet);
		});
	});
});
*/

describe('memdb', function() {
	beforeEach(function() {
		memdb.clear();
	})

	describe('.save(doc)', function() {
		it('should save doc', function() {
			var pet = {name: 'aaaa'};
			memdb.save(pet);
			var ret = memdb.first({name: 'aaaa'});
			assert(ret == pet);
		})
	})

	describe('.first(obj)', function() {
		it('should return first matching doc', function() {
			var a = {name: 'aa'};
			var b = {name: 'bb'};

			memdb.save(a);
			memdb.save(b);
			
			var ret = memdb.first({name: 'aa'});
			assert(ret == a);

			var ret = memdb.first({name: 'bb'});
			assert(ret == b);
		})

		it('should return null if not matched', function() {
			var ret = memdb.first({name: 'sasasa'});
			assert(ret == null);
		})
	})

	describe('.saveAsync(doc)', function() {
		it('should save doc Async', function(done) {
			var pet = {name: 'cc'};
			memdb.saveAsync(pet, function() {
				var ret = memdb.first({name: 'cc'});
				assert(pet == ret);
				done();
			});
		})
	})
});


