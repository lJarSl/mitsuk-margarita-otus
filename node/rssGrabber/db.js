const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const newsSchema = new Schema({
    title:  String,
    link: String
});

/**
 * new db connection
 */
let myDB= 'mongodb://localhost/test';
mongoose.connect(myDB);

/**
 * model
 */
const News = mongoose.model('news', newsSchema);

/**
 * new article
 */
function saveOne(data){
    let line = new News(data);
    line.save().then(() => true)
}

module.exports = {
    saveOne: saveOne
};