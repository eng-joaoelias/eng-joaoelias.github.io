export default class AnotacoesView {
    constructor(root, { quandoNotaSelect, quandoNotaAdd, quandoNotaEdit, quandoNotaDel } = {}) {
        this.root = root;
        this.quandoNotaSelect = quandoNotaSelect;
        this.quandoNotaAdd = quandoNotaAdd;
        this.quandoNotaEdit = quandoNotaEdit;
        this.quandoNotaDel = quandoNotaDel;
        this.root.innerHTML = `
            <div class="anotacoes__sidebar">
                <button class="anotacoes__add" type="button"><strong>+</strong> Anotação</button>
                <div class="anotacoes__list"></div>
            </div>
            <div class="anotacoes__preview">
                <input class="anotacoes__title" type="text" placeholder="Nova anotação...">
                <textarea class="anotacoes__body" spellcheck="true" placeholder="Entre aqui com o texto da anotação..."></textarea>
            </div>
        `;

        const btnAddNota = this.root.querySelector(".anotacoes__add");
        const entradaTitulo = this.root.querySelector(".anotacoes__small-title");
        const entradaTexto = this.root.querySelector(".anotacoes__body");

        btnAddNota.addEventListener("click", () => {
            this.quandoNotaAdd();
        });

        [entradaTitulo, entradaTexto].forEach(campoEntrada => {
            campoEntrada.addEventListener("blur", () => {
                const tituloAtualizado = entradaTitulo.value.trim();
                const textoAtualizado = entradaTexto.value.trim();

                this.quandoNotaEdit(tituloAtualizado, textoAtualizado);
            });
        });
    }

    _criarItemListaHTML(id, titulo, texto, updated) {
        const MAX_TAM_TXT = 60;

        return `
            <div class="anotacoes__list-item" data-anotacao-id="${id}">
                <div class="anotacoes__small-title">${titulo}</div>
                <div class="anotacoes__small-body">
                    ${texto.substring(0, MAX_TAM_TXT)}
                    ${texto.length > MAX_TAM_TXT ? "..." : ""}
                </div>
                <div class="anotacoes__small-updated">
                    ${updated.toLocaleString(undefined, { dateStyle: "full", timeStyle:"short" })}
                </div>
            </div>
        `;
    }
}