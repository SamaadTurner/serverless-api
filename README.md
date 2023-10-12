# Project: serverless-api

Author: Samaad Turner and ChatGPT

## Task:

Create a single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services. CRUD Operation Handlers: Lambda Functions

## Documentation:

 ### Root URL to API
https://cwu9kmqgx5.execute-api.us-west-2.amazonaws.com/lab18

### Routes to API
* GET /people - reads all people in DB, requires no input
* POST /people - adds new person to DB, requires a body input formatted in JSON
* GET /people/{id} - reads person by ID in DB, requires an ID#
* PUT /people/{id} - update person by ID in DB, requires an ID# and a body input formatted in JSON
* DELETE /people/{id} - deletes person by ID in DB, requires an ID#
  
# UML
![UML](<Screenshot 2023-10-11 at 11.51.08 PM.png>)
