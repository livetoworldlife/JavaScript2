/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set,
  and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 */
"use strict";

let countdown = 0; // variable to set/clear intervals
let seconds = 1500; // seconds left on the clock first=25 minutes
let workTime = 25; // Pomodoro
let isPaused = true;


const timerDisplay = document.querySelector("#countdown");
const startBtn = document.querySelector("#play");
const resetBtn = document.querySelector("#stop");
const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const workMin = document.querySelector("#minutes");
const alarm = document.createElement('audio'); // A bell sound will play when the timer reaches 0
alarm.setAttribute("src", "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3");


/* EVENT LISTENERS FOR BUTTONS */
startBtn.addEventListener('click', () => {
  clearInterval(countdown);
  isPaused = !isPaused;
  if (!isPaused) {
    countdown = setInterval(timer, 1000);
  }
})

resetBtn.addEventListener('click', () => {
  clearInterval(countdown);
  seconds = workTime * 60;
  countdown = 0;
  isPaused = true;
})

minusBtn.addEventListener('click', () => {
  console.log(isPaused);
  if (isPaused === true) {
    workTime = Math.max(workTime - 1, 0);
    seconds = workTime * 60;
  }
})

plusBtn.addEventListener('click', () => {
  if (isPaused === true) {
    workTime = Math.min(workTime + 1, 60);
    seconds = workTime * 60;
  }

})

/* TIMER - HANDLES COUNTDOWN */
function timer() {
  if (seconds <= 0) {
    clearInterval(countdown);
    alarm.currentTime = 0;
    alarm.play();
  } else if (seconds > 0) {
    seconds--;
  }
}

/* UPDATE HTML CONTENT */
function countdownDisplay() {
  let minutes = Math.floor(seconds / 60);
  let remainderSeconds = seconds % 60;
  console.log(minutes, remainderSeconds)
  if (minutes <= 0 && remainderSeconds <= 0) {
    timerDisplay.textContent = "Time is up!";
  } else {
    timerDisplay.textContent = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  }

}

function buttonDisplay() {
  if (isPaused && countdown === 0) { // play html symbol
    startBtn.innerHTML = "&#9658;";
  } else if (isPaused && countdown !== 0) {
    startBtn.innerHTML = "&#9658;"; // play html symbol
  } else {
    startBtn.innerHTML = "&#10073;&#10073;"; // pause html symbol
  }
}

function updateHTML() {
  countdownDisplay();
  buttonDisplay();
  workMin.textContent = workTime;
}

window.setInterval(updateHTML, 100);

document.onclick = updateHTML;