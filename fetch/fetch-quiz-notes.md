# fetch-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does `fetch()` return?
  A promise that resolves to a response object.
- What is the default request method used by `fetch()`?
  GET
- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?
  Creating an object literal with method as the key and 'GET' or 'POST' as the value. The object can be used as an argument in fetch.
- How does `fetch` report errors?
  Fetch will not reject if the server returns a 404 or 500. Instead, it resolves and sets the ok property to false. Throw new Error if it is not ok.

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
