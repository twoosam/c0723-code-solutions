/* exported oddOrEven */

function oddOrEven(numbers) {
  const arr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2) {
      arr.push('odd');
    } else {
      arr.push('even');
    }
  }
  return arr;
}
