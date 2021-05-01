const express = require('express');
const slugify = require('slugify');
const { addCategory, getCategories } = require('../controller/category');
const Category = require('../models/category')
const router = express.Router();

router.post('/category/create',addCategory);
router.get('/category/getcategory', getCategories );
module.exports = router;