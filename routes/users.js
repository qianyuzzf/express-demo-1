var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is users.js');
});
router.get('/xxx', function(req, res, next) {
  res.send('this is users.js and router is xxx');
});

module.exports = router;
