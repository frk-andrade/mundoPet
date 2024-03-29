const {Categorias, Endereco, Item, Marca, Pedido, Produto, Usuario} = require('../database/models')

var mensagem = ''

const controller = {}


controller.index = async (req, res) => {
  const categorias = await Categorias.findAll()
  mensagem = ''
  const login = {
    id_usuario: req.session.id_usuario,
    admin: req.session.admin
  }
    console.log('login >', login)

  res.render('login', { title: "login", categorias, mensagem, login })
}

controller.auth = async (req, res) => {
    const categorias = await Categorias.findAll()
    const {email, senha} = req.body
    const usuario = await Usuario.findOne({
        where: {
            email,
            senha
        }
    })

    if(!usuario) {
        mensagem = 'Usuário ou senha incorretos!'
        res.render('login', { title: "login", categorias, mensagem })
    } else {
        req.session.id_usuario = usuario.id
        req.session.admin = usuario.admin
        res.redirect('/')
    }
}


controller.delete = (req, res) => {

}

module.exports = controller