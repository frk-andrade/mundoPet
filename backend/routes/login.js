var express = require('express');
var router = express.Router();
const controller = require('../controller/LoginController')


router.get('/', controller.index)
router.post('/', controller.auth)
router.delete('/', controller.delete)


module.exports = router;
