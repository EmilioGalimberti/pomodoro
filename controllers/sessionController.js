/* dicide que hacer  cuando el usuario hace algo

SRP sabe solo de su pantalla, 
*/

import {nextScreen, hideButton, showButton } from "../views/navigationView.js";
import {startTimer , pauseTimer , resumeTimer } from "../services/timerService.js";
import updateTimerDisplay from "../views/timerView.js";

export function sessionController() {
    const startPomodoroButton = document.getElementById("startTimer");

    startPomodoroButton.addEventListener("click", () => {
        startTimer(1500,onTick, onComplete);
        hideButton(startPomodoroButton);
        showButton(document.getElementById("pauseTimer"));
    });

    const pausePomodoroButton = document.getElementById("pauseTimer");
    pausePomodoroButton.addEventListener("click", () => {
        pauseTimer();
        hideButton(pausePomodoroButton);
        showButton(document.getElementById("resumeTimer"));
    });

    const resumePomodoroButton = document.getElementById("resumeTimer");
    resumePomodoroButton.addEventListener("click", () => {
        resumeTimer(onTick, onComplete);
        hideButton(resumePomodoroButton);
        showButton(document.getElementById("pauseTimer"));
    });

}   

function onTick(remainingTime) {
    updateTimerDisplay(remainingTime);
}

function onComplete() {
    console.log("Timer completed!");

}