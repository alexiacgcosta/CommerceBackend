const mongoose = require('mongoose');
const conn = require('../../config/mongo');

conn();

const vendaSchema = mongoose.Schema({
  id_cliente: Number,
  id_produto: Number,
  quantidade_produto: Number
},{
  timestamps: true
})

const vendaModel = mongoose.model('vendas', vendaSchema)

module.exports = vendaModel