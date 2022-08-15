/*SWITCH CASE com objeto Date
    Forma mais comum de usar a estrutura SWITCH-CASE

*/
const data = new Date()
let diaDaSemana = data.getDay()

let diaSemanaExtenso

switch(diaDaSemana){
    case 0:
        diaSemanaExtenso = 'Domingo'
        break;
    case 1:
        diaSemanaExtenso = "Segunda"
        break;
    case 2:
        diaSemanaExtenso = "Terça"
        break;
    case 3:
        diaSemanaExtenso = "Quarta"
        break;
    case 4:
        diaSemanaExtenso = "Quinta"
        break;
    case 5:
        diaSemanaExtenso = "Sexta"
        break;
    case 6:
        diaSemanaExtenso = "Sábado"
        break;
    default:
        diaSemanaExtenso = "#Erro!"
        break;
}
console.log(diaSemanaExtenso)



//Utilizando dentro da uuma função

function retornaDiaExtenso(){
    let diaSemanaExtenso
    switch(diaDaSemana){
        case 0:
            diaSemanaExtenso = 'Domingo'
            return diaSemanaExtenso;
        case 1:
            diaSemanaExtenso = "Segunda"
            return diaSemanaExtenso;
        case 2:
            diaSemanaExtenso = "Terça"
            return diaSemanaExtenso;
        case 3:
            diaSemanaExtenso = "Quarta"
            return diaSemanaExtenso;
        case 4:
            diaSemanaExtenso = "Quinta"
            return diaSemanaExtenso;
        case 5:
            diaSemanaExtenso = "Sexta"
            return diaSemanaExtenso;
        case 6:
            diaSemanaExtenso = "Sábado"
            return diaSemanaExtenso;
        default:
            diaSemanaExtenso = "#Erro!"
            return diaSemanaExtenso;
    }
}

console.log('Função: ', retornaDiaExtenso())


