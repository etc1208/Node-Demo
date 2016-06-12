var assert = require('assert');
var Todo = require('./todo');
var todo = new Todo();
var testsCompleted = 0;

function deleteTest() {
	todo.add('xxxx');
	assert.equal(todo.getCount(), 1, '1 item exist');
	todo.deleteAll();
	assert.equal(todo.getCount(), 0, 'No item');
	testsCompleted++;
}

function addTest() {
	todo.deleteAll();
	todo.add('aaaa');
	assert.notEqual(todo.getCount(), 0, 'i item exist');
	testsCompleted++;
}

function doAsyncTest(cb) {
	todo.doAsync(function(value){
		assert.ok(value, 'Callback should pass true');
		testsCompleted++;
		cb();
	}) 
}

function throwsTest() {
	assert.throws(todo.add, /need/);
	testsCompleted++;
}


deleteTest();
addTest();
throwsTest();
doAsyncTest(function() {
	console.log(testsCompleted);
});
