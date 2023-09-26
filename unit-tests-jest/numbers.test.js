import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
  it('returns an empty array', () => {
    const numbers = [];
    const result = evenNumbers(numbers);
    expect(result).toEqual([]);
  });
});

describe('toDollars', () => {
  it('returns the number to dollar amounts', () => {
    const number = 10;
    const result = toDollars(number);
    expect(result).toEqual('$10.00');
  });
  it('returns the decimal number to dollar amounts', () => {
    const number = 10.78612;
    const result = toDollars(number);
    expect(result).toEqual('$10.79');
  });
});

describe('divideBy', () => {
  it('returns the divided numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([0.5, 2, 2.5, 5, 0]);
  });
  it('returns an empty array', () => {
    const numbers = [];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([]);
  });
  it('returns NaN if there are not numbers in the array', () => {
    const numbers = ['apple', 'banana'];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([NaN, NaN]);
  });
});

describe('multiplyBy', () => {
  it('returns the multiplied numbers', () => {
    const numObj = {
      val1: 5,
      val2: 7,
      val3: 9,
    };
    const multiplier = 3;
    const result = multiplyBy(numObj, multiplier);
    expect(result).toEqual({ val1: 15, val2: 21, val3: 27 });
  });
  it('returns NaN if there are not numbers in the object', () => {
    const numObj = {
      val1: 5,
      val2: 'apple',
      val3: undefined,
    };
    const multiplier = 3;
    const result = multiplyBy(numObj, multiplier);
    expect(result).toEqual({ val1: 15, val2: NaN, val3: NaN });
  });
});
