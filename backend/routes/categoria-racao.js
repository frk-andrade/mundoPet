var express = require('express');
var router = express.Router();
var controller = require('../controller/RacaoController');

router.get('/', controller.index);
router.get('/cachorro', controller.index);

module.exports = router;