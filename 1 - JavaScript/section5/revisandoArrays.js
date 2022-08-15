/*
    REVISÃO DE ASPECTOS BÁSICOS EM ARRAYS
*/

//valor por referência
console.log('## Valor por referência: ##')
const myArray = new Array('Igor', 'Kawany', 'Rhavi', 'Lunna');
let myNewArray = myArray;
console.log('Referenciando o myArray:', myNewArray)

console.log('')

myNewArray[0] = 'Igor Silva'
console.log('Alterando a referência e interferindo no myArray:', myNewArray)

console.log('')


myNewArray = [...myArray] //Spreadf Operator
console.log('Copiando o myArray para o MyNewArray:', myNewArray)
