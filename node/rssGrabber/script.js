let RssParser = require('rss-parser');
let mongo = require('mongoose');
let rssParser = new RssParser();
 
(async () => {
 
  let feed = await rssParser.parseURL('https://cyber.sports.ru/rss/all_news.xml');
  console.log(feed.title);
 
  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link+'\n\n')
  });
 
})();


    