var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('empadd', { title: 'Products Are Us Employee Add' });
});

router.post('/', function(req, res, next) {
  req.body.createdBy="bdpa_adminscott"; //Put in your own
  req.body.modifiedBy="bdpa_adminscott"; //Put in your own
  //We may need to npm install this...
  const varHttpRequest = 'https://bdpamkedev.com/api/v5/employees';
  fetch(varHttpRequest, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + global.DB_token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)
  })
  .then(response => response.json())
  .then(data => {
    console.log("Message & Data ", data);
    res.render('empadd', { title: 'Employee Add Successful', message: data.message, data: data.data });
  })
  .catch(error => {
    console.error(error);
    res.render('empadd', { title: 'Employee Add Error', message: error.message, data: error.data });
    return "error";
  })
  });

module.exports = router;