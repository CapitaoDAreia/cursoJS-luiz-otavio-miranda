/*
    Exercício 6 - Escreva uma função que receba dois números e retorne o maior deles
*/
// console.log('############# if-else #############')
//Utilizando If else
function maiorNumero(num1, num2){
    if(num1 > num2) return `${num1}`
    return `${num2}`
}
console.log(maiorNumero(10, 90))

console.log('####### operador ternário ########')


//Utilizando operador ternário
function maiorNumero2(num1, num2){
    return num1 > num2 ? num1 : num2;
}
console.log(maiorNumero2(100, 2))

console.log('######## arrowF e operador ternário ######')


//Utilizando arrow function reduzida com operador ternário
let maiorNumero3 = (num1, num2) => num1 > num2 ? num1: num2;
console.log(maiorNumero3(200, 300))


