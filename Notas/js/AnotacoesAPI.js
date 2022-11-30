export default class AnotacoesAPI {
    static getAnotacoes() {
        const anotacoes = JSON.parse(localStorage.getItem("anotacoesapp-notas") || "[]");

        return anotacoes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static salvaAnotacao(anotacaoParaSalvar) {
        const anotacoes = AnotacoesAPI.getAnotacoes();
        const existente = anotacoes.find(anotacao => anotacao.id == anotacaoParaSalvar.id);

        //edição/atualização
        if (existente) {
            existente.titulo = anotacaoParaSalvar.titulo;
            existente.texto = anotacaoParaSalvar.texto;
            existente.updated = new Date().toISOString();
        } else {
            anotacaoParaSalvar.id = Math.floor(Math.random() * 1000000);
            anotacaoParaSalvar.updated = new Date().toISOString();
            anotacoes.push(anotacaoParaSalvar);
        }

        localStorage.setItem("anotacoesapp-notas", JSON.stringify(anotacoes));
    }

    static apagaAnotacao(id) {
        const anotacoes = AnotacoesAPI.getAnotacoes();
        const novasAnotacoes = anotacoes.filter(anotacao => anotacao.id != id);

        localStorage.setItem("anotacoesapp-notas", JSON.stringify(novasAnotacoes));
    }
}