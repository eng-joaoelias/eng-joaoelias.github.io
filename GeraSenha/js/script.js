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
    const simbolos = "#%&'()*+,-./:;<>=?@^_{|}~/";
    return simbolos[Math.floor(Math.random()*simbolos.length)]
}

const gerarSenha = (getLetraMinuscula, getLetraMaiuscula, getNumero, getSimbolo) => {
    
    let senha = "";

    const comprimentoSenha = 15;

    const geradores = [
        getLetraMaiuscula,
        getLetraMinuscula,
        getNumero,
        getSimbolo
    ];

    for (let index = 0; index < comprimentoSenha; index = index + geradores.length) {

        geradores.forEach( () => {
            const valAleatorio = geradores[Math.floor(Math.random() * geradores.length)]();
            senha = senha + valAleatorio;
        });

    }

    senha = senha.slice(0, senha.length);

    btnSenhaGerada.style.display = "block";
    btnSenhaGerada.querySelector("h4").innerText = senha;
}

//Eventos
btnGeraSenha.addEventListener("click", () => {
    gerarSenha(getLetraMaiuscula,
        getLetraMinuscula,
        getNumero,
        getSimbolo);
}
);
