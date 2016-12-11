var express = require('express');
var router = express.Router();
var User = require('../classes/userclass').User;

var user = new User('harry','1234', '1', 'coach');
var create = user.create();

console.log(user);
console.log (create);

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('coaches', { username: user.username });
});

const users = []

router.post('/users', function (req, res) {
    // retrieve user posted data from the body
    const user = req.body
    users.push({
      name: user.username
    })
    res.send('successfully registered')
})

module.exports = router;
