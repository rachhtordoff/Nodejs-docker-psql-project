var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://root:password@postgres:5432/optiself';
var db = pgp(connectionString);

// add query functions
getAllUsers = function(data){
  return db.any('select * from users')
}

getmessagecount =  function(id){
  return db.any('SELECT count (*) from messages where sender_id=($1)', [id])
}

addUser = function(id, username, password, dob, type, relation){
db.none('INSERT INTO users(id, username, password, dob, type, relation) VALUES($1, $2, $3, $4, $5, $6)', [id, username, password, dob, type, relation])
}

addmessage = function(message, receiver_id, sender_id){
  return db.none('INSERT INTO messages(message, receiver_id, sender_id) VALUES ($1, $2, $3)', [message, receiver_id, sender_id])
}

getUser = function(type){
  return db.any("select * from users where type=$1", type)
}

getMessages = function(sender_id, receiver_id){
  return db.any("select * from messages where sender_id=($1) and receiver_id=($2) or receiver_id=($1) and sender_id=($2)", [sender_id, receiver_id])
}

module.exports ={
  getAllUsers,
  addUser,
  getUser,
  addmessage,
  getMessages,
  getmessagecount
}
