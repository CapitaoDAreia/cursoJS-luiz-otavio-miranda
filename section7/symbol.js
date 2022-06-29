/*
    SYMBOL - Em JS, Symbol é um tipo primitivo de dados. 
    Possui como duas características principais a imutabilidade e a exclusividade, ou seja, o
    tipo de dados symbol é único, não se repetirá, e além disso, não é possível alterá-lo.
    Pode ser usado como chave de uma propriedade de objeto, afim que que esta seja privada ou de uso
    interno da classe.
*/

//Função Symbol - instanciando symbols.
let mee = Symbol('symbol-1');
let baar = Symbol('symbol-2');
console.log(mee === baar)//Perceba que os dois, apesar de possuir a mesma descrição, não avaliam como iguais.


const Pessoa = function(nome, sobrenome){
    this.nome = nome;
    this[Symbol('sobrenome')] = sobrenome; //Declarando symbol dentro de constructor
}

const pessoa1 = new Pessoa('Igor', 'Silva');

console.log(pessoa1)