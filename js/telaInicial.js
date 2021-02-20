let carrinho = [];

function trataFloat(valor) {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
}

function getList(array) {
    let list = [];
    for (let index = 0; index < array.length; index++) {
        list.push(array[index]);
    }
    return list;
}

function getProduct(id) {
    for (let index = 0; index < products.length; index++) {
        if (id == index) return products[index];
    }
    return console.log("item não encontrado!");
}

function setCategory() {
    let categoryList = getList(category);

    let sidebar = document.querySelector("ul");
    categoryList.sort();
    for (let index = 0; index < categoryList.length; index++) {
        let item = document.createElement("li");
        item.innerHTML = categoryList[index];
        item.id = index;
        item.onclick = filtrarCategoria;

        sidebar.appendChild(item);
    }
}

function setProducts() {
    let productsList = getList(products);
    let main = document.querySelector("main");
    const path = "../img/"

    for (let index = 0; index < productsList.length; index++) {
        let imagem = document.createElement("img");
        imagem.src = path + productsList[index].image;
        let titulo = document.createElement("h2");
        titulo.innerHTML = productsList[index].name;
        let preco = document.createElement("p");
        preco.innerHTML = "R$ " + trataFloat(productsList[index].price);
        let botao = document.createElement("button");
        botao.type = "submit";
        botao.innerHTML = "COMPRAR";
        botao.onclick = comprar;
        botao.id = index;

        let div = document.createElement("div");
        div.id = `${productsList[index].name}${index}`
        div.appendChild(imagem);
        div.appendChild(titulo);
        div.appendChild(preco);
        div.appendChild(botao);
        main.appendChild(div);
    }
}

function comprar(event) {
    let product = getProduct(this.id);
    carrinho.push(product);
    event.preventDefault();
}

function setCarrinho() {
    let enviar = JSON.stringify(carrinho);
    sessionStorage.setItem('carrinho', enviar);
}

function filtrarCategoria() {
    let categoryId = this.id;

    for (let index = 0; index < products.length; index++) {
        if (categoryId != products[index].category) {
            let product = document.getElementById(`${products[index].name}${index}`);
            product.style.display = "none";
        } else {
            let product = document.getElementById(`${products[index].name}${index}`);
            product.style.display = "flex";
        }
    }
    deixaSelecionado(this.id);
}

function mostraTudo() {
    for (let index = 0; index < products.length; index++) {
        let product = document.getElementById(`${products[index].name}${index}`);
        product.style.display = "flex";
    }
    deixaSelecionado("todos");
}

function deixaSelecionado(id) {
    let lis = document.querySelectorAll("li");
    lis.forEach(li => {
        li.style.backgroundColor = "#8380B6";
        li.style.color = "#000022";
    });

    let liAtual = document.getElementById(id)
    liAtual.style.backgroundColor = "#44487B";
    liAtual.style.color = "#FFFFFF";
}

function start() {
    setCategory();
    setProducts();
}

start();