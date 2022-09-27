function geraTabuada() {
    var numTabuada = Number(window.document.querySelector("#valorTabuada").value);
    var cont = Number(1);
    var saidaResultado = window.document.querySelector("#tabuadaResultado");
    saidaResultado.innerHTML = "";
    if (numTabuada == null) {
        window.alert("Digite um valor!");
    } else {
        for (cont = 1; cont <= 10; cont++) {
            var resultadoMult = cont * numTabuada;
            saidaResultado.innerHTML += `${cont} X ${numTabuada} = ${resultadoMult}<br><br>`;
        }
    }
}
