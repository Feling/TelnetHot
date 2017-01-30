var express = require('express');
var telnet = require('telnet-client');

var fs = require('fs');
var router = express.Router();

var LogIp = require('../models/log');


router.get('/', function (req, res) {
        LogIp.find()
            .exec(function (err, logs) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                res.status(200).json({
                    message: 'Success',
                    obj: logs
                });
            });
});

router.post('/',function (req, res,next) {
    setInterval(function () {
        var params = {
            host: '67.17.81.28',
            port: 23,
            shellPrompt: '>',
            timeout: 500,
            //   execTimeout: 20000
            // removeEcho: 4
        };
        var IP = req.body.content;

        var connection = new telnet();
        var cmd = `tracerout ${IP}`;
        var regex = /(CON-HOT)/g;
        var matched = [];


        var para = {
            execTimeout: 240000,
        };
        connection.connect(params)
            .then(function (prompt) {
                connection.exec(cmd, para)
                    .then(function (result) {
                        console.log('promises result:', result);
                        fs.writeFile("/tmp/test", result, function (err) {
                            if (err) {
                                return console.log(err);
                            }
                            console.log("The file was saved!");
                        });
                        matched = result.match(regex);
                        console.log(matched);
                        var log = new LogIp({
                            content: result,
                            regexCheck: matched
                        });
                        log.save(function (err, res) {
                            if (err) {
                                console.log('Not saved!')
                            }
                            console.log('Saved!')
                        });
                        connection.end()
                            .then(function (promt) {
                                console.log("Connection ended");
                                connection.destroy();
                            });
                        res.status(200).json({
                            message: 'Success',
                            obj: result
                        });
                    });
            }, function (error) {
                console.log('promises reject:', error)
            });
    });

}, 10000);

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
/* var params = {
    host: '67.17.81.28',
    port: 23,
    shellPrompt: '>',
    timeout: 500,
    execTimeout: 20000
    // removeEcho: 4
};
var IP = '10.0.0.1';

var connection = new telnet();
var cmd = `tracerout ${IP}`;
var regex = /(CON-HOT)/g;
var matched = [];


var para = {
    execTimeout: 240000
};
connection.connect(params)
    .then(function (prompt) {
        connection.exec(cmd, para)
            .then(function (result) {
                console.log('promises result:', result);
                fs.writeFile("/tmp/test", result, function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("The file was saved!");
                });
                matched = result.match(regex);
                console.log(matched);
                var log = new LogIp({
                    content: result,
                    regexCheck: matched
                });
                log.save(function (err, res) {
                    if (err) {
                        console.log('Not saved!')
                    }
                    console.log('Saved!')
                });
                connection.end()
                    .then(function (promt) {
                        console.log("Connection ended");
                        connection.destroy();
                    });
                res.status(200).json({
                    message: 'Success',
                    obj: result
                });
            });
    }, function (error) {
        console.log('promises reject:', error)
    });
*/