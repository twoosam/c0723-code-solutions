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
  } else if (pH <= 14) {
    return 'base';
  } else {
    return 'invlaid pH level';
  }
}

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return "Wer'e the warner brothers!";
    case 'dot':
      return "I'm cute!";
    default:
      return 'Goodnight Everyone!';
  }
}

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Mission Impossible';
    case 'comedy':
      return 'Kicking and Screaming';
    case 'horror':
      return 'Hereditary';
    case 'drama':
      return 'Minari';
    case 'musical':
      return 'La La Land';
    case 'sci-fi':
      return 'Interstellar';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi.';
  }
}
