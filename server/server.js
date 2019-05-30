require('./config/config');

const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

//MiddleWare
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json()); // fixes null parser from body in postman

app.use(require('./routes/index'));

// ROUTES HANDLER

    // PRODUCTS !!!
    const products = require('./routes/products.route'); // imports route for products
    app.use('/products', products );

    // CATEGORIES
    const category = require('./routes/categories.route'); // imports route for category
    app.use('/categories', category );

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