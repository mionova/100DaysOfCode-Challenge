/************************************************
100DaysOfCode-Challenge: Day 19
Challenge 19-3 Refactoring using KISS methodology
*************************************************/

// refactoring using KISS principle

const number = 5;

function randomChoice(item) {
  return Math.floor(Math.random() * item.length);
}

function isGreaterThanTen(num) {
  return num > 10;
}

console.log(isGreaterThanTen(number));

function randomMovie() {
  const movies = [
    "Parasite",
    "Green Book",
    "The Shape of Water",
    "Moonlight",
    "Spotlight",
    "Birdman",
    "12 Years a Slave",
    "Argo",
    "The Artist",
    "The Kings Speech",
  ];

  return movies[randomChoice(movies)];
}

function buySnacks(money) {
  const purchasedSnacks = {'popcorn': 0, 'soda': 0, 'candy': 0};
  
  if (money > 0) {
    while (money > 0) {
      if (money >= 3) {
        purchasedSnacks['popcorn'] = purchasedSnacks['popcorn'] + 1;
        money = money - 3;
      }
      if (money >= 2) {
        purchasedSnacks['soda'] = purchasedSnacks['soda'] + 1;
        money = money - 2;
      }
      if (money >= 1) {
        purchasedSnacks['candy'] = purchasedSnacks['candy'] + 1;
        money = money - 1;
      }
    }
  }

  return purchasedSnacks;
}

function goToMovies(money) {
  const movieChoice = randomMovie();
  const purchasedSnacks = buySnacks(money)

  return `You went to see ${movieChoice} and had ${JSON.stringify(
    purchasedSnacks,
    null,
    4
  )}.`;
}

console.log(goToMovies(10));

const pets = [
  { name: "Jethro", animal: "dog", breed: "Australian Shepherd" },
  { name: "Birdie", animal: "dog", breed: "Pointer mix"},
  { name: "Harley", animal: "dog", breed: "Unknown" },
  { name: "Booger", animal: "cat", breed: "Unknown" },
  { name: "Argo", animal: "cat", breed: "Unknown" },
  { name: "Ace", animal: "cat", breed: "Unknown" },
];

for (const element of pets){
  console.log(`Name: ${element['name']}`);
  console.log(`Animal: ${element['animal']}`);
  console.log(`Breed: ${element['breed']}`);
}
