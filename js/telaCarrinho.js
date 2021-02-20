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
    const path = "../img/";

    if (pedidos.length == 0) {
        let linha = document.createElement("tr");
        let mensagem = document.createElement("td");
        mensagem.innerHTML = "Nenhum produto adicionado ao carrinho!";
        mensagem.colSpan = "3";

        linha.appendChild(mensagem);
        pedidosTable.appendChild(linha);

        let inputs = document.querySelectorAll("input");
        inputs.forEach(input => {
            input.disabled = "false";
        });
        document.querySelector("select").disabled = "false";

        document.querySelector("main > a").style.display = "none";
    } else {

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

    if ((nome == null || nome == "")
        || (email == null || email == "")
        || (cpf == null || cpf == "")
        || (rua == null || rua == "")
        || (num == null || num == "")
        || (bairro == null || bairro == "")
        || (cidade == null || cidade == "")
        || (estado == null || estado == "")
        || (pais == null || pais == "")) {
        alert("Todos os campos do formulário devem ser preenchidos!");
        return(false);

    } else {
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

        let botao = document.querySelector("main > a");
        botao.href= "telaConfirmacao.html"; 

        return(true);
    }
}

function finalizar(event) {
    if (getForm()) {
        let enviar = JSON.stringify(pedidos);
        sessionStorage.setItem('pedidos', enviar);
        enviar = JSON.stringify(dadosUser);
        sessionStorage.setItem('dadosUser', enviar);
    }
}

recupera();