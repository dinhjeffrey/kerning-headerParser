'use strict';
var express = require('express');
var os = require('os');


module.exports = function(app) {
    app.get('/whoami', function (req, res) {
    // need access to IP address here
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        var lang = req.headers["accept-language"]
        var langParseIndexSemi = lang.indexOf(';');
        var langParseIndexComma = lang.indexOf(',');
        if (langParseIndexSemi < langParseIndexComma) {
            lang = lang.slice(0,langParseIndexSemi)
        } else {
            lang = lang.slice(0,langParseIndexComma)
        }
        var opSystem = os.platform() + "; " + os.release(); //'10.8.0'
        var userInfo = { "IP Address": ip, "Language": lang, "Operating System": opSystem }
            res.send(JSON.stringify(userInfo))
        })
}