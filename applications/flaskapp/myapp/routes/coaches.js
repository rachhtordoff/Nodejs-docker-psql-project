var express = require('express');
var router = express.Router();
var request = require("request");



/* GET users listing. */
router.get('/', function(req, res, next) {
  request('http://postgresapi:3000/coaches', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var json = (JSON.parse(body));
    var id = json['id'];
    var username = json['username'];
    console.log(username);
  }
    res.render('coaches', { username: username });
})
});

router.get('/messages', function(req, res, next) {
    res.render('messages');
});

module.exports = router;
