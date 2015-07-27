Meteor.publish('Profreviews', function(){
  return Profreviews.find({},{fields: {'userId':0,'courseCode':0, 'credit':0, 'comment':0,'interest':0,'txtuse':0,'grade':0,'mayor':0,'userName':0,'userUrl':0}});
});

Meteor.publish('allProfessors', function(){
  return Professors.find({voted:true},{fields: {'schoolName': 1, 'schoolId': 1, 'name': 1, 'department':1,'ratedBy':1}});
});

Meteor.publish('shortProfessors', function(){
  return Professors.find({voted:true},{fields: {'schoolName': 1, 'schoolId': 1, 'name': 1, 'slug':1,'department':1,'voted':1,'overall':1}});
});
/*
Meteor.publish('limitedProfessors', function(){
  return Professors.find({voted:true},{fields: {'schoolName': 1, 'schoolId': 1, 'name': 1, 'department':1,'voted':1},'limit':3});
});
*/
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

Meteor.publish('schoolReviews', function(schoolId){
  return Schoolreviews.find({schoolId:schoolId});
});

Meteor.publish('singleProfessor', function(professorId){
  return Professors.find({_id:professorId});
});

Meteor.publish('singleSchool', function(schoolId){
  return Schools.find({_id:schoolId});
});


Meteor.publish('rateProfessor', function(profId){
  return Professors.find({_id:profId});
});

Meteor.publish('rateSchool', function(schoolId){
  return Schools.find({_id:schoolId});
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