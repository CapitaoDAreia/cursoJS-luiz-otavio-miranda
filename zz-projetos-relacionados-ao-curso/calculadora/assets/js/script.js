function Calculadora(){
    this.display = document.querySelector('.display');
    this.historico = document.querySelector('.historico')
    let histJSON = [];


    this.capturaCliques = () =>{
        document.addEventListener('click', e =>{
            const event = e.target;
            if(event.classList.contains('btn-num')) this.addNumNoDisplay(event);

            if(event.classList.contains('btn-del')) this.excluirElementoNoDisplay();

            if(event.classList.contains('btn-clear')) this.limpaDisplay();

            if(event.classList.contains('btn-eq')) this.realizaOperacao();

            if(event.classList.contains('btn-limpahist')) this.limpaHist();

        })
    }

    this.addNumNoDisplay = (valor) =>{
        this.display.value += valor.innerText;
    }


    this.excluirElementoNoDisplay = () =>{
        this.display.value = this.display.value.slice(0, -1)
    }
    

    this.limpaDisplay = function(){
        this.display.value = " ";
    }

    this.alimentaHistorico = (valores, valores2) =>{
        let elementoCriado = document.createElement('p');
        elementoCriado.innerText = valores;
        if(valores2 != undefined){
            elementoCriado.innerText += " = "
            elementoCriado.innerText += valores2;
        }
        this.historico.appendChild(elementoCriado)

        histJSON.push(elementoCriado.innerHTML)
        this.salvaHistoricoLocal()
    }

    this.salvaHistoricoLocal = () =>{
        let salvamentoLocal = JSON.stringify(histJSON);
        localStorage.setItem('contas', salvamentoLocal);
    }

    this.buscaHistoricoLocal = function(){
        let salvamentoLocal = localStorage.getItem('contas')
        let salvamentoLocalOBJ = JSON.parse(salvamentoLocal);

        for(let items of salvamentoLocalOBJ){
            this.alimentaHistorico(items)
        }

    }

    this.limpaHist = () => {
        const hist = this.historico.querySelectorAll('p')
        
        for(let element of hist){
            element.remove()
            let limpaLocal = [];
            localStorage.setItem('contas', limpaLocal)
        }
    }
    

    this.realizaOperacao = () =>{
        let valoresDisplay = this.display.value;
        let guardaValores = valoresDisplay;

        try {
            let resultado = eval(valoresDisplay);
  
          if(!valoresDisplay) {
            alert('Impossível Calcular');
            return;
          }
          this.display.value = resultado;
          this.alimentaHistorico(guardaValores, this.display.value)
          
        } catch(e) {
          alert('Impossível Calcular');
          return;
        }
    }

    this.iniciar = () => {
        this.capturaCliques()
        this.buscaHistoricoLocal()
    }
}

const minhaCalculadora = new Calculadora();
minhaCalculadora.iniciar()
