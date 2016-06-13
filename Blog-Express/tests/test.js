var assert = require('assert');

describe('isArray', function() {
	it('should return a array', function() {
		assert(Array.isArray('a,b,c'.split(',')));
	})
})



var expect = require('expect.js');
var arr1, arr2;

before(function() {
	arr1 = ['a','b','c'];
})

describe('Array', function() {
	beforeEach(function() {
		arr2 = 'a,b,c'.split(',');
	})

	it('should return array', function() {
		expect(Array.isArray(arr2)).to.be.true;
	})

	it('same array', function() {
		expect(arr1.length).equal(arr2.length);
	})
})

