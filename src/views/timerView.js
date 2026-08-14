// Su responsabilidad: actualizar el display del timer en la pantalla.
// timerView.js ➔ Se encarga de todo lo que pasa en la pantalla del timer (números y botones).
export  function updateTimerDisplay(remainingTime) {    
    if (remainingTime >= 0) {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const timer = document.getElementById("timer");
    timer.textContent = formattedTime;
    }
}

const startBtn = document.getElementById("startTimer");
const pauseBtn = document.getElementById("pauseTimer");
const resumeBtn = document.getElementById("resumeTimer");

// 2. Función de enlace (Binding)
export function bindStartClick(manejador) {
    startBtn.addEventListener("click", () => {
        manejador(); // 👈 Llama a la función que le mandó el controller
    });
}

export function bindPauseClick(handler) {
    pauseBtn.addEventListener("click", handler);
}

export function bindResumeClick(handler) {
    resumeBtn.addEventListener("click", handler);
}

export function showRunningState() {
    startBtn.classList.add("hidden");
    pauseBtn.classList.remove("hidden");
    resumeBtn.classList.add("hidden");
}

export function showPausedState() {
    startBtn.classList.add("hidden");
    pauseBtn.classList.add("hidden");
    resumeBtn.classList.remove("hidden");
}
