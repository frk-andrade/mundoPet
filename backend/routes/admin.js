var express = require('express');
var router = express.Router();
const controller = require('../controller/AdminController')

/* GET home page. */
router.get('/', controller.index)

router.get('/marcas', controller.listaMarcas)
router.post('/marcas', controller.addMarcas)
router.get('/marcas/editar/:id', controller.editMarca)
router.put('/marcas/editar/:id', controller.updateMarca)
router.delete('/marcas/remover/:id', controller.deleteMarca)

router.get('/categorias', controller.listaCategorias)
router.post('/categorias', controller.addCategorias)
router.get('/categorias/editar/:id', controller.editCategoria)
router.put('/categorias/editar/:id', controller.updateCategoria)
router.delete('/categorias/remover/:id', controller.deleteCategoria)


router.get('/produtos', controller.listaProdutos)
router.post('/produtos', controller.addProdutos)
router.get('/produtos/editar/:id', controller.editProduto)
router.put('/produtos/editar/:id', controller.updateProduto)
router.delete('/produtos/remover/:id', controller.deleteProduto)

router.get('/usuarios', controller.listaUsuarios)
router.post('/usuarios', controller.addUsuarios)
router.get('usuarios/editar/:id', controller.editUsuario)
router.put('/usuarios/editar/:id', controller.updateUsuario)
router.delete('/usuarios/excluir/:id', controller.deleteUsuario)

module.exports = router;
