//Criando objeto
let alguem = {
    nome: 'Igor',
    sobrenome: 'Silva',
    idade: 23,
    sexo: 'M',
}
console.log(alguem.idade)


//Criando um objeto com função
function criaPessoa(nome, sobrenome, idade, sexo){
    return{
        nome: nome, 
        sobrenome: sobrenome, 
        idade: idade, 
        sexo: sexo
    }
}
let pessoa1 = criaPessoa('Igor', 'Silva', 23, 'M')
let pessoa2 = criaPessoa('Kawany', 'Mendes', 21, 'F')

console.log(pessoa1.nome,"e",pessoa2.nome,"são um casal de namorados." )



//Função dentro de objetos
let alguem2 = {
    nome: 'Igor',
    idade: 23,
    diz(){
        console.log(`Olá! Eu sou o objeto alguem2. Meu nome é ${this.nome} e tenho ${alguem2.idade} anos`) //THIS se refere ao objeto
    }
}

alguem2.diz()