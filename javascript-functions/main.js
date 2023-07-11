function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log(
  'The value of convertMinutesToSecondsResult is:',
  convertMinutesToSecondsResult
);

function greet(name) {
  const greeting = 'Hey, ' + name;
  return greeting;
}
const greetResult = greet('Tim');
console.log('The value of greetResult is:', greetResult);

function getArea(width, height) {
  const area = width * height;
  return area;
}
const getAreaResult = getArea(17, 42);
console.log('The value of getAreaResult is:', getAreaResult);

function getFirstName(person) {
  const first = person.firstName;
  return first;
}
const getFirstNameResult = getFirstName({
  firstName: 'Tim',
  lastName: 'Woo-Sam',
});
console.log('The value of getFirstNameResult is:', getFirstNameResult);

function getLastElement(array) {
  const last = array[array.length - 1];
  return last;
}
const getLastElementResult = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log('The value of getLastElementResult is:', getLastElementResult);
