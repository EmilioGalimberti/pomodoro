/* dicide que hacer  cuando el usuario hace algo

SRP sabe solo de su pantalla, 
*/

import nextScreen from "../views/navigationView.js";

export function mainMenuController() {
    const startButton = document.getElementById("startSession");
    
    startButton.addEventListener("click", () => nextScreen("menuScreen", "goalScreen"));

}   