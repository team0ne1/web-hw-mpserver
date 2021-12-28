
var userCtl =  require('../controllers/user.ctl');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('server is on. /user');
});

router.post('/login', userCtl.userLogin);
router.post('/register', userCtl.userRegister);


module.exports = router;
