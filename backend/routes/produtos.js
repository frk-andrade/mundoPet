const controller = require('../controller/ProdutosController')



var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:categoria?', controller.index);

module.exports = router;
