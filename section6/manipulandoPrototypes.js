/*
    MANIPULANDO PROTOTYPES

*/
/*
    Manipulando prototypes (criando cadeias) em objetos literais
*/
const objA = { 
    chaveA: 'A'
};
const objB = {
    chaveB: 'B'
};
const objC = {
    chaveC: 'C'
};
                    //alvo  proto
Object.setPrototypeOf(objA, objB)
Object.setPrototypeOf(objB, objC)
const protoA = Object.getPrototypeOf(objA);
console.log(protoA)
        /*
            Perceba que temos três objetos e, usando a função setPrototypeOf, foi possível
            encadear cada um dos objetos como prototype dentro do outro.
        */



/*
    Manipulando prototypes em funções construtoras e objetos criados

*/
    //Prototipando objetos apartir de funções construtoras
function Produto(nome, preco, id){
    this.nome = nome;
    this.preco = preco;
    this.id = id;
}
Produto.prototype.descreveProduto = function(){
    return "Produto "+this.nome+", de ID: "+this.id+", que custa R$ "+this.preco+",00";
}
const p1 = new Produto('xícara', 10, '0001');
console.log(p1.descreveProduto())

    //Atribuindo a um objeto literal o prototype de uma função construtora
const p2 = {
    nome: 'Garrafa',
    preco: 20,
    id: '0002'
}
Object.setPrototypeOf(p2, Produto.prototype)
console.log(p2.descreveProduto())

    //Atribuindo a um objeto criado pelo método OBJECT.CREATE o prototype de uma função construtora.
    //Usando PropertyDescriptor para configurar as propriedades do objeto.

const p3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Produto X'
    },
    preco: {
        value: 300,
        writable: true,
        configurable1: true,
    },
    id: {
        value: '0003',
        writable: true,
        configurable: true,
    }   
})

console.log(p3.descreveProduto())
