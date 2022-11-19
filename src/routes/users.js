var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({test: 'respond with a resource', v: 2});
});

module.exports = router;
