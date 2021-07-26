/**********************************************************
100DaysOfCode-Challenge: Day 58
Day 58-3 Clallbacks - Using a Repeat Timer with setInterval
***********************************************************/

/*
Display a clock on the screen and update the time every second

Note: setTimeout(callback, delay) only calls the function once. To call the callback function multiple times, we should use setInterval(callbak, delay);
*/

const clockSection = document.getElementById("clock");

function getTime() {
  function pad(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }

  const now = new Date();

  const hh = pad(now.getHours());
  const mm = pad(now.getMinutes());
  const ss = pad(now.getSeconds());

  return `${hh}:${mm}:${ss}`;
}

function tickClock() {
  clockSection.textContent = getTime();
}

tickClock();
// 1 sec = 1000 (miliseconds)
setInterval(tickClock, 1000);