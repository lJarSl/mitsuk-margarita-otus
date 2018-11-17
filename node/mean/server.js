let Parser = require('rss-parser');
let parser = new Parser();

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

(async () => {
 
    let feed = await parser.parseURL('https://www.sports.ru/stat/export/rss/taglenta.xml?id=1044514');
    console.log(feed.title);
   
    feed.items.forEach(item => {
      console.log(item.title + ':' + item.link)
    });
   
  })();



const Cat = mongoose.model('Cat', {name: String})
const kitty = new Cat({name: 'Zildjian'});
kitty.save().then(() => console.log('meow'))
