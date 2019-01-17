const mongoose = require('mongoose');

/**
 * connecting options
 * sourse service https://mlab.com/databases/<dbname>
 */
const user = 'dbuser1';
const password = 'SRPvP2bER62PhFN';
const server = 'ds157864.mlab.com:57864';
const dbname = 'mylibrary';

/**
 * new db connection
 */
let myDB= `mongodb://${user}:${password}@${server}/${dbname}`;
var connection = mongoose.createConnection(myDB);

module.exports = {
    db: connection
}