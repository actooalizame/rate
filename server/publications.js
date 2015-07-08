Meteor.publish('Profreviews', function(){
  return Profreviews.find({});
});

Meteor.publish('allProfessors', function(){
  return Professors.find({},{fields: {'schoolName': 1, 'schoolId': 1, 'name': 1, 'department':1,'ratedBy':1}});
});

Meteor.publish('allSchools', function(){
 return Schools.find({});
});

Meteor.publish('ownProfs', function(schoolId){
  return Professors.find({schoolId:schoolId},{fields: {'schoolId': 1, 'name': 1, 'slug':1, 'department':1}});
});

Meteor.publish('filteredProfs', function(schoolName){
  return Professors.find({schoolName:schoolName},{fields: {'schoolName': 1, 'name': 1, 'slug':1, 'department':1}});
});

Meteor.publish('professorReviews', function(professorId){
  return Profreviews.find({professorId:professorId});
});

Meteor.publish('rateProfessor', function(profId){
  return Professors.find({_id:profId});
});

Meteor.publish("schoolNames", function(){
  return Schools.find({},{fields: {'name': 1}});
});


Meteor.publish('userData',function(){
  return Meteor.users.find(this.userId, {fields: {'hook': 1, 'fb_id': 1, 'university':1 }});
});
















/*
Meteor.startup(function(){
  Professors._ensureIndex({schoolId:1});
  Professors._ensureIndex({schoolName:1});
});
*/



/*
Meteor.publish('allDepartments', function(){
  return Departments.find({});
});*/