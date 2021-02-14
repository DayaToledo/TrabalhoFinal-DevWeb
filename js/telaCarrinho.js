let dados = [];

function recupera() {
    dados = JSON.parse(sessionStorage.getItem('carrinho'));
    console.log(dados);
    setProducts();
}

function setProducts() {
    let main = document.querySelector("main");
    const path = "../img/"

    for (let index = 0; index < dados.length; index++) {
        let imagem = document.createElement("img");
        imagem.src = path + dados[index].image;
        let titulo = document.createElement("h2");
        titulo.innerHTML = dados[index].name;
        let preco = document.createElement("p");
        preco.innerHTML = "R$ " + dados[index].price;

        let div = document.createElement("div");
        div.appendChild(imagem);
        div.appendChild(titulo);
        div.appendChild(preco);
        main.appendChild(div);
    }
}

function finalizar() {
    
}

recupera();