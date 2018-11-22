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
 const channelsSchema = new Schema({
    title: String,
    link: String
});

/**
 * autoIncrement use
 */
channelsSchema.plugin(autoIncrement.plugin, {
    model: 'Channel',
    field: '_id',
    startAt: 1,
    incrementBy: 999999999999
});

/**
 * model
 */
const Channel = connection.model('Channel', channelsSchema);


/**
 * new rss link
 * @param {Promice}  
 */
function saveChannel(data){
    let line = new Channel(data);
    // Todo: проверка на наличие такой записи
    return line.save();
}

function getAllChannel() {
    return Channel.find();
}

module.exports = {
    saveChannel: saveChannel,
    getAllChannel: getAllChannel
}; 