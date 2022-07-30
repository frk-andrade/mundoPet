const {Categorias, Endereco, Item, Marca, Pedido, Produto, Usuario} = require('../database/models')

const controller = {
    index: async (req, res) => {
        const categorias = await Categorias.findAll()
        const usuario = await Usuario.findByPk(1)
        res.render('contato', { title: 'Contato', categorias, usuario })
    }
}
module.exports = controller