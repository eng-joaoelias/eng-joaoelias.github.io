let banco = [
    {'tarefa': 'Estudar JS', 'status': ''},
    {'tarefa': 'NetFlix', 'status': 'checked'}
]

function criarItem(tarefa, status){
    const item = document.createElement('label');
    item.classList.add("todo__item");

    item.innerHTML = `
        <input type = "checkbox" ${status}>
        <div>${tarefa}</div>
        <input type = "button" value = "X">
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
    banco.forEach(item => criarItem(item.tarefa, item.status));
}

atualizarTela();
