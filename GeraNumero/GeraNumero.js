const btnGera = document.querySelector("#generate");
const resultado = document.querySelector("#result > span");
const minValor = document.querySelector("#min");
const maxValor = document.querySelector("#max");
const qtdNumero = document.querySelector("#quantity");

function geraNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function geraNumeroNaString(min, max, qtdNumeros) {
    let numeros = [];
    for (let index = 1; index <= qtdNumeros; index++) {
        const numGerado = geraNumero(min, max);
        if (numeros.indexOf(numGerado) == -1) {
            numeros.push(numGerado);   
        }
        else{
            index--;
        }
    }
    return numeros.sort((a, b) => a - b);
}

btnGera.addEventListener("click", ()=>{
    resultado.textContent = "";
    resultado.textContent = geraNumeroNaString(parseInt(minValor.value), parseInt(maxValor.value), parseInt(qtdNumero.value)).join(" - ");
});
