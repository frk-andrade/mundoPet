var express = require('express');
var router = express.Router();
const controller = require('../controller/ContaController')
const loggedMiddleware = require('../middlewares/logged')

/* GET home page. */
router.get('/', loggedMiddleware, controller.index);

router.get('/endereco/adicionar', loggedMiddleware, controller.adicionarEndereco);
router.post('/endereco/adicionar', loggedMiddleware, controller.createEndereco);

router.get('/endereco/:id', loggedMiddleware, controller.showEndereco);
router.put('/endereco/:id', loggedMiddleware, controller.updateEndereco);


module.exports = router;
