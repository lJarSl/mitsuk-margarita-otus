const mongoose = require('mongoose');
const db = require('./../db').db;
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(db);

/**
 * Schema
 */
var Schema = mongoose.Schema;

 const booksSchema = new Schema({
    title: String,
    author: String,
    date_writed: String,
    desctiption: String,
    state: {type: Number, default: 0},
    date_added: {type: Date, default: new Date}
});

/**
 * autoIncrement use
 */
booksSchema.plugin(autoIncrement.plugin, {
    model: 'Books',
    field: '_id',
    startAt: 1,
    incrementBy: 1
});

const Book = db.model('Books', booksSchema);

module.exports = {
    Book: Book
}; 




