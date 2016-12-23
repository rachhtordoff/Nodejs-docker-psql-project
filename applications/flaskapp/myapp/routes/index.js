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
    var type = json[0]['type'];
    req.session.type = type;
    console.log(type);
    console.log(username);
    console.log("id is" + id);
    console.log(json);
    req.session.name = username;
    req.session.userid = id;
    res.render('clients', { username: username, id: id});
  }
})
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
  res.render('messages', { id: id, username: name, receiver_id:receiver_id});
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
