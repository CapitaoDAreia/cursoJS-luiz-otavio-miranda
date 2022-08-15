const section = document.querySelector('body > section')
const guardaData = new Date()
function trazDiaExtenso(){
    let diaExtenso
    const diaSemanaExtenso = guardaData.getDay()
    switch(diaSemanaExtenso){
        case 0:
            diaExtenso = 'Domingo'
            return diaExtenso
        case 1:
            diaExtenso = 'Segunda-feira'
            return diaExtenso
        case 2:
            diaExtenso = 'Terça-feira'
            return diaExtenso
        case 3:
            diaExtenso = 'Quarta-feira'
            return diaExtenso
        case 4:
            diaExtenso = 'Quinta-feira'
            return diaExtenso
        case 5:
            diaExtenso = 'Sexta-feira'
            return diaExtenso
        case 6:
            diaExtenso = 'Sábado'
            return diaExtenso
        default:
            diaExtenso = "#Erro!"
            return diaExtenso
    }
}

function trazDiaMes(){
    let diaMesNumero = guardaData.getDate()
    return diaMesNumero
}

function trazNomeExtenso(){
    const numeroMes = guardaData.getMonth()
    let nomeMes
    switch(numeroMes){
        case 0:
            nomeMes = "Janeiro"
            return nomeMes
        case 1:
            nomeMes = "Fevereiro"
            return nomeMes
        case 2:
            nomeMes = "Março"
            return nomeMes
        case 3:
            nomeMes = "Abril"
            return nomeMes
        case 4:
            nomeMes = "Maio"
            return nomeMes
        case 5:
            nomeMes = "Junho"
            return nomeMes
        case 6:
            nomeMes = "Julho"
            return nomeMes
        case 7:
            nomeMes = "Agosto"
            return nomeMes
        case 8:
            nomeMes = "Setembro"
            return nomeMes
        case 9:
            nomeMes = "Outubro"
            return nomeMes
        case 10:
            nomeMes = "Novembro"
            return nomeMes
        case 11:
            nomeMes = "Dezembro"
            return nomeMes
        default:
            nomeMes = "#ERRO!"
        return nomeMes
    }
}


function trazAno(){
    const numeroAno = guardaData.getFullYear()
    return numeroAno
}

function trazHoraExata(){
    const horaExata = guardaData.getHours()
    const minutoExato = guardaData.getMinutes()
    return `${horaExata}:${minutoExato}`
}

function trazDataCompleta(){
    return `${trazDiaExtenso()}, ${trazDiaMes()} de ${trazNomeExtenso()} de ${trazAno()} ${trazHoraExata()}`
}

//Função para colocar o zero à esquerda das horas, mas só funciona bem com minutos e segundos separados
function zeroAesquerda (num){
    return num >= 10 ? num : `0${num}`;
}

window.addEventListener('load', function(){
    const p = document.createElement('p')
    section.appendChild(p)
    
    p.classList.add("pClass")
    

    p.innerHTML = `${trazDataCompleta()}`
})
