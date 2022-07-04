var express = require('express');
var router = express.Router();
const controller = require('../controller/AdminController')

/* GET home page. */
router.get('/', controller.index)
router.get('/marcas', controller.listaMarcas)
router.post('/marcas', controller.addMarcas)

router.get('/categorias', controller.listaCategorias)
router.post('/categorias', controller.addCategorias)

module.exports = router;
