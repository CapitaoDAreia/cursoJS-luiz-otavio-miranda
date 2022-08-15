let num = prompt("Digite um número!")
let paragrafo = document.querySelector("body section > p")

numReal = Number(num)
avaliaInteiro = Number.isInteger(numReal)


if(isNaN(numReal) == true){
    paragrafo.innerHTML = `"${num}" não se trata de um número!`
    }else if(numReal == 0){
        paragrafo.innerHTML = `Preciso de algo para calcular.`
        }else if(numReal >= 500){
            paragrafo.innerHTML = `"${num}" é grande demais, deu preguiça de calcular.`
            }
            else{
                paragrafo.innerHTML =   `
                                        <h1>Seu número é ${num}</h1> </br>
                                        Raiz quadrada: ${Math.sqrt(numReal).toFixed(2)} </br>
                                        ${num} é inteiro: ${avaliaInteiro} </br>
                                        Arredondado para baixo: ${Math.floor(numReal)} </br>
                                        Arredondado para cima: ${Math.round(numReal)} </br>
                                        Com duas casas decimais: ${numReal.toFixed(2)}
                                        `
                }
