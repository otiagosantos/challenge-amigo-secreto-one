//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

let amigoInputElement = document.querySelector("#amigo");
let adicionarAmigoButtonElement = document.querySelector(".input-wrapper .button-add");

function adicionarAmigo() {
    if(amigoInputElement.value == "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(amigoInputElement.value);

    console.log(amigos);
    amigoInputElement.value = ""
}