var express = require('express');
var router = express.Router();
var User = require('../classes/userclass').User;
var request = require("request");


var user = new User('sharon','5678', '2', 'client');
var create = user.create();

console.log(user);
console.log (create);


var options = {
  host: 'http://postgresapi.local/get/2',
  path: '/path/to/resource'
};


/* GET users listing. */
router.get('/', function(req, res, next) {
  request('http://postgresapi.local/get/2', function (error, response, data) {
      console.log(data);
  })
});


module.exports = router;
