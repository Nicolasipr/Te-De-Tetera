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
      stock: req.body.stock,
      size: req.body.size
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

exports.product_find_name = function (req, res) {
  let word = req.params.word;
  let regex = new RegExp(word, 'i'); // i ingnores upper and lower cases
  Product.find({ name: regex}, function (err, product) {
    if (err) {
      return res.status(500).json({
        ok: false,
        err: err
      });
    }
    if(product.length === 0){
      return res.status(400).json({
        ok: false,
        err: {
          message: 'Product not found'
        }
      })
    }

    res.send(product);
  })
    .where('name').ne(null)
    .populate('size')
    .exec( (err, product, size) => {
      if(err)
      console.log(product + size);
    })

};

exports.product_all_details = function (req, res) {
   Product.find({})
     .populate('size')
     .exec( (err, product, size) => {
       if(err)
         console.log(product + size);
     })
     .then(docs => {
       console.log(docs);
       res.status(200).json(docs);
     })
     .catch(err => {
       console.log(err);
       res.status(500).json({
         err: err
       });
     });
};

exports.product_details = function (req, res) {
  Product.findById(req.params.id, function (err, product){
    if (err) return err;
    res.send(product);
  })
    .populate('size')
    .exec( (err, size) => {
      console.log("Populated Product" + size);
    });
};

exports.product_categories_details = function (req,res) {
  Product.find({}, function (err, products) {
    if (err) return err;
    res.send(products);
  });
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
