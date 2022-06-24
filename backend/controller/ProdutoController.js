const controller = {}

controller.index = (req, res) => res.send('Deve abrir a página produto ' + req.params.id)

controller.criar = (req, res) => res.send('Deve abrir o formulário para adicionar produto ')

controller.editar = (req, res) => {
    if(!req.params.id){
        res.redirect('/produtos')
    }
    res.send('Deve abrir o formulário preenchido do produto ' + req.params.id)
    
}

controller.add = (req, res) => res.send('Produto adicionado')

module.exports = controller;