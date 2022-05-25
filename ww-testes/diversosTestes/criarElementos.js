const textinput = document.querySelector('#textinput');
const button = document.querySelector('input[type="button"]');
const containerNovosElementos = document.querySelector('.container-novos-elementos');
const saveButton = document.querySelector('#salvar')

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

//Salvar meus itens
function salvarElementos(){
    const listaComElementosDoContainer = containerNovosElementos.querySelectorAll('p');
    let elementosSalvos = []
    for(let item of listaComElementosDoContainer){
        elementosSalvos.push(item.innerText.replace('Excluir', ''))
    }
    const elementosSalvosJSON = JSON.stringify(elementosSalvos)
    localStorage.setItem('itens', elementosSalvosJSON)
}

//Buscar itens salvos
function buscarItensSalvos(){
    const itensBuscados = localStorage.getItem('itens');
    const itensBuscadosArray = JSON.parse(itensBuscados);

    for(let item of itensBuscadosArray){
        let novoElemento = criarElementos('p', item);
        adicionaElementosNoContainer(novoElemento)
    }
}

/*
    LISTENERS
*/
//Criando elementos com as funções
button.addEventListener('click', function(){
    let novoElemento = criarElementos('p', textinput.value);
    adicionaElementosNoContainer(novoElemento)
    textinput.focus()//Focar no textinput após clicar
    textinput.value = "";
})

//Excluindo o elemento com seletores específicos
document.addEventListener('click', function(e){
    if(e.target.innerText === "Excluir"){
        e.target.parentElement.remove()
    }
})

//Salvando itens localmente com a função salvar elementos
saveButton.addEventListener('click', function(){
    if(containerNovosElementos.childElementCount != 0){
        salvarElementos()
        alert('Itens salvos localmente!')
    }else{
        alert('Lista salva sem itens')
        salvarElementos()
    }
})
window.addEventListener('load', function(){
    buscarItensSalvos()
})
