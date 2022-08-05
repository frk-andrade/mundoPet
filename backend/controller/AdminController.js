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

controller.editMarca = async (req, res) => {
    const categorias = await Categorias.findAll()
    const id_marca = req.params.id
    const marca = await Marca.findByPk(id_marca)
    
    res.render('listarMarcas', {title: 'Listar Marcas', marca, categorias})
}

controller.updateMarca = async (req, res) => {
    const id = req.params.id
    const updateMarca = await Marca.update(req.body, {
        where: {
            id
        }
    })

    res.redirect(`marcas/editar/${id}`)
}

controller.deleteMarca = async (req, res) => {
    const id = req.params.id
    const deleteMarca = await Marca.destroy({
        where: {
            id
        }
    })
    
    res.redirect(`marcas/`)
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

controller.editCategoria = async (req, res) => {
    const categorias = await Categorias.findAll()
    const id_categoria = req.params.id
    const categoria = await Categorias.findByPk(id_categoria)
    
    res.render('editar-categoria', {title: 'Categoria', categoria, categorias})
}

controller.updateCategoria = async (req, res) => {
    const id = req.params.id
    const { nome } = req.body
    const link = nome.normalize("NFD").replace(/[^a-zA-Zs]/g, "").toLowerCase()
    
    const updateCategoria = await Categorias.update({nome, link }, {
        where: {
            id
        }
    })

    res.redirect(`marcas/editar/${id}`)
}

controller.deleteCategoria = async (req, res) => {
    const id = req.params.id
    const deleteCategoria = await Categorias.destroy({
        where: {
            id
        }
    })
    
    res.redirect(`marcas/`)
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

controller.editProduto = async (req, res) => {
    const categorias = await Categorias.findAll()
    const id_produto = req.params.id
    const produto = await Produto.findByPk(id_produto)
    
    res.render('editar-produto', {title: 'Categoria', produto, categorias})
}

controller.updateProduto = async (req, res) => {
    const id = req.params.id
    
    const updateProduto = await Produto.update(req.body, {
        where: {
            id
        }
    })

    res.redirect(`produtos/editar/${id}`)
}

controller.deleteProduto = async (req, res) => {
    const id = req.params.id
    const deleteProduto = await Produto.destroy({
        where: {
            id
        }
    })
    
    res.redirect(`produtos/`)
}

controller.listaUsuarios = async (req, res) => {

    const usuarios = await Usuario.findAll()
    const categorias = await Categorias.findAll()

    res.render('lista-usuarios', {usuarios, categorias})
}

controller.addUsuarios = (req, res) => {
    res.redirect('/cadastro')
}

controller.editUsuario = async (req, res) => {
    const categorias = await Categorias.findAll()
    const id_usuario = req.params.id
    const usuario = await Usuario.findByPk(id_usuario)

    res.render('editar-usuario', {title: 'Usuário', usuario, categorias})
}

controller.updateUsuario = async (req, res) => {
    const id = req.params.id
    const update = await Usuario.update(req.body, {
        where: {
            id
        }
    })
    res.redirect(`usuarios/editar/${id}`)
}

controller.deleteUsuario = async (req, res) => {
    const id = req.params.id
    const del = await Usuario.destroy({
        where: {
            id
        }
    })
    res.redirect('usuarios/')
}



module.exports = controller;