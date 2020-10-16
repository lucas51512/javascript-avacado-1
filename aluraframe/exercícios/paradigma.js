// class Codigo{
//   constructor(texto){
//     if(!this._valida(texto)) throw new Error(`O texto ${texto} não é um código válido`);
//     this._texto = texto;
//   }
//
//   _valida(texto){
//     return /\D{3}-\D{2}-\d{2}/.test(texto);
//   }
//   get texto(){
//     return this._texto;
//   }
// }
//
//
// let codigo1 = new Codigo("GWZ-JJ-12");
// console.log(codigo1.texto);
// let codigo2 = new Codigo("1X1-JJ-12");
// console.log(codigo2.texto);


// let codigo = "G5tZ-ZZ-12";
// function validaCodigo(codigo){
//   if(/\D{3}-\D{2}-\d{2}/.test(codigo)){
//       alert('Código Válido');
//   }else{
//     alert('Código inválido');
//   }
//
// }
//
// validaCodigo('GWZ-JJ-12');
// validaCodigo('1X1-jj-12');


class Codigo {
  constructor(texto){
    if(!this._valida(texto)) throw new Error(`O código ${texto} não é válido`);
    this._texto = texto;
}

  _valida(texto){
    return new RegExp(/\D{3}-\D{2}-\d{2}/).test(texto)
  }

  get texto(){
    return this._texto
  }
}
let codigo1 = new Codigo("GJF-FD-35");
console.log(codigo1.texto);
let codigo2 = new Codigo("18H-JF-HIK");
console.log(codigo2.texto);
