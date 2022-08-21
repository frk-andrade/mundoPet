const {Categorias, Endereco, Item, Marca, Pedido, Produto, Usuario} = require('../database/models')
const controller = {}

controller.index = async (req, res) => {
  const categorias = await Categorias.findAll()
  res.render('index', { title: "Index" , categorias})
}

controller.contato = async (req, res) => {
  const categorias = await Categorias.findAll()
  res.render('contato', { title: "Contato" , categorias})
}

controller.sendcontato = async (req, res) => {
  const categorias = await Categorias.findAll()
  const {nome, email, mensagem} = req.body

  //enviar um email para o admin do site com o assunto Contato da loja, usando como remetente o email do body e no corpo a mensagem.

  res.render('contato-enviado', { Title: 'Enviado', categorias})
}

controller.cadastro = async (req, res) => {
  const categorias = await Categorias.findAll()
  res.render('cadastro', { title: "Cadastro" , categorias})

}

controller.addCadastro = async (req, res) => {
  const categorias = await Categorias.findAll()
  let mensagem = 'Cadastro efetudado com sucesso. Faça seu login.'
  const {nome, sobrenome, email, senha} = req.body
  const usuariosCadastrados = await Usuario.findOne({ where: { email } })

  if (usuariosCadastrados) {
    mensagem = 'E-Mail já cadastrado, faça seu login'
    res.render('login', { title: "Login" , categorias, mensagem})

  } else {
    const resultado = await Usuario.create({
      nome,
      sobrenome,
      email,
      senha
    })
    
    if (resultado) {
      res.render('login', { title: "Login" , categorias, mensagem})
    } else {
      res.render('error')
  }
}

  

}


module.exports = controller;