/*
    Try - Executado quando não há erros 
    Catch - Executado quando há erros
*/
console.log('---------Primeiro Exemplo-----------')
try{
    console.log('Execução do programa inicia')
    console.log(funcaoQueNaoExiste())
    console.log('Execução do programa continua')
    console.log('Execução do programa finaliza')
}catch(error){
    console.log('Deu ruim, mano!')
    let erro = error
}



/*
    Finally - Executado sempre
*/
console.log('---------Segundo Exemplo-----------')
try{
    console.log('Execução do programa inicia')
    console.log(funcaoQueNaoExiste())
    console.log('Execução do programa continua')
    console.log('Execução do programa finaliza')
}catch(error){
    console.log('Deu ruim, mano!')
    let erro = error
} finally{
    console.log('Finally: Execução do programa continua')
    console.log('Finally: Execução do programa finaliza')
}