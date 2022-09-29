var valor = document.querySelector("input#valEntrada");
var numeros = [];
var cont = 0;
var somaValoresInformados = 0;
var saidaDados = document.querySelector("select#listaSaida");
var divEstatisticas = document.querySelector("div#estatisticas");

function isNumero(valor) {
    if (Number(valor) >= 1 && Number(valor) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(valor, lista) {
    if (lista.indexOf(Number(valor)) != -1) { //indice invalido. se o indice for -1, o valor nao existe
        return true;
    }
    else {
        return false;
    }
}

function adicionarNumero() {
    if (isNumero(valor.value) && !inLista(valor.value, numeros)) {
        //window.alert("Tudo ok");
        numeros.push(valor.value); //adiciona o valor na lista
        let item = document.createElement("option");
        item.text = `Valor ${valor.value} adicionado!`;
        saidaDados.appendChild(item);
        divEstatisticas.innerHTML = "";
    } else {
        window.alert("ERRO: número inválido ou já encontrado na lista!");
    }
    valor.value = "";
    valor.focus();
}

function estatisticas() {
    if (numeros.length == 0) {
        window.alert("ERRO: lista vazia");
    } else {
        maior = numeros[0];
        menor = numeros[0];
        for (let pos in numeros) {
            if (numeros[pos] > maior) {
                maior = numeros[pos];
            }
            if(numeros[pos] < menor){
                menor = numeros[pos];
            }
            somaValoresInformados += Number(numeros[pos]);
        }
        divEstatisticas.innerHTML = `Quantidade de valores na lista: ${numeros.length}<br>`;
        divEstatisticas.innerHTML += `Maior valor informado: ${maior}<br>`;
        divEstatisticas.innerHTML += `Menor valor informado: ${menor}<br>`;
        divEstatisticas.innerHTML += `Soma de todos os valores informados: ${somaValoresInformados}<br>`;
        divEstatisticas.innerHTML += `Média dos valores informados: ${somaValoresInformados / numeros.length}<br>`;
        somaValoresInformados = 0;
    }

}
