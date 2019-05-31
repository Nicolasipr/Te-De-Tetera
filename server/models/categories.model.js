const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let CategoriesSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre de la Categoria es Obligatorio']
  }

});

module.exports = mongoose.model('Category', CategoriesSchema);