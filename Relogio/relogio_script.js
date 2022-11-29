function mostraHora() {
    let horaAgora = new Date().getHours();
    let minutoAgora = new Date().getMinutes();
    let segundoAgora = new Date().getSeconds();
    if (horaAgora < 10) {
        document.querySelector("#horas").textContent = "0" + `${horaAgora}`;
    } else {
        document.querySelector("#horas").textContent = horaAgora;
    }
    if (minutoAgora < 10) {
        document.querySelector("#minutos").textContent = "0" + `${minutoAgora}`;
    } else {
        document.querySelector("#minutos").textContent = minutoAgora;
    }
    if (segundoAgora < 10) {
        document.querySelector("#segundos").textContent = "0" + `${segundoAgora}`;
    } else {
        document.querySelector("#segundos").textContent = segundoAgora;
    }
}

const relogio = setInterval(() => {
    mostraHora();
}, 0.1);