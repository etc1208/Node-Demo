var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/tasks');

//注册Schema
var Schema = mongoose.Schema();
var Tasks = new Schema({
	project: String,
	description: String
});
mongoose.model('Task', Tasks);

//添加任务
var Task = mongoose.model('Task');
var task = new Task();
task.project = 'BBBB';
task.description = 'asdasdasdasd';
task.save(function(err) {
	if(err) throw err;
	console.log('saved.');
});


//搜索文档
Task.find({'project': 'BBBB'}, function(err, tasks) {
	for(var i=0;i<tasks.length;i++) {
		console.log(tasks[i]._id);
		console.log(tasks[i].description);
	}
});

//更新文档
Task.update(
	{_id: '23r2f2t4tewf32'},
	{description: 'afqfqwfqf'},
	{multi: fasle},
	function(err, row_update) {
		if(err) throw err;
		console.log('Updated.');
	}
);

//删除文档
Task.findById('f232g234t2q4', function(err, task) {
	task.remove();
});


mongoose.disconnect();


