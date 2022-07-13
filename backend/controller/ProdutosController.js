const {Categoria, Produto} = require('../database/models')

const controller = {}
  controller.index = async (req, res) => {
    const categorias = await Categoria.findAll()

    if (!req.params.categoria) {
      res.render('index', { title: 'Home' , categorias});
    } else {


      const cat = await Categoria.findOne({
        where: {
          link: req.params.categoria
        }
      })

      if(!cat){
          res.redirect('/produtos')
        } else {
          const produtos = await Produto.findAll({
            where: {
              categoria_id: cat.id
            }
          })
          res.render('produtos', { title: cat.nome , produtos, categorias})
        }
    }
  }


module.exports = controller;