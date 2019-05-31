const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PurchaseSchema = new Schema({
  _created: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  createdAt:{
    type: String,
    default: new Date()
  },
  state: {
    type: Boolean,
    default: true
  },
  product:{
    type: Schema.Types.ObjectId
  },
  user:{
    type: Schema.Types.ObjectId
  }

});

module.exports = mongoose.model('Purchase', PurchaseSchema);