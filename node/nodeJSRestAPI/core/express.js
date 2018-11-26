const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');

var app = express();
app.use(compression());
app.use(bodyParser.json());

app.use('/', express.static('view'));

/**
 * Start express listener
 * Default port has value 3000
 * @param {*} port 
 */
function startServer(port){
    port = port || 3000; 
    app.listen(port, function () {
        console.log('App listening on port ' + port + '!');
    });
}

module.exports = {
    app: app,
    startOnPort: startServer
}; 