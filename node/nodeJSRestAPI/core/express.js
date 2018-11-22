const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');

var app = express();
app.use(compression());
app.use(bodyParser.json());

app.use('/', express.static('view'));

const port = 3000; 
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});

module.exports = {
    app: app
}; 