const express = require('express');
const router = express.Router();

const size_controller = require('../controllers/sizes.controller');

router.get('/test', size_controller.test);

router.post('/create', size_controller.size_create);

module.exports = router;