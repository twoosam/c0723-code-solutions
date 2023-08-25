# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Hooks are special functions that are only available while React is rendering.
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Hooks can only be called at the top level of your components or your own hooks. Hooks cannot be called inside conditions, loops, or other nested funtions.
- What is the purpose of state in React?
  useState is a React hook that lets you add a state variable to your component.
- Why can't we just maintain state in a local variable?
  React does not keep track of local variables. They do not persist between renders and changes to local variables won't trigger renders.
- What two actions happen when you call a `state setter` function?
  It returns the new value of current state
- When does the local `state variable` get updated with the new value?
  Once toggleButton gets recalled.

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
