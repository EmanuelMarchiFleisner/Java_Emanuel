class NegociacaoController{

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacoes = new Negociacoes();
    }

    adciona(event) {
        event.preventDefault();
        const data = DateConverter.paraData(this._inputData.value);
        console.log(data);
        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        this._negociacoes.adiciona(negociacao);

        console.log(this._negociacoes.paraArray());

    }

    _limparFormulario(); {
        this._inputData = '01/01/2020';
        this._inputQuantidade = 1
        this._inputValor = 2
}
}