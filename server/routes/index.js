const express = require('express');
const app = express();



// Creating routes for each one
app.use(require('./login'));
app.use(require('./usuario'));
app.use(require('./products.route'));
app.use(require('./categories.route'));
app.use(require('./productCategory.route'));
app.use(require('./purchase.route'));
app.use(require('./purchaseOrder.route'));
app.use(require('./sizes.routes'));


module.exports = app;