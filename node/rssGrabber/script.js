const db = require('./db');
const rss = require('./rss');
const channelLink = 'https://cyber.sports.ru/rss/all_news.xml';

rss.getFromUrl(channelLink)
    .then(news => {
        news.items.forEach(item => {
            db.saveOne({title: item.title, link: item.link})
            .then(function(e){
                console.log('success saving into db !');
            })
            .catch(function(e){
                console.log('saving into db failed!');
                console.log(e);
            })
        });
    });