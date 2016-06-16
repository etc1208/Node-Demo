// CRUD SQL语句
var sql = {
  insert:'INSERT INTO userInfo(name, password, profession) VALUES(?,?,?)',
  update:'update userInfo set password=?, profession=? where name=?',
  delete: 'delete from userInfo where id=?',
  queryById: 'select * from userInfo where id=?',
  queryAll: 'select * from userInfo'
};

module.exports = sql;