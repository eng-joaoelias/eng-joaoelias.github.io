function criarItem(){
    const item = document.createElement('label');
    item.classList.add("todo__item");

    item.innerHTML = `
        <input type = "checkbox">
        <div></div>
        <input type = "button" value = "X">
    `
}
