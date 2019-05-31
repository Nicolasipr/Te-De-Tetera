const  mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PurchaseOrderSchema = new Schema ({
  createdAt:{
    type: String,
    default: new Date()
  },
  invoice: {
    type: Schema.Types.ObjectId,
    ref: 'Purchase'
  },
  total: {
    type: Number,
    default: 0
  }

});

module.exports = mongoose.model('PurchaseOrder', PurchaseOrderSchema);