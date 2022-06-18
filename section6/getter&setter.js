/*
    Getters & Setters
    São duas funcionalidades que incidem sobre objetos. Get serve para retornar o valor de uma função
    sem a necessidade de executá-la, operando sobre ela como se fosse uma propriedade do objeto. Set serve
    para manipular uma propriedade através de uma função, podendo condicionar essa manipulação. 

    Além disso, essas duas funcionalidades oferecem a possibilidade de proteger a manipulação dos dados
    de uma propriedade através de condições, possibilita o tratamento de erros na modificação de tais propriedades,
    oferece também maneiras de realizar "coisas por baixo dos panos", etc.
*/

/*
    get
*/

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: true,
        get: function(){
            return estoque;
        },
    })
}

const p1 = new Produto('camiseta', 20, 3);
console.log(p1)
console.log(p1.estoque)



console.log(' ')
console.log('## EXEMPLO 2 ##')
console.log(' ')




/*
    setter
    Neste caso, antes do valor de uma propriedade ser alterada, ela passa pelo setter.
    Nesta passagem, pode-se filtrar e condicionar as alterações, protegendo o objeto
    e garantindo a qualidade dos dados a serem incrementados ou decrementados.
*/

function Produto2(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: true,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log('O estoque precisa ser numérico') 
            }

            estoque = valor;
        }
    })
}



const p2 = new Produto2('calça', 30, 5);
p2.estoque = 500;
console.log(p2.estoque)