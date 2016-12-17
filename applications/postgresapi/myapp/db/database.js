var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://root:password@postgres:5432/optiself';
var db = pgp(connectionString);

// add query functions
getAllUsers = function(data,callback){
  return db.any('select * from users')

}

addUser = function(id, username, password, dob, type){
  return db.one('INSERT INTO users(id, username, password, dob, type) VALUES($1, $2, $3, $4, $5)', [id, username, password, dob, type])
}

addmessage = function(message, userid){
  return db.one('INSERT INTO messages(message, user_id) VALUES ($1, $2)', [message, userid])
}

getUser = function(type){
  return db.any("select * from users where type=$1", type)
}

getMessages = function(userid){
  return db.any("select * from messages where user_id=$1", userid)
}

module.exports ={
  getAllUsers,
  addUser,
  getUser,
  addmessage,
  getMessages
}
