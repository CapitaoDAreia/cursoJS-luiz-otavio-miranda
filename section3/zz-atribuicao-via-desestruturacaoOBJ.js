let pessoa = {
    nome: 'Igor',
    sobrenome: 'Silva',
    idade: 30,
    endereco: {
        rua: 'Av Prestes Maia',
        numero: 320
    },
    habilidades: {
        programacao: true,
    }
}
function saberSeEProgramador(){
    pessoa.habilidades.programacao ? 
    console.log(pessoa.nome, 'é um(a) programador(a).') : 
    console.log(pessoa.nome, 'não é um(a) programador(a).')
}

//Para jogar o nome do objeto em uma variável


//Atribuição comum
const nomeDaPessoa = pessoa.nome

//Atribuição via desestruturação onde o nome da variável que receberá == ao nome do campo no OBJ | Perceba que as variáveis possuem como padrão, caso o campo no objeto seja vazio, o valor ''
const {nome = '', sobrenome = '', idade = ''} = pessoa;

//É o mesmo caso que o anterior, com a diferença que neste caso dá-se o campo e a variável que se criará com o seu valor.
const {nome: nOBJ = '', sobrenome: snOBJ = '', idade: idOBJ = ''} = pessoa

console.log('Caso 1: Atribuição comum - ', nomeDaPessoa,'.')
console.log('Caso2: Atribuição por desestruturação ex1 - ', nome, sobrenome, idade,'.')
console.log('Caso3: Atribuição por desestruturação ex2 - ', nOBJ, snOBJ, idOBJ,'.')