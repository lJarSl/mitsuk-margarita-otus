const express = require('express'),
      compression = require('compression'),
      bodyParser = require('body-parser'),
      logger = require('./logger'),
      upload = require('express-fileupload');

let app = express();
app.use(compression()); // Todo: compression settings
app.use(bodyParser.json());
app.use(upload());

//app.use('/', express.static('view'));

/**
 * Start express listener
 * Default port has value 3000
 * @param {*} port 
 */
function startServer(port){
    port = port || 3000; 
    app.listen(port, function () {
        logger.debug(`App listening on port ${port}!`);
    });
}

module.exports = {
    app: app,
    startOnPort: startServer
}; 