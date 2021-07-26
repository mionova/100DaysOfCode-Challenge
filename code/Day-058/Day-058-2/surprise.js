/**********************************************************
100DaysOfCode-Challenge: Day 58
Day 58-2 Clallbacks - Using a One-Off Timer with setTimeout
***********************************************************/

/*
Showing a "Surprise" message after a random period.

Note: setTimeout(callback, delay) only calls the function once. To call the callback function multiple times, we should use setInterval(callbak, delay);
*/

const surpriseSection = document.getElementById('surprise');

const randomTime = Math.random() * 4000;

setTimeout(() => surpriseSection.textContent = '🎉 Surprise! 🎉', randomTime);

/*
Alternate solution that does not use anonymys function:

const surpriseSection = document.getElementById('surprise');

function showSurprise() {
    surpliseSecti.textContent = '🎉 Surprise! 🎉';
}

setTimeout(showSurprise, randomTime);
*/