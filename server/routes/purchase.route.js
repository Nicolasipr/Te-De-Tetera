const express = require('express');
const router = express.Router();

const purchase_controller = require('../controllers/purchase.controller');

router.get('/test', purchase_controller.test);


module.exports = router;