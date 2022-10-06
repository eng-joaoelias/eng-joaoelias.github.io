function inserirDadosDisplay(component) {
    let tela = document.querySelector(".display");
    if (component.value !== "C" && component.value !== "←") {
        if (component.value === "X") {
            component.value = "*";
        }
        tela.value = tela.value + component.value;
    }
    if(component.value === "C"){
        tela.value = "";
    }
    if(component.value === "←"){
        let exibicao = tela.value
        exibicao = exibicao.substr(0, exibicao.length-1);
        tela.value = exibicao;
    }
}

function resultadoExpressao() {
    let tela = document.querySelector(".display");
    if (tela) {
        tela.value = eval(tela.value);
    }
}