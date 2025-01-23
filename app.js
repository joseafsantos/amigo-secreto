//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById("amigo").value.trim(); // Remove espaços em branco nas extremidades

    // Verificar se o valor é vazio
    if (amigo === "") {
        alert("Por favor, informe o nome de um amigo");
        return; // Sai da função sem adicionar à lista
    }

    // Verificar se o nome já está na lista
    if (amigos.includes(amigo)) {
        alert("Este nome já foi adicionado à lista");
        return; // Sai da função
    }

    // Adicionar à lista e atualizar
    amigos.push(amigo);
    document.getElementById("amigo").value = ""; // Limpa o input
    atualizarAmigos(); // Atualiza a lista exibida no HTML
}
function atualizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    // Verifica se ainda há amigos na lista
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione mais amigos para realizar o sorteio.");
        return;
    }

    // Sorteia um amigo
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Remove o amigo sorteado da lista
    amigos.splice(amigos.indexOf(amigoSorteado), 1);

    // Atualiza a lista de amigos exibida no HTML
    atualizarAmigos();

    //Oculta a lista de amigos
    document.getElementById("listaAmigos").style.display = "none";

    // Exibe o amigo sorteado no <ul id="resultado">
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa resultados anteriores
    let li = document.createElement("li");
    li.textContent = `O amigo sorteado foi: ${amigoSorteado}`;
    resultado.appendChild(li);
}
