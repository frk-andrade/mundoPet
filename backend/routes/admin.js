var express = require('express');
var router = express.Router();
const controller = require('../controller/AdminController')

/* GET home page. */
router.get('/', controller.index)

/* MARCAS */
router.get('/marcas', controller.listaMarcas)
router.post('/marcas', controller.addMarcas)

router.get('/marcas/editar/:id', controller.editMarca)
router.put('/marcas/editar/:id', controller.updateMarca)

router.get('/marcas/remover/:id', controller.removeMarca)
router.delete('/marcas/remover/:id', controller.destroyMarca)

/* CATEGORIAS */
router.get('/categorias', controller.listaCategorias)
router.post('/categorias', controller.addCategorias)

router.get('/categorias/editar/:id', controller.editCategoria)
router.put('/categorias/editar/:id', controller.updateCategoria)

router.get('/categorias/remover/:id', controller.removeCategoria)
router.delete('/categorias/remover/:id', controller.destroyCategoria)


/* PRODUTOS */
router.get('/produtos', controller.listaProdutos)
router.post('/produtos', controller.addProdutos)

router.get('/produtos/editar/:id', controller.editProduto)
router.put('/produtos/editar/:id', controller.updateProduto)

router.get('/produtos/remover/:id', controller.removeProduto)
router.delete('/produtos/remover/:id', controller.destroyProduto)

/* USUARIOS */
router.get('/usuarios', controller.listaUsuarios)
router.post('/usuarios', controller.addUsuarios)

router.get('usuarios/editar/:id', controller.editUsuario)
router.put('/usuarios/editar/:id', controller.updateUsuario)

router.delete('/usuarios/excluir/:id', controller.removeUsuario)
router.delete('/usuarios/excluir/:id', controller.destroyUsuario)

module.exports = router;
