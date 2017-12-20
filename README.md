Listful App
===========

# W3 Tuesday - Express Middleware and Node Modules

## Basic Middleware examples to server.js
- #1 example of "inline" middleware
- #2 example of anonymous function middleware in app.use
- #3 example of named function middleware
- #4 example custom 404 catch-all
- #5 example custom 500 error catch-all

## CORS middleware to server.js
- CORS - hand-coded version
- CORS - 3rd party middleware example

## More 3rd party middleware to server.js
- examples of express.static and bodyParser.json middleware loaded from node_modules

## Add Morgan to server.js
require morgan and `app.use(morgan('dev'))`

## CJS Modules (aka NodeJS Modules)
In `scratch/cjs-modules.js`
The Node modules system uses Common JS modules syntax. 
2 ways to require and use a module
- Require() and destructure syntax
- Require() module and use dot syntax to access methods

- Create `config.js` and create PORT variable
- Require `config.js` destructure PORT and update `app.listen(PORT...`

Also find small demos on 
- scratch/object-destructuring.js
- scratch/object-property-shorthand.js

# W3 Wednesday - RESTful APIs and Express Router

Create a `db` folder
- Add simDB (sync mode)
- Move `data` array of objects to `items.json`

In scratch
- Create a file named `simDB-exercises.js`
- Run `nodemon scratch/simDB-exercises.js`
- Exercise simDB by running find, findById, findByIdAndUpdate etc...

In server.js
- Cleanup demo code from previous version
- Require `simDB` and `items.json` and `initialize()`
- Update or create endpoints for:
  - Retrieve list of items `.get('/items, ...)`
  - Retrieve single items `.get('/items/:id, ...)`
  - Create an item `.post('/items, ...)`
  - Update an item `.put('/items/:id, ...)`
  - Delete an item `.delete('/items/:id, ...)`

In public
- Update client to use new endpoints
- Update render method to add an input tag, and check and delete buttons
- 

curl -X GET http://localhost:8080/items

curl -X GET http://localhost:8080/items/3

curl -X POST http://localhost:8080/items -H 'Content-Type: application/json' -d '{
"name": "Peaches", "checked": false}'