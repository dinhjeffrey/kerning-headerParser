'use strict';
var express = require('express');


module.exports = function(app) {
    app.post('/whoami', function (req, res) {
    // need access to IP address here
        req.headers['x-forwarded-for']
        console.log(req.headers['x-forwarded-for'])
    })
}