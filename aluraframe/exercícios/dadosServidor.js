let dadosServidor = [
    [
        [new Date(), 1, 100],
        [new Date(), 2, 200]
    ],
    
    [
        [new Date(), 1, 150],
        [new Date(), 2, 300]
    ],

    [
        [new Date(), 3, 50],
        [new Date(), 1, 100]
    ]
];

let listaNegociacoes = dadosServidor.reduce((novoArray, array) => {
    return novoArray.concat(array)
}, []).map(dado => {
    new Negociacao(new Date(dado.data), dado.quantidade, dado.valor)
});