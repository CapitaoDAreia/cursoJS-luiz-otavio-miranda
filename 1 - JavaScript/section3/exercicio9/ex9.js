/*
    Variáveis 
*/
const paragrafo = document.querySelector('body section div p');
const botaoIniciar = document.querySelector('input[value="Iniciar"]');
const botaoPausar = document.querySelector('input[value="Pausar"]');
const botaoZerar = document.querySelector('input[value="Zerar"]');
let incrementaSegundos = 1
let contador;
let piscador;
/*
Event Listeners com funções anônimas
*/
botaoIniciar.addEventListener('click', function(){
    iniciar()
})
botaoPausar.addEventListener('click', function(){
    pausar()
})
botaoZerar.addEventListener('click', function(){
    zerar()
})
/*
Funções
*/

function trazOsSegundos(incrementaSegundos){
    let data = new Date(incrementaSegundos * 1000) //A multiplicação é necessária por que a variável incrementaSegundos está sendo incrementada com uma unidade por vez, o que representaria para a função date uma unidade de segundo. No entanto, o que precisa ser passado como parâmetro é milésimo de segundos.
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'UTC'
    })
}

function iniciar(){
    paragrafo.classList.remove('timer-pausado')
    paragrafo.style.opacity = "1"
    clearInterval(contador)
    clearInterval(piscador)

    contador = setInterval(function(){
        paragrafo.innerHTML = trazOsSegundos(incrementaSegundos)
        incrementaSegundos ++;
    }, 1000)
}

function pausar(){
    paragrafo.classList.add('timer-pausado')
    clearInterval(contador)
    piscador = setInterval(function(){
        if(paragrafo.style.opacity == 0){
            paragrafo.style.opacity = "1"
        }else{
            paragrafo.style.opacity = "0"
        }
    }, 1000)
}

function zerar(){
    paragrafo.classList.remove('timer-pausado')
    paragrafo.innerHTML = "00:00:00"
    incrementaSegundos = 1;
    paragrafo.style.opacity = "1"
    clearInterval(contador)
    clearInterval(piscador)
}



