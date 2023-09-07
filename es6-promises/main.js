import takeAChance from './take-a-chance.js';

takeAChance('Tim')
  .then((name) => console.log(name))
  .catch((name) => console.log(name));
