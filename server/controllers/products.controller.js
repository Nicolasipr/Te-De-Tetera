const Products = require('../models/products.model');
const Category = require('../models/categories.model');

exports.test = function (req, res) {
  res.send('Greetings from the Products Controller');
};

// Create
exports.product_create = function (req, res) {

  let product = new Products(
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
    res.send('Products Created Successfully');
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
  Products.find({ name: regex}, function (err, product) {
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
          message: 'Products not found'
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

// exports.product_all_details = function(req, res){
//   Products.find()
//     .select("name price _id")
//     .populate('size')
//     .exec()
//     .then(docs => {
//       const response = {
//         count: docs.length,
//         products: docs.map(doc => {
//           return {
//             name: doc.name,
//             price: doc.price,
//             id: doc.id,
//             request: {
//               type: "GET",
//               url: "http://localhost:3000/products/" + doc.id
//             }
//           };
//         })
//       };
//       //   if (docs.length >= 0) {
//       res.status(200).json(response);
//       //   } else {
//       //       res.status(404).json({
//       //           message: 'No entries found'
//       //       });
//       //   }
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// };
exports.product_all_details = function (req, res) {
   Products.find()
     .populate('size')
     .exec()
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

// exports.product_details = function (req, res) {
//   const id = req.params.id;
//   Products.findById(id)
//     .populate('size')
//     .select('name price _id')
//     .exec()
//     .then(doc => {
//       console.log("From database", doc);
//       if (doc) {
//         res.status(200).json({
//           product: doc,
//           request: {
//             type: 'GET',
//             url: 'http://localhost:3000/products'
//           }
//         });
//       } else {
//         res
//           .status(404)
//           .json({ message: "No valid entry found for provided ID" });
//       }
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ error: err });
//     });
// };
exports.product_details = function (req, res) {
  Products.findById(req.params.id, function (err, product){
    if (err) return err;
    res.send(product);
  })
    .populate('size')
    .exec( (err, size) => {
      console.log("Populated Products" + size);
    });
};

exports.product_categories_details = function (req,res) {
  Products.find({}, function (err, products) {
    if (err) return err;
    res.send(products);
  });
};


// Update
exports.product_update = function (req, res) {
  Products.findByIdAndUpdate(req.params.id,  {$set: req.body},
    function (err, product) {
      if (err) return err;
      res.send('Products updated!')
    });
};

// Delete
exports.product_delete = function (req, res) {
  Products.findByIdAndRemove(req.param.id,
    function (err) {
    if (err) return err;
    res.send('Deleted Successfully!');
  });

};
