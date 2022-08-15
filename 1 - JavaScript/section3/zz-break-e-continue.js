// Continue - Exemplo com array
/*
    No exemplo, iteramos um array até encontrar o número que faz a condição ser verdadeira
    Uma vez que a condição é avaliada como verdadeira, executamos o CONTINUE
    Neste caso, todo o resto do código é esquecido e a iteração volta para o início e continua
    apartir do próximo número
*/
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
pular = 8;


for(let numero of myArray){
    if(numero === pular){
        console.log('Achei o',numero)
        continue;
    }
    console.log(numero);
}

// Break - Sai do laço
console.log(' ')
console.log('------Exemplo com break--------')
console.log(' ')

const myOtherArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i of myArray){
    if(i === 5){
        console.log('Achei o 5, parando...')
        break;
    }
    console.log(i)    
}