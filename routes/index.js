var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user: req.user , title: 'Deals'});
});

module.exports = router;