/*
    CONCATENANDO ARRAYS
*/
//Realizando a concatenação de Arrays com a função concat

const num1 = new Array(1, 2, 3);
const num2 = new Array(4, 5, 6);
const num3 = num1.concat(num2);

console.log('Exemplo função concat:', num3)


//Realizando a concatenação com o rest/spread operador (...)
const num4 = [...num1, ...num2]
console.log('Exemplo rest operator:', num3)

