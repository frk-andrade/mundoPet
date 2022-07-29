const {Categorias, Endereco, Item, Marca, Pedido, Produto, Usuario} = require('../database/models')
const controller = {}

controller.index = async (req, res) => {
  categorias = Categorias.findAll()
  itens = req.session.carrinho

  res.render('carrinho', { title: "Carrinho", categorias, itens })
  
}

controller.addItem = (req, res) => {
  categorias = Categorias.findAll()

  res.render('index', { title: "Index", categorias })

}

controller.deleteItem = (req, res) => {
  const {id} = req.body
  req.session.carrinho = req.session.carrinho.filter( item => item.id_produto != id )

  res.redirect('carrinho/')

}


module.exports = controller;