/* dicide que hacer  cuando el usuario hace algo

SRP sabe solo de su pantalla, 
*/

import nextScreen from "../views/navigationView.js";
import {startTimer , pauseTimer , resumeTimer } from "../services/timerService.js";

export function sessionController() {
    const stopSessionButton = document.getElementById("stopSession");
    
    stopSessionButton.addEventListener("click", () => nextScreen("pomodoroSession", "menuScreen"));

}   