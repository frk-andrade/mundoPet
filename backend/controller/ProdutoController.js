const controller = {}

controller.index = (req, res) => res.render('produto', {title: "Produto"})

module.exports = controller;