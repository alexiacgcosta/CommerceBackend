const mongoose = require('mongoose');
const conn = require('../../config/mongo');

conn();

const clienteSchema = mongoose.Schema({
  nome_cliente: String,
  endereco_cliente: String,
},{
  timestamps: true
})

const clienteModel = mongoose.model('users', clienteSchema)

module.exports = clienteModel