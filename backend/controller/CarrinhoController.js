const {Categorias, Endereco, Item, Marca, Pedido, Produto, Usuario} = require('../database/models')

const controller = {}

controller.index = async (req, res) => {
   const {id} = req.params
   const categorias = await Categorias.findAll()
   const produto = await Produto.findByPk(id,
      {
         include: [
            {
              association: 'categoria'
            },
            {
              association: 'marca'
            }
          ]
      
      })
  res.render ("carrinho", {title: "Carrinho", categorias, produto})
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