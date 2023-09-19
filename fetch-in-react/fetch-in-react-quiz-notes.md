# fetch-in-react-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How can `useEffect` be used to load data for a component?
  useEffect lets you synchronize a component with an external system. The first parameter is the function with the Effect's logic that fetches the data.
- What browser function can be used to make HTTP requests to a server in React?
  fetch()
- How do you use `useEffect` to load component data just once when the component mounts?
  The useEffect dependencies should be an empty array.
- How do you use `useEffect` to load component data every time the data key changes?
  Add them to the dependencies array since they are reactive values.
- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  React Query and Vercel SWR

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
