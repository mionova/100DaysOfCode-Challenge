/******************************************
Full Stack JavaScript:
project 1 - A Random Quote Generator
******************************************/

/***
 * An array of objects to store the data for my quotes
***/
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
function getRandomQuote() {
  
  //calculate random index from the quotes array
  let randomQuotesIndex = Math.floor(Math.random()* quotes.length);
  //return a random quote object from the quotes array
  return quotes[randomQuotesIndex];
}


/***
 * `printQuote` function
***/
function printQuote() {
  //a variable to store a random quote object from the getRandomQuote() function
  let selectedQuote = getRandomQuote();

  //a variable to store the html string
  let html = `<p class="quote">${selectedQuote.quote}</p><p class="source">${selectedQuote.source}`;
  

  // conditional to generate html if selectedQuote has quote, source, citation, and year keys
  // conditional to generate html if selectedQuote has quote, source, and citation keys  
  // conditional to generate html if selectedQuote has quote, source, and year keys
  // conditional to generate html if selectedQuote has only quote and source keys
  if ((selectedQuote.citation !== undefined) && (selectedQuote.year !== undefined)){
    html += `
        <span class="citation">${selectedQuote.citation}</span><span class="year">${selectedQuote.year}</span></p>
      `
  }  else if ((selectedQuote.citation !== undefined) && (selectedQuote.year == undefined)){
    html += 
    `<span class="citation">${selectedQuote.citation}</span></p>`
  }  else if ((selectedQuote.citation == undefined) && (selectedQuote.year !== undefined)){
    html +=
    `<span class="citation">${selectedQuote.year}</span></p>
  `
  }  else {
    html += `</p>`
  };
  return document.getElementById("quote-box").innerHTML = html;
}

printQuote();


/***
 * click event listener for the print quote button
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
