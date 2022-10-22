class DateConverter {
    constructor() {
        throw new Error('Esta class não pode ser instancia');
    }

    static paraTexto (data) {
        //return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    static paraData(texto) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto))  throw new Error('Deve estar no formato de aaaa-mm-dd');
            return new Date(...texto.split('-').map((item, indice) => item - (indice % 2)));

    }
}