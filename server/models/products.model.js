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
    }
});

module.exports = mongoose.model('Products', ProductSchema);
