var express = require('express');
var router = express.Router();

var api_functions = require('../public/javascripts/api_functions');
// set the token value when the app starts up
if ( typeof global.DB_token === 'undefined') {
    api_functions.data.db_sign_in();   
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Products Are Us Home' });
});

module.exports = router;
