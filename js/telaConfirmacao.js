let pedidos = [];
let dadosUser = [];

function recupera() {
    pedidos = JSON.parse(sessionStorage.getItem('pedidos'));
    dadosUser = JSON.parse(sessionStorage.getItem('dadosUser'));
    setDados();
}

function setDados() {
    const path = "../img/"
    let dadosBox = document.querySelector("#dadosBox");
    let pedidosBox = document.querySelector("#pedidosBox");

    let nome = document.createElement("p");
    nome.innerHTML = `Nome: ${dadosUser[0].nome}`;
    let email = document.createElement("p");
    email.innerHTML = `E-mail: ${dadosUser[0].email}`;
    let cpf = document.createElement("p");
    cpf.innerHTML = `CPF: ${dadosUser[0].cpf}`;
    let endereco = document.createElement("p");
    endereco.innerHTML = `Endereço: Rua ${dadosUser[0].rua}, Nº ${dadosUser[0].num}, Bairro ${dadosUser[0].bairro}`;
    let local = document.createElement("p");
    local.innerHTML = `${dadosUser[0].cidade}, ${dadosUser[0].estado}, ${dadosUser[0].pais}`;

    dadosBox.appendChild(nome);
    dadosBox.appendChild(email);
    dadosBox.appendChild(cpf);
    dadosBox.appendChild(endereco);
    dadosBox.appendChild(local);

    for (let index = 0; index < pedidos.length; index++) {
        let imagem = document.createElement("img");
        imagem.src = path + pedidos[index].image;
        let titulo = document.createElement("h2");
        titulo.innerHTML = pedidos[index].name;
        let preco = document.createElement("p");
        preco.innerHTML = "R$ " + pedidos[index].price;

        let div = document.createElement("div");
        div.appendChild(imagem);
        div.appendChild(titulo);
        div.appendChild(preco);
        pedidosBox.appendChild(div);
    }

    
    let quantFrete = freteAleatorio();
    let frete = document.createElement("h2");
    frete.innerHTML = `O seu pedido irá chagar em ${quantFrete} dias!`
    pedidosBox.appendChild(frete);

}

function freteAleatorio() {
    let max = Math.floor(11);
    let min = Math.ceil(1);

    return Math.floor(Math.random() * (max - min) + min);
}

recupera();