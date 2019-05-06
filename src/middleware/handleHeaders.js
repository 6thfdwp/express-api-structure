const debug = require('debug')('fgl:middleware:header');

const logger = require('../utils/logger');
const GenericError = require('../errors/GenericError');

const handleHeaders = (req, res, next) => {
  const token = req.header('token');
  const sourceid = req.header('sourceId');
  const requestid = req.header('requestId');

  req.body.info = req.body.info || {};
  Object.assign(req.body.info, { requestid, sourceid });
  logger.info({ requestid, sourceid, udid: req.body.info.udid, path: req.originalUrl });

  // some fake validation
  // if (token !== '12345') {
  //   // next(new Error(1, 'Can not process your request'));
  //   debug('invalid request');
  //   throw new GenericError.InvalidRequest();
  // }

  // attach simple method for unified response format that will be used
  // by subsequent route handler try to produce happy result
  res.success = result => {
    const { udid } = req.body.info;
    return { info: { udid, status_code: 0 }, data: result };
  };

  debug('pass request validation');
  next();
};

module.exports = handleHeaders;
