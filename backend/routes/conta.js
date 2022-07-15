var express = require('express');
var router = express.Router();
const controller = require('../controller/ContaController')

/* GET home page. */
router.get('/', controller.index);
router.get('/endereco/:id', controller.showEndereco);


module.exports = router;
