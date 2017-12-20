'use strict';

const data = require('../db/items');
const simDB = require('../db/simDB');
const items = simDB.initialize(data);

console.log(items);

const list = items.find();
console.log(list);

const item = items.findById(1005);
console.log(item);

const newObj = {
  name: 'Buy Milk'
} ;
const newItem = items.create(newObj);
console.log(newItem);

const result = items.findByIdAndRemove(1005);
const result2 = items.findByIdAndRemove(1005);
console.log(result);
console.log(result2);
