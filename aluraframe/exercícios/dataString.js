let hoje = new Date();
let outraData = new Date('2016/05/17');

console.log(outraData.getDate());
console.log(outraData.getMonth());
console.log(outraData.getFullYear());

let otraDataOutraManeira = new Date(2016, 4, 17);
let dataString = "17-05-2016";

let date = new Date.this.value(dataString.split("-"));
