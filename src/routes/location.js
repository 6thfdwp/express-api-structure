const express = require('express');

const forwardAsyncError = require('../middleware/forwardAsyncError');
const { LocationService } = require('../services');

const router = express.Router();

const handleGetStoreList = async (req, res) => {
  const { data: options } = req.body;
  // const { last_modified, stores } = await LocationService.getStoreLocations(options);
  const result = await LocationService.getStoreLocations(options);
  if (!result.store_locations.length) {
    status_code = 462;
  }
  res.status(200).json(res.success(result));
};

router.post('/get-store-location-list', forwardAsyncError(handleGetStoreList));

module.exports = router;
