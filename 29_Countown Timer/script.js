let countdown;
const timeDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const button = document.querySelectorAll('[data-time]')


function timer(seconds) {
    // setInterval(function () {
    //     seconds--
    // }, 1000)
    //clear all interval
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    // console.log({now, then});

    countdown = setInterval(() => {
        const secondLeft = Math.round((then - Date.now()) / 1000);

        //stop
        if( secondLeft <= 0 ) {
            clearInterval(countdown);
            return
        };

        //display
        displayTimeLeft(secondLeft)
    }, 1000);
}

function displayTimeLeft(seconds) {

    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes} : ${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display;
    timeDisplay.textContent = display;
    // console.log({minutes, remainderSeconds})
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour; 
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${adjustedHour} : ${minutes < 10 ? '0': ''}${minutes}`
}


function startTimer() {
    //return a 整數
    const seconds = parseInt(this.dataset.time);
    timer(seconds)
}
button.forEach(buttons => buttons.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
})