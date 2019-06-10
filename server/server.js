require('./config/config');

const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


// // HEROKU
//
// var path = require('path');
// var serveStatic = require('serve-static');
// app.use(serveStatic(__dirname + "/dist"));


//MiddleWare
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json()); // fixes null parser from body in postman

app.use(require('./routes/index'));

// ROUTES HANDLER

    // PRODUCTS !!!
    const products = require('./routes/products.route'); // imports route for products
    app.use('/products', products );
    const productsCategory = require('./routes/productCategory.route');
    app.use('/products-category', productsCategory);

    // CATEGORIES
    const category = require('./routes/categories.route'); // imports route for category
    app.use('/categories', category );

    // PURCHASE
    const purchase = require('./routes/purchase.route');
    app.use('/purchase', purchase);
    const purchaseOrder = require('./routes/purchaseOrder.route');
    app.use('/purchase-order', purchaseOrder);

    // SIZES
    const size = require('./routes/sizes.routes');
    app.use('/size', size);

    // TESTING
    const posts = require('./routes/api/posts');
    app.use('/api/posts', posts);

//    END ROUTES  HANDLER

mongoose.connect(process.env.URLDB, { useCreateIndex: true, useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE'.black.bgGreen);
});


app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto ${process.env.PORT}`.black.bgCyan);
});