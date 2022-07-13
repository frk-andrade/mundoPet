const controller = {}

controller.index = (req, res) => res.send('Deve abrir a página produto ' + req.params.id)

module.exports = controller;