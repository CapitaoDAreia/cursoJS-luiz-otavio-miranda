const nome = "Igor";
const obj = { nome };
const novoOBJ = { ...obj };
console.log(novoOBJ);

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}