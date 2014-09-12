'use strict';

var express = require('express'),
    app = express(),
    cookieSession = require('cookie-session');

app.use(cookieSession({ 
    name: 'Cookie session 1',
    secret: 'manny is cool',
    expires: new Date("July 21, 2018 01:15:00")
//    domain: 'localhost',
//    path: '/home.html'
    // maxage: 5000,
}));


// do something with the session
app.use(count);
// custom middleware

function count(req, res) {
    req.session.count = req.session.count || 0;
    var n = req.session.count++;
    res.send('viewed ' + n + ' times\n');
}




app.listen(8008, function() {
    console.log('Express was running at port 8008');
});
