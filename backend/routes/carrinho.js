const express = require('express')
const router = express.Router()
const controller = require('../controller/CarrinhoController')



router.get('/', controller.index)
router.post('/', controller.addItem)
router.delete('/exclui/:id_produto', contoller.deleteItem)

module.exports = router;
