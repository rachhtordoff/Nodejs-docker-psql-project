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
/*

//var db = require('../db/database');/
var coach = new User('sharon','5678', '2', 'client');
var coachusername = coach.getusername();
var coachid = coach.getid();
var coachtype = coach.gettype();
var client = new User('harry','1234', '1', 'coach');
var clientusername = client.getusername();
var clientid = client.getid();
var clienttype = client.gettype();

console.log (coachusername);
console.log (coachid);
console.log (coachtype);
console.log (clientusername);
console.log (clientid);
console.log (clienttype);
*/

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


module.exports = router;
