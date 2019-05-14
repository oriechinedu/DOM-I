

let secondTens = 0;
let secondOnes = 0;
let msHundreds = 0;
let msTens = 0;

const container = document.querySelector('.digits');
const secondTensDiv = document.querySelector('#secondTens');
const secondOnesDiv = document.querySelector('#secondOnes');
const msHundredsDiv = document.querySelector('#msHundreds');
const msTensDiv = document.querySelector('#msTens');
const startBtn = document.querySelector('.start-btn');
const pauseBtn = document.querySelector('.pause-btn');
const resetBtn = document.querySelector('.reset-btn');
let interval;


container.setAttribute('style', 'display:flex; justify-content: center; align-items: center; margin-top: 200px');

const secondTimer = () => {
  msTens++;
  if (msTens === 10) {
    msHundreds++;
    msTens = 0;
    if (msHundreds === 10) {
      secondOnes++;
      msHundreds = 0;
      if (secondOnes === 10) {
        secondTens++;
        secondOnes = 0;
        clearInterval(interval)
        container.classList.add('redDigit')
        pauseBtn.setAttribute('disabled', true)
      }
    }
  }
  secondTensDiv.textContent = secondTens;
  secondOnesDiv.textContent = secondOnes;
  msHundredsDiv.textContent = msHundreds;
  msTensDiv.textContent = msTens;

}

const startTimer = () => {
  interval = setInterval(secondTimer, 10)
  startBtn.setAttribute('disabled', true);
}

const resetTimer = () => {
  clearInterval(interval);
  secondOnes = secondTens = msHundreds = msTens = 0;
  startBtn.removeAttribute('disabled');
  pauseBtn.removeAttribute('disabled');
  secondTensDiv.textContent = '-';
  secondOnesDiv.textContent = '-';
  msHundredsDiv.textContent = '-';
  msTensDiv.textContent = '-';
  startBtn.textContent = 'Start';
  container.classList.remove('redDigit')
}

const pauseTimer = () => {

  clearInterval(interval);
  if(startBtn.hasAttribute('disabled')) {
    startBtn.removeAttribute('disabled')
    startBtn.textContent = 'Continue';
  }
  
}

startBtn.addEventListener('click', startTimer)
pauseBtn.addEventListener('click', pauseTimer)
resetBtn.addEventListener('click', resetTimer)




