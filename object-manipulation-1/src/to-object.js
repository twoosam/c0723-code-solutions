/* exported toObject */

function toObject(keyValuePair) {
  const object = {};
  const value = keyValuePair.pop();
  const key = keyValuePair.pop();
  object[key] = value;
  return object;
}
