const express = require('express');

const app = express();

app.get('/projects', (req, res) => {
  return res.json([
    'Projeto 1',
    'Projeto 2'
  ]);
});

app.post('/projects', (req, res) => {
  return res.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3'
  ])
})

app.listen(3333, () => {
  console.log('Back-end started! 👻');
});