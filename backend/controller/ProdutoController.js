const controller = {}
const Sequelize = require('sequelize')
const config = require('../database/config/config.js')
const db = new Sequelize(config)

controller.index = async (req, res) => {
   const {id} = req.params
   
   const produto = await db.query(`SELECT * FROM produtos WHERE id = ${id}`, {type: Sequelize.QueryTypes.SELECT})
//res.send(produto)

res.render('produto', {title: "Produto", produto})
}
module.exports = controller;