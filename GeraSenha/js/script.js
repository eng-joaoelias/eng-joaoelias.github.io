//Selecao de Elementos

const btnGeraSenha = document.querySelector("#generatepassword");
const btnSenhaGerada = document.querySelector("#generated-password");

//Funcoes
const getLetraMinuscula = () =>{
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}

const getLetraMaiuscula = () =>{
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}

const getNumero = () =>{
    return Math.floor(Math.random()*10).toString;
}

const getSimbolo = () =>{
    const simbolos = "#%&'()*+,-./:;<>=?@[\]^_{|}~/";
    return simbolos[Math.floor(Math.random()*simbolos.length)]
}

//Eventos
btnGeraSenha.addEventListener("click", () => {

}
);
