const input = document.getElementById('input')
const button = document.getElementById('button')
const container = document.querySelector('.container-elemento')
contador = 1;

function criaElemento(elemento){
    const newElement = document.createElement(elemento)
    return newElement
}


function valorDoElemento(elemento, valor) {
    const newElement = elemento.innerHTML = valor;
    return newElement;
}



button.addEventListener('click', function(){
    let elementoCriado = criaElemento('li'); //Cria o elemento e guarda na variável

    valorDoElemento(elementoCriado, input.value) //dá o valor do elemento com a função

    container.appendChild(elementoCriado) //passa o elemento criado para onde quer

    console.log('Elemento',contador,'criado.')

    contador ++;

})  
