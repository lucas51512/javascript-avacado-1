class View{
  constructor(elemento){
    this._elemento = elemento
  }

  update(model){
    this._elemento.innerHTML = this.template(model);
  }

  template(model){
    throw new Error("Você deve subrescrever este método em seu template");
  }
}
