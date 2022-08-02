var express = require('express');
var router = express.Router();
const controller = require('../controller/CarrinhoController')

router.get("/", controller.index);


module.exports = router;
