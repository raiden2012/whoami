var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
    var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;

    var language = req.headers["accept-language"].match(/(.*?),/)[1];
    var os = req.headers['user-agent'].match(/\(([^\)]+)\)/)[1];
    var ans = {ipaddress: ip, language: language, software: os};
    res.json(ans);
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


