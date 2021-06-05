/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Random Array Index - color-changer
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";


/**
 * Helper function to update colors of the dice roll results
 */

function setWinner(el) {
  el.classList.remove('loser');
  el.classList.remove('tie');
  el.classList.add('winner');
}

function setLoser(el) {
  el.classList.remove('winner');
  el.classList.remove('tie');
  el.classList.add('loser');
}

function setTie(el) {
  el.classList.remove('loser');
  el.classList.remove('winner');
  el.classList.add('tie');
}


function updateColors(one, two) {
  if (Number(one.innerHTML) > Number(two.innerHTML)) {
    setWinner(one);
    setLoser(two);
  }
  
  if (Number(one.innerHTML) < Number(two.innerHTML)) {
    setWinner(two);
    setLoser(one);
  }

  if (Number(one.innerHTML) === Number(two.innerHTML)) {
    setTie(one);
    setTie(two);
  }
}