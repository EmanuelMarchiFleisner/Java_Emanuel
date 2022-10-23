const controller = new NegociacaoController();

document.querySelector('.form').addEventListener('submit', controller.adiciona.bind(controller));

document.querySelector('#botao-apaga').addEventListener('click', controller.apaga.bind(controller));

document.querySelector('#botao-importa')
    .addEventListener('click', controller.importaNegociacoes.bind(controller));