const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  const categoryData = await Category.findAll({
    include: {
      model: Product,
      as: 'products'
    }
  })
  res.status(200).json(categoryData)
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  const categoryByid = await Category.findByPk(req.params.id, {
    include: {
      model: Product,
      as: 'category_id'
    }
  })
  res.status(200).json(categoryByid)
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  const newCategory = await Category.create(req.body);
  if (newCategory){
    res.status(200).json(newCategory)
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  const updateCategory = await Category.update(req.body, {
    where: {
      id: req.params.id,
    }
  });
  res.status(200).json(updateCategory)
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  const deleteCategory = await Category.destroy({
    where: {
      id: req.params.id,
    }
  })
  res.status(200).json(deleteCategory)
  // delete a category by its `id` value
});

module.exports = router;
