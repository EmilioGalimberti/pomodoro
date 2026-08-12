/* dicide que hacer  cuando el usuario hace algo

SRP sabe solo de su pantalla, 
*/

import nextScreen from "../views/navigationView.js";
import {startTimer , pauseTimer , resumeTimer } from "../services/timerService.js";
import updateTimerDisplay from "../views/timerView.js";

export function sessionController() {
    const startPomodoroButton = document.getElementById("startTimer");

    startPomodoroButton.addEventListener("click", () => {
        startTimer(1500,onTick, onComplete);
        console.log("click lcikc click  ")
    });
}   

function onTick(remainingTime) {
    updateTimerDisplay(remainingTime);
}

function onComplete() {
    console.log("Timer completed!");

}