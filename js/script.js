const btn_adicionar = document.getElementById("btn_adicionar");

// 1. função pra adicionar itens na lista
function adicionar_item() {
    const texto = prompt('Digite o item:');
    if (!texto) return; // evita itens vazios

    // criação do <li>
    const novo_item = document.createElement("li");
    novo_item.textContent = texto;

    const lista = document.getElementById("lista");
    lista.appendChild(novo_item);

    // criação do botão de deletar
    const btn_deletar = document.createElement("button");
    btn_deletar.textContent = "X";
    btn_deletar.onclick = remover_item;
    novo_item.appendChild(btn_deletar);
    btn_deletar.classList.toggle("btn_remover");

    // chama a função de riscar
    novo_item.onclick = riscar_item;
    
}

// 2. função pra riscar/desriscar os itens
function riscar_item(evento) {
    // evento.currentTarget refere ao <li> que foi clicado
    evento.currentTarget.classList.toggle("concluido");
}

// 3. função pra remover os itens da tela
function remover_item(evento) {
    evento.stopPropagation(); // impede que o clique no X chame a função de riscar
    
    // evento.target é o botão X
    const item_pai = evento.target.parentElement;
    item_pai.remove(); // apaga tudo
}

// 4. função pra limpar a lista toda
function limpar_lista() {
    const lista = document.getElementById("lista");

    // verifica se a lista não tá vazia antes de tentar limpar
    if (lista.children.length === 0) {
        alert("A lista já está vazia");
        return;
    }

    if (confirm("Tem certeza de que deseja apagar todos os itens da lista?")) {
        lista.innerHTML = "";
    }
}


