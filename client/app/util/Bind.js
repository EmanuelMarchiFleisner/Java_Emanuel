class Bind {
    constructor(model, view, ...prop) {
        const proxy = ProxyFactory.create(model, prop, model => {
            view.update(model);
        });

        view.update(model);
        return proxy;
    }
}