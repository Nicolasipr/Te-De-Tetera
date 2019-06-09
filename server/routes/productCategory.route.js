const express = require('express');
const router = express.Router();

const productCategory_controller = require('../controllers/productsCategory.controller');

router.get('/test', productCategory_controller.test);

router.get('/:id', productCategory_controller.products_category_One);

router.post('/create', productCategory_controller.products_category_create);


module.exports = router;