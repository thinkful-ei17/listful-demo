'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const data = [
  { 'name': 'Apples',   'checked': false },
  { 'name': 'Bananas',  'checked': true },
  { 'name': 'Cherries',  'checked': false },
  { 'name': 'Dates',    'checked': true },
  { 'name': 'Eggplant', 'checked': false },
  { 'name': 'Flour',    'checked': true },
  { 'name': 'Grapes',   'checked': false },
  { 'name': 'Honey',    'checked': true },
  { 'name': 'IceCream', 'checked': false },
  { 'name': 'Jello',    'checked': true }
];

app.use(express.static('public')); // serve static files
app.use(bodyParser.json()); // parse JSON body

app.get('/items', (req, res) => {
  const query = req.query;
  // filter the data array based on the query
  const list = data.filter(item => Object.keys(query).every(key => item[key] === query[key]));
  res.json(list);
});

app.get('/items/:id', (req, res) => {
  const id = req.params.id;
  const item = data[id];
  res.json(item);
});

app.post('/items', (req, res) => {
  const name = req.body.name;  
  const newItem = { name: name };
  newItem.checked = false; // default to false
  data.unshift(newItem);   // add to the front of array
  res.json(newItem);
});

app.listen(8080, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', console.error);