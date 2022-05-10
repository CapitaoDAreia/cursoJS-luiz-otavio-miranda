let elementos =[
    {tag: 'p', texto: 'Eu sou uma tag PARAGRAPH'},
    {tag: 'div', texto: 'Eu sou uma tag DIV '},
    {tag: 'footer', texto: 'Eu sou uma tag FOOTER'},
    {tag: 'section', texto: 'Eu sou uuma tag SECTION'}
];
//Declara a section do meu documento
let section = document.getElementById('section')

for(let i = 0; i < elementos.length; i++){
    //Atribui os valores do meu array por desestruturação
    let {tag, texto} = elementos[i]
    
    //Cria um novo elemento baseado no valor da variável TAG, do meu array
    let OBJ = document.createElement(tag)

    //Insere conteúdo com valor na variável TEXTO, do meu array
    let conteudo = document.createTextNode(texto)
    OBJ.appendChild(conteudo)
    
    //insere o elemento criado baseado em tag na minha section, declarada lá em cima
    section.appendChild(OBJ)
}

