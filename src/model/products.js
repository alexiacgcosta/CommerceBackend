const mongoose = require('mongoose');
const conn = require('../../config/mongo');

conn();

const productSchema = mongoose.Schema({
  nome_produto: String,
  descricao: String,
  preco: Number 
},{
  timestamps: true
})

const productModel = mongoose.model('products', productSchema)

module.exports = productModel