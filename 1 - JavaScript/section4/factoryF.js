//FACTORY FUNCTIONS
//Primeiro Exemplo
console.log('### PRIMEIRO EXEMPLO ###')
function criaObjetoCelular(modelo, marca, tela, bateria){
    return {
        modelo: modelo,
        marca: marca,
        tela: tela,
        bateria: bateria,
        liga: function(){
            console.log('O telefone foi ligado...')
        }
    }
}
const xoamiMiA2 = criaObjetoCelular('Mi A2', 'Xiaomi', 5.5, 5000)


console.log(xoamiMiA2)
console.log(' ')
console.log('### SEGUNDO EXEMPLO ###')
//Segundo exemplo
function criaPessoa(nome, sobrenome, idade, peso){
    return {
        nome,
        sobrenome,
        idade,
        peso,
        pessoaFala: function(){
            return 'Eaê, brother! 0/'
        },
        //GETTER - Um método dentro do meu objeto que é tratado/executado como um atributo, apesar de ser uma função. 
        get acimaDe60() {
            return this.idade > 60 ? true : false
        },

        //SETTER - Utilizado para alterar uma determinada propriedade da função
        set muda1Nome(valor){
            this.nome = valor;
        }
        
    }
}

const pessoa1 = criaPessoa('Igor', 'Silva', 23, 88);
//Passando valores do setter
pessoa1.muda1Nome = 'João';
console.log(pessoa1.nome)
//Pegando valores do getter
console.log(`${pessoa1.name} possui idade maior que 60 anos? ${pessoa1.acimaDe60}!`)
