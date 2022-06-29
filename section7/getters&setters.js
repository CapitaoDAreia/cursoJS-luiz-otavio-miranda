/*
    GETTERS E SETTERS

*/


const velocidade = Symbol('velocidade');
class Carro {
    constructor(nome){
        this.nome = nome;
        this[velocidade] = 0;
    }

    set velocidade(valor){
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[velocidade] = valor;
    }

    get velocidade(){
        return this[velocidade];
    }
    acelerar(){
        if(this[velocidade] >= 100) return;
        this[velocidade]++;
    }

    frear(){
        if(this[velocidade] <= 0) return;
        this[velocidade]--; 
    }
}

const c1 = new Carro('celta');


c1.velocidade = 20;
console.log(c1.velocidade)
console.log(c1)



class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return this.nome+" "+this.sobrenome;
    }

    set mudaPrimeiroNome(value){
        if(typeof value !== "string"){
            console.log('Não é possível setar, nome precisa de uma string.') 
            return;
        }
        if(!this.value){
            console.log('Impossível setar, um valor é necessário.')
            return;
        }
        this.nome = value;
    }
}

const p1 = new Pessoa('Igor', 'Silva');
p1.mudaPrimeiroNome = '';
console.log(p1.nomeCompleto)