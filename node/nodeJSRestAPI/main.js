const rss = require('./rss');
const db = require('./db');

const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');

var app = express();
app.use(compression());
app.use(bodyParser.json())
 
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

// Todo: отображение сохраненных каналов
// db.getAllChannel().then(console.log);

app.post('/saverss', function(req, res, next) {
    res.contentType('json');

    // checking data
    if(typeof req.body.title !== 'string' || req.body.title.length === 0
    || typeof req.body.link !== 'string'  || req.body.link.length === 0) { 
            res.send({ error: 'Parameters are expected not all' });
        }

    // saveing channel data into db
    db.saveChannel({title: req.body.title, link: req.body.link})
    .then(function (data) {
        // handle data
        console.log(`\nrss channel was saved: ${req.body.title} - ${req.body.link}`);
        res.status(201).send({ id: data._id });
    })
    .catch(next);
});

const port = 3000; 
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});



