let pedidos = [];
let dadosUser = [];

function recupera() {
    pedidos = JSON.parse(sessionStorage.getItem('carrinho'));
    setProducts();
}

function setProducts() {
    let section = document.querySelector("section");
    const path = "../img/"

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
        section.appendChild(div);
    }
}

function getForm(){
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