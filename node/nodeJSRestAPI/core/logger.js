const chalk = require('chalk');

function error(data, status){
    data = chalk.red(data);
    console.log(data);
}

function debug(data, status) {
    data = chalk.cyan(data);
    console.log(data);
}

module.exports = {
    error: error,
    debug: debug
}; 