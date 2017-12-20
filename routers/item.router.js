'use strict';

const express = require('express');

const data = require('../db/items');
const simDB = require('../db/simDB');
const items = simDB.initialize(data);

const router = express.Router();

// Listening for: GET /items
router.get('/', (req, res) => {
  const query = req.query; // ?name=buy%20milk ==> {name: "Buy Milk"}
  const list = items.find(query);
  res.json(list);
});

// Listening for: GET /items/42
router.get('/:id', (req, res) => {
  let id = req.params.id; // "42" is a string
  id = parseInt(id);
  const item = items.findById(id);
  res.json(item);
});

// Listening for: POST /items with a body {"name": "Do Something"}
router.post('/', (req, res) => {
  const name = req.body.name;
  const newObj = { name };
  newObj.checked = false; // default to false
  const newItem = items.create(newObj);
  res.location(`/items/${newItem.id}`).json(newItem);
});

// Listening for: PUT /items/42 with a body {"name": "Change Item"}
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  id = parseInt(id);

  const count = items.findByIdAndRemove(id);
  if (count) {
    res.status(204).end();
  } else {
    next();
  }
});

module.exports = router;