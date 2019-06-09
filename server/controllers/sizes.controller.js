const Size = require('../models/sizes.model');

exports.test = function (req, res) {
  res.send('Greetings from the Size  Controller');
};

// CREATE
exports.size_create = function (req, res) {

  let size = new Size({
    name: req.body.name
  });

  size.save ( function (err) {
    if (err) return err;
    res.send('Size Created Successfully!');
  })
};

// READ

exports.find_sizes = function (req, res) {
  Size.findById( req.params.id, function (err, size) {
    if (err) return err;
    res.send(size);
  })

};
