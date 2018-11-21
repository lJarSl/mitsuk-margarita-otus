/* DB */
const db = require('./db');
const rss = require('./rss');
const channelLink = 'https://cyber.sports.ru/rss/all_news.xml';

rss.getFromUrl(channelLink)
    .then(news => {
        news.items.forEach(item => {
            db.saveOne({title: item.title, link: item.link});
        });
        console.log('rss was saved into db !');
    });

