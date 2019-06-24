const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/products.controller');

router.get('/test', product_controller.test);

router.post('/create',product_controller.product_create);
router.post('/create/categories',product_controller.product_categories_create);


router.get('/find/:id', product_controller.product_details);
router.get('/all', product_controller.product_all_details);
router.get('/find/:id/categories', product_controller.product_categories_details);
router.get('/find/:word', product_controller.product_find_name);
router.put('/find/:id/update', product_controller.product_update);

router.delete('/:id/delete', product_controller.product_delete);
module.exports = router;
