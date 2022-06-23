const categorias = [
  {
    nome: 'Cachorro',
    link: 'cachorro'
  },
  {
    nome: 'Gato',
    link: 'gato'
  },
  {
    nome: 'Peixe',
    link: 'peixe'
  },
  {
    nome: 'Pássaro',
    link: 'passaro'
  }
]


const controller = {
  index: function(req, res) {
    if (!req.params.categoria) {
      res.render('index', { title: 'Home' });
    } else {

      const cat = categorias.find( (categoria) => categoria.link == req.params.categoria )

      const produtos = ['Racao', 'Racao1', 'Racao2', 'Racao3', 'Racao4']
        // lista de todos os produtos que tem no banco com a categoria solicitada
  
        res.render('produtos', { title: cat.nome , produtos});  
        // res.send(cat)
    }


  
}
}

module.exports = controller;