/*
    VARIABLES
*/
const time = document.querySelector('.time');
const text = document.querySelector('#text');
const button = document.querySelector('.addtask');
const container = document.querySelector('.container');

/*
    FUNCTIONS
*/
//Clock
setInterval(function(){
    const date = new Date();
    const realDate = date.toLocaleString('pt-br', {
        dateStyle: 'full',
        timeStyle: 'short'
    })
    time.innerHTML = realDate;
}, 1000)

//
function createElement(element, content){
    const newElement = document.createElement(element)
    newElement.innerHTML = content;
    return newElement
}
function addElement(newElement){
    container.appendChild(newElement)
}



/*
    LISTENERS
*/
button.addEventListener('click', function(){
    if(!text.value)alert('Vazio')
    addElement(createElement('p',text.value))
})

