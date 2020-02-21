class Negociacao {
  constructor(data, quantidade, valor){

    this._data = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor = valor;

    Object.freeze(this);// congela a instância do objeto
  }

    get volume(){
      return this._quantidade * this._valor;
    }

    get data(){
      return new Date(this._data.getTime())
    }

    get quantidade(){
      return this._quantidade
    }

    get valor(){
      return this._valor;

    }
  var negociação = new Negociacao( new Date(), 1, 100);
  negociacao.data.setDate(negociacao.data.getDate() + 1);
}
