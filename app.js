/* Orquestador, 

su unica responsabilida es inicializar la app:
importar los controllers y llamarlos

*/
import {mainMenuController} from "./controllers/mainMenuController.js";
import {golController} from "./controllers/goalController.js";
import {sessionController} from "./controllers/sessionController.js";

mainMenuController()
golController()
sessionController()

console.log("app.js loaded")
