/* modifica el dom

Single Responability Principle: encargado de modificar el dom
, en cuanto a la navegacion entre las distintas pantallas

*/

// DRY principle: Don't Repeat Yourself
export function switchElement(ElementToHideId, ElementToShowId) {
    const ElementToHide = document.getElementById(ElementToHideId)
    const ElementToShow = document.getElementById(ElementToShowId)    
    if (ElementToHide  && ElementToShow ) {
        hideElement(ElementToHide);
        showElement(ElementToShow);
    }
}

function hideElement(Element) {
    if (Element) {
        Element.classList.add("hidden");
    }
}

function showElement(Element) {
    if (Element) {
        Element.classList.remove("hidden");
    }
}