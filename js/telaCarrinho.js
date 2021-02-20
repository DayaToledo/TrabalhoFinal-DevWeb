let pedidos = [];
let dadosUser = [];

function trataFloat(valor) {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
}

function recupera() {
    pedidos = JSON.parse(sessionStorage.getItem('carrinho'));
    setProducts();
}

function setProducts() {
    let pedidosTable = document.querySelector("#pedidos");
    const path = "../img/"

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
        pedidosTable.appendChild(linha);
    }
}

function getForm() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let cpf = document.getElementById("cpf").value;
    let rua = document.getElementById("rua").value;
    let num = document.getElementById("num").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    let pais = document.getElementById("pais").value;

    let dados = {
        "nome": `${nome}`,
        "email": `${email}`,
        "cpf": `${cpf}`,
        "rua": `${rua}`,
        "num": `${num}`,
        "bairro": `${bairro}`,
        "cidade": `${cidade}`,
        "estado": `${estado}`,
        "pais": `${pais}`,
    }

    dadosUser.push(dados);
}

function finalizar() {
    getForm();

    let enviar = JSON.stringify(pedidos);
    sessionStorage.setItem('pedidos', enviar);
    enviar = JSON.stringify(dadosUser);
    sessionStorage.setItem('dadosUser', enviar);
}

recupera();