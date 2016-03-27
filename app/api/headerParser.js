'use strict';
var express = require('express');
var os = require('os');


module.exports = function(app) {
    app.get('/whoami', function (req, res) {
    // need access to IP address here
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        var lang = req.headers["accept-language"]
        var opSystem = os.platform() + "; " + os.release(); //'10.8.0'
        res.send(JSON.stringify('IP Address: ' + ip'\n''Language: '+ lang'\n''Operating System: ' + opSystem))
    })
}