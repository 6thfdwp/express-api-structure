const express = require('express');
const bodyParser = require('body-parser');

const Config = require('./Config');
const handleHeaders = require('./middleware/handleHeaders');
const handleError = require('./middleware/handleError');
const routes = require('./routes');

const server = express();
// common middleware to parse request json body to object
// for application/json
server.use(bodyParser.json());

// custom middlewares to handle common logic before hitting route handler
server.use(handleHeaders);
server.use(routes);

// custom error handler middleware to produce unified error message
server.use(handleError);

module.exports = {
  run: () => {
    server.listen(Config.port, () => {
      console.log(`api server running on ${Config.port}`);
    });
  }
};
