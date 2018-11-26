const rss = require('./rss');
const db = require('./db');

const actions = {

    getChannel (req, res) {
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
    }, 

    saveChannel (req, res, next) {
        // checking data
        if(typeof req.body.title !== 'string' || req.body.title.length === 0
        || typeof req.body.link !== 'string'  || req.body.link.length === 0) { 
            res.status(422).send({ error: 'Parameters are expected not all' });
            return;
        }
        let articles;
        rss.getFromUrl(req.body.link)
        .then(r => {
            if(typeof r.items !== 'object' || typeof r.items.length !== 'number'){
                res.status(200).send({ error: 'bad rss channel =(' });
                return false;
            }
            articles = r.items;
    
            return db.saveChannel({
                title: req.body.title,
                link: req.body.link
            })
        })
        .then(function(data){
            if(typeof data._id !== 'number'){
                res.status(200).send({ error: 'saving rss channel fail' });
                return false;
            }
            [].forEach.call(articles, el => {
                let preparedData = {
                    title: el.title,
                    link: el.link,
                    channelId: data._id
                }
                db.saveArticle(preparedData)
            });
    
        })
        // .then(function (data) {
        //     // handle data
        //     console.log(`\nrss channel was saved: ${req.body.title} - ${req.body.link}`);
        //     res.status(201).send({ id: data._id });
        // })
        .catch(function(e){
            console.log(e);
            res.status(418).send({ error: e });
            return;
        });
    },

    getArticles (req, res) {
        db.getAllArticlesByChannelId(req.params.id)
        .then(function (data) {
            // handle data
            console.log(`\n get all rss articles`);
            res.status(200).send({data: data});
        })
        .catch(function(e){
            console.log(e);
            res.status(418).send({ error: e });
            return;
        });
    }
}

function init(app){
    app.get('/channels', actions.getChannel);
    app.post('/channel/save', actions.saveChannel);
    app.get('/channel/:id/articles', actions.getArticles);
}

module.exports = {
    initForApp: init
}; 