const rss = require('./rss'),
      db = require('./db'),
      logger = require('./logger');

const actions = {

    getChannel (req, res) {
        db.getAllChannel()
        .then(function (data) {
            logger.debug('Get all rss channels');
            res.send(data);
        })
        .catch(function(errorText){
            logger.error(errorText);
            res.status(418).send({ error: errorText });
            return;
        });
    }, 

    saveChannel (req, res, next) {
        // checking data
        if(typeof req.body.title !== 'string' || req.body.title.length === 0
        || typeof req.body.link !== 'string'  || req.body.link.length === 0) {
            let errorText = 'Parameters are expected not all';
            logger.error(errorText);
            res.status(422).send({ error: errorText });
            return;
        }
        let articles, channelId;
        rss.getFromUrl(req.body.link)
        .then(r => {
            if(typeof r.items !== 'object' || typeof r.items.length !== 'number'){
                let errorText = 'Bad rss channel =(';
                logger.error(errorText);
                res.send({ error: errorText });
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
                let errorText = 'Saving rss channel fail';
                logger.error(errorText);
                res.send({ error: errorText });
                return false;
            }
            channelId = data._id;
            let promiceArr = [];
            articles.map(el => {
                let preparedData = {
                    title: el.title,
                    link: el.link,
                    channelId: data._id
                }
                promiceArr[promiceArr.length] = db.saveArticle(preparedData);
            });
            return Promise.all(promiceArr)
        })
        .then(function (data) {
            // handle data
            logger.debug(`\nrss channel was saved: ${req.body.title} - ${req.body.link}`);
            res.status(201).send({ channelId: channelId });
        })
        .catch(function(errorText){
            logger.error(errorText);
            res.status(418).send({ error: errorText });
            return;
        });
    },

    getArticles (req, res) {
        db.getAllArticlesByChannelId(req.params.id)
        .then(function (data) {
            let errorText = 'Get all rss articles';
            logger.debug(errorText);
            res.send({data: data});
        })
        .catch(function(errorText){
            logger.error(errorText);
            res.status(418).send({ error: errorText });
            return;
        });
    }
}

function init(app){
    app.get('/channels', actions.getChannel);
    app.post('/channels', actions.saveChannel);
    app.get('/channel/:id/articles', actions.getArticles);
}

module.exports = {
    initForApp: init
}; 