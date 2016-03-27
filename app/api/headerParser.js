'use strict';
var os = require('os');


module.exports = function(app) {
    app.post('/whoami', function (req, res) {
    // need access to IP address here
        req.headers['x-forwarded-for']
    })
}