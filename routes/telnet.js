var express = require('express');
var telnet = require('telnet-client');

var fs = require('fs');
var router = express.Router();



var connection = new telnet();
var cmd = 'tracerout  10.0.0.1';
var regex = /(CON-HOT)/g;
var match =  [];

var params = {
    host: '67.17.81.28',
    port: 23,
    shellPrompt: '>',
    timeout: 6000
    // removeEcho: 4
};
var para = {
    execTimeout: 240000
};

connection.connect(params)
    .then(function(prompt) {
        connection.exec(cmd,para)
            .then(function(res) {
                console.log('promises result:', res);
                fs.writeFile("/tmp/test", res, function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("The first file was saved!");
                    match = res.match(regex);
                    console.log(match);
                });
            });
    }, function(error) {
        console.log('promises reject:', error)
    });




module.exports = router;


/*
 connection.on('ready', function(prompt) {
 connection.exec(cmd, function (err, response) {
 console.log(response);
 fs.writeFile("/tmp/test", response, function (err) {
 if (err) {
 return console.log(err);
 }
 console.log("The first file was saved!");
 });

 });

 });
 connection.on('timeout', function() {
 console.log('socket timeout!')
 connection.end();
 });

 connection.on('close', function() {
 console.log('connection closed');
 });

 connection.connect(params);
 */