const ProductsCategory = require('../models/productsCategory.model');
const Products = require('../models/products.model');
const Category = require('../models/categories.model');

const mongoose = require('mongoose');


exports.test = function (req, res) {
  res.send('Greetings from the Products Category Controller');
};

// Create
exports.products_category_create = function (req, res) {
  let products_category = new ProductsCategory ( {
    product: req.body.product,
    category: req.body.category
  });

  products_category
    .save(
      res.send('Product Category created Successfully ')
    )
    .then( res => {
      console.log(res);
    })
    .catch( err => console.log(err));

    res.status(201).json({
    message: "Handling POST request  to /products-category/create",
    createdProductCategory: products_category
  })
};

// READ

exports.products_category_One = function (req, res) {
  ProductsCategory.findById(req.params.id, function (err, product_category) {
    if (err) return err;
    res.send(product_category);
  })
    .populate('product')
    .populate('category')
    .exec( (err, product, category) => {
      console.log("Populated Product Category"  + product + category);
    });

};

// UPDATE

exports.products_category_update  = function  (req, res ) {
  ProductsCategory.findByIdAndUpdate( req.params.id , {$set: req.body},
    function (err, product_category) {
    if (err) return err;
    res.send("Product Category Updated")
    });
};

// DELETE
