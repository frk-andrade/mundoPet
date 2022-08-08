var express = require('express');
var router = express.Router();
const controller = require('../controller/AdminController')
const adminMiddleware = require('../middlewares/admin')

/* GET home page. */
router.get('/', adminMiddleware, controller.index)

/* MARCAS */
router.get('/marcas', adminMiddleware, controller.listaMarcas)
router.post('/marcas', adminMiddleware, controller.addMarcas)

router.get('/marcas/editar/:id', adminMiddleware, controller.editMarca)
router.put('/marcas/editar/:id', adminMiddleware, controller.updateMarca)

router.get('/marcas/remover/:id', adminMiddleware, controller.removeMarca)
router.delete('/marcas/remover/:id', adminMiddleware, controller.destroyMarca)

/* CATEGORIAS */
router.get('/categorias', adminMiddleware, controller.listaCategorias)
router.post('/categorias', adminMiddleware, controller.addCategorias)

router.get('/categorias/editar/:id', adminMiddleware, controller.editCategoria)
router.put('/categorias/editar/:id', adminMiddleware, controller.updateCategoria)

router.get('/categorias/remover/:id', adminMiddleware, controller.removeCategoria)
router.delete('/categorias/remover/:id', adminMiddleware, controller.destroyCategoria)


/* PRODUTOS */
router.get('/produtos', adminMiddleware, controller.listaProdutos)
router.post('/produtos', adminMiddleware, controller.addProdutos)

router.get('/produtos/editar/:id', adminMiddleware, controller.editProduto)
router.put('/produtos/editar/:id', adminMiddleware, controller.updateProduto)

router.get('/produtos/remover/:id', adminMiddleware, controller.removeProduto)
router.delete('/produtos/remover/:id', adminMiddleware, controller.destroyProduto)

/* USUARIOS */
router.get('/usuarios', adminMiddleware, controller.listaUsuarios)
router.post('/usuarios', adminMiddleware, controller.addUsuarios)

router.get('/usuarios/editar/:id', adminMiddleware, controller.editUsuario)
router.put('/usuarios/editar/:id', adminMiddleware, controller.updateUsuario)

router.get('/usuarios/remover/:id', adminMiddleware, controller.removeUsuario)
router.delete('/usuarios/remover/:id', adminMiddleware, controller.destroyUsuario)

module.exports = router;
