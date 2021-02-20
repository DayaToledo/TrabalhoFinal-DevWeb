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
    let nome = document.createElement("p");
    let email = document.createElement("p");
    let cpf = document.createElement("p");
    let endereco = document.createElement("p");
    let local = document.createElement("p");
    
    titulo.innerHTML = "DADOS DO COMPRADOR";
    nome.innerHTML = `Nome: ${dadosUser[0].nome}`;
    email.innerHTML = `E-mail: ${dadosUser[0].email}`;
    cpf.innerHTML = `CPF: ${dadosUser[0].cpf}`;
    endereco.innerHTML = `Endereço: Rua ${dadosUser[0].rua}, Nº ${dadosUser[0].num}, Bairro ${dadosUser[0].bairro}`;
    local.innerHTML = `${dadosUser[0].cidade}, ${dadosUser[0].estado}, ${dadosUser[0].pais}`;

    dadosBox.appendChild(titulo);
    dadosBox.appendChild(nome);
    dadosBox.appendChild(email);
    dadosBox.appendChild(cpf);
    dadosBox.appendChild(endereco);
    dadosBox.appendChild(local);

    if (pedidos.length == 0) {
        let linha = document.createElement("tr");
        let mensagem = document.createElement("td");
        mensagem.innerHTML = "Nenhum produto adicionado ao carrinho!";
        mensagem.colSpan = "3";

        linha.appendChild(mensagem);
        pedidosBox.appendChild(linha);
    } else {

        let valorTotal = 0;
        for (let index = 0; index < pedidos.length; index++) {
            let linha = document.createElement("tr");
            let colunaImg = document.createElement("td");
            let imagem = document.createElement("img");
            let colunaName = document.createElement("td");
            let colunaPreco = document.createElement("td");

            valorTotal = valorTotal + pedidos[index].price;

            imagem.src = path + pedidos[index].image;
            colunaName.innerHTML = pedidos[index].name;
            colunaPreco.innerHTML = "R$ " + trataFloat(pedidos[index].price);

            colunaImg.appendChild(imagem);
            linha.appendChild(colunaImg);
            linha.appendChild(colunaName);
            linha.appendChild(colunaPreco);
            pedidosBox.appendChild(linha);
        }
        let linha = document.createElement("tr");
        let totalText = document.createElement("td");
        let espace = document.createElement("td");
        let total = document.createElement("td");

        linha.id = "total";
        totalText.innerText = "TOTAL";
        total.innerHTML = "R$ " + trataFloat(valorTotal);

        linha.appendChild(totalText);
        linha.appendChild(espace);
        linha.appendChild(total);
        pedidosBox.appendChild(linha);


        let quantFrete = freteAleatorio();
        let frete = document.createElement("h4");
        frete.innerHTML = `O seu pedido irá chegar em ${quantFrete} dias!`

        main.appendChild(frete);
    }
}

function freteAleatorio() {
    let max = Math.floor(11);
    let min = Math.ceil(1);

    return Math.floor(Math.random() * (max - min) + min);
}

recupera();