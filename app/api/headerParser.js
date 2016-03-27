'use strict';
var os = require('os');


module.exports = function(app) {
    app.post('/whoami', function (req, res) {
    // need access to IP address here
    return req.connection.remoteAddress
    })
}