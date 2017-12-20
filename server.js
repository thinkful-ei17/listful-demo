'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const itemRouter = require('./routers/item.router');

const app = express();

app.use(morgan('dev'));
app.use(express.static('public')); // serve static files
app.use(bodyParser.json()); // parse JSON body
app.use(cors());

// GET /items   ==>> /35
app.use('/items', itemRouter);

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
