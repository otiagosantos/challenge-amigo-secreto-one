//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

let amigoInputElement = document.querySelector("#amigo");
let listaAmigosElement = document.querySelector("#listaAmigos");
let resultadoElement = document.querySelector("#resultado");

function adicionarAmigo() {
    if (amigoInputElement.value == "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(amigoInputElement.value);
    renderizaListaAmigos();

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

function sortearAmigo() {
    if(amigos.length == 0) {
        alert("A lista não tem nomes.");
        return
    }
    let tamanhoLista = amigos.length;

    let numeroSorteado = parseInt(Math.random() * tamanhoLista);

    renderizaResultado(amigos[numeroSorteado])
}

function renderizaResultado(nomeResultado) {
   resultadoElement.innerHTML = nomeResultado; 
}