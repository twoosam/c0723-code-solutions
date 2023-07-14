/* exported filterOutStrings */

function filterOutStrings(values) {
  const valuesArr = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      valuesArr.push(values[i]);
    }
  }
  return valuesArr;
}
