const {Categoria, Endereco, Item, Marca, Pedido, Produto, Usuario} = require('../database/models')



const controller = {}


  controller.index = async (req, res) => {
    const categorias = await Categoria.findAll()
    res.render('index', { title: "Index" , categorias})
  }


module.exports = controller;