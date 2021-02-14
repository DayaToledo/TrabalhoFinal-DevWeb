function getList(array) {
    let list = [];
    for (let index = 0; index < array.length; index++) {
        list.push(array[index]);
    }
    return list;
}

function setCategory( ) {
    let categoryList = getList(category);

    let sidebar = document.querySelector("ul");
    categoryList.sort();
    for (let index = 0; index < categoryList.length; index++) {
        let item = document.createElement("li");
        item.innerHTML = categoryList[index];
        sidebar.appendChild(item);
    }
}

function setProducts( ) {
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
        div.appendChild(imagem);
        div.appendChild(titulo);
        div.appendChild(preco);
        div.appendChild(botao);
        main.appendChild(div);
    }
}

function start() {
    setCategory();
    setProducts();
}

start();