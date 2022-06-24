/*
    VARIABLES
    
*/
const cpfNumber = document.querySelector('#cpf');
const buttonCheck = document.querySelector('button[type="submit"]');
const popupWindow = document.querySelector('.popup');

/*
    FUNCTIONS

*/

    function calculador(begin, array){
        let counter = begin;
        let total = 0;
        for(let i of array){
            total += counter*i;
            counter--;
        }
        return 11-(total%11)
    }
    function transformaEmArray(){
        let valor = Array.from(cpfNumber.value);
        return valor;
    }
    function retornaPrimeiroDigito(){
        let valor = transformaEmArray();
        valor.splice(-2, 2);
        let resultado = calculador(10, valor);
        return resultado <= 9? resultado : 0;
    }

    function retornaSegundoDigito(){
        let valor = transformaEmArray();
        valor.splice(-1, 1);
        let resultado = calculador(11, valor);
        return resultado <= 9? resultado : 0;
    }

    function concatenaDigitos(){
        const primeiroDigito = String(retornaPrimeiroDigito());
        const segundoDigito = String(retornaSegundoDigito());
        let cpfMod = transformaEmArray();
        cpfMod.splice(-2, 2)
        cpfMod.push(primeiroDigito, segundoDigito)
        return cpfMod;
    }
    function popup(text, attribute){
        popupWindow.classList.add('dinamic-popup')
        popupWindow.setAttribute('style', attribute)
        popupWindow.innerText = text;
        setTimeout(()=>{
            popupWindow.classList.remove('dinamic-popup')
        }, 3000)
    }
    function validaCPF(){
        let cpfMod = String(concatenaDigitos());
        let cpfOriginal = String(transformaEmArray());
        if(cpfMod === cpfOriginal){
            popup('CPF Válido', 'background-color: green;')
        }else{
            popup('CPF Inválido', 'background-color: red;')
        }
        return cpfMod === cpfOriginal;
    }

/*
    LISTENERS

*/
buttonCheck.addEventListener('click', function(e){
    e.preventDefault()
    validaCPF()
})

cpfNumber.addEventListener('keypress', (e) =>{
    if(e.charCode >= 48 && e.charCode <= 57){
        console.log(e.charCode)
    }
})