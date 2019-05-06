const express = require('express');

const router = express.Router();

const popularList = [
  {
    category_id: 1,
    name: 'Bakery',
    has_subcategories: true
  },
  {
    category_id: 2,
    name: 'Long Life',
    has_subcategories: false
  },
  {
    category_id: 3,
    name: 'Diary',
    has_subcategories: true
  }
];

const listById = [
  {
    category_id: 1,
    name: 'Bakery',
    has_subcategories: true
  },
  {
    category_id: 2,
    name: 'Long Life',
    has_subcategories: false
  }
];

router.post('/get-popular-category-list', (req, res) => {
  const { industry, brand, suburb } = req.body.store_locations[0];
  // get category around these locations
  res.status(200).json(res.success({ brand, suburb, popularList }));
});

router.post('/get-all-category-list', (req, res) => {
  const { industry, brand, suburb } = req.body.store_locations[0];
  res.status(200).json(res.success({ brand, suburb, listById }));
});

module.exports = router;
