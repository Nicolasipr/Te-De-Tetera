const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductCategorySchema = new Schema({

    product: {
      type: Schema.Types.ObjectId,
      ref: 'Products'
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    },
    state: {
      type: Boolean,
      default: true
    }

});

module.exports = mongoose.model('ProductsCategory', ProductCategorySchema);


