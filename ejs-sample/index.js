'use strict';

var express = require('express'),
    ejs = require('ejs'),
    app = express();


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//ejs.open = '{{';
//ejs.close = '}}';

var user = [
    {name: 'user1', email: 'user1@nodejs.vn'},
    {name: 'user2', email: 'user2@nodejs.vn'},
    {name: 'user3', email: 'user3@nodejs.vn'}
];

app.get('/users', function(req, res) {
    res.render('user', {
        users: user,
        title: 'Nodejs - Ejs sample',
        header: 'List user'
    });
});


app.listen(8008, function() {
    console.log('Express was running at port 8008');
});
