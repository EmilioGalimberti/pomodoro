


// global variable to hold the interval ID and remaining time
let intervalId = null;
let remainingTime = 0;

export function startTimer(duration, onTick, onComplete) {
    remainingTime = duration;
    intervalId = setInterval(() => {
        remainingTime--; 
        onTick(remainingTime);
        if (remainingTime === 0) {
            clearInterval(intervalId);
            onComplete();
        }
    }, 1000);
}

export function pauseTimer() {
    if(intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    }
    else {
        console.warn("Timer is not running.");
        //aca dsp callback a una funcion del controller
        //para que muestre una alerta linda con el view
    }
}

export function resumeTimer(onTick, onComplete) {
    if (remainingTime > 0 && !intervalId) {
        startTimer(remainingTime, onTick, onComplete);
    } else {
        console.warn("Timer is already running or has completed.");
        //aca dsp callback a una funcion del controller
        //para que muestre una alerta linda con el view
    }
}