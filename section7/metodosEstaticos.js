/*
    MÉTODOS ESTÁTICOS

    Os métodos estáticos são definidos utilizando a palavra static antes dos métodos. 
    Insidem sobre a classe, não sobre as suas instâncias. 
    
    Mas como assim?

    Quando criada uma classe, temos dentro da classe, para definir propriedades, um outro objeto de nome constructor.
    Esse objeto é responsável por invocar a instância da classe em novos objetos criados apartir dela quando utilizamos o temo new.
    Por exemplo:
    
    const controle1 = new ControleRemoto(par1, par2);

    Neste caso, uma constante controle1 está sendo criada. Um objeto filho da classe ControleRemoto será atribuído por essa constante.
    Para que esse objeto filho seja instanciado corretamente pela classe pai ControleRemoto, é necessário invocar o termo new antes da 
    classe ControleRemoto, o que invocará o constructor de ControleRemoto e instanciará corretamente um novo filho com as propriedades do pai.

    *** AGORA, ENTENDA QUE OS MÉTODOS ESTÁTICOS NÃO SERÃO INSTANCIADOS/HERDADOS PELOS FILHOS ***
    Eles são inerentes somente ao ControleRemoto, ao objeto pai.

*/

class ControleRemoto{
    constructor(tv, cor){
        this.tv = tv;
        this.volume = 0;
        this.cor = cor;
    }

    //Método de instância
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }

    //Método estático
    static mudaCor(valor){
        this.cor = valor;
    }
}
ControleRemoto.cor = 'preto';
const controle1 = new ControleRemoto('Samsung', 'Cinza');

console.log(ControleRemoto.cor)
console.log(controle1.cor)

