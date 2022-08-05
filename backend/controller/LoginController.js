const {Categorias, Endereco, Item, Marca, Pedido, Produto, Usuario} = require('../database/models')

var mensagem = ''

const controller = {}


controller.index = async (req, res) => {
  const categorias = await Categorias.findAll()
  mensagem = ''

  res.render('login', { title: "login", categorias, mensagem })
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

    console.log({usuario})

    if(!usuario) {
        mensagem = 'Usuário ou senha incorretos!'
        res.render('login', { title: "login", categorias, mensagem })
    } else {
        req.session.id_usuario = usuario.id
        // res.redirect('/')
        res.send(req.session)
    }
}


controller.delete = (req, res) => {

}

module.exports = controller