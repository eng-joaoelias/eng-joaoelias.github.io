let banco = [
    {'tarefa': 'Estudar JS', 'status': ''},
    {'tarefa': 'NetFlix', 'status': 'checked'}
]

function criarItem(tarefa, status = ''){
    const item = document.createElement('label');
    item.classList.add("todo__item");

    item.innerHTML = `
        <input type = "checkbox" ${status}>
        <div>${tarefa}</div>
        <input type = "button" value = "X">
    `

    document.getElementById("todoList").appendChild(item);
}

function atualizarTela(){
    banco.forEach(item => criarItem(item.tarefa));
}

atualizarTela();
