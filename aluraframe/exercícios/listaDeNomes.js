function exibeNoConsole(lista){
  lista.forEach(item => console.log(item));
}

let listaDeNomes1 = ["Flavio", "Rogers", "Julia"];
let listaDeNomes2 = ["Vieira", "Fernanda", "Gerson"];
exibeNoConsole([].concat(listaDeNomes1, listaDeNomes2, "Rômulo"));
