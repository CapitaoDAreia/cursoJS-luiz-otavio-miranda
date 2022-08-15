//Esse método de função é o único que sofre hoisting
myFunction()
function myFunction(){
    console.log('Sou uma função que sofre hoisting.')
}

//Arrow function (não sofre hoisting)
const myArrow = () =>{
    console.log('Sou uma arrow function!')
}
myArrow()
/*
    Funções são FIRST CLASS OBJECTS, isso significa que podem ser armazenadas em variáveis, arrays e objetos.
*/
//Função em variável
const funcaoEmVariavel = function(){
    console.log('Sou uma função dentro de uma variável')
}
funcaoEmVariavel()
//Funções em objeto
const myFunctionOBJ = {
    funcao1() {
        console.log('Sou a primeira função do OBJ')
    },
    fucao2() {
        console.log('Sou a segunda função do OBJ')
    },
    funcao3() {
        console.log('Sou a terceira função do OBJ')
    }
}
myFunctionOBJ.funcao3()
