/*
    Parâmetros de uma função 
*/
    console.log(' ')
    console.log('---------OBJETO ARGUMENTS----------')
//Entendendo o objeto ARGUMENTS
function oneFunction(one, two){
    console.log(arguments)
    console.log(one, two)
}
oneFunction(1, 2, 3, 4, 5, 6, 7, 8)

    console.log(' ')
    console.log('---------DESESTRUTURAÇÃO COM PARÂMETRO----------')
//Usando desestruturação como parâmetro | Parametrei um objeto literal, mas poderia ter declarado antes bonitinho, tanto faz.
function secondFuction({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)
}
secondFuction({nome: 'Igor', sobrenome: 'Silva', idade: 23})
    console.log(' ')
    console.log('---------REST OPERATOR----------')
//Entendendo o REST OPERATOR (...)
function thirdFunction(primeiro, segundo, ...resto){
    console.log(primeiro)
    console.log(segundo)
    console.log(resto)
}
thirdFunction(1, 2, 3, 4, 5, 6, 7, 8)