# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
  Context lets the parent component make some information available to any component in the tree below it
- What values can be stored in context?
  Anything
- How do you create context and make it available to the components?
  First you need to export it so that the component can use it: "import {createContext} from 'react';"
  export const LevelContext = createContext(defaultValue);
- How do you access the context values?
  useContext(), which you have to import from react.
- When would you use context? (in addition to the best answer: "rarely")
  Current account: Putting the currently logged in user in context makes it convenient to read it anywhere in the tree.

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
