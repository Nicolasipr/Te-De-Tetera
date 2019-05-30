const Product = require('../models/products.model');
const Category = require('../models/categories.model');


exports.test = function (req, res) {
  res.send('Greetings from the Products Controller');
};

// Create
exports.product_create = function (req, res) {

  let product = new Product(
    {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      categories: req.body.categories
    }
  );

  product.save (function (err) {
    if (err) {
      return err;
    }
    res.send('Product Created Successfully');
  })
};


exports.product_categories_create = function (req,res) {
  if (err) throw err;
  res.send("Crear categorias del producto");
};


// Read

exports.product_all_details = function (req, res) {
  if (err) throw err;
    res.send("Todos los productos");
};

exports.product_details = function (req, res) {
  Product.findById(req.params.id, function (err, product){
    if (err) return err;
    res.send(product);
  });
};

exports.product_categories_details = function (req,res) {
  if (err) throw err;
  res.send("Categorias del producto");
};


// Update
exports.product_update = function (req, res) {
  Product.findByIdAndUpdate(req.params.id,  {$set: req.body},
    function (err, product) {
      if (err) return err;
      res.send('Product updated!')
    });
};

// Delete
exports.product_delete = function (req, res) {
  Product.findByIdAndRemove(req.param.id,
    function (err) {
    if (err) return err;
    res.send('Deleted Successfully!');
  });

};