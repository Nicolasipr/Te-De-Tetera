const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let CategoriesSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre de la Categoria es Obligatorio']
  },
  state: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: String,
    default: new Date()
  }

});

module.exports = mongoose.model('Category', CategoriesSchema);