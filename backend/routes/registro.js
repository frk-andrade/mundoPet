var express = require('express');
var router = express.Router();
var controller = require('../controller/RegistroController');

router.get('/', controller.index);
router.post('/', controller.index);

module.exports = router;