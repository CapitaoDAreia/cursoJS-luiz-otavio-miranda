/*
    VARIABLES
    
*/
const cpfNumber = document.querySelector('#cpf');
const buttonCheck = document.querySelector('button[type="submit"]');

/*
    FUNCTIONS

*/
    function removeLetras(){
        const valor = cpfNumber.value;
        cpfNumber.value = valor.replace(/\D+/g, '');
    }

    function validaCPF(){
        if(cpfNumber.value.length > 11 || cpfNumber.value.length < 11){
            alert('Número incorreto de caracteres.')
        }
    }
/*
    LISTENERS

*/
buttonCheck.addEventListener('click', function(){
    validaCPF()
})

cpfNumber.addEventListener('keypress', (e) =>{
    if(e.charCode >= 48 && e.charCode <= 57){
        console.log(e.charCode)
    }
})