//While - Estrutura básica
let i = 0;
while(i <= 10){
    console.log(i)
    i++
}


//Um exemplo legal com uma função que gera um número aleatório
// function random(min, max){
//     const num = Math.random() * (max - min) + min;
//     return Math.floor(num);
// }

// const min = 1;
// const max = 50;
// let rand = random(min, max
//     )
// while(rand !== 10){
//     rand = random(min, max)
//     if(rand === 10){
//         console.log('Número: ', rand)
//         console.log('Número 10 encontrado, encerrando procura.')
//     }else{
//         console.log('Número: ', rand)
//     }
// }

console.log('##################################################')

//Agora com a estrutura DO WHILE

let num = 0

do{
    console.log('Do while executando')
    num++

}while(num != 4);

