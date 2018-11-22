let Parser = require('rss-parser');
let parser = new Parser();
 async function getFromUrl(url){
    let resulte = await parser.parseURL(url); 
    return resulte;
}
 module.exports = {
    getFromUrl: getFromUrl
}; 