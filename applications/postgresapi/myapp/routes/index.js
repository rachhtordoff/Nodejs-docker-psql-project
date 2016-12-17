var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json({ type: 'application/json' }));
var User = require('../classes/userclass').User;
var db = require('../db/database');


router.get('/:type', function(req, res, next) {
  var type = req.params.type;
  db.getUser(type)
  .then(function(data) { console.log(data);
    res.send(data); })
  .catch(function(err) { res.status(500).send(err) })
});

router.post('/add', function(req, res, next) {
 db.addUser(2, "Harry", "password", '030993', 'client')
 .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one puppy'
        })
})
});


router.get('/get', function(req, res, next) {
  db.getAllUsers()
  .then(function(data) { console.log(data);
    res.send(data); })
  .catch(function(err) { res.status(500).send(err) })
});

router.post('/addmessage', function(req, res, next) {
  var user_id = (req.body.user_id);
  var message = (req.body.message);
  db.addmessage(message, user_id);

 //.then(function () {
  //    res.send("success");
//})
});


router.get('/getmessages/:user_id', function(req, res, next) {
  var user_id = req.params.user_id;
  db.getMessages(user_id)
  .then(function(data) { console.log(data);
    res.send(data); })
  .catch(function(err) { res.status(500).send(err) })
});


module.exports = router;
