/*
    Validação de CPF's com classes
*/
class CPF {
    constructor(cpf){
        this.cpf = cpf;
    }
    retornaDigito(valor){
        const valorCPF = Array.from(valor);

        const filterValorCPF = valorCPF.filter((elemento)=>{
            return elemento !== '.' && elemento !== '-';
        })
        
        if(filterValorCPF.length == 9) valorCPF.splice(-2, 2)
        if(filterValorCPF.length == 10) valorCPF.splice(-1, 1)
        
        let regresso = filterValorCPF.length+1;
        const somaDosElementos = filterValorCPF.reduce((ac, val)=>{
            ac += (regresso * Number(val))
            regresso--;
            return ac;
        }, 0)

        let resultado =  11 - (somaDosElementos % 11);
        return resultado > 9 ? 0 : resultado;
    }

    verificaValidade(){
        const cpf = this.cpf;
        if(cpf.length < 14) return "Verifique o seu CPF e o digite novamente com ponto e digito."

        const primeiroDigito = String(this.retornaDigito(cpf.slice(0, cpf.length-2)));
        const segundoDigito =  String(this.retornaDigito(cpf.slice(0, cpf.length-1)));
        
        if(cpf.slice(-2) === primeiroDigito+segundoDigito) return "O CPF informado é válido."
        return "O CPF informado é inválido!"
    }
}

const cpf1 = new CPF('705.484.450-52');
console.log(cpf1.verificaValidade())
