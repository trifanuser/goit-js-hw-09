
// Funcție pentru a genera o culoare aleatorie în format hex
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Selectăm butoanele
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId;

// Funcția pentru a începe schimbarea culorii de fundal
function startChangingColor() {
  startButton.disabled = true; // Dezactivăm butonul "Start"
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

// Funcția pentru a opri schimbarea culorii de fundal
function stopChangingColor() {
  clearInterval(intervalId); // Oprim schimbarea culorii
  startButton.disabled = false; // Activăm butonul "Start"
}

// Adăugăm evenimentele click pentru butoane
startButton.addEventListener('click', startChangingColor);
stopButton.addEventListener('click', stopChangingColor);
