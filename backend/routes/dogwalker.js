var express = require('express');
var router = express.Router();
var controller = require('../controller/DogwalkerController');

router.get('/:id', controller.show)
router.get('/', controller.index) 

module.exports = router;