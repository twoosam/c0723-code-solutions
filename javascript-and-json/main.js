const library = [
  {
    isbn: '123',
    title: 'Soccer Stories',
    author: 'Tim',
  },
  {
    isbn: '456',
    title: 'Volleyball Stories',
    author: 'Justin',
  },
  {
    isbn: '789',
    title: 'Basketball Stories',
    author: 'Harry',
  },
];
console.log('library:', library);
console.log('typeof library:', typeof library);

console.log(JSON.stringify(library));
console.log('typeof JSON:', typeof JSON.stringify(library));

const student = '{"name":"Tim","id":12345}';
console.log('student:', student);
console.log('typeof student:', typeof student);

const obj = JSON.parse(student);
console.log('obj:', obj);
console.log('typeof obj:', typeof obj);
