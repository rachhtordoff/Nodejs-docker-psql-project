var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://root:password@postgres:5432/optiself';
var db = pgp(connectionString);

// add query functions
var getAllUsers = function(data,callback){
  db.any('select * from users', function(err, rows) {
      if (err) {
          callback(err, null);
      } else
          callback(null, rows[0].id);
  });
}

addUser = function(id, username, password, age){
  return db.one('INSERT INTO Users(id, username, password, age) VALUES($1, $2, $3, $4)', [id, username, password, age])
}

getUser = function(id){
  return db.any("select * from users where id=$1", id)
}


module.exports ={
  getAllUsers,
  addUser,
  getUser
}
