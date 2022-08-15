/*
    FILTER + MAP + REDUCE
    - Retorne a soma do dobro de todos os pares:
    - Filtrar os pares
    - Dobrar os valores
    - Reduzir (somar todos)

*/  

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]; 
const numerosMod = [...numeros];

//Filtrando os pares com o método filter
const pares = numerosMod.filter(valor => valor%2==0)

//Dobrando os números pares com o método map
const dobroPares = pares.map((valor) => {
    return valor*2;
})

//Reduzindo o array com o dobro dos pares a soma de todos os elementos com o método reduce.
const somaDobroPares = dobroPares.reduce((multiplicador, valor)=>{
    return multiplicador += valor;
}, 0)

//Saída com o resultado
console.log(' ')
console.log('Dado o array: ', numeros, ', retorne a soma do dobro dos pares.')
console.log(' ')
console.log('Pares: ', pares)
console.log('Dobro dos pares: ', dobroPares)
console.log('Soma do dobro dos pares: ', somaDobroPares)
console.log(' ')
