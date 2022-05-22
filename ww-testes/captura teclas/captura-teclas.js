const input = document.querySelector('#button');
const paragraph = document.querySelector('.container-element');

input.addEventListener('keypress', function(e){
    const p = document.createElement('p')
    p.innerHTML =   ` Você teclou ${e.code}. </br>
                      O código da tecla é ${e.charCode}.
                    `
    paragraph.appendChild(p)
    console.log(e)

})