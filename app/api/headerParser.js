'use strict';
var express = require('express');


module.exports = function(app) {
    app.get('/', function (req, res) {
    // need access to IP address here
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    })
}