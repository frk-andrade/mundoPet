var express = require('express');
var router = express.Router();
const controller = require('../controller/ProdutoController')

/* GET home page. */
router.get('/:id', controller.index);

module.exports = router;
