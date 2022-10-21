class NegociacaoController{

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

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

        let diaMesAno = DateConverter.paraTexto(data);
        console.log(diaMesAno);

        console.log(negociacao);

    }
}