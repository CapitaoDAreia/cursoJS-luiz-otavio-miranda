const section = document.querySelector('body > section')
const guardaData = new Date()

window.addEventListener('load', function(){
    const p = document.createElement('p')
    section.appendChild(p)
    p.classList.add("pClass")
    p.innerHTML = guardaData.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'})
})