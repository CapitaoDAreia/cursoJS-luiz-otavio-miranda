/*
    CLASSES - Em JavaScript, classes são meramente fictícias, ou syntactic sugar. O uso de classes em JS não introduz um novo modelo de herança
    de orientação a objetos, mas simula um novo método, quando por debaixo dos panos o que acontece é a manipulação dos protótipos.

    Então, quando uso classes, na verdade uso funções construtoras e opero com elas, só que de uma forma mais simples.
*/

//Declaração
class Teste{
    constructor(par1, par2){
        this.par1 = par1;
        this.par2 = par2;
    }

    metodo(){return 'Sou um método'}
}
const teste1 = new Teste('parametro 1', 'parametro 2')
console.log(teste1)

console.log(' ')
console.log(' ')
console.log(' ')


//Explorando
class Pessoa{
    constructor(nome, sobrenome, genero){ //O constructor é a forma como a class recebe os parâmetros
        this.nome = nome;
        this.sobrenome = sobrenome;
        Object.defineProperty(this, 'genero', {
            configurable: false,
            value: genero,
        })
    }
    
    falar(texto){
        if(texto) return this.nome+" diz: "+texto;
    }

    comer(comida){
        if(comida) return this.nome+' está comendo '+comida
    }
}

const pessoa1 = new Pessoa('Igor', 'Silva', 'M');
console.log(pessoa1.falar('Eu sou lindo!'))
console.log(pessoa1.comer('feijão'))