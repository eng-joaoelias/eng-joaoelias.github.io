const txtPesquisa = document.querySelector(".busca");
const btnBusca = document.querySelector(".btn");

setTimeout(() => {
    txtPesquisa.focus();
}, 0.1);

function pesquisar() {
    if (txtPesquisa.value != "") {
        const linkPesquisa = "https://www.google.com.br/search?q=" + txtPesquisa.value;
        window.open(linkPesquisa, "_self");
    }
}

btnBusca.addEventListener("click", pesquisar);

txtPesquisa.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        pesquisar();
    }
});
