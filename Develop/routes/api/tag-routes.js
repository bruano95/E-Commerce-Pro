const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  const tagsData = await Tag.findAll({
    include: {
      model: Product,
      through: ProductTag,
      as: 'products'
    }
  })
  res.status(200).json(tagsData)
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  const tagByid = await Tag.findByPk(req.params.id, {
    include: {
      model: Product,
      through: ProductTag,
      as: 'products'
    }
  })
  res.status(200).json(tagByid)
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  const tagData = await Tag.create(req.body)
  if (tagData) {
    res.status(200).json(tagData)
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
  const tagData = await Tag.update (req.body, {
    where: {
      id: req.params.id,
    }
  })
  res.status(200).json(tagData)
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  const tagData = await Tag.destroy ({
    where: {
      id: req.params.id
    }
  })
  res.status(200).json(tagData)
  // delete on tag by its `id` value
});

module.exports = router;
