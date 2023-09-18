# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?
  A column in a table that is linked to a column in another table.
- How do you join two SQL tables? (Provide at least two syntaxes.)
  Join keyword:
  select \*
  from "products"
  join "suppliers" using ("supplierId");
- How do you temporarily rename columns or tables in a SQL statement?
  select "tableName"."name" as "newName"
- How do you create a one-to-many relationship between two tables?
  This arrangement, with a foreign key in one table pointing to a primary key in another table, creates a one-to-many relationship between the two tables.
- How do you create a many-to-many relationship between two tables?
  Many-to-many relationships can be modeled by introducing a 3rd "join table" that contains a foreign key to one of the tables and another foreign key to the other table.

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
