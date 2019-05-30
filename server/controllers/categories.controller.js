const Category = require('../models/categories.model');

exports.test = function (req, res) {
  res.send('Greetings from the Category Controller');
};

//  create

exports.category_create = function (req, res) {

  let category = new Category ({
    name: req.body.name
  });
  category.save (function (err){
    if (err) return err;
    res.send('Category created succesfully');
  })

};

// Read

exports.category_details = function (req, res) {
  Category.findById(req.params.id, function (err, category){
    if (err) return err;
    res.send(category);
  })

};


// Update

exports.category_update = function (rez, res) {
  Category.findByIdAndUpdate(req.params.id, {$set: req.body}),
    function (err) {
    if (err) return err;
    send.res("Category Updated")
    }

};

// delete