# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  It's the target element that initiated the event and does not change through the bubbling process.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  Bubbling makes it when an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
- What DOM element property tells you what type of element it is?
  tagName property
- What does the `element.closest()` method take as its argument and what does it return?
  It takes a string of a valid element and returns the closest ancestor element.
- How can you remove an element from the DOM?
  The remove method
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  Place the new element within the class that has the event listener. That way the callback function can target the items within the class.

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
