class NegociacaoService {
    obterNegociacoesDaSemana(cb) {
        const x = new XMLHttpRequest();
        x.open("GET", 'negociacoes/semana');

        x.onreadystatechange = () => {
            if (x.readyState == 4) {
                if (x.status == 200) {
                    
                    cb(null, JSON.parse(x.responseText)
                    .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                } else{
                    console.log(x.responseText);
                    cb('Não foi possível obter as negociações da semana', null);
                }
            }
        }

        x.send();
    }
}