var express = require('express');
var router = express.Router();

router.get('/:id', (req, res) => res.send(`POST ${req.params.id}`));
router.get('/', (req, res) => res.send("Blog"));


module.exports = router;