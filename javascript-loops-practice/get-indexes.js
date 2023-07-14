/* exported getIndexes */

function getIndexes(array) {
  const inputs = [];
  let currentIndex = 0;
  while (currentIndex < array.length) {
    inputs.push(currentIndex);
    currentIndex++;
  }
  return inputs;
}
