
function adicionarCarrinho(id) {

    console.log({id})
    const url = '/carrinho'
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(id));
  }