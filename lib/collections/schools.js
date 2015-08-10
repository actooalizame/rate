Schools = new Mongo.Collection('schools');
/*
Meteor.startup(function () {
  if (Schools.find({}).count() === 0) {
    var data = JSON.parse(Assets.getText('universidades-new.json'));
   
      data.forEach(function (item, index, array) {
            Schools.insert(item);
        });
  }
});
*/
Schools.initEasySearch(['name', 'slug'], {
    'limit' : 5,
    'use' : 'mongo-db',
    'reactive': false
});