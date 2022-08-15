/*
    MAIS SOBRE OBJETOS
    -defineProperty()
    -defineProperties()

    Ambos são métodos de igual finalidade, definir ou modificar uma propriedade diretamente
    dentro do objeto, estabelecendo algumas regras de configuração e manipulação dessa
    propriedade. 
*/

/*
    defineProperty

    Repare que um objeto é retornado pela constructor function abaixo, essa constructor recebe três
    parâmetros. Um deles é recebido, mas possui definição específica dentro do objeto, através
    do método defineProperty. Para esta propriedade, as características serão definidas de forma
    exclusiva, confome seguem as configurações especificadas.
*/

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave do objeto em iterações ou console.log ou returns
        value: estoque, //define o valor da propriedade
        writable: true, //determina se é possível alterar a propriedade
        configurable: true //determina se a propriedade é ou não configurável
    })
}

/*
    defineProperties
    
    Repare que, com esse método, podemos configurar diversas propriedades ao mesmo tempo, no entanto,
    no quesito propósito e funcionalidade não temos mudanças.
*/

function Produto2(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true,
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true,
        },
        estoque: {
            enumerable: false,
            value: estoque,
            writable: false,
            configurable: false,
        }
    })
}

const p2 = new Produto2('boneca', 20, 3);

console.log(p2.estoque)

for(let i in p2){
    console.log(i)
}

