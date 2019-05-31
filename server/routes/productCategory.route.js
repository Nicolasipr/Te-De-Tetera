const express = require('express');
const router = express.Router();

const productCategory_controller = require('../controllers/productsCategory.controller');

router.get('/test', productCategory_controller.test);

module.exports = router;