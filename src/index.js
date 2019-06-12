// load configuration into env variables
require('dotenv').config();

const server = require('./server');

server.run();
