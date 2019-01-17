const server = require('./common_modules/express');
const routes = require('./common_modules/routes');

const port = 3000;
server.startOnPort(port);

routes.initForApp(server.app);