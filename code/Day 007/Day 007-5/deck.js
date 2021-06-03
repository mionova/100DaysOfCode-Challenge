//create a multi-dimensional array of 52 elements (52 cards), and return them shuffled when the function is called.
//To run this file, you need Node.js or you can use the console

//Knuth Fisher-Yates Algorithm for shuffling:
function shuffle(arr) {
  var j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
  }
  return arr;
}

// 1. Add a for loop -- to loop through each element in the suites array
// 2. INSIDE that loop, add another loop that loops through elements in the ranks array.
// 3. Inside the second, nested loop, create a new array named card, which is composed of a rank and a suite. For example ['King', '♥︎'].
// 4. Push that card onto the deck array. Once both loops complete running, the deck array will hold 52 elements, and each of those elements are themselves an array.
// 5. Finally, pass the new deck to the shuffle() function, and return the results.

function createDeck() {
  var suites = ['♠︎','♣︎','♥︎','♦︎'];
  var ranks = ['Ace','King','Queen','Jack','10','9','8','7','6','5','4', '3','2'];
  var deck = [];
  // add your code below here:
  for (let i=0; i<suites.length; i++) {
   for (let j=0; j<ranks.length; j++) {
     let card = [];
     card.push(ranks[j], suites[i]);
     deck.push(card);
   }
  }
  return shuffle(deck);
}


// 6. Call the createDeck() function and store the results in a new variable named myDeck
let myDeck = createDeck();

// 7. Use a for loop to loop through the deck and list each card in the order the appear in the newly shuffled array. 

for (let i = 0; i<myDeck.length; i++) {
  console.log(myDeck[i][0]+ ' of ' + myDeck[i][1]);  
}