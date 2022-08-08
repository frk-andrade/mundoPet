
function adicionarCarrinho(id, nome, preco) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho'))
  if(!carrinho) carrinho = []

  const item = {
    id,
    nome,
    quantidade: 1,
    preco
  }

  if(carrinho.filter(itemFiltrado => itemFiltrado.id === item.id).lenght) {
    carrinho.map( itemCarrinho => {
      if(!itemCarrinho.id === item.id) {
          return itemCarrinho
      } else {
          itemCarrinho.quantidade += 1
          return itemCarrinho
      }
    })
  } else {
    carrinho.push(item)
  }

  localStorage.setItem('carrinho', JSON.stringify(carrinho))
}

function listarCarrinho() {

    const carrinho = JSON.parse(localStorage.getItem('carrinho'))

    if(!carrinho) {

      const mensagem = document.getElementById('mensagem')
      mensagem.innerHTML('<h2>Carrinho ainda não tem Produtos.</h2>')

    } else {

      
      const listaCarrinho = document.getElementById('listaCarrinho')




      for (const item of carrinho) {
        createArticle()


        for (const key in item) {
          const celula = document.createElement('td')
          const texto = document.createTextNode(item[key])
          celula.appendChild(texto)
          linha.appendChild(celula)

        }
        
        tbody.appendChild(linha)
      }
    }
}

function alterarQuantidadeCarrinho(id, quantidade) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho'))

  carrinho.map( itemCarrinho => {
    if(!itemCarrinho.id === id) {
        return itemCarrinho
    } else {
        itemCarrinho.quantidade = quantidade
        return itemCarrinho
    }
  })

  localStorage.setItem('carrinho', JSON.stringify(carrinho))

}


const createArticle = () => createElement('article')
const createDiv = () => createElement('div')