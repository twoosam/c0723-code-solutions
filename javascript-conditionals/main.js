/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if (number % 2) {
    return false;
  } else {
    return true;
  }
}

function startsWithJ(string) {
  if (string.charAt(0) === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age > 20) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age > 15) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH < 0) {
    return 'invlaid pH level';
  } else if (pH < 7) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH < 14) {
    return 'base';
  } else {
    return 'invlaid pH level';
  }
}

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      console.log("Wer'e the warner brothers!");
      break;
    case 'dot':
      console.log("I'm cute!");
      break;
    default:
      console.log('Goodnight Everyone!');
  }
}

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      console.log('Mission Impossible');
      break;
    case 'comedy':
      console.log('Kicking and Screaming');
      break;
    case 'horror':
      console.log('Hereditary');
      break;
    case 'drama':
      console.log('Minari');
      break;
    case 'musical':
      console.log('La La Land');
      break;
    case 'sci-fi':
      console.log('Interstellar');
      break;
    default:
      console.log(
        'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi.'
      );
  }
}
