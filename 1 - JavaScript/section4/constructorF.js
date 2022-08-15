/*
    FUNÇÕES CONSTRUTORAS
*/

//Basicamente, as funções construtoras fazem o mesmo que as funções fábrica.
//Ambas são responsáveis por retornar um objeto.
//No entanto, com as funções construtoras a tarefa se torna mais fácil, dado o fato de que são feitas para isso.

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function(){
        return `Eu sou ${this.nome}`
    };
}

const p1 = new Pessoa('Igor', 'Silva'); //Para criar o objeto usando a função construtora, é necessário usar a palavra new.
const p2 = new Pessoa('Kawany', 'Mendes'); //Para criar o objeto usando a função construtora, é necessário usar a palavra new.

console.log(`${p1.nome} e ${p2.nome} constituem um casal de namorados.`)
console.log(`Quando casarem, constituirão a família ${p1.sobrenome} ${p2.sobrenome}`)

console.log(p2.metodo())

//Veja que a função construtora, sem a necessidade de instruí-la, como é o caso da factory, já retorna automaticamente um objeto.