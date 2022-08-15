/*
    FILTER
*/
//A função filter serve para filtrarmos arrays.
//Essa função, para filtrar, recebe automaticamente uma função como parâmetro, que por sua vez recebe também automaticamente três parâmetros:
//os VALORES, os ÍNDICES e o prórpio ARRAY sobre o qual ela itera
//Para funcionar, é necessário passar para a filter uma função com a condição a ser aplicada como filtro:


//EXEMPLO1: Retornando números maiores que 10
console.log('##### EXEMPLO 1: Retornando números maiores que 10 #####')
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter((valor) => {
    return valor > 10
});
console.log(numerosFiltrados)

//Perceba que a filter é chamada no array números e que a filter recebe uma função anônima, que recebe o parâmetro valor.
//Dentro dessa função está a condição, que trabalha com valores booleanos para aplicar o filtro sobre o valor

//EXEMPLO2: Filtrando idade
console.log(' ')
console.log('##### EXEMPLO 2: Filtrando idade #####')
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result)
console.log(' ')



//EXEMPLO3: Filtrando múltiplos critérios
console.log('##### EXEMPLO 3: Filtrando critérios a seguir: #####')

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];
console.log(' ')
console.log('Pessoas que têm o nome com 5 letras ou mais')
const pessoasComNomeGrande = pessoas.filter((obj) => {
    return obj.nome.length >= 5;
})
console.log(pessoasComNomeGrande)

console.log(' ')
console.log('Pessoas com mais de 50 anos')
const pessoasComMaisDe50 = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComMaisDe50)

console.log(' ')
console.log('Pessoas cujo nome termina com "a"')
const pessoasComFinalEmA = pessoas.filter(obj => obj.nome.endsWith('a'))
console.log(pessoasComFinalEmA)

