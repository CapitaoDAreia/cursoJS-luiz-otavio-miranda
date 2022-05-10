const MyArray = [
    {tag: 'h1', texto: 'Praticando'},
    {tag: 'h2', texto: 'Criando tags com JS'},
    {tag: 'p', texto: 'Tag P'},
    {tag: 'p', texto: 'Essa é uma forma de acessar a DOM a criar elementos utilizando Javascript.'},
    {tag: 'p', texto: 'Possuo um Array, onde nele vou colocando meu conteúdo dentro de objetos indexados.'},
    {tag: 'p', texto: 'A medida que insiro novos objetos, novos parágrafos, meu array expande e minha página é incrementada.'}
]
const secao = document.querySelector('#section')

for(let i = 0; i < MyArray.length; i++){
    let {tag, texto} = MyArray[i];
    let elemento = document.createElement(tag)
    elemento.innerHTML = texto;
    secao.appendChild(elemento)
}


function tipoDeElemento(elemento){
    return typeof elemento
}

function criaElemento(elem, conteudo){
    let elemento = document.createElement(elem)
    elemento.innerHTML = conteudo;
    secao.appendChild(elemento)
}
