# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  When the component is being created
- What is a React Effect?
  A way to synchronize your components with some external system like a network or the browser DOM.
- When should you use an Effect and when should you not use an Effect?
  You do not need effects to handle user events or transform data for rendering. You do need effects to synchronize with external systems.
- When do Effects run?
  After every render of the component
- What function is used to declare an Effect?
  useEffect()
- What are Effect dependencies and how do you declare them?
  The list of all reactive values referenced inside of the setup code and they are declared directly inside the component body.
- Why would you want to clean up from an Effect?
  To stop effects that no longer need to be executed.
- How do you clean up from an Effect?
  Run the cleanup function
- When does the cleanup function run?
  After every rerender with changed dependencies and after your component is removed from the DOM.

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
