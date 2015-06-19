Professors = new Mongo.Collection('professors');


Schools = new Mongo.Collection('schools');

Departments = new Mongo.Collection('departments');

Professors.initEasySearch(['name'], {
    'limit' : 20,
    'use' : 'mongo-db'
});

Schools.initEasySearch(['name', 'state'], {
    'limit' : 20,
    'use' : 'mongo-db'
});