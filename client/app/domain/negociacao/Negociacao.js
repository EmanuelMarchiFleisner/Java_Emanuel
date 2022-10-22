class Negociacao {
    constructor(_data, _quantidade, _valor) {
        Object.assign(this, {_quantidade, _valor});
        this._data = new Date(_data.getTime());
        // this._quantidade = quantidade;
       // this._valor = valor;
        object.freeze(this);
    }

    get Volume() {
        return this._quantidade * this._valor;
    }
    get Data() {
        //return this._data;
        return new Date(this._data.getTime());

    }
    get Quantidade() {
        return this._quantidade;
    }
    get Valor() {
        return this._valor;

    }
}