/********************************************************
100DaysOfCode-Challenge: Day 14
Challenge 14-1 - Select all elements of a particular type
*********************************************************/

const myList = document.getElementsByTagName('li');

for (let i=0; i<myList.length;i++ ){
  myList[i].style.color = 'purple';
}