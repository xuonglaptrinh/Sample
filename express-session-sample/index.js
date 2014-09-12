'use strict';

var express = require('express');
var session = require('express-session');

var app = express();

// using middleware express-session.
app.use(session({
    name: 'express-session-name',
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'secret-key',
    cookie: {
        httpOnly: true
//        maxAge: 5000
    }
}));

// After using middleware, you can access session variable through req.session.

app.get('/', function(req, res){
    var body = '';
    if (req.session.views) {
        ++req.session.views; //increase views variable.
    } else {
        req.session.views = 1;
        body += '<p>First time visiting? view this page in several browsers :)</p>';
    }
    res.send(body + '<p>viewed <strong>' + req.session.views + '</strong> times.</p>');
});

app.listen(8008, function() {
    console.log('Express started at port 8008');
});

