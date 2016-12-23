var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json({ type: 'application/json' }));
var User = require('../classes/userclass').User;
var db = require('../db/database');


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
