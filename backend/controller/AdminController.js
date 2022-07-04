const controller = {}

const Sequelize = require('sequelize')
const config = require('../database/config/config.js')
const db = new Sequelize(config)

controller.index = (req, res) => res.send('teste da rota de admin')

controller.listaMarcas = async (req, res) => {
    const marcas = await db.query('SELECT * FROM marcas', {type: Sequelize.QueryTypes.SELECT})
    
    res.render('listarMarcas', {title: 'Listar Marcas', marcas})
}

controller.addMarcas = async (req, res) => {
    const { nome } = req.body
    const resultado = await db.query(`INSERT INTO marcas (nome) VALUES ('${nome}')`, { type: Sequelize.QueryTypes.INSERT})
    if (resultado) {
        res.redirect('/admin/marcas')
    } else {
        res.render('error')
    }
}


controller.listaCategorias = async (req, res) => {
    const categorias = await db.query('SELECT * FROM categorias', {type: Sequelize.QueryTypes.SELECT})

    res.render('adicionarcategoria', {title: 'Listar Categorias', categorias})
}

controller.addCategorias = async (req, res) => {
    const { nome } = req.body
    const link = nome.normalize("NFD").replace(/[^a-zA-Zs]/g, "").toLowerCase()

    const resultado = await db.query(`INSERT INTO categorias (nome, link) VALUES ('${nome}', '${link}')`, {type: Sequelize.QueryTypes.INSERT})
    if (resultado) {
        res.redirect('/admin/categorias')
    } else {
        res.render('error')
    }
}

controller.listaProdutos = async (req, res) => {

    const marcas = await db.query('SELECT * FROM marcas', {type: Sequelize.QueryTypes.SELECT}) 

    const categorias = await db.query('SELECT * FROM categorias', {type: Sequelize.QueryTypes.SELECT})

    const produtos = await db.query('SELECT p.*, marcas.nome as marca, categorias.nome as categoria FROM produtos p INNER JOIN marcas ON marcas.id = p.marca_id INNER JOIN categorias ON categorias.id = p.categoria_id', {type: Sequelize.QueryTypes.SELECT})

    res.render('form-novo-produto', {marcas, categorias, produtos})
}

controller.addProdutos = async (req, res) => {

    const {nome, descricao, preco, promocao, marca, categoria} = req.body
    const insert = `INSERT INTO produtos (nome, descricao, preco, promocao, marca_id, categoria_id) VALUES ('${nome}', '${descricao}', ${preco}, ${promocao}, ${marca}, ${categoria})`
    const resultado = db.query(insert, {type: Sequelize.QueryTypes.INSERT})

    if (resultado) {
        res.redirect('/admin/produtos')
    } else {
        res.render('error')
    }
}

module.exports = controller;