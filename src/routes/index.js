const express = require('express');

const validateStoreBody = require('../middleware/validateStoreBody');
const Config = require('../Config');
const category = require('./category');
const location = require('./location');
const search = require('./search');
const product = require('./product');

const router = express.Router();
const target = Config.deployTarget;
const prefix = `/${target}/api/v1`;

router.use(`${prefix}/category`, validateStoreBody, category);
router.use(`${prefix}/location`, location);
router.use(`${prefix}/search`, validateStoreBody, search);
router.use(`${prefix}/product`, product);

module.exports = router;
