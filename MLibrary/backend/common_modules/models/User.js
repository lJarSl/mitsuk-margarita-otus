const mongoose = require('mongoose');
const db = require('./../db').db;
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(db);

/**
 * Schema
 */
var Schema = mongoose.Schema;

const usersSchema = new Schema({
    login: { type: String, unique: true },
    name: String,
    lastname: String,
    password: String,
    email: String,
    birthday: Date
});

/**
 * autoIncrement use
 */
usersSchema.plugin(autoIncrement.plugin, {
    model: 'Users',
    field: '_id',
    startAt: 1,
    incrementBy: 1
});

const User = db.model('Users', usersSchema);

module.exports = {
    User: User
}; 




