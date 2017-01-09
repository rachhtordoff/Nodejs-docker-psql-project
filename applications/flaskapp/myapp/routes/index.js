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
    var type = json[0]['type'];
    console.log("coach username: " + username);
    console.log("coach id: " + id);
    console.log(type);
    req.session.name = username;
    req.session.userid = id;
    req.session.type = type;
    res.redirect('/dashboard');
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
    var type = json[0]['type'];
    console.log("client username: " + username);
    console.log("client id: " + id);
    console.log(type);
    req.session.name = username;
    req.session.userid = id;
    req.session.type = type;
    res.redirect('/dashboard');
  }
})
});


router.get('/dashboard', function(req, res, next) {
  var username = req.session.name;
  var id = req.session.userid;
  var type = req.session.type;
  res.render('dashboard', { username: username, id: id, type: type})
});

router.get('/messages', function(req, res, next) {
var name = req.session.name;
var id = req.session.userid;
console.log(id);
var type = req.session.type;
if (type == 'client'){
  var receiver_id = 1;
}
else {
  var receiver_id = 2;
}
request('http://postgresapi:3000/getmessage/'+ receiver_id +'/'+ id, function (error, response, body) {
if (!error && response.statusCode == 200) {
  var json = (JSON.parse(body));
    res.render('messages', { id: id, username: name, receiver_id:receiver_id, json:json});
}
})
});


router.get('/documents', function(req, res, next) {
  var name = req.session.name;
  var id = req.session.userid;
    res.render('documents', { id: id, username: name});
});

router.get('/schedule', function(req, res, next) {
  var id = req.session.userid;
  var name = req.session.name;
  var type = req.session.type;
  if (type == 'client'){
    var receiver_id = 1;
  }
  else {
    var receiver_id = 2;
  }
  request('http://postgresapi:3000/getevents/' + id, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var json = (JSON.parse(body));
    var id = json[0]['id'];
    var username = json[0]['username'];
    var type = json[0]['type'];
    res.render('schedule', { id: id, username: name, receiver_id:receiver_id,json:json});
  }
})
});


/*
DON'T NEED - DOES THROUGH SOCKET
router.get('/messages', function(req, res, next) {
var name = req.session.name;
var id = parseInt(req.session.userid);
request('http://postgresapi:3000/getmessage/' + id + '/2', function (error, response, body) {
if (!error && response.statusCode == 200) {
  //var json = (JSON.parse(body));
  //var iddd = json[0]['id'];
  console.log("from app " + body);
  res.render('messages', { id: id, username: name});
}
})
});



router.post('/messages', function(req, res, next) {
var sender_id = 1;
var receiver_id = 2;
var message = "hey there again";
var addmessage = { method: 'POST',
   url: 'http://postgresapi:3000/addmessage',
   headers:
    { 'cache-control': 'no-cache',
      'content-type': 'application/json' },
   body: { receiver_id: receiver_id, message: message, sender_id:sender_id },
   json: true };
request(addmessage, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var json = (JSON.parse(body));
    console.log(body);
    res.send(body);
  }
})
});

*/






module.exports = router;
