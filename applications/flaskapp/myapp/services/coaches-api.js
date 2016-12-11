var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json({ type: 'application/json' }));


router.get('/get/:id', function(req, res, next) {
  var id = parseInt(req.params.id);
  console.log(id);
  db.getUser(id)
  .then(function(data) { res.send(data); })
  .catch(function(err) { res.status(500).send(err) })
});
