/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  const inputs = [];
  for (let i = 0; i < words.length; i++) {
    inputs[i] = words[i] + suffix;
  }
  return inputs;
}
