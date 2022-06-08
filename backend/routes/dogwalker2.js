var express = require('express');
var router = express.Router();
var controller = require('../controller/Dogwalker2Controller');

router.get('/:id', controller.show)
router.get('/', controller.index) 

module.exports = router;