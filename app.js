//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

let amigoInputElement = document.querySelector("#amigo");
let listaAmigosElement = document.querySelector("#listaAmigos");

function adicionarAmigo() {
    if (amigoInputElement.value == "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(amigoInputElement.value);
    renderizaListaAmigos();

    console.log(amigos);
    amigoInputElement.value = ""
}

function renderizaListaAmigos() {
    listaAmigosElement.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.innerHTML = amigos[i];
        listaAmigosElement.appendChild(item);
    }
}