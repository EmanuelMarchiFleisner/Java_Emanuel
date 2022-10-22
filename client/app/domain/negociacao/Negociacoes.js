class Negociacoes{
    constructor() {
        this._negociacoes = []
    }

    adiciona (Negociacoes) {
        this._negociacoes.push(Negociacao);
    }

    paraArray() {
        return this._negociacoes;
    }
}