const {Categoria, Endereco, Item, Marca, Pedido, Produto, Usuario} = require('../database/models')

const controller = {}

controller.index = async (req, res) => {
   const {id} = req.params
   
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

res.render('produto', {title: "Produto", produto})
}
module.exports = controller;