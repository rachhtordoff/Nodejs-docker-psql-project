var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json({ type: 'application/json' }));

var db = require('../db/database');

router.get('/', function(req, res, next) {
 db.getAllUsers()
 .then(function(data) { res.send(data); })
 .catch(function(err) { res.status(500).send(err) })
});

router.post('/add', function(req, res, next) {
 db.addUser(8, "peter", "password", 23)
 .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one puppy'
        })
})
});

router.get('/get/:id', function(req, res, next) {
  var id = parseInt(req.params.id);
  console.log(id);
  db.getUser(id)
  .then(function(data) { console.log(data);
    res.send(data); })
  .catch(function(err) { res.status(500).send(err) })
});


module.exports = router;
