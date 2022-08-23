const {Categorias, Endereco, Item, Marca, Pedido, Produto, Usuario} = require('../database/models')
const Sequelize = require('sequelize')
const controller = {}

controller.index = async (req, res) => {
  const categorias = await Categorias.findAll()
  const produtos = await Produto.findAll({ order: Sequelize.literal('rand()'), limit: 10 })
  const login = {
    id_usuario: req.session.id_usuario,
    admin: req.session.admin
  }
  res.render('index', { title: "Index" , categorias, produtos, login})
}

controller.contato = async (req, res) => {
  const categorias = await Categorias.findAll()
  const login = {
    id_usuario: req.session.id_usuario,
    admin: req.session.admin
  }

  res.render('contato', { title: "Contato" , categorias, login})
}

controller.sendcontato = async (req, res) => {
  const categorias = await Categorias.findAll()
  const {nome, email, mensagem} = req.body
  const login = {
    id_usuario: req.session.id_usuario,
    admin: req.session.admin
  }

  //enviar um email para o admin do site com o assunto Contato da loja, usando como remetente o email do body e no corpo a mensagem.

  res.render('contato-enviado', { Title: 'Enviado', categorias, login})
}

controller.cadastro = async (req, res) => {
  const categorias = await Categorias.findAll()
  const login = {
    id_usuario: req.session.id_usuario,
    admin: req.session.admin
  }

  res.render('cadastro', { title: "Cadastro" , categorias, login})

}

controller.addCadastro = async (req, res) => {
  const categorias = await Categorias.findAll()
  let mensagem = 'Cadastro efetudado com sucesso. Faça seu login.'
  const {nome, sobrenome, email, senha} = req.body
  const usuariosCadastrados = await Usuario.findOne({ where: { email } })
  const login = {
    id_usuario: req.session.id_usuario,
    admin: req.session.admin
  }

  if (usuariosCadastrados) {
    mensagem = 'E-Mail já cadastrado, faça seu login'
    res.render('login', { title: "Login" , categorias, mensagem, login})

  } else {
    const resultado = await Usuario.create({
      nome,
      sobrenome,
      email,
      senha
    })
    
    if (resultado) {
      res.render('login', { title: "Login" , categorias, mensagem, login})
    } else {
      res.render('error')
  }
}

  

}

controller.logout = async (req, res) => {
  req.session.destroy()
  res.redirect('/')
}

module.exports = controller;