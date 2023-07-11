const student = {
  firstName: 'Tim',
  lastName: 'Woo-Sam',
  age: 22,
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'golf course';
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);

const vehicle = {
  make: 'Acura',
  model: 'NSX',
  year: 2023,
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('value of color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

const pet = {
  name: 'Goose',
  type: 'Dog',
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
