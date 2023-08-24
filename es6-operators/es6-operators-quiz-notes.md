# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  Operators for a set of operands, OR: for a set of operands is true if and only if one or more of its operands are true. AND must have all operands be true.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  The logical OR and AND expression is evaluated left to right, it is tested for possible short circuit evaluation. Short circuit means that the right side of the operator is not evaluated.
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  OR uses the right value if left is falsy, while nullish uses the right value if left is null or undefined.
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  The only JS operator that takes three operands: a condition followed by a ?, then an expression to execute if the condition is truthy, followed by colon, and an expression to executre if the condition is falsy. Ternary is also one line statement.
- What is the `?.` (optional chaining) operator? When would you use it?
  Optional chaining operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits with a return value of undefined. Using ?., JS knows to implicitly check to be sure the object is not null or undefined before attempting to access the next property.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  Spread syntax allows arrays and strings to be expanded in places where zero or more arguments or elements are expected. Make a copy by using ...variableName and what other new properties and values you want and assign all that to a new variable.
- What data types can be spread into an array? Into an object?
  Only iterable objects, like arrays, can be spread in an array.
- How does spread syntax differ from rest syntax?
  Spread syntax expands an array into its elements, while rest syntax collects multiple elements and condenses them into a single element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
