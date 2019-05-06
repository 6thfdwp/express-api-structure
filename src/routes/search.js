const express = require('express');

const forwardAsyncError = require('../middleware/forwardAsyncError');
const { SearchService } = require('../services');
// const SearchService = require('../services/SearchService');
// define sub-routing for search epic
const router = express.Router();

const handleSearch = async (req, res) => {
  const { info, data } = req.body;

  const hits = await SearchService.find();
  res.status(200).json(res.success({ hits }));
};

router.post('/', forwardAsyncError(handleSearch));

module.exports = router;
