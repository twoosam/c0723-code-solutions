const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
const orderedValues = [];
values.forEach((value) => {
  orderedValues.push(value);
});
console.log('orderedValues:', orderedValues);

const reversedValues = [];
values.forEach((value) => {
  reversedValues.unshift(value);
});
console.log('reversedValues:', reversedValues);
