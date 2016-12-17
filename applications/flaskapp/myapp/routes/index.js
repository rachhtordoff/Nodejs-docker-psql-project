var express = require('express');
var router = express.Router();
var request = require("request");


/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.destroy();
  res.render('index');
});

/* GET users listing. */
router.get('/coaches', function(req, res, next) {
  request('http://postgresapi:3000/coach', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var json = (JSON.parse(body));
    var id = json[0]['id'];
    var username = json[0]['username'];
    console.log(username);
    console.log(id);
    console.log(json);
    req.session.name = username;
    req.session.userid = id;
    res.render('coaches', { username: username, id: id });
  }
})
});

/* GET users listing. */
router.get('/clients', function(req, res, next) {
  request('http://postgresapi:3000/client', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var json = (JSON.parse(body));
    var id = json[0]['id'];
    var username = json[0]['username'];
    console.log(username);
    console.log(id);
    console.log(json);
    req.session.name = username;
    req.session.userid = id;
    res.render('clients', { username: username, id: id });
  }
})
});

router.get('/messages', function(req, res, next) {
var name = req.session.name;
var id = req.session.userid;
request('http://postgresapi:3000/getMessages/' + id , function (error, response, body) {
if (!error && response.statusCode == 200) {
  var json = (JSON.parse(body));
  var iddd = json[0]['id'];
  console.log(iddd);
  res.render('messages', { id: id, username: name});
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
