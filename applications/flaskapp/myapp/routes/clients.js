var express = require('express');
var router = express.Router();
var request = require("request");

/* GET users listing. */
router.get('/', function(req, res, next) {
  request('http://postgresapi:3000/client', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var json = (JSON.parse(body));
    var id = json[0]['id'];
    var username = json[0]['username'];
    console.log(username);
    req.session.name = username;
    req.session.userid = id;
    res.render('clients', { username: username, id: id });
  }
})
});

router.get('/get', function(req, res, next) {
  request('http://postgresapi:3000/get', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var json = (JSON.parse(body));
    console.log(body);
  }
})
});


router.get('/messages', function(req, res, next) {
var name = req.session.name;
var id = req.session.userid;
request('http://postgresapi:3000/getMessages/2', function (error, response, body) {
if (!error && response.statusCode == 200) {
  var json = (JSON.parse(body));
  console.log(body);
  res.render('messages', { id: id, username: name});
}
})
});


router.post('/messages', function(req, res, next) {
var user_id = req.session.userid;
var message = "hey there again";
var addmessage = { method: 'POST',
   url: 'http://postgresapi:3000/addmessage',
   headers:
    { 'cache-control': 'no-cache',
      'content-type': 'application/json' },
   body: { user_id: user_id, message: message },
   json: true };
request(addmessage, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var json = (JSON.parse(body));
    console.log(body);
    res.send(body);
  }
})
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
