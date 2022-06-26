/*
    TRABALHANDO COM PROTOTYPES EM FACTORY FUNCTIONS

*/
//Declaração
function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome
    }
}
//Uso
const p1 = criaPessoa('Igor', 'Silva');
console.log(p1.nome)




/*
    SEGUNDO EXEMPLO
    
    Instalando cadeia de prototypes

*/
function criaPessoaSofisticada(nome, sobrenome, habilidade){
    const prototypesDasPessoas = {
        fala(){
            console.log(this.nome+" diz: Eaê, brother!")
        },
        sabe(){
            console.log(this.nome+" sabe: "+this.habilidade)
        }
    };

    return Object.create(prototypesDasPessoas, {
        nome: {
            value: nome,
            configurable: false,
        },
        sobrenome: {
            value: sobrenome,
            configurable: false,
        },
        habilidade: {
            value: habilidade,
            configurable: true,
        }
    });

}

const ps2 = criaPessoaSofisticada('Kawany', 'Mendes', 'Biomedicina');
Object.setPrototypeOf(ps2, {})
const prototypePs2 = Object.getPrototypeOf(ps2);
console.log(prototypePs2)
//Perceba que, neste caso, o prototype é criado dentro da função fábrica e retornado com o método object create,
//onde passamos as propriedades do objeto que será retornado via PropertyDescriptorMap.





/*
TERCEIRO EXEMPLO

Maneira alternativa, onde não precisamos acoplar tanto quanto vimos anteriormente.

Neste caso utilizamos uma prática chamada de composição, onde oes métodos estão fora do prototype e
são assignados/atribuídos no prototype da factory function manualmente e conforme necessidade.
Neste caso, como arrays são atribuídos por referência, ocorre que se alteramos a função original,
o método no prototype da factory também é alterado.
*/


const fala = {
    fala(){
        return this.nome+" diz: Eaê, brotherS!";
    }
};
const sabe = {
    sabe(){
        return this.nome+" sabe: "+this.habilidade;
    }
}
const prototypePs3 = Object.assign({}, fala, sabe)

function criaPessoaSofisticada3(nome, sobrenome, habilidade){
    return Object.create(prototypePs3, {
        nome: {
            value: nome,
            configurable: false,
        },
        sobrenome: {
            value: sobrenome,
            configurable: false,
        },
        habilidade: {
            value: habilidade,
            configurable: true,
        }
    });
}

const ps3 = criaPessoaSofisticada3('Rhavi', 'Mendes', 'programação');
console.log(ps3.fala())