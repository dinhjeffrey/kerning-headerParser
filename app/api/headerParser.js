'use strict';
var express = require('express');
var os = require('os');


module.exports = function(app) {
    app.get('/whoami', function (req, res) {
    // need access to IP address here
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        var lang = req.headers["accept-language"]
        lang = lang.slice(0, lang.indexOf(','))
        var opSystem = os.platform() + "; " + os.release(); //'10.8.0'
        var opSystem2 = req.headers['user-agent']
        var userInfo = { "IP Address": ip, "Language": lang, "Operating System": opSystem, "Operating System2": opSystem2 }
            res.send(JSON.stringify(userInfo))
        })
}