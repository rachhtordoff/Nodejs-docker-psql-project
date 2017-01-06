var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json({ type: 'application/json' }));
var User = require('../classes/userclass').User;
var db = require('../db/database');

var coachuser = new User(1, "Sharon","password", "030993", "coach", 0);
var clientuser = new User(2, 'harry','password', '030993', 'client', 1);
var clientuser2 = new User(3, 'Sarah','password', '030993', 'client', 1);

var json = coachuser;
var json2 = clientuser;
var json3 = clientuser2;

 db.addUser(json.userid, json.username, json.password, json.dob, json.type, json.relationid);
 db.addUser(json2.userid, json2.username, json2.password, json2.dob, json2.type, json2.relationid);
 db.addUser(json3.userid, json3.username, json3.password, json3.dob, json3.type, json3.relationid);

router.get('/health', function(res) {
console.log("hello");
});


router.get('/:type', function(req, res, next) {
  var type = req.params.type;
  db.getUser(type)
  .then(function(data) { console.log(data);
    res.send(data); })
  .catch(function(err) { res.status(500).send(err) })
});

router.post('/add', function(req, res, next) {
 db.addUser(3, "Sarah", "password", '030993', 'client', 1);
 res.send("success");
 });

router.get('/get', function(req, res, next) {
  db.getAllUsers()
  .then(function(data) { console.log(data);
    res.send(data); })
  .catch(function(err) { res.status(500).send(err) })
});

router.get('/getmessagecount/:id', function(req, res, next) {
  var id =(req.params.id);
  db.getmessagecount(id)
  .then(function(data) { console.log(data);
    res.send(data); })
  .catch(function(err) { res.status(500).send(err) })
});


router.post('/addmessage', function(req, res, next) {
  var receiver_id = (req.body.receiver_id);
  var sender_id = (req.body.sender_id);
  var message = (req.body.message);
  db.addmessage(message, receiver_id, sender_id);
  res.send("success");
});


router.get('/getmessage/:sender_id/:receiver_id', function(req, res, next) {
  var sender_id =(req.params.sender_id);
  var receiver_id = (req.params.receiver_id);
  console.log(receiver_id);
  console.log(sender_id);
  db.getMessages(sender_id, receiver_id)
  .then(function(data) { console.log(data);
    res.send(data); })
  .catch(function(err) { res.status(500).send(err) })
});


module.exports = router;
