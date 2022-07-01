const controller = {}

controller.index = (req, res) => res.send('teste da rota de admin')

controller.listaMarcas = async (req, res) => {
    res.render('adicionarmarca', {title: 'Adicionar Marca'})
}

module.exports = controller;