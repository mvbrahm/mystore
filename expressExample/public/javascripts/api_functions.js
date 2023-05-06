var express = require('express');
//var emp = require('request');
//var router = express.Router();
var fetch = require('node-fetch'); //npm i node-fetch@2.6.1 works best at the moment
var cred = {
    "username": "INSERT YOUR USERNAME HERE",
    "password": "INSERT YOUR PASSWORD HERE"
};
global.db_token_ip="bdpamkedev.com" //Hard coded address since environment variables aren't set
//console.log("RESTAPI IP being used ", process.env.restapi);
//global.db_token_ip = process.env.restapi.trim();

var methods = {
    db_sign_in: function () {
        var dbtoken = 'http://' + global.db_token_ip + '/api/v5/token'; //Update
        const result = fetch(dbtoken, (
            dbtoken, {
                method: 'POST',
                mode: 'cors', // no-cors, *cors, same-origin
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cred)
            }))
            .then((response) => response.json())
            .then((data) => {
                console.log('Success retrieved token:', data); //Debugging to confirm success
                global.DB_token = data.access_token;
                console.log('global:', global.DB_token); //Debugging to confirm success
            })
            .catch((error) => {
                console.error('Error:', error); //Debugging to find errors
            })
    }};

exports.data = methods;