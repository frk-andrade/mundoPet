const {Categoria, Endereco, Item, Marca, Pedido, Produto, Usuario} = require('../database/models')

// const { index } = require("./ProdutoController");




const controller = {}
  controller.index = async (req, res) => {
    const categorias = await Categoria.findAll()
    
    if (!req.params.categoria) {
      res.render('index', { title: 'Home' }, categorias);
    } else {


      const cat = await Categoria.findOne({
        where: {
          link: req.params.categoria
        }
      })
      console.log(cat)
      const produtos = await Produto.findAll({
        where: {
          categoria_id: cat.id
        }
      })
        // lista de todos os produtos que tem no banco com a categoria solicitada
        if(!cat){
          res.redirect('/produtos')
        } else {
          res.render('produtos', { title: cat.nome , produtos, categorias})
        }
        // res.send(cat)
    }
  }


module.exports = controller;