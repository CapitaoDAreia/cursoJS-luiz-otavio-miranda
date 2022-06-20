/*
    MÉTODOS ÚTEIS PARA OBJETOS

*/
/*
    Object.assign - Permite copiar valores de objetos | Uma alternativa mais fácil seria o spread operator(...)

*/
const produto = {nome: 'Produto', preco: 20};
const caneca = Object.assign({}, produto); //Um exemplo
const teste = {};
Object.assign(teste, produto) //Um segundo exemplo
console.log(teste)
console.log(caneca)

/*
    Object.keys - Retorna as chaves das propriedades do objeto

*/
console.log(Object.keys(produto))

/*
    Object.values - Retorna os valores das propriedades do objeto
    
*/
console.log(Object.values(produto))


/*
    Objects.entries - Retorna as chaves e valores das propriedades do objeto

*/
console.log(Object.entries(produto))

/*
    Object.freeze - Congela o objeto impedindo que novas alterações sejam feitas no mesmo

*/
Object.freeze(caneca)

/*
    Object.getOwnPropertyDescriptor - Retorna o property descriptor de uma propriedade de um objeto
    Podemos utilizar, como já visto, o método defineProperty e o método defineProperties para determinar
    o property descriptor de uma determinada propriedade de um objeto, especificando quais serão os critérios
    para manipulação dessa propriedade. 
*/
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));