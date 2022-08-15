/*
    PROTOTYPES
    Em Javascript, são mecanismos por meio dos quais objetos herdam determinadas
    funcionalidades de outros objetos. Indo além, imagine que um objeto é criado 
    apartir de uma função criadora. É mais performático atribuir funcionalidades
    dentro dessa função criadora, como um prototype dessa função, ao invés de 
    incluir essa funcionalidade como uma das propriedades do objeto. Assim, cada
    vez que um novo objeto for criado apartir dessa função construtora, este objeto 
    terá acesso ao prototype dessa função, criando uma cadeia de heranças entre objetos
    diretamente relacionados. Vejamos:
*/

/*
    EXEMPLO 1 - Função criaPessoa
*/
    //Função construtora
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
    //Prototipando uma funcionalidade dentro da função construtora
Pessoa.prototype.dizNomeCompleto = function(){
    return this.nome+" "+this.sobrenome;
}
    //Criando um objeto apartir da função construtora
const pessoa1 = new Pessoa('Igor', 'Silva');

    //Chamando a funcionalidade prototipada na função construtora
console.log(pessoa1.dizNomeCompleto())