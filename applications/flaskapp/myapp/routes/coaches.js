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
    console.log(id);
    req.session.name = username;
    req.session.userid = id;
    res.render('coaches', { username: username });
  }
})
});

router.get('/messages', function(req, res, next) {
  var name = req.session.name;
  var id = req.session.userid;
  console.log(name);
  console.log(id);
  console.log(id);
    res.render('messages', { id: id, username: name});
});

router.get('/documents', function(req, res, next) {
  var name = req.session.name;
  var id = req.session.userid;
  console.log(name);
  console.log(id);
  console.log(id);
    res.render('documents', { id: id, username: name});
});

router.get('/schedule', function(req, res, next) {
  var name = req.session.name;
  var id = req.session.userid;
  console.log(name);
  console.log(id);
  console.log(id);
    res.render('schedule', { id: id, username: name});
});


module.exports = router;
