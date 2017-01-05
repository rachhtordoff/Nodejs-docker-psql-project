console.log("create a new user");
module.exports.User = function(id, username, password, dob, type, relation) {
  // always initialize all instance properties
  this.userid = id;
  this.username = username;
  this.password = password;
  this.dob = dob;
  this.type = type;
  this.relationid  = relation;
}

module.exports.User.prototype = {

  getusername: function () {
    return this.username;
  },
  getid: function () {
    return this.id;
  },
  gettype: function () {
    return this.type;
  }
};
