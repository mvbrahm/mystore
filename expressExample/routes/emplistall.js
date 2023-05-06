var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    const httpRequest = require('http'); //This may end up being https in other situations

    const options = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + global.DB_token,
        'content-type': 'application/json'
      }};
    //Authorization header will need to be updated
    
    const request = httpRequest.request('http://bdpamkedev.com/api/v5/employees/?pageNo=1&pageSize=100', options, response => {
      console.log('Status', response.statusCode);
      //console.log('Headers', response.headers);
      let responseData = '';
    
      response.on('data', dataChunk => {
        responseData += dataChunk;
      });
      response.on('end', () => {
        let responseParsed=JSON.parse(responseData);
        let responseArray=responseParsed.records;
        //console.log('Response: ', responseArray); //debugging code to test
        res.render('emplistall', { title: 'Products R Us Employee List' , resultarray: responseArray});
      });
    });
    request.on('error', error => console.log('ERROR', error));
    request.end();
});

module.exports = router;
