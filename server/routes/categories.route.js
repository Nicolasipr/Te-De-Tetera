const express = require('express');
const router = express.Router();

const categories_controller = require('../controllers/categories.controller');

router.get('/test', categories_controller.test);
router.post('/create', categories_controller.category_create);
router.get('/id', categories_controller.category_details);


module.exports = router;
