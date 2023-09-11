import express from 'express';

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92,
  },
};

const app = express();
const array = [];

app.get('/api/grades', (req, res) => {
  console.log(req.method);
  for (const key in grades) {
    array.push(grades[key]);
  }
  res.json(array);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
