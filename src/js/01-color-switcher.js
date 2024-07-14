
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}


const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId;


function startChangingColor() {
  startButton.disabled = true; 
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangingColor() {
  clearInterval(intervalId);
  startButton.disabled = false; 
}

// Adăugăm evenimentele click pentru butoane
startButton.addEventListener('click', startChangingColor);
stopButton.addEventListener('click', stopChangingColor);
