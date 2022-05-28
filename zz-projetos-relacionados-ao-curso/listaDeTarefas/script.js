/*
    VARIABLES
*/
const time = document.querySelector('.time');
const text = document.querySelector('#text');
const button = document.querySelector('.addtask');
const container = document.querySelector('.container');
const windowAlert = document.querySelector('.window-alert');
const arrayWithTasks = [];

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

//Create an element
function createElement(element, content, myClass){
    const newElement = document.createElement(element);
    newElement.classList.add(myClass);
    newElement.innerHTML = content;
    return newElement
}
//Add element into container
function addElement(newElement){
    container.appendChild(newElement)
}
//Runs windowAlert
function alertErrorWindow(myClass, myContent){
    windowAlert.classList.add(myClass)
    windowAlert.innerHTML = myContent;
    setTimeout(function(){
        windowAlert.classList.remove(myClass)
    }, 3000)
}
//Save tasks in an array
function saveTasks(){
    const currentTasks = container.querySelectorAll('p');
    for(let tasks of currentTasks){
        arrayWithTasks.push(tasks.innerText)
    }
}
//Save tasks in local storage with an JSON
function saveTasksInLocal(){
    const savedData = JSON.stringify(arrayWithTasks);
    localStorage.setItem('savedData', savedData);
}



/*
LISTENERS
*/
//Add a new task
button.addEventListener('click', function(){
    if(!text.value){
        alertErrorWindow('window-alert-dinamic', 'Add what?')
    }else{
        addElement(createElement('p',text.value))
        addElement(createElement('button', 'Delete', 'delete-button'))
        text.value = ""
        if(window.innerWidth > 400){
            text.focus()
        }
    }
})
//Remove previous added task
document.addEventListener('click', function(e){
    if(e.target.classList.contains('delete-button')){
        e.target.previousSibling.remove()
        e.target.remove()
    }
})
//Save tasks when user closes the page
window.onbeforeunload = function(){
    saveTasks()
    saveTasksInLocal()
}

