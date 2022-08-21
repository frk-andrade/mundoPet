const {Categorias, Endereco, Item, Marca, Pedido, Produto, Usuario} = require('../database/models')


const controller = {}


controller.index = async (req, res) => {
  const id = req.session.id_usuario
  const categorias = await Categorias.findAll()
  const usuario = await Usuario.findByPk(id,
    {
      include: [
        {
          association: 'endereco'
        }
      ]
})
  res.render('minha-conta', { title: "Index", categorias, usuario })
}

controller.showEndereco = async (req, res) => {
  const { id } = req.params
  const categorias = await Categorias.findAll()
  const endereco = await Endereco.findByPk(id)

  console.log(endereco.usuario_id, req.session.id_usuario)

  if(endereco.usuario_id !== req.session.id_usuario)
      res.redirect('/minhaconta')
  
  res.render('endereco-editar', { title: "Index", categorias, endereco })
}

controller.adicionarEndereco = async (req, res) => {
  const categorias = await Categorias.findAll()

  res.render('endereco', { title: "Index", categorias})
}

controller.createEndereco = async (req, res) => {
  const {alias, endereco, numero, complemento, bairro, cidade, estado, cep, principal } = req.body
  
  const insert = await Endereco.create({
    alias, endereco, numero, complemento, bairro, cidade, estado, cep, principal,
    usuario_id: req.session.id_usuario
  })

  
  res.redirect('/minhaconta')
}

controller.updateEndereco  = async (req, res) => {
  const {alias, endereco, numero, complemento, bairro, cidade, estado, cep, principal } = req.body
  
  const insert = await Endereco.update(req.body, {
    where: {
        id
    }
})  
  res.redirect('/minhaconta')
}

  


module.exports = controller;