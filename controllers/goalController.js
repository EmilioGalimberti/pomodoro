/* dicide que hacer  cuando el usuario hace algo

SRP sabe solo de su pantalla, 
*/

import nextScreen from "../views/navigationView.js";

export function golController() {
    const infinitePomButton = document.getElementById("defaultGoal");
    
    infinitePomButton.addEventListener("click", () => nextScreen("goalScreen", "pomodoroSession"));

    const backButton = document.getElementById("backToMenu");

    backButton.addEventListener("click", () => nextScreen("goalScreen", "menuScreen"));
}   