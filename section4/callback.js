//perceba que as funçõe estão dispostas, cada uma recebendo um parâmetro callback, cada uma executando o parâmetro callback se callback avaliar true.
function dizOi(callback){
    console.log('Oi')
    if(callback) callback();
}
function perguntaTudoBem(callback){
    console.log('Tudo bem?')
    if(callback) callback();
}
function perguntComoVai(callback){
    console.log('Como vai?')
    if(callback) callback();
}
/*
    Primeiro teste
*/
//Callback hell - Diversas chamadas encadeadas
//Perceba que a função dizOi é executada, e como parâmetro nós passamos uma função anônima que executa a função perguntaComoVai, que por sua vez também possui uma função como parâmetro e assim sucessivamente...
console.log('')
console.log('##### Execução do primeiro teste #####')
dizOi(function(){
    perguntComoVai(function(){
        perguntaTudoBem()
    })
})


/*
    Segundo teste
*/
//Driblando a callback hell 
//Neste caso, ao invés de declarar as funções de forma anônima, eu declaro fora, da maneira padrão, e após issofaço as chamadas dessas funções como parâmetros, recursivamente.
console.log(' ')
console.log('##### Execução do segundo teste #####')


//Chamando dizOi com callback de dizOi
dizOi(dizOiCallback) 

//callback de dizOi, que é uma função que chama perguntaComoVai
function dizOiCallback(){
    perguntComoVai(perguntComoVaiCallback)
}
//callback de perguntaComoVai, que é uma função que chama perguntaTudoBem
function perguntComoVaiCallback(){
    perguntaTudoBem()
}