# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  To make sure the script is running properly and inspect variables.
- What is a "model"?
  A model represents all page content as objects that can be modified.
- Which "document" is being referred to in the phrase Document Object Model?
  The HTML document.
- What is the word "object" referring to in the phrase Document Object Model?
  All page content is represented as objects.
- What is a DOM Tree?
  The DOM represents HTML as a tree structure of tags and every tree element node is an object.
- Give two examples of `document` methods that retrieve a single element from the DOM.
  querySelector and getElementById
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll
- Why might you want to assign the return value of a DOM query to a variable?
  It makes it easier to console.log() and console.dir().
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  The browser needs to parse all of the elements in the HTML page before the JavaScript code can access them.
- What does `document.querySelector()` take as its argument and what does it return?
  It takes a selector as the argument and returns the first element within the document that matches the specified selector.
- What does `document.querySelectorAll()` take as its argument and what does it return?
  It takes a selector as the argument and returns a static NodeList representing a list of the document's elements that match the specified group of selectors.

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
