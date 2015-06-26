Schools = new Mongo.Collection('schools');

Schools.initEasySearch(['name', 'state'], {
    'limit' : 20,
    'use' : 'mongo-db'
});
