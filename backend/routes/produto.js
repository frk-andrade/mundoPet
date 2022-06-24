var express = require('express');
var router = express.Router();
const controller = require('../controller/ProdutoController')

/* GET home page. */
router.get('/:id', controller.index);
router.get('/criar', controller.criar);
router.get('/editar/:id', controller.editar);

module.exports = router;