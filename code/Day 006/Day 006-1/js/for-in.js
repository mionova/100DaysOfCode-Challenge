//Use `for in` to Loop Through an Object's Properties

const person = {
    name: 'Edward',
    nickname: 'Duke',
    city: 'New York',
    age: 37,
    isStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
  };
  
  
  for (let prop in person) {
      console.log (`${prop}: ${person[prop]}`);
  }