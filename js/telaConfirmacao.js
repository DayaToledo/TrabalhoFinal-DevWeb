let pedidos = [];
let dadosUser = [];

function trataFloat(valor) {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
}

function recupera() {
    pedidos = JSON.parse(sessionStorage.getItem('pedidos'));
    dadosUser = JSON.parse(sessionStorage.getItem('dadosUser'));
    setDados();
}

function setDados() {
    const path = "../img/"
    let main = document.querySelector("main");
    let dadosBox = document.querySelector("#dadosBox");
    let pedidosBox = document.querySelector("#pedidosBox");

    let titulo = document.createElement("h3");
    titulo.innerHTML = "Dados do comprador";
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

    dadosBox.appendChild(titulo);
    dadosBox.appendChild(nome);
    dadosBox.appendChild(email);
    dadosBox.appendChild(cpf);
    dadosBox.appendChild(endereco);
    dadosBox.appendChild(local);

    let pedidosTitulo = document.createElement("h3");
    pedidosTitulo.innerHTML = "Pedidos";
    //pedidosBox.appendChild(pedidosTitulo);

    for (let index = 0; index < pedidos.length; index++) {
        let linha = document.createElement("tr");
        let colunaImg = document.createElement("td");
        let imagem = document.createElement("img");
        let colunaTitulo = document.createElement("td");
        let colunaPreco = document.createElement("td");

        imagem.src = path + pedidos[index].image;
        colunaTitulo.innerHTML = pedidos[index].name;
        colunaPreco.innerHTML = "R$ " + trataFloat(pedidos[index].price);

        colunaImg.appendChild(imagem);
        linha.appendChild(colunaImg);
        linha.appendChild(colunaTitulo);
        linha.appendChild(colunaPreco);
        pedidosBox.appendChild(linha);
    }


    let quantFrete = freteAleatorio();
    let frete = document.createElement("h4");
    frete.innerHTML = `O seu pedido irá chegar em ${quantFrete} dias!`

    main.appendChild(frete);

}

function freteAleatorio() {
    let max = Math.floor(11);
    let min = Math.ceil(1);

    return Math.floor(Math.random() * (max - min) + min);
}

recupera();