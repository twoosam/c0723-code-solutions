# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  Insert, Select, Update, Delete
- How do you add a row to a SQL table?
  Insert keyword:
  insert into "tableName" ("columnName")
  values ('')
- How do you add multiple rows to a SQL table at once?
  Insert keyword with multiple parenthesis after values:
  insert into "tableName" ("columnName")
  values ('')
  ('')
- How do you update rows in a database table?
  Update keyword:
  update "tableName"
  set "columnName" = value
  where "columnName" = value
- How do you delete rows from a database table?
  Delete keyword:
  delete
  from "tableName"
  where "columnName" = value
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  To specify exactly where you want to change or delete the values or it will effect the whole table.
- How do you accidentally delete or update all rows in a table?
  If you do not specify a where.
- How do you get back the modified row without a separate `select` statement?
  returning \*;

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
