const {Categorias, Endereco, Item, Marca, Pedido, Produto, Usuario} = require('../database/models')


const controller = {}


controller.index = async (req, res) => {
  
  // Esse valor do ID vai ser resgatado quando tivermos as sessões funcionando
  // const { id } = session.id_usuario

  const categorias = await Categorias.findAll()
  const usuario = await Usuario.findByPk(1)
  res.render('minha-conta', { title: "Index", categorias, usuario })
}

controller.showEndereco = async (req, res) => {
  const { id } = req.params
  const categorias = await Categorias.findAll()
  const endereco = await Endereco.findByPk(id)

  // tem que verificar se esse endereço é do usuario que tá pedindo
  // if (endereco.id_usuario != session.id_usuario)
  //   res.redirect('/minhaconta')
  
  res.render('endereco', { title: "Index", categorias, endereco })
}
  


module.exports = controller;