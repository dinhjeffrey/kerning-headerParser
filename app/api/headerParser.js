'use strict';
var express = require('express');
var os = require('os');


module.exports = function(app) {
    app.get('/whoami', function (req, res) {
    // need access to IP address here
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        var lang = req.headers["accept-language"]
        lang = lang.slice(0, lang.indexOf(','))
        var opSystem = req.headers['user-agent']
        opSystem = opSystem.slice(opSystem.indexOf('(') + 1, opSystem.indexOf(')'))
        var userInfo = { "IP Address": ip, "Language": lang, "Operating System": opSystem }
            res.send(JSON.stringify(userInfo))
        })
}