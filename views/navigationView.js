/* modifica el dom

Single Responability Principle: encargado de modificar el dom
, en cuanto a la navegacion entre las distintas pantallas

*/

// DRY principle: Don't Repeat Yourself
export default function nextScreen(actualScreenId, nextScreenId) {
    const actualScreenElement = document.getElementById(actualScreenId)
    const nextScreenElement = document.getElementById(nextScreenId)    
    if (actualScreenElement  && nextScreenElement ) {
        actualScreenElement.classList.add("hidden")
        nextScreenElement.classList.remove("hidden")
    }
}

