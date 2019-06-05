const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
   name: {
      type: String,
      required: true,
      max: 100
   },
    price:{
       type: Number,
       required: true
    },
    description: {
      type: String
    },
    stock: {
      type: Number,
      default: 0
    },
    size:{
     type: Schema.Types.ObjectId,
      ref: 'Size'
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

module.exports = mongoose.model('Products', ProductSchema);
