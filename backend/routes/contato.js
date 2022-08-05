var express = require('express');
var router = express.Router();
const controller = require('../controller/ContatoController');

router.get('/', controller.index);

module.exports = router;
