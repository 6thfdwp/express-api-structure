const express = require('express');

// define sub-routing for product detail service
const router = express.Router();

router.get('/:id', (req, res) => {
  const prodId = req.params.id;
  if (prodId !== 'xxx') {
    throw new Error('Not valid product');
  }
  res.status(200).json(res.success({ product: { id: req.params.id } }));
});

const handleProductByCategory = () => {};
router.post('/get-product-list', handleProductByCategory);

module.exports = router;
