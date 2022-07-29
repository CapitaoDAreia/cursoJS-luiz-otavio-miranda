/*
        PROMISES
*/
/*
    Uma Promise é um objeto utilizado para processamento assíncrono. Significa exatamente
    promessa. É um objeto que representa a eventual conclusão ou falha de uma operação assíncrona. 
    É um obeto retornado para o qual você adiciona callbacks, em vez de passar callbacks para uma função
    
*/

/*
    EXEMPLO 1 - vendo funcionamento de uma promisse

    EXEMPLO 2 - vamos criar retornos assíncronos/aleatórios de funções
*/


const umaPromessa = new Promise((resolve, reject) => {
    let soma = 1 + 1;
    if(soma ===2){
        resolve('Promessa resolvida.');
    }else{
        reject('Promessa rejeitada.');
    }
});

console.log('Esperando promise...');

umaPromessa.then(resultado=>{
    console.log('Valor do then: '+resultado);
}).catch(erro=>{
    console.error('Valor do catch: '+erro);
}).finally(()=>{
    console.log('Finally: Esterei sempre aqui independente do resultado da promise.')
})








//Gera número aleatório
function rand(min, max){
    min*=1000;
    max*=1000;
    return Math.floor(Math.random()*(max-min)+min);
}
//Gera retorno com base em número aleatório
function geraRetorno(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    })
}
//Simulação de retornos assíncronos e execução de funções em cadeia, com Promises
geraRetorno('Conectando com o banco de dados', rand(3, 6))
    .then(resposta => {
        console.log(resposta);
        return geraRetorno('Buscando dados na base', rand(2, 3))
    })
    .then(resposta =>{
        console.log(resposta);
        return geraRetorno('Tratando dados na base', rand(1, 2))
    })
    .then(resposta =>{
        console.log(resposta);
        return geraRetorno('Operação concluída com sucesso', rand(2, 4))
    })
    .then(resposta =>{
        console.log(resposta)
    })
    .catch()







 