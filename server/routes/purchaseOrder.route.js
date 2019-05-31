const express = require('express');
const router = express.Router();

const purchaseOrder_controller = require('../controllers/purchaseOrder.controller');

router.get('/test', purchaseOrder_controller.test);

module.exports = router;