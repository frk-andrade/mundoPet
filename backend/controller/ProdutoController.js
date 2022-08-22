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
      const login = {
        id_usuario: req.session.id_usuario,
        admin: req.session.admin
      }
    
res.render('produto', {title: "Produto", produto, categorias, login})
}
module.exports = controller;