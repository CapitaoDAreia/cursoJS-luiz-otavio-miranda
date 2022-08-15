
console.log('Iniciando contagem de tempo:')
//Cria função que retorna hora
function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-br', {
        hour12: false
    })
}
//Usando setInterval, que joga o resultado da função no console
//de acordo com o tempo que foi passado
const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000)

//Anula o intervalo de tempo da setInterval depois de um determinado período
//de tempo especificado
setTimeout(function(){
    clearInterval(timer)
}, 4000)

setTimeout(function(){
    console.log('Finalizando contagem de tempo')
}, 4100)

