'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const data = [
  { 'name': 'Apples', 'checked': false },
  { 'name': 'Bananas', 'checked': true },
  { 'name': 'Cherries', 'checked': false },
  { 'name': 'Dates', 'checked': true },
  { 'name': 'Eggplant', 'checked': false },
  { 'name': 'Flour', 'checked': true },
  { 'name': 'Grapes', 'checked': false },
  { 'name': 'Honey', 'checked': true },
  { 'name': 'IceCream', 'checked': false },
  { 'name': 'Jello', 'checked': true }
];


/**
 * #2 example of anonymous function middleware in app.use
 */
app.use((req, res, next) => {
  console.log('anonymous function middleware');
  const now = new Date();
  console.log(`${now.toLocaleString()} ${req.method} ${req.url}`);
  next();
});


/**
 * #3 example of named function middleware
 */
const demoLogger = function (req, res, next) {
  console.log('named function middleware');
  const now = new Date();
  console.log(`${now.toLocaleString()} ${req.method} ${req.url}`);
  next();
};

app.use(demoLogger);


/**
 * 3rd party middleware required (loaded) from node_modules
 * See require statements above
 */
app.use(express.static('public')); // serve static files
app.use(bodyParser.json()); // parse JSON body

/**
 * CORS middleware examples
 */
function demoCORS(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
}

app.use(demoCORS);


/**
 * CORS - 3rd party version
 * See require statement above
 */
app.use(cors());



/**
 * #1 example of "inline" middleware
 */
app.get('/items', (req, res, next) => {
  console.log('"inline" middleware');
  req.foobar = 'baz';
  next();
}, (req, res) => {
  const query = req.query;
  console.log(req.foobar); // verify that req.foo was set
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

