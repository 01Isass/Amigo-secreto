//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];



function adicionarAmigo() {
    let verificar = document.getElementById("amigo");

    if (verificar.value == "") {
        alert("Por favor, insira um nome");
    } else {
        amigos.push(verificar.value);
        verificar.value = "";
    }
    console.log(amigos);
    listaAmigos();
}

function listaAmigos() {
    let lista = document.getElementById("listaAmigos"); // aqui eu estou falando que os elementos que aparecerem na variável 'lista' vai estar dentro do elemento com a ID: 'listaAmigos', que no caso é a tag UL
    lista.innerHTML = ""; //Isso evita a duplicação, pois se não tivesse isso ele iria sempre que adicionar um novo nome repetir o nome que foi colocado anteriormente, pois estamos usando o '+=' que faz com que ele não exclua o nome anteriormente digitado, mas na hora de chamar a função again, ele NÃO vai excluir o nome de antes, e vai repetir a estrutura for, fazendo com que esreva again o primeiro nome digitado
     for(i = 0; i < amigos.length; i++) {
        lista.innerHTML +="<li>"+ amigos[i]+"</li>"; // o += é pra quando for chamar de novo essa função, ele não excluir o nome que foi inserido anterioemente
     } 
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Adicione um amigo primeiro");
    } else {
        let numero = Math.floor(Math.random() * amigos.length);

        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        lista.innerHTML +="<li> Seu amigo secreto é: "+ amigos[numero]+"!</li>";
    }
}
