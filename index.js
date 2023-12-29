const express = require('express');
const mongoose = require('mongoose');
const clienteModel = require('./src/model/cliente.js');
const productModel = require('./src/model/products');
const vendaModel = require('./src/model/venda');
const app = express();

app.use(express.json());

app.listen(8080, () => {
  console.log('Servidor operacional');
})

//cliente
app.get('/cliente', async (req, res) => {
  const clientes = await clienteModel.find({})

  return res.status(200).json({
    data: clientes
  })
});

app.post('/cliente', async (req, res) => {
  if (!req.body.nome_cliente) {
    return res.status(400).json({ message: 'O campo nome é obrigatório'});
  }
  if (!req.body.endereco_cliente) {
    return res.status(400).json({ message: 'O campo endereco é obrigatório'});
  }
  const response = await clienteModel.create({
    nome_cliente: req.body.nome_cliente,
    endereco_cliente: req.body.endereco_cliente
  })
  return res.status(200).json({
    data: response
  })
});

app.put('/cliente/:id', async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({
      data: {},
      message: 'O id não corresponde a um ObjectId válido'
    })
  }

  const cliente = await clienteModel.updateOne({_id: req.params.id}, req.body)

  return res.status(200).json({
    data: cliente
  })
})


app.delete('/cliente/:id', async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({
      data: {},
      message: 'O id não corresponde a um ObjectId válido'
    })
  }

  const clientes = await clienteModel.deleteOne({_id: req.params.id}, req.body)

  return res.status(200).json({
    data: clientes
  })
}
)

//cadastro de produtos

app.get('/products', async (req, res) => {
  const products = await productModel.find({})

  return res.status(200).json({
    data: products
  })
});

app.post('/products', async (req, res) => {
  const response = await productModel.create({
    nome_produto: req.body.nome_produto,
    descricao: req.body.descricao,
    preco: req.body.preco
  })
  return res.status(200).json({
    data: response
  })
});

app.put('/products/:id', async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({
      data: {},
      message: 'O id não corresponde a um ObjectId válido'
    })
  }

  const products = await productModel.updateOne({_id: req.params.id}, req.body)

  return res.status(200).json({
    data: products
  })
}
)

app.delete('/products/:id', async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({
      data: {},
      message: 'O id não corresponde a um ObjectId válido'
    })
  }

  const products = await productModel.deleteOne({_id: req.params.id}, req.body)

  return res.status(200).json({
    data: products
  })
}
)

//registro de vendas


app.get('/venda', async (req, res) => {
  const vendas = await vendaModel.find({})

  return res.status(200).json({
    data: vendas
  })
});

app.post('/venda', async (req, res) => {
  const response = await vendaModel.create({
    id_cliente: req.body.id_cliente,
    id_produto: req.body.id_produto,
    quantidade_produto: req.body.quantidade_produto
  })
  return res.status(200).json({
    data: response
  })
});

app.put('/venda/:id', async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({
      data: {},
      message: 'O id não corresponde a um ObjectId válido'
    })
  }

  const vendas = await vendaModel.updateOne({_id: req.params.id}, req.body)

  return res.status(200).json({
    data: vendas
  })
}
)

app.delete('/venda/:id', async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({
      data: {},
      message: 'O id não corresponde a um ObjectId válido'
    })
  }

  const vendas = await vendaModel.deleteOne({_id: req.params.id}, req.body)

  return res.status(200).json({
    data: vendas
  })
}
)

