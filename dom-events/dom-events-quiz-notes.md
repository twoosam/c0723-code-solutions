# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  To make sure the script is running properly and inspect variables.
- What is the purpose of events and event handling?
  Events are fired to notify code of changes that may affect code execution.
- Are all possible parameters required to use a JavaScript method or function?
  All parameters defined must then be called to use the method or function.
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener()
- What is a callback function?
  A function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
- What object is passed into an event listener callback when the event fires?
  An argument
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  The event.target interface is implemented by objects that can receive events and may have listeners for them. You could check what got logged into the console.
- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  The difference is handleClick() results in an error in the console and cannot read undefined propertires.

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
