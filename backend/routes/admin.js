var express = require('express');
var router = express.Router();
const controller = require('../controller/AdminController')

/* GET home page. */
router.get('/', controller.index)
router.get('/marcas', controller.listaMarcas)
router.post('/marcas', controller.addMarcas)

module.exports = router;
