# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  First parameter or parameters inside parenthesis, followed by the arrow function, then the expression. Or if it is a statment you will put in between curly braces.
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  Without braces, the function directly resturns an expression.
- When using _concise body syntax_, how do you return an object literal?
  Return is required within the braces or else the arrow function won't know what you want to return.
- In the expression
  `js
    foo(() => 42);
    `

  - Identify the arrow function

  - How many arguments does the arrow function take?
    none
  - What value does it return?
    42
  - How many arguments are passed to the function `foo`?
    one
  - What type of argument is passed to the function `foo`?
    number

- In the expression
  `` js
    bar((y) => {
      console.log(`4y = ${4 * y}`);
    });
     `` - Identify the arrow function

      - How many arguments does the arrow function take?

  one - What value does it return?
  4 multiplied by whatever y is - How many arguments are passed to the function `bar`?
  one - What type of argument is passed to the function `bar`?
  number - When does the arrow function's code get executed?
  when a number

- How does the value of `this` differ between standard functions and arrow functions?
  The value of this in an arrow function is determined at teh time of declaration and never changes.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
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
