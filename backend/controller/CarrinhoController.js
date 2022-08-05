const {Categorias, Endereco, Item, Marca, Pedido, Produto, Usuario} = require('../database/models')
const controller = {}

controller.index = async (req, res) => {
  categorias = Categorias.findAll()
  itens = req.session.carrinho

  //res.render('carrinho', { title: "Carrinho", categorias, itens })

  res.send(req.session)
  
}

controller.addItem = (req, res) => {

  const {id} = req.body
  if(!req.session.hasOwnProperty('carrinho'))
    req.session.carrinho = []
  
  req.session.carrinho.push(id)

  console.log(req.session)
}

controller.deleteItem = (req, res) => {
  const {id} = req.body
  req.session.carrinho = req.session.carrinho.filter( item => item.id_produto != id )

  res.redirect('carrinho/')

}


module.exports = controller;