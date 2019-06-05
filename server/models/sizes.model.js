const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SizeSchema = new Schema({

  name:{
    type: String
  },
  estado: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: String,
    default: new Date()
  }

});

module.exports = mongoose.model('Size', SizeSchema);