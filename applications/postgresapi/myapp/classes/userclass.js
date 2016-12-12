console.log("create a new user");
module.exports.User = function(username, password, id, type) {
  // always initialize all instance properties
  this.username = username;
  this.password = password;
  this.id  = id;
  this.type = type;
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
