const {Categorias, Endereco, Item, Marca, Pedido, Produto, Usuario} = require('../database/models')

const controller = {}

function valorSql (valor){
    return valor.replace(',','.')
}

controller.index = async (req, res) => {
    const categorias = await Categorias.findAll()
    res.render('admin', {title: 'Admin', categorias })
}
controller.listaMarcas = async (req, res) => {
    const categorias = await Categorias.findAll()
    const marcas = await Marca.findAll()
    
    res.render('listarMarcas', {title: 'Listar Marcas', marcas, categorias})
}

controller.addMarcas = async (req, res) => {
    const { nome } = req.body
    const resultado = await Marca.create({ nome })

    if (resultado) {
        res.redirect('/admin/marcas')
    } else {
        res.render('error')
    }
}


controller.listaCategorias = async (req, res) => {
    const categorias = await Categorias.findAll()

    res.render('listarCategorias', {title: 'Listar Categorias', categorias})
}

controller.addCategorias = async (req, res) => {
    const { nome } = req.body
    const link = nome.normalize("NFD").replace(/[^a-zA-Zs]/g, "").toLowerCase()

    const resultado = await Categorias.create({nome, link})

    if (resultado) {
        res.redirect('/admin/categorias')
    } else {
        res.render('error')
    }
}

controller.listaProdutos = async (req, res) => {

    const marcas = await Marca.findAll() 

    const categorias = await Categorias.findAll()

    const produtos = await Produto.findAll({
        include: [
            {
              association: 'marca'
            },
            {
              association: 'categoria'
            }
          ]
      
    })

    res.render('form-novo-produto', {marcas, categorias, produtos})
}

controller.addProdutos = async (req, res) => {

    const {nome, descricao, preco, promocao, marca, categoria} = req.body
    let precoSql = valorSql(preco)
    let promocaoSql = valorSql(promocao)
    const resultado = Produto.create({
        nome,
        descricao,
        preco: precoSql,
        promocao: promocaoSql,
        marca_id: marca,
        categoria_id: categoria
    })
    
    if (resultado) {
        res.redirect('/admin/produtos')
    } else {
        res.render('error')
    }
}

controller.listaUsuarios = (req, res) => res.send('lista os usuarios com formulario de adicao')
controller.editUsuario = (req, res) => res.send('o mesmo form de adicao, mas com dados preenchidos')
controller.addUsuarios = (req, res) => res.send('faz o insert dos dados preenchidos no formulario da lista')
controller.update = (req, res) => res.send('faz o update dos dados alterados no formulario de edicao')
controller.delete = (req, res) => res.send('faz o delete do id indicado na url')



module.exports = controller;