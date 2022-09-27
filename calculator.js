function somar() {
    var num1 = Number(document.getElementById("val1").value);
    var num2 = Number(document.getElementById("val2").value);
    var resultado = num1 + num2;
    document.getElementById("resultadoSoma").innerHTML = `Resultado: ${resultado}`
}

function subtrair() {
    var num1 = Number(document.getElementById("val1").value);
    var num2 = Number(document.getElementById("val2").value);
    var resultado = num1 - num2;
    document.getElementById("resultadoDiferenca").innerHTML = `Resultado: ${resultado}`
}

function multiplica() {
    var num1 = Number(document.getElementById("val1").value);
    var num2 = Number(document.getElementById("val2").value);
    var resultado = num1 * num2;
    window.document.getElementById("resultadoMultiplica").innerHTML = `Resultado: ${resultado}`;
}

function divide() {
    var num1 = Number(document.getElementById("val1").value);
    var num2 = Number(document.getElementById("val2").value);
    if (num2 !== 0) {
        var resultado = num1 / num2;
        window.document.getElementById("resultadoDivisao").innerHTML = `Resultado: ${resultado}`;
    } else {
        window.document.getElementById("resultadoDivisao").innerHTML = "ERRO.\n\nNão é possível dividir por zero";
    }
}

function fatorial() {
    var num1 = Number(document.getElementById("val1").value);
    var num2 = Number(document.getElementById("val2").value);
    var resultado = 1;
    for (let index = num1; index >=1; index--) {
        resultado = resultado*index;
    }
    window.document.getElementById("resFatorial").innerHTML = `Fatorial de ${num1} = ${resultado}` + "<br><br>";
    resultado = 1;
    for (let index = num2; index >=1; index--) {
        resultado = resultado*index;
    }
    window.document.getElementById("resFatorial").innerHTML = window.document.getElementById("resFatorial").innerHTML +  `Fatorial de ${num2} = ${resultado}`;
}
