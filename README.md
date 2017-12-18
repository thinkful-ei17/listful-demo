Listful App
============================

curl -X GET http://localhost:8080/items

curl -X GET http://localhost:8080/items/3

curl -X POST http://localhost:8080/items -H 'Content-Type: application/json' -d '{
"name": "Peaches", "checked": false}'