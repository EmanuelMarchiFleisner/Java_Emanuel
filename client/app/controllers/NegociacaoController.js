class NegociacaoController{

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

    }

    adciona(event) {
        event.preventDefault();
        let data = new Date(...this._inputData.value.split('-').map(function (item, indice){
            if (indice == 1) {
                return item -1;
            }
            return item;
        }));
        console.log(data);

        let negociacao = new Negociacao(data, this._inputQuantidade.value, this._inputValor.value);

        console.log(this._inputData.value);
        console.log(this._inputQuantidade.value);
        console.log(this._inputValor.value);
    }
}