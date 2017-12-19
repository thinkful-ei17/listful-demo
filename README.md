Listful App
============================

## Basic Middleware examples
- #1 example of "inline" middleware
- #2 example of anonymous function middleware in app.use
- #3 example of named function middleware
- #4 example custom 404 catch-all
- #5 example custom 500 error catch-all

## CORS middleware
- CORS - hand-coded version
- CORS - 3rd party middleware example

## More 3rd party middleware
- examples of express.static and bodyParser.json middleware loaded from node_modules



curl -X GET http://localhost:8080/items

curl -X GET http://localhost:8080/items/3

curl -X POST http://localhost:8080/items -H 'Content-Type: application/json' -d '{
"name": "Peaches", "checked": false}'