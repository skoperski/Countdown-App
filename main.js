const startingMinutes = 10;
let time = startingMinutes * 60;
let startCountdown;

const countdownDOM = document.querySelector("#countdown");
const startButtonDOM = document.querySelector("#start");
const stopButtonDOM = document.querySelector("#stop");

const countdownTimer = () => {
  startCountdown = setInterval(updateCountdown, 1000);
};

const stopCountdownTimer = () => {
  clearInterval(startCountdown);
};

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownDOM.innerHTML = `${minutes}:${seconds}`;
  time--;
}

startButtonDOM.addEventListener("click", countdownTimer);
stopButtonDOM.addEventListener("click", stopCountdownTimer);
