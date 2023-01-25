import './styles/index.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.querySelector("body");
const startBtn = document.querySelector("[data-action=start]");
const stopBtn = document.querySelector("[data-action=stop]");

let intervalId = null;
stopBtn.disabled = true;
startBtn.addEventListener("click", startClick);
stopBtn.addEventListener("click", stopClick);

function startClick() {
  intervalId = setInterval(changeColor, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = !startBtn.disabled;
}

function stopClick() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = !startBtn.disabled;
}

function changeColor() {
  body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};