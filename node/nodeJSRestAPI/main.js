const server = require('./core/express');
const routes = require('./core/routes');

const port = 3000;
server.startOnPort(port);

routes.initForApp(server.app);