import takeAChance from './take-a-chance.js';

takeAChance('Tim')
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
