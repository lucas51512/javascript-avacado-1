class NegociacaoController {

  constructor() {

    let $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
  
    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(),
      new NegociacoesView($('#negociacoesView')),
      'adiciona', 'esvazia')     
   
    this._mensagem = new Bind(
      new Mensagem(), 
      new MensagemView($('#mensagemView')),
      'texto');
  }

  adiciona(event) {
    event.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._mensagem.texto = 'Negociacao adicionada com sucesso';

    this._limpaFormulario();
  }

  apaga() {
    this._listaNegociacoes.esvazia();
    this._mensagem.texto = 'Negociações apagadas com sucesso';
  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputValor.value,
      this._inputQuantidade.value
    )
  }

  importaNegociacoes() {
    let service = new NegociacaoService();
    service.obterNegociacoesDaSemana((err, negociacoes) => {
        if (err) {
          this_mensagem.texto = err;
          err
        }

        negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
        this._mensagem.texto = 'Negocições adicionadas com sucesso';
    });
  }

  _limpaFormulario() {
    this._inputData.value = '';
    this._inputValor.value = 0.0;
    this._inputQuantidade.value = 1;

    this._inputData.focus();
  }
}