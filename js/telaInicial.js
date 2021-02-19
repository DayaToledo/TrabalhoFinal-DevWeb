let carrinho = [];

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
        let link = document.createElement("a");
        link.id = index;
        link.onclick = filtrarCategoria;
        let item = document.createElement("li");
        item.innerHTML = categoryList[index];

        link.appendChild(item);
        sidebar.appendChild(link);
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
        preco.innerHTML = "R$ " + productsList[index].price;
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
}

function mostraTudo() {
    for (let index = 0; index < products.length; index++) {
        let product = document.getElementById(`${products[index].name}${index}`);
        product.style.display = "flex";

    }
}

function start() {
    setCategory();
    setProducts();
}

start();