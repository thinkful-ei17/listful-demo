'use strict';

const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const data = require('./db/items');
const simDB = require('./db/simDB');
const items = simDB.initialize(data);

app.use(morgan('dev'));
app.use(express.static('public')); // serve static files
app.use(bodyParser.json()); // parse JSON body
app.use(cors());

// Listening for: GET /items
app.get('/items', (req, res) => {
  const query = req.query; // ?name=buy%20milk ==> {name: "Buy Milk"}
  const list = items.find(query);
  res.json(list);
});

// Listening for: GET /items/42
app.get('/items/:id', (req, res) => {
  let id = req.params.id; // "42" is a string
  id = parseInt(id);
  const item = items.findById(id);
  res.json(item);
});

// Listening for: POST /items with a body {"name": "Do Something"}
app.post('/items', (req, res) => {
  const name = req.body.name;
  const newObj = { name };
  newObj.checked = false; // default to false
  const newItem = items.create(newObj);
  res.location(`/items/${newItem.id}`).json(newItem);
});

// Listening for: PUT /items/42 with a body {"name": "Change Item"}
app.put('/items/:id', (req, res) => {
  let id = req.params.id; // "35"
  id = parseInt(id);

  const updateObj = {};
  const updateableFields = ['name', 'checked'];
  updateableFields.forEach(field => {
    if (field in req.body) {
      updateObj[field] = req.body[field];
    }
  });

  const item = items.findByIdAndUpdate(id, updateObj);
  res.json(item); 
});

// Listening for: DELETE /items/42
app.delete('/items/:id', (req, res, next) => {
  let id = req.params.id;
  id = parseInt(id);

  const count = items.findByIdAndRemove(id);
  if (count) {
    res.status(204).end();
  } else {
    next();
  }
});

app.use(function (req, res) {
  res.status(404).json({ message: 'Not Found' });
});
   
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!' });
});

app.listen(8080, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', console.error);

