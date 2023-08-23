# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
  Node Package Manager is a library and registry for JS software packages.
- What is a package?
  Reusable code that is a directory of one or more files that also has a file called package.json
- What are some other popular package managers?
  Pacman, Aptitude, Chocolatey
- How can you create a `package.json` with `npm`?
  NPM uses the .npm-init.js file to customize creating package.json files. Then use npm init -yes command.
- What is a dependency and how do you add one to a package?
  Packages required by your application in production. Add it by using npm install
- What happens when you add a dependency to a package with `npm`?
  They allow the project to install the versions of the modules it depends on to run.
- What is a devDependency and how do you add one to a package?
  Packages that are only needed for local development testing. Add it by using npm install --save-dev
- How do you define and run `npm` scripts? Why are these useful?
  Create the script in the package.json file and it can run in the terminal using npm run followed by the script name. Scripts are used to make command development commands available without the need to remember or type long arguments.

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
