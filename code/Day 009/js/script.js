/******************************************
Full Stack JavaScript (Work in Progress):
project 1 - A Random Quote Generator
******************************************/

//An array of objects to store the data for my quotes
var quotes = [ ];

quotes = [
  {
     quote: 'Have no fear of perfection, you’ll never reach it.',
     source: 'Salvador Dali'
  },
  {
      quote: 'The creative adult is the child who survived.',
      source: 'Ursula Leguin'
  },
  {
      quote: 'Everything you can imagine is real.',
      source: 'Pablo Picasso'
  },
  {
      quote: 'Brilliance beckons! Genius awaits!',
      source: 'Jeronicus',
      citation: 'Jingle Jangle: A Christmas Journey',
      year: 2020
  },
  {
      quote: 'Creativity is intelligence having fun.',
      source: 'Albert Einstein'
  }
];


/***
 * `getRandomQuote` function
***/
let quote;
let source;
let citation;
let year;


function getRandomNumber() {
  
  //calculate random index from the Quotes Array
  let randomQuotesIndex = Math.floor(Math.random()* quotes.length);

  //display the quote based on the calculated random index
  quote = quotes[randomQuotesIndex].quote;
  console.log(quotes[randomQuotesIndex].quote);

  //display the source based on the calculated random index
  source = quotes[randomQuotesIndex].source;
  console.log(quotes[randomQuotesIndex].source);

  //display the citation based on the calculated random index
  if ((quotes[randomQuotesIndex].citation)){
    citation = quotes[randomQuotesIndex].citation;
    console.log(quotes[randomQuotesIndex].citation);
  }

  //display the year based on the calculated random index
  if ((quotes[randomQuotesIndex].year)){
    year = quotes[randomQuotesIndex].year;
    console.log(quotes[randomQuotesIndex].year);
  }
}

getRandomNumber();

/***
 * `printQuote` function
***/


document.querySelector('.container').innerHTML = 
`
  <div id="quote-box" class="quote-box">
    <p class="quote">${quote}</p>
    <p class="source">${source}<span class="citation">${citation}</span><span class="year">${year}</span></p>
  </div>
`;


/***
 * click event listener for the print quote button
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);

