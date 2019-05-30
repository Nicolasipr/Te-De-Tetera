const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/products.controller');

router.get('/test', product_controller.test);

router.post('/create',product_controller.product_create);
router.post('/create/categories',product_controller.product_categories_create);


router.get('/:id', product_controller.product_details);
router.get('/all', product_controller.product_all_details);
router.get('/:id/categories', product_controller.product_categories_details);

router.put('/:id/update', product_controller.product_update);

router.delete('/:id/delete', product_controller.product_delete);
module.exports = router;