const Product = require('../models/products.model');

exports.test = function (req, res) {
  res.send('Greetings from the Products Controller');
};

exports.product_create = function (req, res) {

  let product = new Product(
    {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description
    }
  );

  product.save(function (err) {
    if (err) {
      return err;
    }
    res.send('Product Created Successfully');
  })
};

exports.product_details = function (req, res) {
  Product.findById(req.params.id, function (err, product){
    if (err) return err;
    res.send(product);
  });
};

exports.product_update = function (req, res) {
  Product.findByIdAndUpdate(req.params.id,  {$set: req.body},
    function (err, product) {
      if (err) return err;
      res.send('Product updated!')
    });
};

exports.product_delete = function (req, res) {
  Product.findByIdAndRemove(req.param.id,
    function (err) {
    if (err) return err;
    res.send('Deleted Successfully!');
  });

};