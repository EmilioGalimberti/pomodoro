/* dicide que hacer  cuando el usuario hace algo

SRP sabe solo de su pantalla, 
*/

import {startTimer , pauseTimer , resumeTimer } from "../services/timerService.js";
import * as timerView  from "../views/timerView.js";

export function sessionController() {
    // El controller no toca el DOM, solo asocia eventos:
        timerView.bindStartClick(() => {
            startTimer(2, onTick, onComplete);
            timerView.showRunningState();
        });
    
        timerView.bindPauseClick(() => {
            pauseTimer();
            timerView.showPausedState();
        });

        timerView.bindResumeClick(() => {
            resumeTimer(onTick, onComplete);
            timerView.showRunningState();
        });

}   

function onTick(remainingTime) {
    timerView.updateTimerDisplay(remainingTime);
}

function onComplete() {
    console.log("Timer completed!");
    timerView.updateTimerDisplay(1500); // Reset the display to 00:00
    timerView.showPausedState(); // Reset the buttons to the initial state

}