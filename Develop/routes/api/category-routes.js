const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const categoryData = await Category.findAll({
    include: {
      model: Product,
      as: 'products'
    }
  })
});

router.get('/:id', async (req, res) => {
  const categoryByid = await Category.findByPk(req.params.id, {
    include: {
      model: Product,
      as: 'products'
    }
  })
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
