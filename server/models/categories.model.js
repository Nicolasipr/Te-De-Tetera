const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let CategoriesSchema = new Schema({
  _creator: {
    type: Schema.Types.ObjectId,
    ref: 'Products'
  },
  id: [{
    type: Schema.Types.ObjectId,
    ref: 'Products'
  }],
  name: {
    type: String,

  }

});

module.exports = mongoose.model('Category', CategoriesSchema);