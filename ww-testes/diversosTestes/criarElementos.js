const textinput = document.querySelector('#textinput');
const button = document.querySelector('input[type="button"]');
const containerNovosElementos = document.querySelector('.container-novos-elementos');

/*
    FUNÇÕES
*/
//Cria botão de exclusão
function criaBotaoExcluir(){
    const botao = document.createElement('button')
    botao.innerText = "Excluir"
    botao.setAttribute('class', 'apagar')
    return botao
}

//Criar Elemento
function criarElementos(elemento, valor) {
    let elementoCriado = document.createElement(elemento);
    elementoCriado.innerHTML = valor;
    elementoCriado.innerText += " "
    if(!valor){
        elementoCriado.innerText +=  "Elemento vazio criado!";
        elementoCriado.innerText += " "
        elementoCriado.setAttribute('class', 'automatic-class')//Seta uma classe para o elemento
    }
    elementoCriado.appendChild(criaBotaoExcluir())
    return elementoCriado
}

//Adiciona elemento no container
function adicionaElementosNoContainer(elemento) {
    containerNovosElementos.appendChild(elemento)
}



/*
    LISTENERS
*/
//Criando elementos com as funções
button.addEventListener('click', function(){
    let novoElemento = criarElementos('p', textinput.value);
    adicionaElementosNoContainer(novoElemento)
    textinput.focus()//Focar no textinput após clicar
})
//Excluindo o elemento com seletores específicos
document.addEventListener('click', function(e){
    console.log(e.target.innerText)
    if(e.target.innerText === "Excluir"){
        e.target.parentElement.remove()
    }

})