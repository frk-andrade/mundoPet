const controller = require('../controller/IndexController')
var express = require('express');
var router = express.Router();


router.get('/', controller.index)

router.get('/contato', controller.contato)
router.post('/contato', controller.sendcontato)

router.get('/cadastro', controller.cadastro)
router.post('/cadastro', controller.addCadastro)

router.get('/logout', controller.logout)



module.exports = router;
