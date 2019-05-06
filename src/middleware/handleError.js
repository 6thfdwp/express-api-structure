const debug = require('debug')('fgl:middleware:error');

const GenericError = require('../errors/GenericError');
const logger = require('../utils/logger');

const handleErrors = (err, req, res, next) => {
  const { info } = req.body;
  // duck-type checking if it is our defined custom error or from other part of system
  if (!err.output) {
    err = new GenericError.Internal(4, err.message);
  }

  debug('catch error: %s', err.name);
  const { requestid, sourceid, udid } = req.body.info;
  logger.error(err, req.originalUrl, { requestid, sourceid, udid });
  // this will pass to Express built in error handler
  // next(err);
  const { httpStatus, payload } = err.output;
  res.status(httpStatus).json({
    info: {
      // udid: info.udid,
      ...payload
    }
  });
};

module.exports = handleErrors;
