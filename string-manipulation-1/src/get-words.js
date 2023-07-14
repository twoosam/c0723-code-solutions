/* exported getWords */

function getWords(string) {
  const newArray = string.split(' ');
  if (string.length === 0) {
    return [];
  } else {
    return newArray;
  }
}
