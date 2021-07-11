//Display a list of songs from an array on a web page.

const playlist = [
  ['So What', 'Miles Davis', '9:04'],
  ['Respect', 'Aretha Franklin', '2:45'],
  ['What a Wonderful World', 'Louis Armstrong', '2:21'],
  ['At Last', 'Ella Fitzgerald', '4:18'],
  ['Three Little Birds', 'Bob Marley and the Wailers', '3:01'],
  ['The Way You Look Tonight', 'Frank Sinatra', '3:21']
];

function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i][0]}, by ${arr[i][1]} - ${arr[i][2]}</li>`;
  }
  return items;
}

document.querySelector('main').innerHTML = `
    <ol>
      ${createListItems(playlist)}
    </ol>
  `;