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

//Eventos
btnGeraSenha.addEventListener("click", () => {

}
);
