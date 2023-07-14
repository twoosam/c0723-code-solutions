/* exported capitalize */

function capitalize(word) {
  const lower = word.toLowerCase();
  return word[0].toUpperCase() + lower.slice(1);
}
