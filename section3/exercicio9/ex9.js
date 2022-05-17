/*
    Variáveis 
*/
const paragrafo = document.querySelector('body section div p');
const botaoIniciar = document.querySelector('input[value="Iniciar"]');
const botaoPausar = document.querySelector('input[value="Pausar"]');
const botaoZerar = document.querySelector('input[value="Zerar"]');

/*
Event Listeners com funções anônimas
*/
botaoIniciar.addEventListener('click', function(){
    
})
botaoPausar.addEventListener('click', function(){
    
})
botaoZerar.addEventListener('click', function(){
    
})
/*
Funções
*/

function mostraHoraExata(){
    let datas = new Date() 
    return datas.toLocaleTimeString('pt-br', {
        hour12: false
    })
}
setInterval(function(){
    paragrafo.innerHTML =  `${mostraHoraExata()}`

}, 1000)


