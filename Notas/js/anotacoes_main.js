import AnotacoesAPI from "./AnotacoesAPI.js";
import AnotacoesView from "./AnotacoesView.js";

const aplicacao = document.querySelector("#app");
const view = new AnotacoesView(aplicacao, {
    quandoNotaSelect() {

    }
});