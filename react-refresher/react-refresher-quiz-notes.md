# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?
  Similar to defining a function except uppercase its' name so React knows its a component. Then add the markup for what you want the component to do.
- How do you use JSX in a React component?
  JSX converts HTML tags into react elements and
- How do you declare the props a React component needs?
  Within the functions parameter parenthesis, add curly braces and place the props within.
- How do you pass props to a React component?
  From the parent component to a child component by importing it to the app.
- How do you include JavaScript expressions in JSX?
  Within curly braces.
- What are React hooks and what are the three "Rules of Hooks"?
  Hooks are special functions that are only available while React is rendering. Hooks can only be called at the top level of your components, you cannot call hooks inside of conditions, loops, or nested functions, and think of hooks as unconditional declarations about your component's needs.
- How do you manage state in a React component?
  The useState hook which provides a state variable to retain the data between renders and a state setter function to update the variable and trigger React to render the component again.
- How do you handle events in React?
  Event handlers are functions that will be triggered in response to interactions like clicking.
- How do you let a parent component know that an event happened?
  Calling the event handler function.

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
