class NegociacaoController{

    constructor() {
        const $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        //this._negociacoes = new Negociacoes(model => this._negociacoesView.update(model));
        this._negociacoesView = new NegociacoesView('#negociacoes');
        const self = this;
        this._negociacoes = new Proxy(new Negociacoes(), {
            get(target, prop, receiver){
                if (typeof (target[prop]) == typeof (Function) && ['adiciona', 'esvazia']. includes(prop)) {
                    return function () {
                        console.log(`{prop} disparou a armadilha`)
                        target[prop].apply(target, arguments)

                        self._negociacoesView.update(target);
                    };
                } else {
                    return target[prop];
                }
            }
        })
        this._negociacoesView = new NegociacoesView('#negociacoes');
        const self = this;
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView('#mensagemView')
        this._mensagemView.update (this._mensagem);
    }

    adciona(event) {
        event.preventDefault();

        this._negociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso!';
        this._negociacoesView.update(this._negociacoes);

        this._mensagemView.update(this._mensagem);

        this._limparFormulario();
    }

    _limparFormulario() {
        this._inputData.value = '2002/01/01';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 2.0;
        this._inputData.focus();
}
    _criaNegociacao(){
        return new Negociacao(
             DateConverter.paraData(this._inputData,value),
             parseInt(this._inputQuantidade.value),
             parseFloat(this._inputValor.value),
        );
    }

    apaga() {
        this._negociacoes.esvazia();
        this._negociacoesView.update(this._negociacoes);
        this._mensagem.texto = 'Negociações apagadas';
        this._mensagemView.update(this._mensagem);
    }
}