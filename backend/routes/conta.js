var express = require('express');
var router = express.Router();
const controller = require('../controller/ContaController')
const loggedMiddleware = require('../middlewares/logged')

/* GET home page. */
router.get('/', loggedMiddleware, controller.index);
router.get('/endereco/:id', loggedMiddleware, controller.showEndereco);


module.exports = router;
