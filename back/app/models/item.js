const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let itemSchema = new Schema({
  name: {
    type: String
  },
  stock: {
    type: String
  },
  description: {
    type: String
  },
  code: {
    type: number
  }

}, {
    collection: 'items'
  })
module.exports = mongoose.model('Item', itemSchema)