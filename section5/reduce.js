/*
    REDUCE

    O método reduce incide sobre um array, de forma bem semelhante ao filter e map. Com o reduce, podemos reproduzir 
    o que reproduzimos com o filter e o map, embora não seja o ideal. Esse método, executa uma função provida pelo desenvolvedor
    sobre cada um dos elementos do array e resulta em um único valor, por isso chamamos esse método de reduce.
*/

//Exemplo de uso

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoaMaisVelha = pessoas.reduce(function(multiplicador, valor){
    if(multiplicador.idade > valor.idade) return multiplicador;
    return valor;
})
console.log(pessoaMaisVelha)

/*
    COMENTÁRIOS:
    Esse método recebe um parâmetro a mais que os anteriores, que podemos chamar de multiplicador.
    O multiplicador, quando não especificado após a função provida, assume o valor do primeiro elemento do
    array sobre o qual incide o método reduce.

    
*/