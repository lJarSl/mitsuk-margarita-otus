const chalk = require('chalk');

function error(data){
    if (typeof data === 'object') {
        data = JSON.stringify(data);
    }
    data = chalk.red(data);
    console.log(data);
}

function debug(data) {
    if (typeof data === 'object') {
        data = JSON.stringify(data);
    }
    data = chalk.cyan(data);
    console.log(data);
}

module.exports = {
    error: error,
    debug: debug
}; 