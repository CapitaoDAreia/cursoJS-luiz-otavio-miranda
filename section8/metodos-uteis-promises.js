/*
    Explorando métodos úteis para promises
*/
/*
    Promise.all - Tenta resolver todas promises passadas em um array e devolve um array com a resolução. Se uma delas cair em catch, retorna somente o erro.
    Promise.race - Retorna sempre a promise que se resolver/der erro primeiro.
    romise.resolve - Ver depois
    Promise.reject - Ver depois
*/
function rand(min, max){
    min*=1000;
    max*=1000;
    return Math.floor(Math.random()*(max-min)+min);
}
function geraRetorno(msg, tempo){
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('Cai no erro');
                return;
            } 

            resolve(msg);

        }, tempo);
    })
}

//Promise.all
const promises = [
    // 'Primeiro valor',
    geraRetorno('Promise 1', rand(1, 5)),
    geraRetorno('Promise 2', rand(1, 5)),
    geraRetorno('Promise 3', rand(1, 5)),
    geraRetorno(10, rand(1, 5)),
    // 'Outro valor'
];

Promise.all(promises)
    .then(valor=>{
        console.log("All: "+valor);
    }).catch(erro=>{
        console.log("All: "+erro);
    });

//Promise.race
Promise.race(promises).then(valor=>{
    console.log("Race: "+valor);
}).catch(erro=>{
    console.log("Race: "+erro);
});

//Promise 
