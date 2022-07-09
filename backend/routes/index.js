const controller = require('../controller/IndexController')
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', controller.index);

module.exports = router;
