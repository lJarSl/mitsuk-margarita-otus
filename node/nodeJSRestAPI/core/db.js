const mongoose = require('mongoose');

/**
 * new db connection
 */
let myDB= 'mongodb://localhost/rss';
var connection = mongoose.createConnection(myDB);

/**
 * autoIncrement initialization
 */
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(connection);

/**
 * Schema
 */
var Schema = mongoose.Schema;

const articlesSchema = new Schema({
    title: String,
    link: { type: String, unique: true }
});

 const channelsSchema = new Schema({
    title: String,
    link: { type: String, unique: true },
    articles: [articlesSchema]
});

/**
 * autoIncrement use
 */
articlesSchema.plugin(autoIncrement.plugin, {
    model: 'Articles',
    field: '_id',
    startAt: 1,
    incrementBy: 1
});
channelsSchema.plugin(autoIncrement.plugin, {
    model: 'Channel',
    field: '_id',
    startAt: 1,
    incrementBy: 1
});

/**
 * Channel model
 */
const Channel = connection.model('Channel', channelsSchema);

/**
 * new rss link
 * @param {Promice<object>}  
 */
function saveChannel(data){
    let line = new Channel(data);
    // Todo: проверка на наличие такой записи
    return line.save();
}

/**
 * get all rss links
 * @param {Promice<object>}  
 */
function getAllChannel() {
    return Channel.find();
}

/**
 * get All Articles By ChannelId
 * @param {*} channel_id 
 */
function getAllArticlesByChannelId(channel_id) {
    return Channel.find({_id: channel_id});
}


module.exports = {
    saveChannel: saveChannel,
    getAllChannel: getAllChannel,
    getAllArticlesByChannelId: getAllArticlesByChannelId
}; 