/*Elementos*/
let imcResult = document.getElementById('resultado1')
let resultado = document.getElementById('resultado2')
let peso = document.getElementById('peso')
let altura = document.getElementById('altura')
let button = document.getElementById('button-submit')

/*Functions*/
function calcular(x, y){
    let resultadoIMC = x/((y/100)**2)
    return resultadoIMC.toFixed(2)
}

/*Listeners*/
button.addEventListener('click', function(){
    if(isNaN(peso.value) || isNaN(altura.value)){
        alert('A calculadora só pode operar com números!')
    }else if(peso.value == '' || altura.value == ''){
        alert('Digite os dois valores para continuar!')
    }else{
        if(calcular(peso.value, altura.value) < 18.5){
            imcResult.innerHTML = `<p>${calcular(peso.value, altura.value)}</p>`
            resultado.innerHTML = `<p>Abaixo do peso ideal</p>`
        }else if(calcular(peso.value, altura.value) >= 18.5 && calcular(peso.value, altura.value) < 24.9){
            imcResult.innerHTML = `<p>${calcular(peso.value, altura.value)}</p>`
            resultado.innerHTML = `<p>Normal</p>`
        }else if(calcular(peso.value, altura.value) >= 24.9 && calcular(peso.value, altura.value) <= 30){
            imcResult.innerHTML = `<p>${calcular(peso.value, altura.value)}</p>`
            resultado.innerHTML = `<p>Sobrepeso</p>`
        }else if(calcular(peso.value, altura.value) > 30 && calcular(peso.value, altura.value) <= 34.9){
            imcResult.innerHTML = `<p>${calcular(peso.value, altura.value)}</p>`
            resultado.innerHTML = `<p>Obesidade grau 1</p>`
        }else if(calcular(peso.value, altura.value) > 35 && calcular(peso.value, altura.value) <= 39.9){
            imcResult.innerHTML = `<p>${calcular(peso.value, altura.value)}</p>`
            resultado.innerHTML = `<p>Obesidade grau 2</p>`
        }else if(calcular(peso.value, altura.value) >= 40){
            imcResult.innerHTML = `<p>${calcular(peso.value, altura.value)}</p>`
            resultado.innerHTML = `<p>Obesidade grau 3</p>`
        }else{
            alert('Algo deu errado, revise os dados e tente novamente.')
        }
    }
})





