var express = require('express');
var router = express.Router();
const controller = require('../controller/AdminController')

/* GET home page. */
router.get('/', controller.index)
router.get('/marcas', controller.listaMarcas)
router.post('/marcas', controller.addMarcas)

router.get('/categorias', controller.listaCategorias)
router.post('/categorias', controller.addCategorias)

router.get('/produtos', controller.listaProdutos)
router.post('/produtos', controller.addProdutos)

router.get('/usuarios', controller.listaUsuarios)
router.get('usuarios/:id', controller.editUsuario)
router.post('/usuarios', controller.addUsuarios)
router.put('/usuarios/:id', controller.update)
router.delete('/usuario/:id/excluir', controller.delete)

module.exports = router;
