const debug = require('debug')('fgl:route');

module.exports = routeHandler => (req, res, next) => {
  debug('invoking handler for url: %s', req.originalUrl);
  routeHandler(req, res)
    .then(() => debug('writing into response for url: %s', req.originalUrl))
    .catch(next);
};
