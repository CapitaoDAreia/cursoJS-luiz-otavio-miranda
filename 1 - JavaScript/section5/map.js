/*
    Método MAP

    Semelhantemente ao método filter, o método MAP incide sobre um array, e neste caso, através de uma função
    de callback também podemos estabelecer condições de retorno para cada um dos itens, os retornos são armazenados
    para um array que podemos chamar de array resultante.
*/
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

/*
    Exemplos:

    Retorne apenas uma string com o nome da pessoa.
    Remova apenas a chave nome do objeto.
    Adicione uma chave id em cada objeto.

*/

const newOBJ = [...pessoas]; 
//Criado um novo array com os objetos de mesmo valor para não afetar os valores do array original.

console.log(newOBJ)


console.log(' ')


console.log('## Retorne apenas uma string com o nome da pessoa. ##')
const primeiroExemplo = newOBJ.map(obj => obj.nome)
console.log(primeiroExemplo)


console.log(' ')


console.log('## Remova apenas a chave nome do objeto. ##')
const segundoExemplo = newOBJ.map(valor =>{
    delete valor.nome
    return valor;
})
console.log(segundoExemplo)


console.log(' ')


console.log('## Adicione uma chave id em cada objeto. ##')
const terceiroExemplo = newOBJ.map((valor, indice) => {
    valor.id = indice;
    return valor;
})
console.log(terceiroExemplo)

