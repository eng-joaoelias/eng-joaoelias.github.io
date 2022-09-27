function chuteRandomico() {
    let chute = Number.parseInt(Math.random() * (100 - 0) + 0);
    let valInformado = Number(window.document.querySelector("#valChute").value);
    let txtResultado = window.document.querySelector("#resultadoChute");
    if (chute == valInformado) {
        txtResultado.innerHTML = `Você acertou! O número sorteado foi ${chute}`;
    } else {
        txtResultado.innerHTML = `Errou! pensei no valor ${chute}`;
    }
}
