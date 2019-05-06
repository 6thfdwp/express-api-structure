const debug = require('debug')('fgl:middleware:storebody');

const GenericError = require('../errors/GenericError');

const validateStoreBody = (req, res, next) => {
  const locs = req.body.store_locations;
  if (!Array.isArray(locs) || !locs.length) {
    throw new GenericError.LocationRequired();
  }
  // locs[0].type || locs[0].brand || locs[]
  next();
};

module.exports = validateStoreBody;
