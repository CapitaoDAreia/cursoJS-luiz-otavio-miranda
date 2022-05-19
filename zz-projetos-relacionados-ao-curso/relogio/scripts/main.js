const clockElement = document.querySelector('#clock')
const timerElement = document.querySelector('#timer')
const displayHourClock = document.querySelector('#display-hour')
const displayTimerClock = document.querySelector('#display-timer')
const timerButtons = document.querySelector('.timer-buttons')

let increaseHour=1;
let contador;

function clock() {
    function bringMeTime() {
        let date = new Date()
        return date.toLocaleTimeString('pt-br', {
            hour12: false,
        })
    }

    setInterval(function () {
        displayHourClock.innerHTML = bringMeTime();
    }, 1000)
}



function timer(){
    const displayHourTimer = document.querySelector('#display-hour')
    
    function bringMeTimeTimer(increaseHour){
        let dateTimer = new Date(increaseHour*1000)
        return dateTimer.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'UTC'
        })
    }
    clearInterval(contador)
    contador = setInterval(function(){
        displayTimerClock.innerHTML = bringMeTimeTimer(increaseHour);
        increaseHour++;
    }, 1000)
}


clockElement.addEventListener('click', function(){
    displayTimerClock.classList.add('close-function')
    timerButtons.classList.add('timer-buttons')
    displayHourClock.classList.remove('close-function')
    clock()
})

timerElement.addEventListener('click', function(){
    displayHourClock.classList.add('close-function')
    displayTimerClock.classList.remove('close-function')
    timerButtons.classList.remove('timer-buttons')
    clearInterval()
    timer()
})