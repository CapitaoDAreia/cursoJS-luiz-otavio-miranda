/*Atribuição via desestruturação*/

//Exemplo 1
let a = 'Posição 1';
let b = 'Posição 2';
let c = 'Posição 3';
let d = 'Posição 4'; 
const letras = [a, b, c, d]; //Meu array
[d, e, f] = letras; //Atribuição do meu array em elementos soltos
console.log('Saída exemplo 1:', d, e, f)

//Exemplo 2
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90] //Declarandoo array
let [primeiro, segundo, terceiro, quarto, ...etc] = numeros //desestruturando array nas variáveis à esquerda
console.log('Saída exemplo 2:', primeiro, segundo, terceiro, etc) //exibindo resultado da reestruturação

// Exemplo 3
let [valor1, , valor3, , valor5] = numeros //Atribuindo somente os ímpares
console.log('Saída exemplo 3:', valor1, valor3, valor5)
