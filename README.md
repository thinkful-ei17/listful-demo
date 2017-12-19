Listful App
============================

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

Also find small demos on 
- scratch/object-destructuring.js
- scratch/object-property-shorthand.js


curl -X GET http://localhost:8080/items

curl -X GET http://localhost:8080/items/3

curl -X POST http://localhost:8080/items -H 'Content-Type: application/json' -d '{
"name": "Peaches", "checked": false}'