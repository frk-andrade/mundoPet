
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
    const listaCarrinho = document.getElementById('listaCarrinho')
    const valorTotalCarrinho = document.getElementById('valorTotal')


    console.log(carrinho)

    if(!carrinho) {
      console.log('entrou')
      const mensagem = document.getElementById('mensagem')
      mensagem.innerHTML = '<h2 class="titulo-carrinho font-2-m">Carrinho ainda não tem Produtos.</h2>'
      valorTotalCarrinho.textContent = `Valor Total R$ ${valorDinheiro(0)}`


    } else {
      const valorTotal = carrinho.reduce((total, item) => {
        return total + (item.preco * item.quantidade)
      }, 0)



      for (const item of carrinho) {
        const section = document.createElement('section')
        section.classList.add('card')

        const div = document.createElement('div')
        div.classList.add('produto-carrinho')

        const divImgNome = document.createElement('div')
        const divQtdValor = document.createElement('div')

        const img = document.createElement('img')
        img.src = `/images/produtos/produto-25.png`
        img.alt = `Nome`
        img.classList.add('img-produto-carrinho')

        const nomeProduto = document.createElement('p')
        nomeProduto.classList.add('nome-produto-carrinho')
        nomeProduto.classList.add('font-2-m')
        nomeProduto.textContent = `${item.nome}`

        const botaoMenos = document.createElement('button')
        botaoMenos.classList.add('botao-carrinho')
        botaoMenos.classList.add('botao-menos')
        
        const spanBotaoMenos = document.createElement('span')
        spanBotaoMenos.classList.add('material-symbols-outlined')
        spanBotaoMenos.textContent = 'remove'
        botaoMenos.appendChild(spanBotaoMenos)
        botaoMenos.onclick = function () { alteraQtd('-',quantidade.textContent, item.id) }
        
        const quantidade = document.createElement('p')
        quantidade.classList.add('carrinho-qtd')
        quantidade.textContent = `${item.quantidade}`
        quantidade.id = 'quantidade'
        
        const botaoMais = document.createElement('button')
        botaoMais.classList.add('botao-carrinho')
        botaoMais.classList.add('botao-mais')
        botaoMais.onclick = function() { alteraQtd('+',quantidade.textContent, item.id) }

        const spanBotaoMais = document.createElement('span')
        spanBotaoMais.classList.add('material-symbols-outlined')
        spanBotaoMais.textContent = 'add'
        botaoMais.appendChild(spanBotaoMais)

        const valor = document.createElement('p')
        valor.classList.add('produto-nome')
        valor.classList.add('font-2-m')
        valor.textContent = `R$ ${valorDinheiro(item.preco)}`

        const botaoLixeira = document.createElement('button')
        botaoLixeira.classList.add('lixeira-carrinho')

        const spanBotaoLixeira = document.createElement('span')
        spanBotaoLixeira.classList.add('material-symbols-outlined')
        spanBotaoLixeira.textContent = 'delete'
        botaoLixeira.appendChild(spanBotaoLixeira)

        divImgNome.appendChild(img)
        divImgNome.appendChild(nomeProduto)
        divQtdValor.appendChild(botaoMenos)
        divQtdValor.appendChild(quantidade)
        divQtdValor.appendChild(botaoMais)
        divQtdValor.appendChild(valor)
        divQtdValor.appendChild(botaoLixeira)
        div.appendChild(divImgNome)
        div.appendChild(divQtdValor)
        section.appendChild(div)
        listaCarrinho.appendChild(section)

        valorTotalCarrinho.textContent = `Valor Total R$ ${valorDinheiro(valorTotal)}`
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

function alteraQtd(operacao, valor, id) {
    if (operacao === '-'){
      if(parseInt(valor) > 1) {
        novoValor = parseInt(valor) - 1
      } else {
        novoValor = parseInt(valor)
      }
    } else {
      novoValor = parseInt(valor) + 1
    }

    const carrinho = JSON.parse(localStorage.getItem('carrinho'))
    quantidade.textContent = novoValor

    novoCarrinho = carrinho.map( itemCarrinho => {
      if(!itemCarrinho.id === id) {
          return itemCarrinho
      } else {
          itemCarrinho.quantidade = novoValor
          return itemCarrinho
      }
    })

    novoValorTotal = novoCarrinho.reduce((total, item) => {
      return total + (item.preco * item.quantidade)
    }
    , 0)

    const valorTotalCarrinho = document.getElementById('valorTotal')
    valorTotalCarrinho.textContent = `Valor Total R$ ${valorDinheiro(novoValorTotal)}`

    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho))
}

function valorDinheiro(valor) {
  return valor.toFixed(2).replace('.', ',')
}


