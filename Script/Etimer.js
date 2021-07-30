const time_limit = 2;
let time = time_limit * 60;

let countdown = document.getElementById('timer');
let inter = setInterval(updateCountdown, 1000)

function updateCountdown(){
    if(time>=0){
    let minutes = Math.floor(time/60);
    let seconds = time % 60;

    minutes = minutes<10 ? '0'+ minutes : minutes;
    seconds = seconds<10 ? '0'+ seconds : seconds;

    countdown.innerHTML = `${minutes} : ${seconds}`
    time--;
    }
    else{
        clearInterval(inter);
        location.href="EfinalPage.html"
    }
}