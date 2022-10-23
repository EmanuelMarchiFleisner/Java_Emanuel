class ProxyFactory {
    static create(object, prop, armadilha) {

        return new Proxy(objeto, {
            get(target, prop, receiver) {
                if (ProxyFactory._ehFuncao(target[prop]) && ['adiciona', 'esvazia'].includes(prop)) {
                    return function () {
                        console.log(`{prop} disparou a armadilha`)
                        target[prop].apply(target, arguments)
                        armadilha(target);
                    };
                } else {
                    return target[prop];

                }
            },
            set(target, prop, value, receiver) {
                const updated = Reflect.set(target, prop, value)
                if (prop.includes(prop)) armadilha(target);
                return updated;
            },
        });
    }
    static _ehFuncao(fn) {
        return typeof fn == typeof Function;

    }
}
