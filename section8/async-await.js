/*
    ASYNC & AWAIT

    São palavras-chave que constroem uma função assíncrona, permitindo que o 
    comportamento assíncrono e baseado em promessas seja escrito em um estilo mais limpo, 
    evitando a necessidade de configurar explicitamente as cadeias de promessas, tornando
    assim o código menos verboso.
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
//EXEMPLO VERBOSO

// geraRetorno('Conectando ao servidor...', rand(1, 5))
//     .then(retorno=>{
//         console.log(retorno);
//         return geraRetorno('Conexão efetuada...', rand(1, 5));
//     })
//     .then(retorno=>{
//         console.log(retorno);
//         return geraRetorno('Procurando dados...', rand(1, 5));
//     })
//     .then(retorno=>{
//         console.log(retorno);
//         return geraRetorno('Operação bem sucedida', rand(1, 5));
//     })
//     .then(retorno=>{
//         console.log(retorno)
//     })
//     .catch(e=>{
//         console.log(new Error('impossível realizar conexão | '+e))
//     })

//EXEMPLO MENOS VERBOSO
async function cadeiaDeRetorno(){
    try{
        const fase1 = await geraRetorno('Conectando ao servidor...', rand(1, 5));
        console.log(fase1);

        const fase2 = await geraRetorno('Conexão efetuada...', rand(1, 5));
        console.log(fase2);

        const fase3 = await geraRetorno('Operação efetuada com sucesso...', rand(1, 5));
        console.log(fase3)
    } catch(e){
        console.log('Impossível realizar conexão | ' + e)
    }
}
cadeiaDeRetorno()