const app = require('./core/express').app;
const rss = require('./core/rss');
const db = require('./core/db');

app.get('/channel/get', function(req, res) {
    console.log('getallrss');
    db.getAllChannel()
    .then(function (data) {
        // handle data
        console.log(`\n get all rss channels`);
        res.status(200).send(data);
    })
    .catch(function(e){
        console.log(e);
        res.status(418).send({ error: e });
        return;
    });
})

app.get('/articles/get/:id', function (req, res) {
    console.log('getallarticles');
    db.getAllArticlesByChannelId(req.params.id)
    .then(function (data) {
        // handle data
        console.log(`\n get all rss articles`);
        res.status(200).send({data: data[0].articles});
    })
    .catch(function(e){
        console.log(e);
        res.status(418).send({ error: e });
        return;
    });
});

app.post('/channel/save', function(req, res, next) {
    // checking data
    if(typeof req.body.title !== 'string' || req.body.title.length === 0
    || typeof req.body.link !== 'string'  || req.body.link.length === 0) { 
        res.status(422).send({ error: 'Parameters are expected not all' });
        return;
    }
    rss.getFromUrl(req.body.link)
    .then(r => {
        return db.saveChannel({
            title: req.body.title,
            link: req.body.link,
            articles: r.items
        })
    })
    .then(function (data) {
        // handle data
        console.log(`\nrss channel was saved: ${req.body.title} - ${req.body.link}`);
        res.status(201).send({ id: data._id });
    })
    .catch(function(e){
        console.log(e);
        res.status(418).send({ error: e });
        return;
    });
});