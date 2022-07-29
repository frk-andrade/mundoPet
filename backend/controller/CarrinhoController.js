const {Categorias, Endereco, Item, Marca, Pedido, Produto, Usuario} = require('../database/models')
const controller = {}

//Os itens do carrinho ficarão guardados em um array na sessão
// var sessao.carrinho = [
//   {
//     id_produto: 1,
//     quantidade: 1
//   }
// ]

controller.index = async (req, res) => {
  categorias = Categorias.findAll()

  res.render('index', { title: "Index", categorias, sessao.carrinho })
  
}

contoller.addItem = (req, res) => {

}

contoller.deleteItem = (req, res) => {
  
}


module.exports = controller;