console.log("create a new user");
module.exports.User = function(username, password, id, type) {
  // always initialize all instance properties
  this.username = username;
  this.password = password;
  this.id  = id;
  this.type = type;
}

module.exports.User.prototype = {
  create: function () {
    return "You have created a new user " + this.username;
  }

  
};
