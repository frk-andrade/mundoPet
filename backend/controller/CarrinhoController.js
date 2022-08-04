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

module.exports = controller;