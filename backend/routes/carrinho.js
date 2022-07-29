const express = require('express')
const router = express.Router()
const controller = require('../controller/CarrinhoController')



router.get('/', controller.index)
router.delete('/exclui/:id_produto', controller.deleteItem)

module.exports = router;
