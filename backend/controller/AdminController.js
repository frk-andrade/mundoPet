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
    const resultado = await db.query(`INSERT INTO categorias (nome) VALUES ('${nome}')`, {type: Sequelize.QueryTypes.INSERT})
    if (resultado) {
        res.redirect('/admin/categorias')
    } else {
        res.render('error')
    }
}

module.exports = controller;