const mongoose = require('mongoose');
var Schema = mongoose.Schema;
 const channelsSchema = new Schema({
     // Todo: id - человеческая инкрементация
    title:  String,
    link: String
});
 /**
 * new db connection
 */
let myDB= 'mongodb://localhost/rss';
mongoose.connect(myDB);
 /**
 * model
 */
const Channel = mongoose.model('links', channelsSchema);
 /**
 * new article
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