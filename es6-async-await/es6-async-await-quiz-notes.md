# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  The async keyword gives you a simpler way to work with asynchronus promise-based code. You can use the await keyword before a call to a function that returns a promise.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  Async and await keywords make it easier to build an operation from a series of consecutive asynchronous function calls, avoiding the need to create explicit promise chains, and allowing you to write code that looks just like synchronous code.
- When do you use `async`?
  If you ever want to use await in your function.
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  Await is usually used when you want to unwrap promises. Do not use await when calling a synchronous function. Nothing happens if you await a synchronous function.
- How do you handle errors with `await`?
  Put it in a try catch block.
- What do `try`, `catch` and `throw` do? When do you use them?
  The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  The function will keep executing.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  I think I prefer async/await because it seems a lot easier to read and look back at.

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
