function inserirDadosDisplay(component) {
    let tela = document.querySelector(".display");
    if (component.value !== "C" && component.value !== "←") {
        if (component.value === "X") {
            component.value = "*";
        }
        tela.value = tela.value + component.value;
    }
    if (component.value === "C") {
        tela.value = "";
    }
    if (component.value === "←") {
        let exibicao = tela.value
        exibicao = exibicao.substr(0, exibicao.length - 1); //apaga o que esta escrito na tela
        tela.value = exibicao; //exibe na tela o texto da expressao ja apagado
    }
}

function resultadoExpressao(component) {
    let tela = document.querySelector(".display");
    if (tela) { //verifica se a tela esta disponivel
        if (tela.value === "" && component.value === "=") { //impede que o usuario aperte o botao igual sem ter expressao na tela
            tela.value = "";
        }
        else {
            if (eval(tela.value) == Number.POSITIVE_INFINITY || eval(tela.value) == Number.NEGATIVE_INFINITY || eval(tela.value) == NaN) {
                tela.value = "Ind."; //tratamento de indeterminacoes matematicas
            }
            else {
                tela.value = eval(tela.value); //expressao matematica valida
            }
        }
    }
}
