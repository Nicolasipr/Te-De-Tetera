const  mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PurchaseOrderSchema = new Schema ({

  invoice: {
    type: Schema.Types.ObjectId,
    ref: 'Purchase'
  },
  total: {
    type: Number,
    default: 0
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

module.exports = mongoose.model('PurchaseOrder', PurchaseOrderSchema);