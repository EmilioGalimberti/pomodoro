// Su responsabilidad: actualizar el display del timer en la pantalla.

export default function updateTimerDisplay(remainingTime) {    
    if (remainingTime >= 0) {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const timer = document.getElementById("timer");
    timer.textContent = formattedTime;
    }
}