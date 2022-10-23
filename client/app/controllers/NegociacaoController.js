class NegociacaoController{

    constructor() {
        const $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacoes = new Bind (new Negociacoes(), new NegociacoesView('#negociacoes'),
            'adiciona',
            'esvazia'
            );
        this._service = new NegociacaoService();

        this._mensagem = new Bind ( new Mensagem(), new MensagemView('#mensagemView'),'texto');

    }

    adiciona(event) {
        event.preventDefault();
        try {
            this._negociacoes.adiciona(this._criaNegociacao());
            this._mensagem.texto = 'Negociação adicionada com sucesso!';
            this._limparFormulario();
        }
        catch (err) {
            console.log(err)
            if (err instanceof DataInvalidaException){
                this._mensagem.texto = err.message;
            } else {
                this._mensagem.texto = 'Um erro inesperado aconteceu. Entre em contato com o suporte'
            }

        }
    }

    _limparFormulario() {
        this._inputData.value = '01/01/2020';
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
        this._mensagem.texto = 'Negociações apagadas com sucesso';
    }

    importaNegociacoes() {
        console.log('Importando Negociações');
        this._service.obterNegociacoesDaSemana((err, negociacoes) => {
            if (err) {
                this._mensagem.texto = 'Não foi possível obter as negociações da semana.'
            }
            negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao))

            this._mensagem.texto = 'Negociações importadas com sucesso.'
        });
    }
}