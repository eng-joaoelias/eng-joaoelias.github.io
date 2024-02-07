let banco = [
    {'tarefa': 'Estudar JS', 'status': ''},
    {'tarefa': 'NetFlix', 'status': 'checked'}
]

function criarItem(tarefa, status, indice){
    const item = document.createElement('label');
    item.classList.add("todo__item");

    item.innerHTML = `
        <input type = "checkbox" ${status} data-indice = ${indice}>
        <div>${tarefa}</div>
        <input type = "button" value = "X" data-indice = ${indice}>
    `

    document.getElementById("todoList").appendChild(item);
}

function limparTarefas(){
    const lista = document.querySelector("#todoList");
    while (lista.firstChild) {
        lista.removeChild(lista.lastChild);
    }
}

function atualizarTela(){
    limparTarefas();
    banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice));
}

const adicionarItem = (evento) => {
    const tecla = evento.key;
    const tarefaDescricao = evento.target.value;
    if (tecla === "Enter") {
        banco.push({'tarefa': tarefaDescricao, 'status': 'checked'});
        atualizarTela();
        tarefaDescricao = ""; //limpar a tarefa
    }
}

function removerItem(indice){
    banco.splice(indice,1);
    atualizarTela();
}

const clickItem = (evento) => {
    const elemento = evento.target;
    if (elemento.type === 'button') {
        const indice = elemento.dataset.indice;
        removerItem(indice);
    }
}

document.querySelector("#newItem").addEventListener("keypress", adicionarItem);
document.querySelector("#todoList").addEventListener("click", clickItem);

atualizarTela();
