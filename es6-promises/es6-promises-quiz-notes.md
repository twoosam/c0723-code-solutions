# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the Event Queue model of Promises?
  Creating a function that generates a queue to manage requests. It will take two arguments that will chain to the Promises in the queue.
- What are the three states a Promise can be in?
  Pending, fullfilled, rejected
- How do you handle the fulfillment of a Promise?
  When the promise is fulfilled, the handlers queued up by a promise's then method are called.
- How do you handle the rejection of a Promise?
  The catch method of Promise instances schedules a function to be called when the promise is rejected. It immediately reutrns an equivalent Promise object.

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
