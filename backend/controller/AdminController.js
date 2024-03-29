const path = require('path')
const {Categorias, Endereco, Item, Marca, Pedido, Produto, Usuario} = require('../database/models')


const controller = {}

function valorSql (valor){
    return valor.replace(',','.')
}

controller.index = async (req, res) => {
    const categorias = await Categorias.findAll()
    const login = {
        id_usuario: req.session.id_usuario,
        admin: req.session.admin
      }
    
    res.render('admin', {title: 'Admin', categorias, login })
}

controller.listaMarcas = async (req, res) => {
    const categorias = await Categorias.findAll()
    const marcas = await Marca.findAll()
    const login = {
        id_usuario: req.session.id_usuario,
        admin: req.session.admin
      }
    
    res.render('marcas-listar', {title: 'Listar Marcas', marcas, categorias, login})
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
    const login = {
        id_usuario: req.session.id_usuario,
        admin: req.session.admin
      }
    
    
    res.render('marcas-editar', {title: 'Editar Marca', marca, categorias, login})
}

controller.updateMarca = async (req, res) => {
    const id = req.params.id
    const updateMarca = await Marca.update(req.body, {
        where: {
            id
        }
    })

    res.redirect(`/admin/marcas/`)
}

controller.removeMarca = async (req, res) => {
    const categorias = await Categorias.findAll()
    const id_marca = req.params.id
    const marca = await Marca.findByPk(id_marca)
    const login = {
        id_usuario: req.session.id_usuario,
        admin: req.session.admin
      }
    
    
    res.render('marcas-remover', {title: 'Confirmar Remoção Marcas', marca, categorias, login})
}

controller.destroyMarca = async (req, res) => {
    const id = req.params.id
    const deleteMarca = await Marca.destroy({
        where: {
            id
        }
    })
    
    res.redirect(`/admin/marcas/`)
}



controller.listaCategorias = async (req, res) => {
    const categorias = await Categorias.findAll()
    const login = {
        id_usuario: req.session.id_usuario,
        admin: req.session.admin
      }
    

    res.render('categorias-listar', {title: 'Listar Categorias', categorias, login})
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
    const login = {
        id_usuario: req.session.id_usuario,
        admin: req.session.admin
      }
    
    
    res.render('categorias-editar', {title: 'Categoria', categoria, categorias, login})
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

    res.redirect(`/admin/categorias/`)
}

controller.removeCategoria = async (req, res) => {
    const categorias = await Categorias.findAll()
    const id_categoria = req.params.id
    const categoria = await Categorias.findByPk(id_categoria)
    const login = {
        id_usuario: req.session.id_usuario,
        admin: req.session.admin
    }
    

    res.render('categorias-remover',{title: 'Categoria', categoria, categorias, login})
}

controller.destroyCategoria = async (req, res) => {
    const id = req.params.id
    const deleteCategoria = await Categorias.destroy({
        where: {
            id
        }
    })
    
    res.redirect(`/admin/categorias/`)
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
    const login = {
        id_usuario: req.session.id_usuario,
        admin: req.session.admin
      }
    
        res.render('produtos-listar', {marcas, categorias, produtos, login})
}

controller.addProdutos = async (req, res) => {

    const {nome, descricao, preco, promocao, marca, categoria} = req.body
    let precoSql = valorSql(preco)
    let promocaoSql = valorSql(promocao)
    
   const resultado = await Produto.create({
        nome,
        descricao,
        preco: precoSql,
        promocao: promocaoSql,
        marca_id: marca,
        categoria_id: categoria
    })

    if(req.files) {
        const arquivo = req.files.imagem;
        const imagem = 'produto-' + resultado.id + '.png'
        const destinoArquivo = path.join(__dirname, '../public/images/produtos/', imagem)

        arquivo.mv(destinoArquivo, function(err) {
            if (err)
            return res.status(500).send(err);
        })    

        const update = await Produto.update({
                imagem
            }, 
            { where : {
                id: resultado.id
            }
        })
        
        if (update) {
            res.redirect('/admin/produtos')
        } else {
            res.render('error')
        }
    
    } else {

        if (resultado) {
            res.redirect('/admin/produtos')
        } else {
            res.render('error')
        }

    }
}

controller.editProduto = async (req, res) => {
    const categorias = await Categorias.findAll()
    const marcas = await Marca.findAll()
    const id_produto = req.params.id
    const produto = await Produto.findByPk(id_produto,
        {
           include: [
              {
                association: 'categoria'
              },
              {
                association: 'marca'
              }
            ]
        })
    const login = {
        id_usuario: req.session.id_usuario,
        admin: req.session.admin
    }
        
    res.render('produtos-editar', {title: 'Editar Produto', produto, categorias, marcas, login})
}

controller.updateProduto = async (req, res) => {
    const id = req.params.id

    const updateProduto = await Produto.update(req.body, {
        where: {
            id
        }
    })

    if(req.files) {
        const arquivo = req.files.imagem;
        const imagem = 'produto-' + produto.id + '.png'
        const destinoArquivo = path.join(__dirname, '../public/images/produtos/', imagem)

        arquivo.mv(destinoArquivo, function(err) {
            if (err)
            return res.status(500).send(err);
        })
        
        const update = await Produto.update({
            imagem
        }, 
        { where : {
            id: resultado.id
        }
         })

    }


    res.redirect(`/admin/produtos/editar/${id}`)
}

controller.removeProduto = async (req, res) => {
    const categorias = await Categorias.findAll()
    const id_produto = req.params.id
    const produto = await Produto.findByPk(id_produto)
    const login = {
        id_usuario: req.session.id_usuario,
        admin: req.session.admin
      }
    
    res.render('produtos-remover', {title: 'Editar Produto', produto, categorias, login})
}

controller.destroyProduto = async (req, res) => {
    const id = req.params.id
    const deleteProduto = await Produto.destroy({
        where: {
            id
        }
    })
    
    res.redirect(`/admin/produtos/`)
}






controller.listaUsuarios = async (req, res) => {

    const usuarios = await Usuario.findAll()
    const categorias = await Categorias.findAll()
    const login = {
        id_usuario: req.session.id_usuario,
        admin: req.session.admin
      }
    
    res.render('usuarios-listar', {usuarios, categorias, login})
}

controller.addUsuarios = (req, res) => {
    res.redirect('/cadastro')
}

controller.editUsuario = async (req, res) => {
    const categorias = await Categorias.findAll()
    const id_usuario = req.params.id
    const usuario = await Usuario.findByPk(id_usuario)
    const login = {
        id_usuario: req.session.id_usuario,
        admin: req.session.admin
      }
    
    res.render('usuarios-editar', {title: 'Usuário', usuario, categorias, login})
}

controller.updateUsuario = async (req, res) => {
    const id = req.params.id
    const update = await Usuario.update(req.body, {
        where: {
            id
        }
    })
    res.redirect(`/admin/usuarios/editar/${id}`)
}

controller.removeUsuario = async (req, res) => {
    const categorias = await Categorias.findAll()
    const id_usuario = req.params.id
    const usuario = await Usuario.findByPk(id_usuario)
    const login = {
        id_usuario: req.session.id_usuario,
        admin: req.session.admin
      }
    
    res.render('usuarios-remover', {title: 'Usuário', usuario, categorias, login})
}

controller.destroyUsuario = async (req, res) => {
    const id = req.params.id
    const del = await Usuario.destroy({
        where: {
            id
        }
    })
    res.redirect('usuarios/')
}


module.exports = controller;