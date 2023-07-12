const num1 = 4;
const num2 = 7;
const num3 = 10;

const maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue is:', maximumValue);

const heroes = ['Iron Man', 'Captain America', 'Batman', 'Spiderman'];
let randomNumber = Math.random(heroes);
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

const library = [
  {
    title: 'Importance of High Ground',
    author: 'Obi-Wan',
  },
  {
    title: 'English 101',
    author: 'Yoda',
  },
  {
    title: 'Art of Pod Racing',
    author: 'Anakin',
  },
];
const lastBook = library.pop();
console.log('last book:', lastBook);
const firstBook = library.shift();
console.log('first book:', firstBook);

const js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

const fullName = 'Tim Woo-Sam';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
