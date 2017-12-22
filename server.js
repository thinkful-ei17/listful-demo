'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const util = require('util');

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

// Promisify .listen() and .close()
app.listenAsync = function (port) {
  return new Promise((resolve, reject) => {
    this.listen(port, function () {
      this.closeAsync = util.promisify(this.close);
      resolve(this);
    }).on('error', reject);
  });
};

/** NOTE:
 * if (require.main === module) ...
 * Block only executes if `server.js` is executed using `npm start` or `node server.js`
 * Block does not execute when required like `require('./server');`
 * Prevents error: "Trying to open unclosed connection." when running mocha tests
 */
if (require.main === module) {
  app.listenAsync(8080)
    .then(server => {
      console.info(`Server listening on port ${server.address().port}`);
    })
    .catch(console.error);
}

module.exports = app; // this if for testing